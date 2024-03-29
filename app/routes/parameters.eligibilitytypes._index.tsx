import { LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData, useSearchParams } from "@remix-run/react";
import {
  getAllEligibilityTypes,
  getEligibilityTypesSearch,
} from "~/data/db.server";
import CommonTable from "~/components/CommonTable";

export default function EligibilityTypes() {
  const [params] = useSearchParams();
  const { codes } = useLoaderData<typeof loader>();
  return (
    <>
      <CommonTable name={"Eligibility Types"} rows={codes} params={params} />
    </>
  );
}

export async function loader({ request }: LoaderFunctionArgs) {
  const url = new URL(request.url);
  const search = url.searchParams.get("query");

  let codes = null;
  if (search) {
    codes = await getEligibilityTypesSearch(search);
  } else {
    codes = await getAllEligibilityTypes();
  }
  return { codes };
}
