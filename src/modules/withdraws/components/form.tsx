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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useGetAllPaymentsQuery } from "@/modules/finicial/paymentMethod/hooks/queries";
import { zodResolver } from "@hookform/resolvers/zod";
import { QueryClient } from "@tanstack/react-query";
import { Loader } from "lucide-react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { useMakeWithdrawMutation } from "../hooks/mutations";
import {
  withdrawSchema,
  type withdrawSchemaType,
} from "../schemas/index.schema";

export const WithdrawForm = () => {
  const { mutateAsync } = useMakeWithdrawMutation();
  const queryClient = new QueryClient();

  const { data: payments } = useGetAllPaymentsQuery({
    page: 1,
    limit: 100000,
  });

  const form = useForm<withdrawSchemaType>({
    resolver: zodResolver(withdrawSchema),
  });

  async function onSubmit(values: withdrawSchemaType) {
    const res = await mutateAsync({ data: values });
    if (res.isSuccess) {
      toast.success("Withdraw request submitted successfully");
      queryClient.invalidateQueries({ queryKey: ["withdraw"] });
      form.reset();
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col  gap-4"
      >
        <FormField
          control={form.control}
          name="paymentMethodId"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Payment Method *</FormLabel>
              <Select
                onValueChange={(value) => {
                  field.onChange(value);
                }}
                value={field.value}
              >
                <FormControl>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select payment..." />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {payments?.data?.map((py) => (
                    <SelectItem key={py.id} value={py.id}>
                      {py.accName} - {py.pyMethod}
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
          name="amount"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Amount</FormLabel>
              <FormControl>
                <Input type="number" placeholder="Amount..." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button disabled={form.formState.isSubmitting} type="submit">
          {form.formState.isSubmitting ? (
            <Loader className="animate-spin" />
          ) : (
            "Withdraw"
          )}
        </Button>
      </form>
    </Form>
  );
};
