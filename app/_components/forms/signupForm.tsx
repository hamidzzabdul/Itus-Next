"use client";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import Link from "next/link";
import { useForm } from "react-hook-form";
import * as z from "zod";

import facebook from "@/app/_assets/icons/facebook.png";
import google from "@/app/_assets/icons/google.png";

const formSchema = z
  .object({
    username: z
      .string()
      .min(3, { message: "Name must have 3 or more character" }),
    email: z.string().email(),
    password: z
      .string()
      .min(8, { message: "Password must have more than 8 charachters" }),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

const SignUpForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
  };
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-6 mt-2"
      >
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-sm font-bold">Username</FormLabel>
              <FormControl>
                <Input
                  placeholder="your name"
                  type="text"
                  className="w-full h-10 border border-gray-500 p-4 rounded-xl text-lg font-semibold"
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-sm font-bold">Email</FormLabel>
              <FormControl>
                <Input
                  placeholder="example@email.com"
                  type="email"
                  className="w-full h-10 border border-gray-500 p-4 rounded-xl text-lg font-semibold"
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => {
            return (
              <FormItem>
                <FormLabel className="text-sm font-bold">Password</FormLabel>
                <Input
                  placeholder="enter your password"
                  type="password"
                  className="w-full h-10 border border-gray-500 p-4 rounded-xl text-lg font-semibold"
                  {...field}
                />
              </FormItem>
            );
          }}
        />
        <FormField
          control={form.control}
          name="confirmPassword"
          render={({ field }) => {
            return (
              <FormItem>
                <FormLabel className="text-sm font-bold">
                  Confirm Password
                </FormLabel>
                <Input
                  placeholder="confirm your password"
                  type="password"
                  className="w-full h-10 border border-gray-500 p-4 rounded-xl text-lg font-semibold"
                  {...field}
                />
              </FormItem>
            );
          }}
        />
        <Button type="submit">Login</Button>
      </form>
      <div className="w-full flex justify-center items-center">
        <p className="text-black font-semibold">
          Do you have an account?{" "}
          <Link
            href={"/login"}
            className="font-bold capitalize text-primary_blue cursor-pointer"
          >
            Login
          </Link>
        </p>
      </div>
      <div className="flex gap-2 items-center justify-center w-full">
        <span className="w-full h-[1px] bg-gray-400 rounded-lg"></span>
        <span className="text-gray-600 min-w-fit text-sm">
          or sign up with{" "}
        </span>
        <span className="w-full h-[1px] bg-gray-400 rounded-lg"></span>
      </div>

      <div className="flex justify-center items-center gap-4">
        <div className="p-2 w-1/2 rounded-lg flex justify-center items-center gap-2 border-2 border-gray-400 cursor-pointer">
          <Image src={google} alt="google icon" width={30} height={30} />
          <p className="font-semibold text-sm">Google</p>
        </div>
        <div className="p-2 w-1/2 rounded-lg flex justify-center items-center gap-2 border-2 border-gray-400 cursor-pointer">
          <Image src={facebook} alt="facebook icon" width={25} height={25} />
          <p className="font-semibold text-sm">Facebook</p>
        </div>
      </div>
    </Form>
  );
};

export default SignUpForm;
