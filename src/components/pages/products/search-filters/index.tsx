"use client";

import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { SlidersHorizontal, Search } from "lucide-react";
import { cn } from "@/lib/utils";
import useProductTableFilters from "@/lib/hooks/use-product-filters";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
};

export default function SearchFilters() {
  const {
    searchQuery,
    setSearchQuery,
    isFree,
    setIsFree,
    isFeatured,
    setIsFeatured,
    resetFilters,
    sort,
    setSort,
  } = useProductTableFilters();

  const [filterOpen, setFilterOpen] = useState(false);

  const sortOptions = [
    { label: "Newest", value: "createdAt" },
    { label: "Price (Low to High)", value: "price" },
    { label: "Price (High to Low)", value: "price_desc" },
    { label: "Title (A-Z)", value: "title" },
  ];

  return (
    <section
      className="bg-gradient-to-b from-white via-[#e4f4ff] to-[#e0f2ff] 
        dark:from-[#00182e] dark:via-[#113a65] dark:to-[#113a65]"
    >
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        }}
        transition={{ duration: 0.6 }}
        className="pt-20 px-4 md:py-12 transition-colors duration-500"
      >
        <div className="flex flex-col gap-5 max-w-6xl mx-auto px-4">
          {/* Heading */}
          <motion.h2
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5 }}
            className="text-2xl md:text-3xl font-bold text-center text-foreground"
          >
            Explore Our Products
          </motion.h2>

          {/* Search Input */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative w-full max-w-2xl mx-auto mt-5"
          >
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
            <Input
              aria-label="Search products"
              placeholder="Search products..."
              value={searchQuery || ""}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 w-full bg-background text-foreground rounded-xl shadow-sm"
            />
          </motion.div>

          {/* Filters Row */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.2, duration: 0.5 }}
            className="flex flex-wrap items-center md:justify-center gap-6 max-w-2xl mx-auto"
          >
            {/* Left side: Filter Button */}
            <Popover open={filterOpen} onOpenChange={setFilterOpen}>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  size="sm"
                  className="flex items-center gap-2 rounded-lg shadow transition-transform hover:scale-105"
                  title="Filter Products"
                >
                  <SlidersHorizontal className="w-4 h-4" />
                  Filter
                </Button>
              </PopoverTrigger>

              <AnimatePresence>
                {filterOpen && (
                  <PopoverContent asChild sideOffset={8}>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.2 }}
                      className="w-64 space-y-4 rounded-lg shadow-md bg-background p-4"
                    >
                      <div className="flex items-center gap-3">
                        <Switch
                          checked={isFree}
                          onCheckedChange={setIsFree}
                          id="free-products"
                        />
                        <Label
                          htmlFor="free-products"
                          className="text-sm cursor-pointer select-none"
                        >
                          Free Products
                        </Label>
                      </div>
                      <div className="flex items-center gap-3">
                        <Switch
                          checked={isFeatured}
                          onCheckedChange={setIsFeatured}
                          id="featured-products"
                        />
                        <Label
                          htmlFor="featured-products"
                          className="text-sm cursor-pointer select-none"
                        >
                          Featured Only
                        </Label>
                      </div>
                    </motion.div>
                  </PopoverContent>
                )}
              </AnimatePresence>
            </Popover>

            {/* Middle: Sort Options */}
            <div className="flex-1 flex justify-center">
              {/* Mobile: Select */}
              <div className="block sm:hidden w-full max-w-xs">
                <Select
                  value={sort || "createdAt"}
                  onValueChange={(val) => setSort(val)}
                >
                  <SelectTrigger className="w-full bg-background rounded-lg">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    {sortOptions.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Desktop: Sort Buttons */}
              <div className="hidden sm:flex flex-wrap gap-3 justify-center">
                {sortOptions.map((option) => (
                  <motion.div key={option.value} whileTap={{ scale: 0.95 }}>
                    <Button
                      key={option.value}
                      size="sm"
                      variant={sort === option.value ? "default" : "outline"}
                      onClick={() => setSort(option.value)}
                      className={cn(
                        "text-xs rounded-md transition-all hover:scale-105",
                        sort === option.value &&
                          "scale-105 bg-primary text-primary-foreground"
                      )}
                    >
                      {option.label}
                    </Button>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right side: Clear Filters */}
            <motion.div whileTap={{ scale: 0.95 }}>
              <Button
                size="sm"
                variant="secondary"
                onClick={resetFilters}
                className="w-auto whitespace-nowrap rounded-lg hover:scale-105 transition-transform"
                title="Clear All Filters"
              >
                Clear
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Product Grid would come below */}
      </motion.div>
    </section>
  );
}
