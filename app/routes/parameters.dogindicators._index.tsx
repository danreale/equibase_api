import { LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData, useSearchParams } from "@remix-run/react";
import { getAllDogIndicators, getDogIndicatorsSearch } from "~/data/db.server";
import CommonTable from "~/components/CommonTable";

export default function DogIndicators() {
  const [params] = useSearchParams();
  const { codes } = useLoaderData<typeof loader>();
  return (
    <>
      <CommonTable name={"Dog Indicators"} rows={codes} params={params} />
    </>
  );
}

export async function loader({ request }: LoaderFunctionArgs) {
  const url = new URL(request.url);
  const search = url.searchParams.get("query");

  let codes = null;
  if (search) {
    codes = await getDogIndicatorsSearch(search);
  } else {
    codes = await getAllDogIndicators();
  }
  return { codes };
}
