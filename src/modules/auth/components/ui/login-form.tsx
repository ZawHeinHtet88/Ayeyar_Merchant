"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

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

import { useLoginMutation } from "../../hook/mutations";
import { useAuthStore } from "../../store/index.store";
import { toast } from "sonner";
import { Loader } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { LoginSchema, type LoginSchemaType } from "../../schemas/index.schema";
import PasswordInput from "@/components/ui/password-input";

export const LoginForm = () => {
  const { mutateAsync, isPending } = useLoginMutation();
  const { login } = useAuthStore((state) => state);
  const navigate = useNavigate();

  const form = useForm<LoginSchemaType>({
    resolver: zodResolver(LoginSchema),
  });

  const onSubmit = async (values: LoginSchemaType) => {
    const res = await mutateAsync({ data: values });

    if (res.status === "fail") {
      toast.error(res.message);
    } else {
      console.log(res.data.user);
      
      login({
        token: res.token,
        user: res.data.user,
      });
      toast.success("login successfully");
      navigate("/");
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-6 py-10 px-10 bg-white rounded-2xl">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-[12px] font-semibold text-foreground/50">
                Email
              </FormLabel>
              <FormControl>
                <Input
                  className="bg-gray-200 py-5 text-foreground placeholder:text-foreground/50"
                  placeholder="Pls enter mail..."
                  {...field}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-[12px] font-semibold text-foreground/70 flex items-center justify-between">
                <p className="">Password</p>
                <Button
                  variant={"link"}
                  className="text-sm font-medium text-blue-400"
                >
                  Forget Password?
                </Button>
              </FormLabel>
              <FormControl>
                <PasswordInput placeholder="password..." {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          className="w-full py-6 font-bold"
          disabled={isPending}
          type="submit"
        >
          {isPending ? <Loader className="animate-spin" /> : "Sign In"}
        </Button>
      </form>
    </Form>
  );
};
