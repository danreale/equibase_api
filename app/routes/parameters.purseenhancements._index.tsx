import { LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData, useSearchParams } from "@remix-run/react";
import {
  getAllPurseEnhancements,
  getPurseEnhancementsSearch,
} from "~/data/db.server";
import CommonTable from "~/components/CommonTable";

export default function PurseEnhancements() {
  const [params] = useSearchParams();
  const { codes } = useLoaderData<typeof loader>();
  return (
    <>
      <CommonTable name={"Purse Enhancements"} rows={codes} params={params} />
    </>
  );
}

export async function loader({ request }: LoaderFunctionArgs) {
  const url = new URL(request.url);
  const search = url.searchParams.get("query");

  let codes = null;
  if (search) {
    codes = await getPurseEnhancementsSearch(search);
  } else {
    codes = await getAllPurseEnhancements();
  }
  return { codes };
}
