'use client';

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTheme } from "next-themes";
import { toast } from "sonner";
import { loginUser, registerUser } from "@/lib/payload/users";
import { useRouter, useSearchParams } from "next/navigation";

// -------------------------
// Zod schema
// -------------------------
const formSchema = z
  .object({
    email: z.string().email("Invalid email"),
    password: z.string().min(6, "Password must be at least 6 characters"),
    confirmPassword: z.string().optional(),
  })
  .refine(
    (data) => !data.confirmPassword || data.password === data.confirmPassword,
    {
      message: "Passwords do not match",
      path: ["confirmPassword"],
    }
  );

type FormSchema = z.infer<typeof formSchema>;

// -------------------------
// Component
// -------------------------
export default function LoginRegister() {
  const [isLogin, setIsLogin] = useState(true);
  const [isDark, setIsDark] = useState(false);
  const { resolvedTheme } = useTheme();
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirect = searchParams.get("redirect");

  useEffect(() => {
    if (resolvedTheme) {
      setIsDark(resolvedTheme === "dark");
    }
  }, [resolvedTheme]);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormSchema) => {
    const { confirmPassword, ...authData } = data;

    try {
      let result;

      if (isLogin) {
        result = await loginUser(authData);
      } else {
        result = await registerUser(authData);
      }

      if (!result || result.success === false) {
        throw new Error(result?.error || "Something went wrong");
      }

      toast.success(`${isLogin ? "Login" : "Register"} success!`);
      
      if (isLogin) return router.push(redirect || '/dashboard')

      reset();
      return setIsLogin(true);

    } catch (err) {
      toast.error("Error: " + (err as Error).message);
    }
  };

  return (
    <section className="bg-gray-50 dark:bg-gray-900 min-h-screen flex items-center justify-center px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="w-full max-w-md p-8 bg-white dark:bg-gray-800 shadow-lg rounded-xl"
      >
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <Link href="/" className="flex-shrink-0">
            <Image
              src={
                isDark
                  ? "/logo/logo-viyaga-bold-light.svg"
                  : "/logo/logo-viyaga-bold.svg"
              }
              width={162}
              height={50}
              alt="Viyaga logo"
            />
          </Link>
        </div>

        {/* Heading */}
        <div className="text-center mb-6">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
            {isLogin ? "Welcome Back" : "Create Your Account"}
          </h2>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
            {isLogin
              ? "Log in to access your Viyaga software dashboard."
              : "Register to start using Viyaga's business suite."}
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <div>
            <Label htmlFor="email" className="block mb-2 dark:text-white">
              Email
            </Label>
            <Input
              {...register("email")}
              id="email"
              type="email"
              placeholder="you@example.com"
              className="dark:bg-gray-700 dark:text-white"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
            )}
          </div>

          <div>
            <Label htmlFor="password" className="block mb-2 dark:text-white">
              Password
            </Label>
            <Input
              {...register("password")}
              id="password"
              type="password"
              placeholder="••••••••"
              className="dark:bg-gray-700 dark:text-white"
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
            )}
          </div>

          {!isLogin && (
            <div>
              <Label htmlFor="confirmPassword" className="block mb-2 dark:text-white">
                Confirm Password
              </Label>
              <Input
                {...register("confirmPassword")}
                id="confirmPassword"
                type="password"
                placeholder="••••••••"
                className="dark:bg-gray-700 dark:text-white"
              />
              {errors.confirmPassword && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.confirmPassword.message}
                </p>
              )}
            </div>
          )}

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full text-black dark:text-white cursor-pointer bg-gradient-to-r from-blue-500 to-green-500 hover:brightness-110 transition font-semibold rounded-xl px-5 py-2"
          >
            {isLogin ? "Login" : "Register"}
          </Button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-700 dark:text-gray-300">
          {isLogin ? "New to Viyaga?" : "Already have an account?"}{" "}
          <button
            type="button"
            onClick={() => setIsLogin(!isLogin)}
            className="text-blue-600 dark:text-blue-400 underline ml-1 cursor-pointer"
          >
            {isLogin ? "Register here" : "Login here"}
          </button>
        </p>
      </motion.div>
    </section>
  );
}