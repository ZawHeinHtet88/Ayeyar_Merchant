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
import {
  useCreateAdsMutation,
  useUpdateAdsMutation,
} from "../../hooks/mutation";
import { AdsSchema, type AdsSchemaType } from "../../schemas/index.schema";
import type { Ads } from "../../types";
import { getImageUrl } from "@/utils/images";

export const AdsForm = ({
  mode,
  ads,
  handleOpen,
}: {
  mode: string;
  ads?: Ads;
  handleOpen: (open: boolean) => void;
}) => {
  const isEdit = mode == "edit";

  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const form = useForm<AdsSchemaType>({
    resolver: zodResolver(AdsSchema),
    defaultValues: isEdit
      ? {
          company: ads?.company,
          product: ads?.product,
          link: ads?.link,
          image: ads?.image,
        }
      : {
          company: "",
          product: "",
          link: "",
          image: "",
        },
  });

  const { mutateAsync: createMutateAsync } = useCreateAdsMutation();

  const { mutateAsync: updateMutateAsync } = useUpdateAdsMutation();

  async function onSubmit(values: AdsSchemaType) {
    console.log(values);
    
    const data = new FormData();
    data.set("product", values.product);
    data.set("company", values.company);
    data.set("link", values.link);

    if (values.image) {
      data.set("image", values.image);
    }

    let res: BaseApiResponse;
    if (isEdit) {
      data.set("id", ads?._id ?? "");

      res = await updateMutateAsync({ data });
    } else {
      res = await createMutateAsync({ data });
    }
    if (res.isSuccess) {
      toast.success(isEdit ? "Updated Successfully" : "Created Successfully");
      queryClient.invalidateQueries({ queryKey: ["ads"] });
      queryClient.invalidateQueries({ queryKey: ["ads"] });
      handleOpen(false);
      navigate("/dashboard/ads");
    }
  }
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className={cn("grid grid-cols-2 gap-6 w-2xl")}
      >
        <div className="flex flex-col gap-5">
          <FormField
            control={form.control}
            name="company"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Company Name</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="Company ...." />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="product"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Product</FormLabel>
                <FormControl>
                  <Input placeholder="Product name..." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="link"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Link</FormLabel>
                <FormControl>
                  <Input placeholder="Link..." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="image"
          render={({ field }) => (
            <FormItem className="">
              <FormLabel>Image</FormLabel>
              <FormControl>
                <FileUpload
                  defaultImage={
                    isEdit
                      ? getImageUrl({
                          resource: "images",
                          fileName: ads?.image,
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
