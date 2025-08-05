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
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import FileUpload from "@/components/ui/file-upload";
import { Textarea } from "@/components/ui/textarea";
import {
  useCreateMerchantMutation,
  useUpdateMerchantMutation,
} from "../../hooks/mutation";
import {
  MerchantSchema,
  type MerchantSchemaType,
} from "../../schemas/index.schema";
import type { Merchant } from "../../types";
import type { BaseApiResponse } from "@/types/global";
import { toast } from "sonner";

export const Merchantform = ({
  mode,
  merchant,
}: {
  mode: string;
  merchant?: Merchant;
}) => {
  const isEdit = mode == "edit";
  // const imgWithFullUrl = product?.images?.map((image) =>
  //   getImageUrl({ resource: "images", fileName: image })
  // );
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const form = useForm<MerchantSchemaType>({
    resolver: zodResolver(MerchantSchema),
    defaultValues: isEdit
      ? {
          name: merchant?.name,
          email: merchant?.email,
          phone: merchant?.phone,
          street: merchant?.address?.street,
          description: merchant?.description,
          city: merchant?.address?.city,
          state: merchant?.address?.state,
          country: merchant?.address?.country,
          businessName: merchant?.businessName,
          NRCNumber: merchant?.NRCNumber,
          logo: merchant?.logo,
          NRCBack: "",
          NRCFront: "",
          password: "",
          passwordConfirm: "",
        }
      : {
          name: "",
          email: "",
          phone: "",
          street: "",
          description: "",
          city: "",
          state: "",
          country: "",
          businessName: "",
          NRCNumber: "",
          logo: "",
          NRCBack: "",
          NRCFront: "",
          password: "",
          passwordConfirm: "",
        },
  });

  const { mutateAsync: createMutateAsync } = useCreateMerchantMutation();

  const { mutateAsync: updateMutateAsync } = useUpdateMerchantMutation();

  async function onSubmit(values: MerchantSchemaType) {
    const formData = new FormData();
    formData.set("name", values.name);
    formData.set("businessName", values.businessName);
    formData.set("email", values.email);
    formData.set("phone", values.phone);
    formData.set("description", values.description);
    formData.set("city", values.city);
    formData.set("state", values.state);
    formData.set("country", values.country);
    formData.set("street", values.street);
    formData.set("NRCNumber", values.NRCNumber);

    if (values.logo) formData.set("logo", values.logo);
    if (values.NRCFront) formData.set("NRCFront", values.NRCFront);
    if (values.NRCBack) formData.set("NRCBack", values.NRCBack);

    formData.set("password", values.password);
    formData.set("passwordConfirm", values.passwordConfirm);

    let res: BaseApiResponse;
    if (isEdit) {
      res = await updateMutateAsync({
        merchant_id: merchant?._id ?? "",
        data: formData,
      });
    } else {
      res = await createMutateAsync({ data: formData });
    }

    if (res.isSuccess) {
      toast.success(res.status);
      queryClient.invalidateQueries({ queryKey: ["merchants"] });

      navigate("/dashboard/merchants");
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
                <FormLabel>Owner Name</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="Name ...." />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="businessName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Business Name</FormLabel>
                <FormControl>
                  <Input
                    type="string"
                    placeholder="Business Name..."
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone</FormLabel>
                <FormControl>
                  <Input type="number" placeholder="Phone..." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* address  */}
          <div className="col-span-3 grid grid-cols-4 gap-5">
            <FormField
              control={form.control}
              name="street"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormLabel>Street</FormLabel>
                  <FormControl>
                    <Input placeholder="Street..." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="city"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormLabel>City</FormLabel>
                  <FormControl>
                    <Input placeholder="City..." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="state"
              render={({ field }) => (
                <FormItem className="">
                  <FormLabel>State</FormLabel>
                  <FormControl>
                    <Input placeholder="State..." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="country"
              render={({ field }) => (
                <FormItem className="">
                  <FormLabel>Country</FormLabel>
                  <FormControl>
                    <Input placeholder="Country..." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem className="col-span-3">
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <Textarea placeholder="description" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* <FormField
              control={form.control}
              name="email"
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
            /> */}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="Email..." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {!isEdit && (
            <>
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input placeholder="Password..." {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="passwordConfirm"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password Confirm</FormLabel>
                    <FormControl>
                      <Input placeholder="Password Confirm..." {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </>
          )}

          <FormField
            control={form.control}
            name="logo"
            render={({ field }) => (
              <FormItem className="">
                <FormLabel>Logo</FormLabel>
                <FormControl>
                  <FileUpload
                    defaultImage={null}
                    onFileChange={field.onChange}
                    accept="image/*"
                    name="logo"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="NRCFront"
            render={({ field }) => (
              <FormItem className="">
                <FormLabel>NRC Front</FormLabel>
                <FormControl>
                  <FileUpload
                    defaultImage={null}
                    onFileChange={field.onChange}
                    accept="image/*"
                    name="NRCFront"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="NRCBack"
            render={({ field }) => (
              <FormItem className="">
                <FormLabel>NRC Back</FormLabel>
                <FormControl>
                  <FileUpload
                    defaultImage={null}
                    onFileChange={field.onChange}
                    accept="image/*"
                    name="NRCBack"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="NRCNumber"
            render={({ field }) => (
              <FormItem>
                <FormLabel>NRC Number</FormLabel>
                <FormControl>
                  <Input placeholder="NRC Number..." {...field} />
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
