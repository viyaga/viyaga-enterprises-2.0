"use client";

import { useTransition, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

const formSchema = z.object({
  username: z.string().min(3, "Username is required"),
  email: z.string().email("Invalid email"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  confirmPassword: z.string().min(6, "Confirm your password"),
  sponsoredBy: z.string().optional(),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords do not match",
  path: ["confirmPassword"],
});

type FormData = z.infer<typeof formSchema>;

export default function AffiliateRegisterForm() {
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data: FormData) => {
    setError(null);
    setSuccess(null);

    startTransition(async () => {
      try {
        const res = await fetch("/api/affiliate/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });

        const result = await res.json();

        if (!res.ok) {
          throw new Error(result.message || "Registration failed");
        }

        setSuccess("Registration successful!");
        reset();
      } catch {
        setError("Something went wrong");
      }
    });
  };

  return (
    <motion.section
      className="w-full max-w-md mx-auto mt-12 bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <h2 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-6">
        Affiliate Registration
      </h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <div>
          <Label htmlFor="username" className="text-gray-700 dark:text-gray-200 mb-2 block">
            Username
          </Label>
          <Input id="username" {...register("username")} />
          {errors.username && (
            <p className="text-red-500 text-sm mt-1">{errors.username.message}</p>
          )}
        </div>

        <div>
          <Label htmlFor="email" className="text-gray-700 dark:text-gray-200 mb-2 block">
            Email
          </Label>
          <Input id="email" type="email" {...register("email")} />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>

        <div>
          <Label htmlFor="password" className="text-gray-700 dark:text-gray-200 mb-2 block">
            Password
          </Label>
          <Input id="password" type="password" {...register("password")} />
          {errors.password && (
            <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
          )}
        </div>

        <div>
          <Label htmlFor="confirmPassword" className="text-gray-700 dark:text-gray-200 mb-2 block">
            Confirm Password
          </Label>
          <Input id="confirmPassword" type="password" {...register("confirmPassword")} />
          {errors.confirmPassword && (
            <p className="text-red-500 text-sm mt-1">{errors.confirmPassword.message}</p>
          )}
        </div>

        <div>
          <Label htmlFor="sponsoredBy" className="text-gray-700 dark:text-gray-200 mb-2 block">
            Sponsored By (optional)
          </Label>
          <Input id="sponsoredBy" {...register("sponsoredBy")} />
        </div>


        {error && <p className="text-red-500 text-center">{error}</p>}
        {success && <p className="text-green-500 text-center">{success}</p>}

        <Button
          type="submit"
          disabled={isPending}
          className="w-full bg-gradient-to-r from-blue-500 to-green-500 text-white hover:brightness-110 font-semibold py-2 px-5 rounded-xl transition"
        >
          {isPending ? "Registering..." : "Register"}
        </Button>
      </form>
    </motion.section>
  );
}