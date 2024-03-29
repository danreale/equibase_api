import { LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData, useSearchParams } from "@remix-run/react";
import {
  getAllDivisionIndicators,
  getDivisionIndicatorsSearch,
} from "~/data/db.server";
import CommonTable from "~/components/CommonTable";

export default function DivisionIndicators() {
  const [params] = useSearchParams();
  const { codes } = useLoaderData<typeof loader>();
  return (
    <>
      <CommonTable name={"Division Indicators"} rows={codes} params={params} />
    </>
  );
}

export async function loader({ request }: LoaderFunctionArgs) {
  const url = new URL(request.url);
  const search = url.searchParams.get("query");

  let codes = null;
  if (search) {
    codes = await getDivisionIndicatorsSearch(search);
  } else {
    codes = await getAllDivisionIndicators();
  }
  return { codes };
}
