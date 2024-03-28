import { Form, useLoaderData, useSearchParams } from "@remix-run/react";
import Header from "./Header";
import { DataGrid } from "@mui/x-data-grid";

export default function CommonTableExtended({ name, columns, rows, params }) {
  return (
    <>
      <Header />
      <h1 className="text-center text-4xl py-5">{name}</h1>

      <div className="grid justify-center text-center py-5">
        <Form>
          <input
            className="text-center border-2 rounded-lg border-blue-600 text-blue-600 placeholder-blue-600 py-1"
            type="text"
            name="query"
            id="query"
            placeholder="Search"
            defaultValue={params.get("query") || ""}
          />
        </Form>
      </div>

      <div>
        <div style={{ height: 350, width: "100%" }}>
          <DataGrid
            rows={rows}
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
