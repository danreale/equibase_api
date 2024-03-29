import { LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData, useSearchParams } from "@remix-run/react";
import { getAllHorseSexes, getHorseSexesSearch } from "~/data/db.server";
import CommonTable from "~/components/CommonTable";

export default function HorseSexes() {
  const [params] = useSearchParams();
  const { codes } = useLoaderData<typeof loader>();
  return (
    <>
      <CommonTable name={"Horse Sexes"} rows={codes} params={params} />
    </>
  );
}

export async function loader({ request }: LoaderFunctionArgs) {
  const url = new URL(request.url);
  const search = url.searchParams.get("query");

  let codes = null;
  if (search) {
    codes = await getHorseSexesSearch(search);
  } else {
    codes = await getAllHorseSexes();
  }
  return { codes };
}
