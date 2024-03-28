import { LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData, useSearchParams } from "@remix-run/react";
import {
  getAllStarterBreedTypes,
  getStarterBreedTypesSearch,
} from "~/data/db.server";
import CommonTable from "~/components/CommonTable";

export default function StarterBreedTypes() {
  const [params] = useSearchParams();
  const { codes } = useLoaderData<typeof loader>();
  return (
    <>
      <CommonTable name={"Starter Breed Types"} rows={codes} params={params} />
    </>
  );
}

export async function loader({ request }: LoaderFunctionArgs) {
  const url = new URL(request.url);
  const search = url.searchParams.get("query");

  let codes = null;
  if (search) {
    codes = await getStarterBreedTypesSearch(search);
  } else {
    codes = await getAllStarterBreedTypes();
  }
  return { codes };
}
