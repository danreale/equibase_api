import { LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData, useSearchParams } from "@remix-run/react";
import {
  getAllScratchIndicators,
  getScratchIndicatorsSearch,
} from "~/data/db.server";
import CommonTable from "~/components/CommonTable";

export default function ScratchIndicators() {
  const [params] = useSearchParams();
  const { codes } = useLoaderData<typeof loader>();
  return (
    <>
      <CommonTable name={"Scratch Indicators"} rows={codes} params={params} />
    </>
  );
}

export async function loader({ request }: LoaderFunctionArgs) {
  const url = new URL(request.url);
  const search = url.searchParams.get("query");

  let codes = null;
  if (search) {
    codes = await getScratchIndicatorsSearch(search);
  } else {
    codes = await getAllScratchIndicators();
  }
  return { codes };
}
