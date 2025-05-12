import React from "react";
import { Layout } from "./index";
import Box from "@mui/material/Box";
// import { DataGrid } from "@mui/x-data-grid";
import { DataGrid } from '@mui/x-data-grid';

const GridTable = ({
  title,
  handleBulkDelete,
  selectedRows,
  rows,
  columns,
  setSelectedRows,
}) => {
  return (
    <>
      <Layout>
        <section id="table" className="h-full min-h-[90vh] z-[-1] max-w-[100vw] lg:max-w-[calc(100vw-300px)] px-6">
          <Box>
            {/* Bulk Delete Button */}
            <div className="flex justify-end mb-2">
              <button
                className={`${
                  selectedRows.length > 0 ? "opacity-100" : "opacity-0"
                } bg-primary hover:bg-hover_color text-black p-3 text-sm hover:bg-primary_hover`}
                onClick={handleBulkDelete}
              >
                Delete Selected Rows ({selectedRows.length})
              </button>
            </div>

            <h1 className="text-black mb-5 text-4xl font-bold">{title}</h1>

            <DataGrid
              rows={rows}
              className="text-black bg-primary rounded-lg max-w-[100vw] z-[0] overflow-x-scroll"
              columns={columns}
              initialState={{
                pagination: {
                  paginationModel: {
                    pageSize: 10,
                  },
                },
              }}
              pageSizeOptions={[10]}
              checkboxSelection
              onRowSelectionModelChange={(newSelection) =>
                setSelectedRows(newSelection)
              }
              disableRowSelectionOnClick
            />
          </Box>
        </section>
      </Layout>
    </>
  );
};

export default GridTable;
