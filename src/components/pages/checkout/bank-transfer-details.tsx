"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Copy } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "@/components/ui/tooltip";

// Reusable copy field component
function CopyField({ label, value }: { label: string; value: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-4">
      <p className="text-sm">
        <strong>{label}:</strong> {value}
      </p>
      <div className="flex items-center gap-2">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <button
                onClick={handleCopy}
                className="text-yellow-900 dark:text-yellow-100 hover:text-yellow-600 transition-colors cursor-pointer"
                aria-label={`Copy ${label}`}
              >
                <Copy className="w-4 h-4" />
              </button>
            </TooltipTrigger>
            <TooltipContent>Copy</TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <span
          className={cn(
            "text-xs font-medium text-green-700 dark:text-green-300 transition-opacity duration-200",
            copied ? "opacity-100" : "opacity-0"
          )}
        >
          Copied!
        </span>
      </div>
    </div>
  );
}

// Main component
export function BankTransferDetails() {
  return (
    <Card className="mt-4 border-dashed border-2 border-yellow-500 bg-yellow-50 dark:bg-yellow-900 dark:border-yellow-400">
      <CardContent className="space-y-3 text-sm text-yellow-900 dark:text-yellow-100">
        <p>
          <strong>Bank Name:</strong> HDFC Bank
        </p>
        <CopyField label="Account Number" value="1234567890" />
        <CopyField label="IFSC Code" value="HDFC0001234" />
        <CopyField label="Account Holder" value="Viyaga Enterprises" />
        <p className="text-xs mt-2 italic">
          Please include your Order ID in the payment reference. Your order will be processed once payment is confirmed.
        </p>
      </CardContent>
    </Card>
  );
}