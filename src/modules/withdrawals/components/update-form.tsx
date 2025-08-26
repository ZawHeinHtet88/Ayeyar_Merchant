import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useQueryClient } from "@tanstack/react-query";
import { Loader, Pencil } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { useUpdateWithdrawalMutation } from "../hooks/mutation";
import { WithdrawalSchema, type WithdrawalSchemaType } from "../schemas/index.schema";
import type { Withdrawal } from "../types";

export const UpdateWithDrawalForm = ({ withdrawal }: { withdrawal: Withdrawal }) => {
  const queryClient = useQueryClient();
  const [open, setOpen] = useState(false);

  const form = useForm<WithdrawalSchemaType>({
    resolver: zodResolver(WithdrawalSchema),
    defaultValues: {
      status: withdrawal.status === "pending" ? "approved" : withdrawal.status,
    },
  });

  const { mutateAsync } = useUpdateWithdrawalMutation();

  async function onSubmit(values: WithdrawalSchemaType) {
    const res = await mutateAsync({ status: values.status, id: withdrawal._id });

    if (res.isSuccess) {
      toast.success("Update Successfully");
      setOpen(false);
      form.reset({ status: "" });
      queryClient.invalidateQueries({ queryKey: ["withdrawals"] });
    }
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button
          size={"icon"}
          onSelect={(e) => {
            e.preventDefault();
            setOpen(true);
          }}
        >
          <Pencil />
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full">
          <DrawerHeader>
            <DrawerTitle>Update Withdrawal</DrawerTitle>
          </DrawerHeader>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="flex flex-col max-w-xl mx-auto gap-4 p-4"
            >
              <FormField
                control={form.control}
                name="status"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Status *</FormLabel>
                    <Select
                      onValueChange={(value) => {
                        field.onChange(value);
                      }}
                      value={field.value}
                    >
                      <FormControl>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select Status..." />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {[
                          "approved",
                          "rejected"
                        ]?.map((status) => (
                          <SelectItem key={status} value={status}>
                            {status}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <DrawerFooter className="px-0">
                <Button
                  disabled={
                    form.formState.isSubmitting 
                  }
                  type="submit"
                >
                  {form.formState.isSubmitting ? (
                    <Loader className="animate-spin" />
                  ) : (
                    "Update"
                  )}
                </Button>
                <DrawerClose asChild>
                  <Button className="w-full" type="button" variant="outline">
                    Cancel
                  </Button>
                </DrawerClose>
              </DrawerFooter>
            </form>
          </Form>
        </div>
      </DrawerContent>
    </Drawer>
  );
};
