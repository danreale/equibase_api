import { LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData, useSearchParams } from "@remix-run/react";
import {
  getAllEquipmentResults,
  getEquipmentResultsSearch,
} from "~/data/db.server";
import CommonTable from "~/components/CommonTable";

export default function EquipmentResults() {
  const [params] = useSearchParams();
  const { codes } = useLoaderData<typeof loader>();
  return (
    <>
      <CommonTable name={"Equipment Results"} rows={codes} params={params} />
    </>
  );
}

export async function loader({ request }: LoaderFunctionArgs) {
  const url = new URL(request.url);
  const search = url.searchParams.get("query");

  let codes = null;
  if (search) {
    codes = await getEquipmentResultsSearch(search);
  } else {
    codes = await getAllEquipmentResults();
  }
  return { codes };
}
