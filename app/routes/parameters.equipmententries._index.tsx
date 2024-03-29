import { LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData, useSearchParams } from "@remix-run/react";
import {
  getAllEquipmentEntries,
  getEquipmentEntriesSearch,
} from "~/data/db.server";
import CommonTable from "~/components/CommonTable";

export default function EquipmentEntries() {
  const [params] = useSearchParams();
  const { codes } = useLoaderData<typeof loader>();
  return (
    <>
      <CommonTable name={"Equipment Entries"} rows={codes} params={params} />
    </>
  );
}

export async function loader({ request }: LoaderFunctionArgs) {
  const url = new URL(request.url);
  const search = url.searchParams.get("query");

  let codes = null;
  if (search) {
    codes = await getEquipmentEntriesSearch(search);
  } else {
    codes = await getAllEquipmentEntries();
  }
  return { codes };
}
