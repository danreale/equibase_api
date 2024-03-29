import { LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData, useSearchParams } from "@remix-run/react";
import {
  getAllScratchReasons,
  getScratchReasonsSearch,
} from "~/data/db.server";
import CommonTable from "~/components/CommonTable";

export default function ScratchReasons() {
  const [params] = useSearchParams();
  const { codes } = useLoaderData<typeof loader>();
  return (
    <>
      <CommonTable name={"Scratch Reasons"} rows={codes} params={params} />
    </>
  );
}

export async function loader({ request }: LoaderFunctionArgs) {
  const url = new URL(request.url);
  const search = url.searchParams.get("query");

  let codes = null;
  if (search) {
    codes = await getScratchReasonsSearch(search);
  } else {
    codes = await getAllScratchReasons();
  }
  return { codes };
}
