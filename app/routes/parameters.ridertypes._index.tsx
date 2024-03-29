import { LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData, useSearchParams } from "@remix-run/react";
import { getAllRiderTypes, getRiderTypesSearch } from "~/data/db.server";
import CommonTable from "~/components/CommonTable";

export default function RiderTypes() {
  const [params] = useSearchParams();
  const { codes } = useLoaderData<typeof loader>();
  return (
    <>
      <CommonTable name={"Rider Types"} rows={codes} params={params} />
    </>
  );
}

export async function loader({ request }: LoaderFunctionArgs) {
  const url = new URL(request.url);
  const search = url.searchParams.get("query");

  let codes = null;
  if (search) {
    codes = await getRiderTypesSearch(search);
  } else {
    codes = await getAllRiderTypes();
  }
  return { codes };
}
