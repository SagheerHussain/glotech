import React, { useEffect, useState } from "react";

import { IconButton, Menu, MenuItem } from "@mui/material";
// import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useNavigate } from "react-router-dom"; // For navigation
import Swal from "sweetalert2";
import GridTable from "../GridTable";
import { BsThreeDotsVertical } from "react-icons/bs";
import {
  deleteTestimonial,
  getTestimonials,
} from "../../../services/testimonial";

// import { deleteTeam, getTeams } from "../../../services/teams";

const ViewTestimonial = () => {
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
    navigate(`/dashboard/edit-testimonial/${selectedId}`);
    handleMenuClose();
  };

  // Handle Single Delete
  const handleDelete = async () => {
    handleMenuClose();
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "Do you really want to delete this team? This action cannot be undone.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    });

    if (result.isConfirmed) {
      try {
        await deleteTestimonial(selectedId);
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
    { field: "name_en", headerName: "Name (en)", flex: 1, minWidth: 150 },
    { field: "name_ar", headerName: "Name (ar)", flex: 1, minWidth: 150 },
    { field: "name_fr", headerName: "Name (fr)", flex: 1, minWidth: 150 },
    { field: "review_en", headerName: "Review (en)", flex: 1, minWidth: 150 },
    { field: "review_ar", headerName: "Review (ar)", flex: 1, minWidth: 150 },
    { field: "review_fr", headerName: "Review (fr)", flex: 1, minWidth: 150 },
    { field: "rating", headerName: "Rating", flex: 1, minWidth: 150 },
    {
      field: "image",
      headerName: "Image",
      flex: 1,
      minWidth: 150,
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
      // const { data } = await getCategories();
      const { data } = await getTestimonials();
      console.log(data);
      const formattedRows = data.map((item, index) => ({
        id: item._id,
        No: index + 1,
        name_en: item.name.en || "N/A",
        name_ar: item.name.ar || "N/A",
        name_fr: item.name.fr || "N/A",
        review_en: item.review.en || "N/A",
        review_ar: item.review.ar || "N/A",
        review_fr: item.review.fr || "N/A",
        rating: item.rating || "N/A",
        image: item.image || "N/A",
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
        title={"View Testimonials"}
        handleBulkDelete={handleBulkDelete}
        selectedRows={selectedRows}
        rows={rows}
        columns={columns}
        setSelectedRows={setSelectedRows}
      />
    </>
  );
};

export default ViewTestimonial;
