import React, { useEffect, useState } from "react";

import { IconButton, Menu, MenuItem } from "@mui/material";
// import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useNavigate } from "react-router-dom"; // For navigation
import Swal from "sweetalert2";
import GridTable from "../GridTable";
import { BsThreeDotsVertical } from "react-icons/bs";
import { deleteCategory, getCategories } from "../../../services/categories";
import EditCategory from "./EditCategory";

const ViewCategory = () => {
  const [rows, setRows] = useState([]);
  const [selectedRows, setSelectedRows] = useState([]);
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedId, setSelectedId] = useState(null);
  const navigate = useNavigate();

  // Handle Actions Menu
  const handleMenuOpen = (event, id) => {
    setAnchorEl(event.currentTarget);
    setSelectedId(id);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setSelectedId(null);
  };

  // Handle Single Edit
  const handleEdit = () => {
    navigate(`/dashboard/edit-category/${selectedId}`);
    handleMenuClose();
  };

  // Handle Single Delete
  const handleDelete = async () => {
    handleMenuClose();
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "Do you really want to delete this category? This action cannot be undone.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    });

    if (result.isConfirmed) {
      try {
        await deleteCategory(selectedId);
        Swal.fire("Deleted!", "The category has been deleted.", "success");
        setRows(rows.filter((row) => row.id !== selectedId));
      } catch (error) {
        console.error("Error deleting category:", error);
      }
    }
  };

  // Handle Bulk Delete
  const handleBulkDelete = async () => {};

  const columns = [
    { field: "No", headerName: "Index", flex: 1, minWidth: 150 },
    {
      field: "category_en",
      headerName: "Category (en)",
      flex: 1,
      minWidth: 150,
      editable: true,
    },
    {
      field: "category_ar",
      headerName: "Category (ar)",
      flex: 1,
      minWidth: 150,
      editable: true,
    },
    {
      field: "category_fr",
      headerName: "Category (fr)",
      flex: 1,
      minWidth: 150,
      editable: true,
    },
    {
      field: "description_en",
      headerName: "Description (en)",
      flex: 1,
      minWidth: 150,
      editable: true,
    },
    {
      field: "description_ar",
      headerName: "Description (ar)",
      flex: 1,
      minWidth: 150,
      editable: true,
    },
    {
      field: "description_fr",
      headerName: "Description (fr)",
      flex: 1,
      minWidth: 150,
      editable: true,
    },
    {
      field: "slug",
      headerName: "Slug",
      flex: 1,
      minWidth: 150,
      editable: true,
    },
    {
      field: "image",
      headerName: "Image",
      flex: 1,
      minWidth: 150,
      editable: true,
      renderCell: (params) => (
        <a href={params.value} target="_blank" rel="noopener noreferrer" className="underline">
          View Image
        </a>
      ),
    },
    {
      field: "actions",
      headerName: "Actions",
      flex: 1,
      minWidth: 150,
      sortable: false,
      renderCell: (params) => (
        <>
          <IconButton onClick={(event) => handleMenuOpen(event, params.row.id)}>
            <BsThreeDotsVertical className="text-black" />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl) && selectedId === params.row.id}
            onClose={handleMenuClose}
          >
            <MenuItem onClick={handleEdit}>Edit</MenuItem>
            <MenuItem onClick={handleDelete} className="text-red-500">
              Delete
            </MenuItem>
          </Menu>
        </>
      ),
    },
  ];

  const fetchCategories = async () => {
    try {
      const { data } = await getCategories();
      console.log("data ====== >", data);
      const formattedRows = data.map((item, index) => ({
        id: item._id,
        No: index + 1,
        category_en: item?.name?.en || "N/A",
        category_ar: item?.name?.ar || "N/A",
        category_fr: item?.name?.fr || "N/A",
        description_en: item?.description?.en || "N/A",
        description_ar: item?.description?.ar || "N/A",
        description_fr: item?.description?.fr || "N/A",
        image: item?.image || "N/A",
        slug: item?.slug || "N/A",
      }));
      setRows(formattedRows);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <>
      <GridTable
        title={"View Categories"}
        handleBulkDelete={handleBulkDelete}
        selectedRows={selectedRows}
        rows={rows}
        columns={columns}
        setSelectedRows={setSelectedRows}
      />

      {/* Edit Sales Modal */}
      {selectedId && (
        <EditCategory
          id={selectedId}
        />
      )}
    </>
  );
};

export default ViewCategory;
