import { Button } from "@/components/ui/button";
import FileUpload from "@/components/ui/file-upload";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import type { BaseApiResponse } from "@/types/global";
import { zodResolver } from "@hookform/resolvers/zod";
import { useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import type { Payment } from "../../types";
import {
  paymentSchema,
  type paymentSchemaType,
} from "../../schema/index.schema";
import {
  useCreatePaymentMutation,
  useUpdatePaymentMutation,
} from "../../hooks/mutations";
import { getImageUrl } from "@/utils/images";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const PaymentForm = ({
  mode,
  payment,
}: {
  mode: string;
  payment?: Payment;
}) => {
  const isEdit = mode == "edit";

  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const form = useForm<paymentSchemaType>({
    resolver: zodResolver(paymentSchema),
    defaultValues: isEdit
      ? {
          QR: payment?.QR,
          accName: payment?.accName,
          accNumber: payment?.accNumber,
          pyMethod: payment?.pyMethod,
        }
      : {
          QR: "",
          accName: "",
          accNumber: "",
          pyMethod: "",
        },
  });

  const { mutateAsync: createMutateAsync } = useCreatePaymentMutation();

  const { mutateAsync: updateMutateAsync } = useUpdatePaymentMutation();

  async function onSubmit(values: paymentSchemaType) {
    const data = new FormData();
    data.set("accName", values.accName);
    data.set("accNumber", values.accNumber);
    data.set("pyMethod", values.pyMethod);

    if (values.QR) {
      data.set("QR", values.QR);
    }

    let res: BaseApiResponse;
    if (isEdit) {
      data.set("id", payment?._id ?? "");
      res = await updateMutateAsync(data);
    } else {
      res = await createMutateAsync(data);
    }
    if (res.isSuccess) {
      toast.success(isEdit ? "Updated Successfully" : "Created Successfully");
      queryClient.invalidateQueries({ queryKey: ["types"] });
      queryClient.invalidateQueries({ queryKey: ["types"] });
      navigate("/dashboard/financial/payments");
    }
  }
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className={cn("gap-6 space-y-2 w-4xl")}
      >
        <FormField
          control={form.control}
          name="accName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Account Name</FormLabel>
              <FormControl>
                <Input placeholder="Name..." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="accNumber"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Account Number</FormLabel>
              <FormControl>
                <Input placeholder="Number..." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="pyMethod"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Type *</FormLabel>
              <Select
                onValueChange={(value) => {
                  field.onChange(value);
                }}
                value={field.value}
              >
                <FormControl>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select Payment Method..." />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem key={"KPay"} value={"KPay"}>
                    KPay
                  </SelectItem>
                  <SelectItem key={"WavePay"} value={"WavePay"}>
                    WavePay
                  </SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="QR"
          render={({ field }) => (
            <FormItem className="">
              <FormLabel>Payment Methods</FormLabel>
              <FormControl>
                <FileUpload
                  defaultImage={
                    isEdit
                      ? getImageUrl({
                          resource: "images",
                          fileName: payment?.QR,
                        })
                      : null
                  }
                  onFileChange={field.onChange}
                  accept="image/*"
                  name="image"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex justify-between col-span-2">
          <Button
            disabled={form.formState.isSubmitting || !form.formState.isDirty}
            type="submit"
            className="w-full"
          >
            {form.formState.isSubmitting
              ? "Loading"
              : isEdit
              ? "Update"
              : "Create"}
          </Button>
        </div>
      </form>
    </Form>
  );
};
