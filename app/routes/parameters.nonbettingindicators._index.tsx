import { LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData, useSearchParams } from "@remix-run/react";
import {
  getAllNonBettingIndicators,
  getNonBettingIndicatorsSearch,
} from "~/data/db.server";
import CommonTable from "~/components/CommonTable";

export default function NonBettingIndicators() {
  const [params] = useSearchParams();
  const { codes } = useLoaderData<typeof loader>();
  return (
    <>
      <CommonTable
        name={"Non Betting Indicators"}
        rows={codes}
        params={params}
      />
    </>
  );
}

export async function loader({ request }: LoaderFunctionArgs) {
  const url = new URL(request.url);
  const search = url.searchParams.get("query");

  let codes = null;
  if (search) {
    codes = await getNonBettingIndicatorsSearch(search);
  } else {
    codes = await getAllNonBettingIndicators();
  }
  return { codes };
}
