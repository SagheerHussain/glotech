import React, { useEffect, useState } from "react";

import { IconButton, Menu, MenuItem } from "@mui/material";
// import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useNavigate } from "react-router-dom"; // For navigation
import Swal from "sweetalert2";
import GridTable from "../GridTable";
import { BsThreeDotsVertical } from "react-icons/bs";
import { deleteCategory, getCategories } from "../../../services/categories";
import EditCategory from "./EditColor";
import { deleteColor, getColors } from "../../../services/colors";
<<<<<<< HEAD
=======
import { FaPencilAlt } from "react-icons/fa";
>>>>>>> b82fcac51eacd2e91ae2d74e3c0c5227f28b01d6
import EditColor from "./EditColor";

const ViewColor = () => {
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
<<<<<<< HEAD
  const handleEdit = () => {
    navigate(`/dashboard/edit-color/${selectedId}`);
=======
  const handleEdit = (id) => {
    navigate(`/dashboard/edit-color/${id}`);
>>>>>>> b82fcac51eacd2e91ae2d74e3c0c5227f28b01d6
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
        await deleteColor(selectedId);
        Swal.fire("Deleted!", "The color has been deleted.", "success");
        setRows(rows.filter((row) => row.id !== selectedId));
      } catch (error) {
        console.error("Error deleting color:", error);
      }
    }
  };

  // Handle Bulk Delete
  const handleBulkDelete = async () => {};

  const columns = [
    { field: "No", headerName: "Index", flex: 1, minWidth: 150 },
    {
      field: "primary_hex",
      headerName: "Primary",
      flex: 1,
      minWidth: 150,
      editable: true,
      renderCell: (params) => (
        <div className="flex items-center">
          <div
            className="w-6 h-6 rounded-full"
            style={{ backgroundColor: params.value }}
          />
          <span className="ml-2">{params.value}</span>
        </div>
      ),
    },
    {
      field: "secondary_hex",
      headerName: "Secondary",
      flex: 1,
      minWidth: 150,
      editable: true,
      renderCell: (params) => (
        <div className="flex items-center">
          <div
            className="w-6 h-6 rounded-full"
            style={{ backgroundColor: params.value }}
          />
          <span className="ml-2">{params.value}</span>
        </div>
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
<<<<<<< HEAD
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
=======
          <button onClick={() => handleEdit(params.row.id)}>
            <FaPencilAlt size={20} className="text-primary" /> 
          </button>
>>>>>>> b82fcac51eacd2e91ae2d74e3c0c5227f28b01d6
        </>
      ),
    },
  ];

  const fetchColors = async () => {
    try {
      const { data } = await getColors();
      const formattedRows = data.map((item, index) => ({
        id: item._id,
        No: index + 1,
        primary_hex: item.primary || "N/A",
        secondary_hex: item.secondary || "N/A",
      }));
      setRows(formattedRows);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchColors();
  }, []);

  return (
    <>
      <GridTable
        title={"View Colors"}
        handleBulkDelete={handleBulkDelete}
        selectedRows={selectedRows}
        rows={rows}
        columns={columns}
        setSelectedRows={setSelectedRows}
      />

      {/* Edit Sales Modal */}
<<<<<<< HEAD
      {selectedId && (
        <EditColor
          id={selectedId}
        />
      )}
=======
      {selectedId && <EditColor id={selectedId} />}
>>>>>>> b82fcac51eacd2e91ae2d74e3c0c5227f28b01d6
    </>
  );
};

export default ViewColor;
