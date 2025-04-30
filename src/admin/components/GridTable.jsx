import React from "react";
import { Layout } from "./index";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";

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
        <section id="table" className="h-full min-h-[90vh]">
          <Box className="lg:w-[75vw] xl:w-[80vw] 2xl:w-[84vw] p-8">
            {/* Bulk Delete Button */}
            <div className="flex justify-end mb-2">
    
                <button
                  className={`${selectedRows.length > 0 ? "opacity-100" : "opacity-0"} bg-primary hover:bg-hover_color text-black p-3 text-sm hover:bg-primary_hover`}
                  onClick={handleBulkDelete}
                >
                  Delete Selected Rows ({selectedRows.length})
                </button>
      
            </div>

            <h1 className="text-black mb-5 text-4xl font-bold">{title}</h1>

            <DataGrid
              rows={rows}
              className="text-black bg-primary shadow-lg rounded-lg"
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
