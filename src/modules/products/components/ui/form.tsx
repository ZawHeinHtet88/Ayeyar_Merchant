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
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import {
  ProductSchema,
  type ProductSchemaType,
} from "../../schemas/index.schema";
import type { Product } from "../../types";
import { useCreateProductMutation } from "../../hooks/mutation";
import { toast } from "sonner";
import type { BaseApiResponse } from "@/types/global";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useGetAllTypeQuery } from "../../hooks/queries";

export const ProductForm = ({
  mode,
  product,
}: {
  mode: string;
  product?: Product;
}) => {
  const isEdit = mode == "edit";
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

  // const { mutateAsync: updateMutateAsync } = useUpdateUserMutation();

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

    // Handle multiple images
    if (values.images && Array.isArray(values.images)) {
      values.images.forEach((file) => {
        data.append("images", file);
      });
    }

    console.log(values);

    let res: BaseApiResponse | undefined;
    if (isEdit) {
      // res = await updateMutateAsync({ data, id: product?._id || "" });
    } else {
      res = await createMutateAsync(data);
    }
    if (res && res.isSuccess) {
      toast.success(res.status);
      queryClient.invalidateQueries({ queryKey: ["products"] });
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
                  <Input {...field} />
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
            name="discount"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Discount</FormLabel>
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
                  <Textarea placeholder="Description..." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="body"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Body</FormLabel>
                <FormControl>
                  <Textarea placeholder="body..." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

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
                      <SelectItem key={type._id} value={type._id}>
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

          <FormField
            control={form.control}
            name="images"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Images</FormLabel>
                <FormControl>
                  <Input
                    type="file"
                    multiple
                    accept="image/*"
                    onChange={(e) => {
                      const files = Array.from(e.target.files ?? []);
                      field.onChange(files);
                    }}
                  />
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
