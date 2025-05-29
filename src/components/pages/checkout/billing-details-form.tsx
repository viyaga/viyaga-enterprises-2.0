"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const billingSchema = z.object({
  fullName: z.string().min(2, "Full Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z
    .string()
    .min(10, "phone number is required")
    .regex(/^\+?\d{10,15}$/, "Invalid phone number"),
  address: z.string().min(5, "Address is required"),
  city: z.string().min(2, "City is required"),
  state: z.string().min(2, "State is required"),
  zip: z.string().min(2, "ZIP/Postal Code is required"),
  country: z.string().min(2, "Country is required"),
});

export type BillingFormData = z.infer<typeof billingSchema>;

interface BillingDetailsFormProps {
  defaultCountry?: string;
  onSubmit: (data: BillingFormData) => void;
}

export function BillingDetailsForm({
  defaultCountry = "",
  onSubmit,
}: BillingDetailsFormProps) {
  console.log({ defaultCountry });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<BillingFormData>({
    resolver: zodResolver(billingSchema),
    defaultValues: { country: defaultCountry },
  });

  return (
    <Card className="rounded-lg shadow-md bg-white dark:bg-gray-900/50 p-2 sm:p-4 md:p-6 border-none">
      <CardHeader className="py-4">
        <CardTitle>BILLING DETAILS</CardTitle>
      </CardHeader>
      <CardContent>
        <form
          id="billing-form"
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-6"
          aria-label="Billing Details Form"
          noValidate
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label
                htmlFor="fullName"
                className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300 tracking-wide"
              >
                Full Name
              </Label>
              <Input
                id="fullName"
                placeholder="John Doe"
                autoComplete="name"
                {...register("fullName")}
                aria-invalid={!!errors.fullName}
                aria-describedby="fullName-error"
                className="mb-4"
              />
              {errors.fullName && (
                <p id="fullName-error" className="text-red-600 text-sm mt-1">
                  {errors.fullName.message}
                </p>
              )}
            </div>
            <div>
              <Label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300  tracking-wide"
              >
                Email
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="john@example.com"
                autoComplete="email"
                {...register("email")}
                aria-invalid={!!errors.email}
                aria-describedby="email-error"
                className="mb-4"
              />
              {errors.email && (
                <p id="email-error" className="text-red-600 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>
          </div>

          {/* phone Number Field */}
          <div>
            <Label
              htmlFor="phone"
              className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300  tracking-wide"
            >
              phone Number
            </Label>
            <Input
              id="phone"
              type="tel"
              placeholder="234 567 8901"
              autoComplete="tel"
              {...register("phone")}
              aria-invalid={!!errors.phone}
              aria-describedby="phone-error"
              className="mb-4"
            />
            {errors.phone && (
              <p id="phone-error" className="text-red-600 text-sm mt-1">
                {errors.phone.message}
              </p>
            )}
          </div>

          <div>
            <Label
              htmlFor="address"
              className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300  tracking-wide"
            >
              Address
            </Label>
            <Input
              id="address"
              placeholder="123 Main St"
              autoComplete="street-address"
              {...register("address")}
              aria-invalid={!!errors.address}
              aria-describedby="address-error"
              className="mb-4"
            />
            {errors.address && (
              <p id="address-error" className="text-red-600 text-sm mt-1">
                {errors.address.message}
              </p>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <Label
                htmlFor="city"
                className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300  tracking-wide"
              >
                City
              </Label>
              <Input
                id="city"
                placeholder="City"
                autoComplete="address-level2"
                {...register("city")}
                aria-invalid={!!errors.city}
                aria-describedby="city-error"
                className="mb-4"
              />
              {errors.city && (
                <p id="city-error" className="text-red-600 text-sm mt-1">
                  {errors.city.message}
                </p>
              )}
            </div>

            <div>
              <Label
                htmlFor="state"
                className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300  tracking-wide"
              >
                State/Province
              </Label>
              <Input
                id="state"
                placeholder="State"
                autoComplete="address-level1"
                {...register("state")}
                aria-invalid={!!errors.state}
                aria-describedby="state-error"
                className="mb-4"
              />
              {errors.state && (
                <p id="state-error" className="text-red-600 text-sm mt-1">
                  {errors.state.message}
                </p>
              )}
            </div>

            <div>
              <Label
                htmlFor="zip"
                className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300  tracking-wide"
              >
                ZIP/Postal Code
              </Label>
              <Input
                id="zip"
                placeholder="12345"
                autoComplete="postal-code"
                {...register("zip")}
                aria-invalid={!!errors.zip}
                aria-describedby="zip-error"
                className="mb-4"
              />
              {errors.zip && (
                <p id="zip-error" className="text-red-600 text-sm mt-1">
                  {errors.zip.message}
                </p>
              )}
            </div>
          </div>

          <div>
            <Label
              htmlFor="country"
              className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300  tracking-wide"
            >
              Country
            </Label>
            <Input
              id="country"
              placeholder="Country"
              {...register("country")}
              // disabled={!!defaultCountry}
              aria-invalid={!!errors.country}
              aria-describedby="country-error"
              className="mb-4"
            />
            {errors.country && (
              <p id="country-error" className="text-red-600 text-sm mt-1">
                {errors.country.message}
              </p>
            )}
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
