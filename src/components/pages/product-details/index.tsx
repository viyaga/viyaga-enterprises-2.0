"use client";

import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { Product } from "./types"; // adjust path accordingly

interface ProductDetailsPageProps {
  product: Product;
}

export const product = {
  id: "product-123",
  title: "Smart AI Email Assistant",
  slug: "smart-ai-email-assistant",
  isFree: false,
  isSubscription: true,
  thumbnail: {
    url: "https://viyaga-web-forge.s3.ap-southeast-1.amazonaws.com/viyaga/ai-agent.png",
  },
  description: [
    {
      type: "paragraph",
      children: [
        {
          text: "This AI Email Assistant helps you write, respond, and manage your emails using smart prompts and automation.",
        },
      ],
    },
  ],
  features: [
    {
      type: "paragraph",
      children: [
        { text: "✅ Compose emails in seconds\n✅ Smart reply suggestions\n✅ Inbox management\n✅ Multilingual support" },
      ],
    },
  ],
  price: 49,
  discount_price: 29,
  inr_price: 4000,
  inr_discount_price: 1999,
  affiliateCommission: 20,
  subscriptionPlans: [
    {
      planName: "Starter",
      billingCycle: "monthly",
      priceUSD: 10,
      priceINR: 799,
      trialPeriodDays: 7,
      features: [
        {
          type: "paragraph",
          children: [{ text: "✔ 100 emails/month\n✔ Basic automation\n✔ Email templates" }],
        },
      ],
    },
    {
      planName: "Pro",
      billingCycle: "yearly",
      priceUSD: 99,
      priceINR: 7999,
      trialPeriodDays: 14,
      features: [
        {
          type: "paragraph",
          children: [{ text: "✔ Unlimited emails\n✔ Smart inbox\n✔ Custom rules\n✔ Priority support" }],
        },
      ],
    },
  ],
  demo_urls: [
    {
      label: "Try Demo",
      url: "https://demo.smartaiassistant.com",
    },
    {
      label: "Watch Video",
      url: "https://youtube.com/watch?v=demo123",
    },
  ],
  screenshots: [
    {
      image: {
        url: "https://viyaga-web-forge.s3.ap-southeast-1.amazonaws.com/viyaga/ai-agent.png",
      },
    },
    {
      image: {
        url: "https://viyaga-web-forge.s3.ap-southeast-1.amazonaws.com/viyaga/ai-agent.png",
      },
    },
  ],
};

const ProductDetailsPage = () => {
  if (!product) return null;

  return (
    <section className="max-w-5xl mx-auto p-6 pt-24">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Thumbnail */}
        {product.thumbnail?.url && (
          <div className="flex-shrink-0">
            <Image
              src={product.thumbnail.url}
              alt={product.title || "Product Thumbnail"}
              width={500}
              height={375}
              className="rounded-xl shadow-lg object-cover"
              priority
            />
          </div>
        )}

        {/* Product Info */}
        <div className="flex-1 space-y-4">
          <h1 className="text-4xl font-bold tracking-tight">{product.title}</h1>

          {product.isFree && (
            <Badge variant="outline" className="text-green-600 border-green-600">
              Free
            </Badge>
          )}

          {/* Description */}
          {product.description && (
            <div className="text-sm leading-relaxed text-muted-foreground whitespace-pre-line">
              {/* {product.description} */}
            </div>
          )}

          {/* Features */}
          {product.features && (
            <div className="text-sm leading-relaxed text-muted-foreground whitespace-pre-line">
              <h2 className="text-lg font-semibold mb-1">Features</h2>
              {/* {product.features} */}
            </div>
          )}

          {/* Pricing */}
          <div className="space-y-2">
            <p>
              <span className="font-semibold">Price (USD):</span>{" "}
              <s className="text-gray-500">${product.price}</s>{" "}
              <span className="text-green-600 font-bold">${product.discount_price}</span>
            </p>
            <p>
              <span className="font-semibold">Price (INR):</span>{" "}
              <s className="text-gray-500">₹{product.inr_price}</s>{" "}
              <span className="text-green-600 font-bold">₹{product.inr_discount_price}</span>
            </p>
          </div>

          {/* Subscription Plans */}
          {product.isSubscription && product.subscriptionPlans?.length > 0 && (
            <div className="space-y-4">
              <h2 className="text-xl font-semibold">Subscription Plans</h2>
              {product.subscriptionPlans.map((plan, index) => (
                <Card key={index}>
                  <CardContent className="space-y-2 p-4">
                    <div className="text-lg font-medium">{plan.planName}</div>
                    <div className="text-sm text-muted-foreground">
                      Cycle: {plan.billingCycle}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Price: ${plan.priceUSD} / ₹{plan.priceINR}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Trial: {plan.trialPeriodDays} days
                    </div>
                    {plan.features && (
                      <div className="text-sm leading-relaxed text-muted-foreground whitespace-pre-line">
                        {/* {plan.features} */}
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          )}

          {/* Demo URLs */}
          {product.demo_urls?.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {product.demo_urls.map((demo, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Link href={demo.url} target="_blank">
                    <Button
                      className="px-4 py-2 text-xs rounded-full bg-gradient-to-r from-blue-500 to-green-500 text-white hover:from-green-600 hover:to-blue-600"
                      variant="ghost"
                    >
                      <ExternalLink className="w-4 h-4 mr-1" />
                      {demo.label}
                    </Button>
                  </Link>
                </motion.div>
              ))}
            </div>
          )}

          {/* Buy Now */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Link href={`/checkout/${product.id}`}>
              <Button className="px-6 py-2 rounded-full text-white shadow font-semibold bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 hover:from-red-600 hover:to-pink-600">
                Buy Now
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Screenshots */}
      {product.screenshots?.length > 0 && (
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-4">Screenshots</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {product.screenshots.map((shot, index) => (
              <Image
                key={index}
                src={shot.image.url}
                alt={`Screenshot ${index + 1}`}
                width={400}
                height={250}
                className="rounded-lg shadow-md object-cover"
              />
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default ProductDetailsPage;
