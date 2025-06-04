"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";
import ContactSvg from "./contact-svg";

const formSchema = z.object({
  user_username: z.string().min(1, "Name is required"),
  user_email: z.string().email("Invalid email"),
  user_phone: z.string().optional(),
  user_budget: z.string().min(1, "Please select your budget"),
  user_message: z.string().min(1, "Message is required"),
});

type FormValues = z.infer<typeof formSchema>;

const listVariant = {
  initial: { x: 100, opacity: 0 },
  animate: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, staggerChildren: 0.2 },
  },
};

export default function Contact2() {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    watch,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormValues) => {
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error("Failed");

      setSuccess(true);
      setError(false);
      reset();
    } catch (err) {
      console.error(err);
      setError(true);
      setSuccess(false);
    }
  };

  return (
    <div
      className="
      flex flex-col-reverse lg:flex-row lg:items-center
      gap-12 lg:gap-20
      min-h-screen
      px-4 sm:px-8 md:px-16 
      py-8 sm:py-12 md:py-20
      bg-gradient-to-b from-[#f0f9ff] to-[#deecf5] dark:from-[#0f172a] dark:to-[#0e172d]
      "
    >
      {/* SVG Section on left in large screens */}
      <div
        className="
      w-full lg:w-1/2 lg:p-5
      flex items-center justify-center
      bg-[rgb(186,186,249)] dark:bg-[rgba(255,255,255,0.06)] 
      p-8 md:p-12 rounded-[50%_0_0_50%]
      max-h-[600px]
      "
      >
        <div className="w-full h-auto md:max-w-lg">
          <ContactSvg />
        </div>
      </div>

      {/* Form Section on right in large screens */}
      <div
        className="
        w-full lg:w-1/2  lg:p-5
        flex items-center justify-center
        min-h-[600px] 
        "
      >
        <motion.form
          ref={formRef}
          onSubmit={handleSubmit(onSubmit)}
          variants={listVariant}
          initial="initial"
          animate="animate"
          className="
        w-full
        bg-[rgba(2,2,45,0.066)] p-10 sm:p-12 rounded-[50px]
        flex flex-col gap-6
        "
        >
          <motion.h1
            variants={listVariant}
            className="text-3xl font-semibold mb-6"
          >
            Let&apos;s keep in touch
          </motion.h1>

          {/* Name */}
          <motion.div variants={listVariant} className="flex flex-col gap-2.5">
            <label htmlFor="user_username" className="text-xs font-medium">
              Name
            </label>
            <Input
              id="user_username"
              {...register("user_username")}
              placeholder="John Doe"
              className="p-3 rounded-md border-none"
            />
            {errors.user_username && (
              <span className="text-sm text-red-500">
                {errors.user_username.message}
              </span>
            )}
          </motion.div>

          {/* Email */}
          <motion.div variants={listVariant} className="flex flex-col gap-2.5">
            <label htmlFor="user_email" className="text-xs font-medium">
              Email
            </label>
            <Input
              id="user_email"
              type="email"
              {...register("user_email")}
              placeholder="john@gmail.com"
              className="p-3 rounded-md border-none"
            />
            {errors.user_email && (
              <span className="text-sm text-red-500">
                {errors.user_email.message}
              </span>
            )}
          </motion.div>

          {/* Phone */}
          <motion.div variants={listVariant} className="flex flex-col gap-2.5">
            <label htmlFor="user_phone" className="text-xs font-medium">
              Phone (optional)
            </label>
            <Input
              id="user_phone"
              {...register("user_phone")}
              placeholder="+91 9876543210"
              className="p-3 rounded-md border-none"
            />
          </motion.div>

          {/* Budget */}
          <motion.div variants={listVariant} className="flex flex-col gap-2.5">
            <label htmlFor="user_budget" className="text-xs font-medium">
              Your Budget
            </label>
            <Select
              onValueChange={(val) => setValue("user_budget", val)}
              value={watch("user_budget")}
            >
              <SelectTrigger className="w-full p-3 rounded-md border-none" />
              <SelectContent>
                <SelectItem value="below_10k">Below ₹10,000</SelectItem>
                <SelectItem value="10k_50k">₹10,000 - ₹50,000</SelectItem>
                <SelectItem value="50k_1lakh">₹50,000 - ₹1,00,000</SelectItem>
                <SelectItem value="above_1lakh">Above ₹1,00,000</SelectItem>
              </SelectContent>
            </Select>
            {errors.user_budget && (
              <span className="text-sm text-red-500">
                {errors.user_budget.message}
              </span>
            )}
          </motion.div>

          {/* Message */}
          <motion.div variants={listVariant} className="flex flex-col gap-2.5">
            <label htmlFor="user_message" className="text-xs font-medium">
              Message
            </label>
            <Textarea
              id="user_message"
              {...register("user_message")}
              rows={6}
              placeholder="Your message..."
              className="p-3 rounded-md border-none"
            />
            {errors.user_message && (
              <span className="text-sm text-red-500">
                {errors.user_message.message}
              </span>
            )}
          </motion.div>

          {/* Submit */}
          <motion.div variants={listVariant}>
            <Button
              type="submit"
              className="
          bg-[#dd4c62] text-white p-5 rounded-lg cursor-pointer
          hover:bg-[#c43f52] transition-colors duration-300
          w-full
          "
            >
              Send
            </Button>
          </motion.div>

          {/* Success / Error Messages */}
          {success && (
            <p className="text-green-500 mt-3 text-center">
              Your message has been sent!
            </p>
          )}
          {error && (
            <p className="text-red-500 mt-3 text-center">
              Something went wrong. Try again!
            </p>
          )}
        </motion.form>
      </div>
    </div>
  );
}
