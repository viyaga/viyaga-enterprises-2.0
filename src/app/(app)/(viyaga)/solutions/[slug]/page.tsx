import ProductDetailsPage from "@/components/pages/product-details";
import { notFound } from "next/navigation";
import { getProductDetailsBySlug } from "@/lib/payload";

const page = async (props: {
  params: Promise<Record<string, string | undefined>>;
}) => {
  const { params } = props;
  const { slug } = await params;

  if (!slug) return notFound();

  const data = await getProductDetailsBySlug({ slug, depth: 1 });

  if (!data || data?.docs?.length === 0) return notFound();
  console.log({ docs: data.docs });

  return <ProductDetailsPage docs={data.docs} />;
};

export default page;
