"use client";

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { parseAsInteger, useQueryState } from "nuqs";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

type Props = {
  totalItems: number;
};

const ELLIPSIS = "...";

// Helper to build page range with ellipsis
function getPageNumbers(
  currentPage: number,
  totalPages: number,
  maxPageButtons = 7
) {
  if (totalPages <= maxPageButtons) {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }

  const pages: (number | string)[] = [];

  const leftSiblingIndex = Math.max(currentPage - 1, 2);
  const rightSiblingIndex = Math.min(currentPage + 1, totalPages - 1);

  const showLeftEllipsis = leftSiblingIndex > 2;
  const showRightEllipsis = rightSiblingIndex < totalPages - 1;

  pages.push(1);

  if (showLeftEllipsis) {
    pages.push(ELLIPSIS);
  } else {
    for (let i = 2; i < leftSiblingIndex; i++) {
      pages.push(i);
    }
  }

  for (let i = leftSiblingIndex; i <= rightSiblingIndex; i++) {
    pages.push(i);
  }

  if (showRightEllipsis) {
    pages.push(ELLIPSIS);
  } else {
    for (let i = rightSiblingIndex + 1; i < totalPages; i++) {
      pages.push(i);
    }
  }

  pages.push(totalPages);

  return pages;
}

export function ClientPagination({ totalItems }: Props) {
  const [currentPage, setCurrentPage] = useQueryState(
    "page",
    parseAsInteger.withOptions({ shallow: false }).withDefault(1)
  );

  const [pageSize] = useQueryState(
    "limit",
    parseAsInteger
      .withOptions({ shallow: false, history: "push" })
      .withDefault(12)
  );

  const totalPages = Math.ceil(totalItems / pageSize);

  const goToPage = (page: number) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };

  // Responsive state: show simplified UI on small screens
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 640px)");
    const handleResize = () => setIsMobile(mediaQuery.matches);
    handleResize();
    mediaQuery.addEventListener("change", handleResize);
    return () => mediaQuery.removeEventListener("change", handleResize);
  }, []);

  if (totalPages <= 1) return null;

  const pageNumbers = getPageNumbers(currentPage, totalPages);

  // Framer Motion variants
  const pageVariants = {
    initial: { scale: 0.8, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    exit: { scale: 0.8, opacity: 0 },
  };

  return (
    <Pagination
      aria-label="Pagination Navigation"
      className="mt-10 flex justify-center items-center select-none"
    >
      <PaginationContent className="flex items-center space-x-1">
        <PaginationItem>
          <PaginationPrevious
            href="#"
            onClick={(e) => {
              e.preventDefault();
              if (currentPage <= 1) return;
              goToPage(currentPage - 1);
            }}
            className={`rounded px-3 py-1 hover:bg-blue-200 dark:hover:bg-blue-800 transition ${
              currentPage <= 1
                ? "opacity-50 cursor-not-allowed pointer-events-none"
                : ""
            }`}
            aria-label="Previous Page"
            aria-disabled={currentPage <= 1 ? "true" : undefined}
          />
        </PaginationItem>

        {isMobile ? (
          <span
            aria-current="page"
            className="px-4 py-1 font-medium text-blue-700 dark:text-blue-300"
          >
            Page {currentPage} of {totalPages}
          </span>
        ) : (
          pageNumbers.map((page, index) => {
            if (page === ELLIPSIS) {
              return (
                <PaginationItem
                  key={`ellipsis-${index}`}
                  className="pointer-events-none select-none px-2"
                >
                  <span className="text-gray-500 dark:text-gray-400">
                    {ELLIPSIS}
                  </span>
                </PaginationItem>
              );
            }

            const pageNum = page as number;
            const isActive = pageNum === currentPage;

            return (
              <PaginationItem key={pageNum}>
                <motion.div
                  layout
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  variants={pageVariants}
                  whileHover={{ scale: 1.1, backgroundColor: "#e0f2ff" }}
                  whileTap={{ scale: 0.95 }}
                  className="rounded"
                >
                  <PaginationLink
                    href="#"
                    isActive={isActive}
                    onClick={(e) => {
                      e.preventDefault();
                      goToPage(pageNum);
                    }}
                    aria-current={isActive ? "page" : undefined}
                    className={cn(
                      "px-3 py-1.5 text-sm font-medium rounded-md transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                      isActive
                        ? "bg-blue-600 text-white hover:text-white shadow-sm hover:bg-blue-700 dark:hover:bg-blue-500"
                        : "text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
                    )}
                  >
                    {pageNum}
                  </PaginationLink>
                </motion.div>
              </PaginationItem>
            );
          })
        )}

        <PaginationItem>
          <PaginationNext
            href="#"
            onClick={(e) => {
              e.preventDefault();
              if (currentPage >= totalPages) return;
              goToPage(currentPage + 1);
            }}
            className={`rounded px-3 py-1 hover:bg-blue-200 dark:hover:bg-blue-800 transition ${
              currentPage >= totalPages
                ? "opacity-50 cursor-not-allowed pointer-events-none"
                : ""
            }`}
            aria-label="Next Page"
            aria-disabled={currentPage >= totalPages ? "true" : undefined}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
