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
  useCreateTypeMutation,
  useUpdateTypeMutation
} from "../../hooks/mutation";
import {
  TypeSchema,
  type TypeSchemaType
} from "../../schemas/index.schema";
import type { Type } from "../../types";
import { getImageUrl } from "@/utils/images";

export const TypeForm = ({
  mode,
  type,
  handleOpen,
}: {
  mode: string;
  type?: Type;
  handleOpen: (open: boolean) => void;
}) => {
  const isEdit = mode == "edit";

  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const form = useForm<TypeSchemaType>({
    resolver: zodResolver(TypeSchema),
    defaultValues: isEdit
      ? {
          name: type?.name,
          image: type?.image,
        }
      : {
          name: "",
          image: "",
        },
  });

  const { mutateAsync: createMutateAsync } = useCreateTypeMutation();

  const { mutateAsync: updateMutateAsync } = useUpdateTypeMutation();

  async function onSubmit(values: TypeSchemaType) {
    const data = new FormData();
    data.set("name", values.name);

    if (values.image) {
      data.set("image", values.image);
    }

    let res: BaseApiResponse;
    if (isEdit) {
      data.set("id", type?._id ?? "");
      res = await updateMutateAsync({ data });
    } else {
      res = await createMutateAsync({ data });
    }
    if (res.isSuccess) {
      toast.success(isEdit ? "Updated Successfully" : "Created Successfully");
      queryClient.invalidateQueries({ queryKey: ["types"] });
      queryClient.invalidateQueries({ queryKey: ["types"] });
      handleOpen(false);
      navigate("/dashboard/types");
    }
  }
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className={cn("gap-6 space-y-2 w-2xl")}
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="Name..." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="image"
          render={({ field }) => (
            <FormItem className="">
              <FormLabel>Image</FormLabel>
              <FormControl>
                <FileUpload
                  defaultImage={isEdit ? getImageUrl({resource:"images",fileName:type?.image}): null}
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
