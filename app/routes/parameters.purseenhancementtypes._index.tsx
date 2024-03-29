import { LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData, useSearchParams } from "@remix-run/react";
import {
  getAllPurseEnhancementTypes,
  getPurseEnhancementTypesSearch,
} from "~/data/db.server";
import CommonTable from "~/components/CommonTable";

export default function PurseEnhancementTypes() {
  const [params] = useSearchParams();
  const { codes } = useLoaderData<typeof loader>();
  return (
    <>
      <CommonTable
        name={"Purse Enhancement Types"}
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
    codes = await getPurseEnhancementTypesSearch(search);
  } else {
    codes = await getAllPurseEnhancementTypes();
  }
  return { codes };
}
