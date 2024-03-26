import { LoaderFunctionArgs } from "@remix-run/node";
import { Form, useLoaderData, useSearchParams } from "@remix-run/react";
import { getAllTracks, getTracksSearch } from "~/data/db.server";
import { DataGrid } from "@mui/x-data-grid";
import Header from "~/components/Header";

export default function Tracks() {
  const [params] = useSearchParams();
  const { tracks } = useLoaderData<typeof loader>();
  let columns = [
    {
      field: "country_code",
      headerName: "Country",
      flex: 1,
    },
    {
      field: "state_providence",
      headerName: "State",
      flex: 1,
    },
    {
      field: "track_id",
      headerName: "Track Code",
      flex: 1,
    },
    {
      field: "track_description",
      headerName: "Track",
      flex: 1,
    },
  ];
  return (
    <>
      <Header />
      <h1 className="text-center text-4xl py-5">Tracks</h1>

      <div className="grid justify-center text-center py-5">
        <Form>
          <input
            className="text-center border-2 rounded-lg border-blue-600 text-blue-600 placeholder-blue-600 py-1"
            type="text"
            name="query"
            id="query"
            placeholder="Search Tracks"
            defaultValue={params.get("query") || ""}
          />
        </Form>
      </div>

      <div>
        <div style={{ height: 350, width: "100%" }}>
          <DataGrid
            rows={tracks}
            columns={columns}
            sx={{
              backgroundColor: "#c6e2ff",
              m: 2,
              boxShadow: 2,
              border: 2,
              borderColor: "primary.light",
              "& .MuiDataGrid-cell:hover": {
                color: "primary.main",
              },
            }}
          />
        </div>
      </div>
    </>
  );
}

export async function loader({ request }: LoaderFunctionArgs) {
  const url = new URL(request.url);
  const search = url.searchParams.get("query");

  let tracks = null;
  if (search) {
    tracks = await getTracksSearch(search);
  } else {
    tracks = await getAllTracks();
  }
  return { tracks };
}
