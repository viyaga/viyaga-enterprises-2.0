import CheckoutPage from "@/components/pages/checkout/checkout-page";
import { getProductByIdForCheckout } from "@/lib/payload";
import { error } from "console";
import { notFound } from "next/navigation";

const page = async (props: {
  params: Promise<Record<string, string | undefined>>;
}) => {
  const { params } = props;
  const { productId } = await params;
  console.log({ productId });

  if (!productId) return notFound();
  const product = await getProductByIdForCheckout({ id: productId, depth: 1 });

  return <CheckoutPage product={product} />;
};

export default page;
