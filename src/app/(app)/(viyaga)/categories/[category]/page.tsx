import { searchParamsCache } from "@/lib/searchparams";

const page = async (props: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) => {
  const { searchParams } = props;
  const resolvedSearchParams = await searchParams;
  await searchParamsCache.parse(resolvedSearchParams);
  return <div>resolvedSearchParams</div>;
};

export default page;
