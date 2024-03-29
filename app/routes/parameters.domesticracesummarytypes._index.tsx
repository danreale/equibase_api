import { LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData, useSearchParams } from "@remix-run/react";
import {
  getAllDomesticRaceSummaryTypes,
  getDomesticRaceSummaryTypesSearch,
} from "~/data/db.server";
import CommonTable from "~/components/CommonTable";

export default function DomesticRaceSummaryTypes() {
  const [params] = useSearchParams();
  const { codes } = useLoaderData<typeof loader>();
  return (
    <>
      <CommonTable
        name={"Domestic Race Summary Types"}
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
    codes = await getDomesticRaceSummaryTypesSearch(search);
  } else {
    codes = await getAllDomesticRaceSummaryTypes();
  }
  return { codes };
}
