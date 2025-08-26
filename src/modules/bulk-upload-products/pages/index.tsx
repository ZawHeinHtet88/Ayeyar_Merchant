import BreadCrumps from "@/components/ui/breadcrumbs";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  BulkUploadProductSchema,
  type BulkUploadProductSchemaType,
} from "../schemas/index.schema";
import { fetchEventSource } from "@microsoft/fetch-event-source";
import { useAuthStore } from "@/modules/auth/store/index.store";
import { toast } from "sonner";
import { useBulkUploadProductStore } from "../store/index.store";
import UploadedStats from "../ui/components/uploaded-stats";
import type { BulkResponse } from "../types";
import  { Loader } from "lucide-react";

export default function BulkUploadProduct() {
  const {
    processed,
    loading,
    setSuccessCount,
    setFailedCount,
    setSuccessList,
    setFailtedList,
    setLoading,
    setProcessed,
    setPercentage,
  } = useBulkUploadProductStore((state) => state);

  const { token } = useAuthStore((state) => state);

  const form = useForm<BulkUploadProductSchemaType>({
    resolver: zodResolver(BulkUploadProductSchema),
  });

  async function onSubmit(values: BulkUploadProductSchemaType) {
    setLoading(true);
    const controller = new AbortController();
    const formData = new FormData();

    formData.append("file", values.file as File);
    formData.set("total", values.total.toString());

    fetchEventSource(
      `${import.meta.env.VITE_API_URL}/seller/bulk-upload-products`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        method: "POST",
        signal: controller.signal,
        body: formData,
        onopen: async (response) => {
          if (!response.ok) {
            if (response.status === 429) {
              console.warn("Rate limited (429) — stopping SSE");
              controller.abort();
              return;
            }
            throw new Error(`Server returned ${response.status}`);
          }
        },

        onmessage: (event) => {
          const data = JSON.parse(event.data) as BulkResponse;
          if (data.type === "connected") {
            toast.success("Bulk Upload was Intialized!");
          }

          if (data.type === "progress") {
            setProcessed(data.processed);
            setPercentage(data.progress);
            if (data.current.status === "success") {
              setSuccessCount(data.success);
              setSuccessList({
                row: data.current.row,
                data: data.current.data,
                status: "success",
                error: null,
              });
            } else {
              setFailedCount(data.failed);
              setFailtedList({
                row: data.current.row,
                data: data.current.data,
                status: data.current.status,
                error: data.current.error,
              });
            }
          }

          if (data.type === "completed") {
            toast.success("Processing upload was successfully ended!");
            setLoading(false);
            controller.abort();
          }
        },

        onclose: () => {
          console.log("SSE closed");
        },

        onerror: (err) => {
          console.error("SSE Error:", err);
          controller.abort();
          throw err;
        },
      }
    );
    return () => {
      console.log("Cleaning up SSE");
      controller.abort();
    };
  }

  return (
    <div className="mt-5 space-y-5">
      <BreadCrumps
        breadcrumbs={[
          { label: "Products", href: "/dashboard/products" },
          { label: "Bulk Upload", href: "/dashboard/products/bulk-upload" },
        ]}
      />

      {processed > 0 ? (
        <UploadedStats />
      ) : (
        <Card className="max-w-2xl mx-auto mt-20">
          <CardHeader>
            <CardTitle className=" flex items-center gap-2">
              <span>Bulk Upload</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form
                className="space-y-5"
                onSubmit={form.handleSubmit(onSubmit)}
              >
                <FormField
                  control={form.control}
                  name="file"
                  render={({ field }) => (
                    <FormItem className="">
                      <FormLabel>File</FormLabel>
                      <FormControl>
                        <Input
                          type="file"
                          // do NOT spread {...field}; wire only what you need:
                          onChange={(e) => {
                            const file = e.target.files?.[0];
                            // update RHF state properly so `values.file` is a File
                            field.onChange(file ?? undefined);
                          }}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="total"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Total</FormLabel>
                      <FormControl>
                        <Input
                          type="number"
                          {...field}
                          placeholder="Enter Total ...."
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="flex justify-between col-span-3">
                  <Button
                    disabled={
                      form.formState.isSubmitting ||
                      !form.formState.isDirty ||
                      loading
                    }
                    type="submit"
                    className="w-full"
                  >
                    {loading ? <Loader className="animate-spin"/> : "Create"}
                  </Button>
                </div>
              </form>
            </Form>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
