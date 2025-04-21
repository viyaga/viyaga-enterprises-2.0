import ProductDetailsPage from "@/components/pages/product-details";

const page = async ({ params }: { params: { slug: string } }) => {
  const { slug } = await params;
  console.log({slug});
  
  return <ProductDetailsPage />;
};

export default page;
