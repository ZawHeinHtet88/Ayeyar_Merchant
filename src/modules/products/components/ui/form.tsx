import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import MultipleImageInput from "@/components/ui/multiple-image-upload";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { TextEditor } from "@/components/ui/text-editor/text-editor";
import { cn } from "@/lib/utils";
import type { BaseApiResponse } from "@/types/global";
import { getImageUrl } from "@/utils/images";
import { zodResolver } from "@hookform/resolvers/zod";
import { useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import {
  useCreateProductMutation,
  useUpdateProductMutation,
} from "../../hooks/mutation";
import { useGetAllTypeQuery } from "../../hooks/queries";
import {
  ProductSchema,
  type ProductSchemaType,
} from "../../schemas/index.schema";
import type { Product } from "../../types";

interface updated_images{
  type : string;
  key ?: string;
  index : number;
}

export const ProductForm = ({
  mode,
  product,
}: {
  mode: string;
  product?: Product;
}) => {
  const isEdit = mode == "edit";
  const imgWithFullUrl = product?.images?.map((image) =>
    getImageUrl({ resource: "images", fileName: image })
  );
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { data: types } = useGetAllTypeQuery();

  const form = useForm<ProductSchemaType>({
    resolver: zodResolver(ProductSchema),
    defaultValues: isEdit
      ? {
          name: product?.name ?? "",
          body: product?.body ?? "",
          description: product?.description ?? "",
          price: product?.price ?? 0,
          discount: product?.discount ?? 0,
          inventory: product?.inventory ?? 0,
          category: product?.category?.name ?? "",
          type: product?.type?.name ?? "",
          tags: product?.tags?.map((tag) => tag.name).join(",") ?? "",
          images: imgWithFullUrl,
        }
      : {
          name: "",
          body: "",
          description: "",
          price: 0,
          discount: 0,
          inventory: 0,
          category: "",
          type: "",
          tags: "",
        },
  });

  const { mutateAsync: createMutateAsync } = useCreateProductMutation();

  const { mutateAsync: updateMutateAsync } = useUpdateProductMutation();

  async function onSubmit(values: ProductSchemaType) {
    const data = new FormData();
    data.set("name", values.name);
    data.set("body", values.body);
    data.set("description", values.description);
    data.set("price", values.price.toString());
    data.set("inventory", values.inventory.toString());
    data.set("category", values.category);
    data.set("type", values.type);
    data.set("tags", values.tags);
    
    const images:updated_images[] = [];
    // Handle multiple images
    if (values.images && Array.isArray(values.images)) {
      if (isEdit) {
        values.images.map((file, index) => {
          if (file instanceof File) {
            images.push({ type: "new", index });
            data.append("images", file);
          } else {
            const imageUrl = file?.split("/").pop();
            images.push({ type: "kept", key: imageUrl, index });
          }
        });
      } else {
        values.images.forEach((file) => {
          data.append("images", file);
        });
      }
    }

    let res: BaseApiResponse;
    if (isEdit && product) {
      data.set("update_images", JSON.stringify(images));
      data.set("productId", product?.id);
      res = await updateMutateAsync(data);
      console.log(res);
    } else {
      res = await createMutateAsync(data);
    }
    if (res.isSuccess) {
      toast.success(isEdit ? "Updated Successfully" : "Created Successfully");
      queryClient.invalidateQueries({ queryKey: ["products"] });
      queryClient.invalidateQueries({ queryKey: ["product"] });
      navigate("/dashboard/products");
    }
  }
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className={cn("flex flex-col gap-6")}
      >
        <div className="grid lg:grid-cols-3 gap-5">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="Name ...." />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="price"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Price</FormLabel>
                <FormControl>
                  <Input type="number" placeholder="Discount..." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <Input placeholder="Description..." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="body"
            render={({ field }) => (
              <FormItem className="col-span-3">
                <FormLabel>Body</FormLabel>
                <FormControl>
                  <TextEditor field={field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="col-span-3 grid grid-cols-4 gap-5">
            <FormField
              control={form.control}
              name="type"
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
                        <SelectValue placeholder="Select Type..." />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {types?.data?.map((type) => (
                        <SelectItem key={type._id} value={type.name}>
                          {type.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="category"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Category</FormLabel>
                  <FormControl>
                    <Input placeholder="Category..." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="inventory"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Inventory</FormLabel>
                  <FormControl>
                    <Input placeholder="Inventory..." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="tags"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Tags</FormLabel>
                  <FormControl>
                    <Input placeholder="Tags..." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="images"
            render={({ field }) => (
              <FormItem className="col-span-2">
                <FormLabel>Images</FormLabel>
                <FormControl>
                  <MultipleImageInput field={field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="flex justify-between">
          <Button
            disabled={form.formState.isSubmitting || !form.formState.isDirty}
            type="submit"
            className="w-fit"
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
