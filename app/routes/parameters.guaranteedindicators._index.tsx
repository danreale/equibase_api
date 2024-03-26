import { LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData, useSearchParams } from "@remix-run/react";
import {
  getAllGuaranteedIndicators,
  getGuaranteedIndicatorsSearch,
} from "~/data/db.server";
import CommonTable from "~/components/CommonTable";

export default function Index() {
  const [params] = useSearchParams();
  const { codes } = useLoaderData<typeof loader>();
  return (
    <>
      <CommonTable
        name={"Guaranteed Indicators"}
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
    codes = await getGuaranteedIndicatorsSearch(search);
  } else {
    codes = await getAllGuaranteedIndicators();
  }
  return { codes };
}
