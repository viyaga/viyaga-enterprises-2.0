import { type Metadata } from "next";
import SoftwareProductsPage from "@/components/pages/products";
import { searchParamsCache } from "@/lib/searchparams";

export const metadata: Metadata = {
  title: "Software Products | Viyaga Enterprises",
  description:
    "Explore premium software tools built by Viyaga Enterprises for modern businesses.",
  openGraph: {
    title: "Explore Our Software Products | Viyaga Enterprises",
    description:
      "Browse business-ready software tools designed and developed by Viyaga Enterprises.",
    url: "https://viyaga.com/products",
    siteName: "Viyaga Enterprises",
    images: [
      {
        url: "https://viyaga.com/logo/products-og.jpg",
        width: 1200,
        height: 630,
        alt: "Viyaga Enterprises - Software Tools",
      },
    ],
    type: "website",
  },
  robots: "index, follow",
};

const Page = async (props: {
  searchParams: Promise<Record<string, string | string[] | undefined>>
}) => {
  const { searchParams } = props;
  const resolvedSearchParams = await searchParams;
  await searchParamsCache.parse(resolvedSearchParams);

  return <SoftwareProductsPage />;
};

export default Page;
