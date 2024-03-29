import { LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData, useSearchParams } from "@remix-run/react";
import {
  getAllRaceTypeQuarterHorse,
  getRaceTypeQuarterHorseSearch,
} from "~/data/db.server";
import CommonTable from "~/components/CommonTable";

export default function RaceTypeQuarterHorse() {
  const [params] = useSearchParams();
  const { codes } = useLoaderData<typeof loader>();
  return (
    <>
      <CommonTable
        name={"Race Type Quarter Horse"}
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
    codes = await getRaceTypeQuarterHorseSearch(search);
  } else {
    codes = await getAllRaceTypeQuarterHorse();
  }
  return { codes };
}
