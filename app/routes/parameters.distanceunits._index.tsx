import { LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData, useSearchParams } from "@remix-run/react";
import { getAllDistanceUnits, getDistanceUnitsSearch } from "~/data/db.server";
import CommonTable from "~/components/CommonTable";

export default function DistanceUnits() {
  const [params] = useSearchParams();
  const { codes } = useLoaderData<typeof loader>();
  return (
    <>
      <CommonTable name={"Distance Units"} rows={codes} params={params} />
    </>
  );
}

export async function loader({ request }: LoaderFunctionArgs) {
  const url = new URL(request.url);
  const search = url.searchParams.get("query");

  let codes = null;
  if (search) {
    codes = await getDistanceUnitsSearch(search);
  } else {
    codes = await getAllDistanceUnits();
  }
  return { codes };
}
