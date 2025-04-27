import Image from "next/image";
import Link from "next/link";  // Use Link for navigation in Next.js
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { motion, Variants } from "framer-motion";

type Category = { id: string; name: string };

type Pricing = {
  country: string;
  currency: string;
  price: number;
  discount_price?: number;
  inr_price?: number; // Added inr_price to handle India pricing
  inr_discount_price?: number; // Added inr_discount_price
};

type Product = {
  id: string;
  title: string;
  description?: string | React.ReactNode;
  category?: Category[];
  pricing?: Pricing[];
  isFree?: boolean;
  thumbnail?: { url: string };
};

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export default function ProductCard({
  product,
  country,
}: {
  product: Product;
  country: string;
}) {
  const matchedPricing = product.pricing?.find(
    (pricing) => pricing.country === country
  );

  // Check if the country is India, and adjust price accordingly
  const isIndia = country === "IN";
  const price = isIndia ? matchedPricing?.inr_price : matchedPricing?.price;
  const discountPrice = isIndia ? matchedPricing?.inr_discount_price : matchedPricing?.discount_price;

  const priceLabel = product.isFree ? (
    "Free"
  ) : (
    <div className="flex items-center gap-2">
      {discountPrice ? (
        <>
          <span className="text-sm text-gray-500 line-through">
            {matchedPricing?.currency} {price}
          </span>
          <span className="text-primary font-bold">
            {matchedPricing?.currency} {discountPrice}
          </span>
        </>
      ) : (
        <span className="text-primary font-bold">
          {matchedPricing?.currency} {price}
        </span>
      )}
    </div>
  );

  const thumbnailUrl = product.thumbnail?.url ?? "/fallback-thumbnail.jpg";

  return (
    <motion.div
      variants={fadeInUp}
      whileHover={{ scale: 1.02, y: -5 }}
      transition={{ type: "spring", stiffness: 200 }}
    >
      <Card className="p-0 border border-white/20 bg-white/90 dark:bg-white/5 backdrop-blur-md rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 h-full overflow-hidden group">
        <div className="relative w-full h-40 sm:h-44 md:h-48 overflow-hidden">
          <Image
            src={thumbnailUrl}
            alt={product.title}
            layout="fill"
            className="object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </div>
        <CardContent className="p-4 sm:p-5">
          <CardTitle
            className="mb-1 text-lg sm:text-xl font-semibold flex items-center gap-2 truncate"
            title={product.title}
          >
            {product.title}
            {discountPrice && (
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="bg-red-500 text-white text-xs px-2 py-0.5 rounded-full"
              >
                Offer
              </motion.span>
            )}
          </CardTitle>

          {product.description && (
            <p className="text-sm text-black/80 dark:text-white/80 mb-2 line-clamp-2">
              {typeof product.description === "string"
                ? product.description
                : "Rich content"}
            </p>
          )}

          <div className="flex flex-wrap gap-2 mb-3">
            {product.category?.map((cat) => (
              <span
                key={cat.id}
                className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300"
              >
                {cat.name}
              </span>
            ))}
          </div>

          <div className="flex justify-between items-center">
            {priceLabel}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Button className="text-xs px-4 py-1 rounded-full bg-gradient-to-r from-blue-500 to-green-500 text-white hover:from-green-600 hover:to-blue-600">
                <Link href={`/product/${product.id}`}>
                  <a className="flex items-center gap-1">
                    View Details <ExternalLink className="w-4 h-4" />
                  </a>
                </Link>
              </Button>
            </motion.div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
