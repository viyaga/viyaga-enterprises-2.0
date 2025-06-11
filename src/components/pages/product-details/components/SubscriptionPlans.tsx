"use client";

import { useState } from "react";
import { Check } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";
import { SubscriptionPlan } from "../types";

const SubscriptionPlans = ({ plans }: { plans: SubscriptionPlan[] }) => {
  const [isAnnually, setIsAnnually] = useState(false);

  return (
    <section
      className="py-8 md:py-12 lg:py-20 bg-gradient-to-b from-white via-[#e4f4ff] to-[#e0f2ff] 
      dark:from-[#00182e] dark:via-[#113a65] dark:to-[#113a65]"
    >
      <div className="max-w-6xl mx-auto container px-4">
      <div className="mx-auto flex max-w-7xl flex-col gap-10">
        <h2 className="text-4xl lg:text-5xl font-extrabold text-center bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent dark:from-blue-400 dark:to-purple-500">
        Pricing Plans
        </h2>

        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-muted-foreground text-center md:text-left max-w-xl lg:text-xl dark:text-gray-300">
          Choose the plan that suits your business needs best.
        </p>

        <div className="flex h-11 w-fit items-center rounded-full bg-white/10 dark:bg-gray-800/60 p-1 text-sm shadow-md backdrop-blur">
          <RadioGroup
          defaultValue="monthly"
          className="grid grid-cols-2 gap-1"
          onValueChange={(value) => setIsAnnually(value === "annually")}
          >
          <div className="rounded-full transition-all has-[button[data-state='checked']]:bg-white dark:has-[button[data-state='checked']]:bg-gray-900">
            <RadioGroupItem
            value="monthly"
            id="monthly"
            className="peer sr-only"
            />
            <Label
            htmlFor="monthly"
            className="flex h-full cursor-pointer items-center justify-center px-5 py-2 font-semibold text-gray-900 dark:text-white peer-data-[state=checked]:text-black dark:peer-data-[state=checked]:text-white"
            >
            Monthly
            </Label>
          </div>
          <div className="rounded-full transition-all has-[button[data-state='checked']]:bg-white dark:has-[button[data-state='checked']]:bg-gray-900">
            <RadioGroupItem
            value="annually"
            id="annually"
            className="peer sr-only"
            />
            <Label
            htmlFor="annually"
            className="flex h-full cursor-pointer items-center justify-center px-5 py-2 font-semibold text-gray-900 dark:text-white peer-data-[state=checked]:text-black dark:peer-data-[state=checked]:text-white"
            >
            Yearly
            </Label>
          </div>
          </RadioGroup>
        </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {plans.map((plan, index) => {
          const displayPrice = isAnnually
          ? Math.round(plan.priceUSD * 12 * 0.85)
          : plan.priceUSD;
          const displayINR = isAnnually
          ? Math.round(plan.priceINR * 12 * 0.85)
          : plan.priceINR;

          const isPopular = index === plans.length - 1;

          return (
          <div
            key={index}
            className={`group relative flex flex-col justify-between rounded-2xl p-[1px] transition-all duration-300 ${
            isPopular
              ? "bg-gradient-to-br from-blue-500 to-purple-500 shadow-2xl dark:from-blue-600 dark:to-purple-700"
              : "bg-white/10 dark:bg-gray-800/60"
            }`}
          >
            <div className="flex flex-col h-full rounded-2xl bg-background dark:bg-gray-900 p-6 text-left group-hover:shadow-lg transition-all">
            <Badge className="mb-4 w-fit uppercase tracking-widest text-xs dark:bg-gray-800 dark:text-white">
              {plan.planName}
            </Badge>

            <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent dark:from-blue-400 dark:to-purple-500">
              ${displayPrice}
            </div>
            <p className="text-sm text-muted-foreground mb-1 dark:text-gray-400">
              ₹{displayINR} / {isAnnually ? "yr" : "mo"}
            </p>

            {plan.trialPeriodDays && (
              <p className="text-sm text-muted-foreground mb-2 dark:text-gray-400">
              {plan.trialPeriodDays}-day trial
              </p>
            )}

            <Separator className="my-4 bg-white/10 dark:bg-gray-700" />

            <ul className="space-y-4 text-muted-foreground mb-6 dark:text-gray-300">
              {plan.features?.map((obj, i) => (
              <li key={i} className="flex items-center gap-2">
                <Check className="size-4 text-primary dark:text-blue-400" />
                <span>{obj.feature}</span>
              </li>
              ))}
            </ul>

            <Button
              className={`w-full mt-auto ${
              isPopular
                ? "bg-white text-black hover:bg-gray-100 dark:bg-gray-100 dark:text-black dark:hover:bg-gray-200"
                : "bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-500 hover:to-purple-500 dark:from-blue-700 dark:to-purple-800"
              }`}
            >
              Choose Plan
            </Button>
            </div>
          </div>
          );
        })}
        </div>
      </div>
      </div>
    </section>
  );
};

export default SubscriptionPlans;
