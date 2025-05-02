import React, { useEffect, useState } from "react";
import { IconButton, Menu, MenuItem } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { BsThreeDotsVertical } from "react-icons/bs";
import Swal from "sweetalert2";
// import { MoreVert } from '@mui/icons-material';
import GridTable from "../GridTable";
import { getAboutLists } from "../../../services/about";
import { FaPencilAlt } from "react-icons/fa";

const ViewAbout = () => {
  const [rows, setRows] = useState([]);
  const [selectedRows, setSelectedRows] = useState([]);
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedId, setSelectedId] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await getAboutLists();
        const formattedRows = data.map((item, index) => ({
          id: item._id,
          No: index + 1,
          mission_en: item.mission.en || "N/A",
          mission_ar: item.mission.ar || "N/A",
          mission_fr: item.mission.fr || "N/A",
          vision_en: item.vision.en || "N/A",
          vision_ar: item.vision.ar || "N/A",
          vision_fr: item.vision.fr || "N/A",
          target_en: item.target.en || "N/A",
          target_ar: item.target.ar || "N/A",
          target_fr: item.target.fr || "N/A",
        }));
        setRows(formattedRows);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const columns = [
    { field: "No", headerName: "Index", flex: 1, minWidth: 150 },
    { field: "mission_en", headerName: "Mission (EN)", flex: 1, minWidth: 150 },
    { field: "mission_ar", headerName: "Mission (AR)", flex: 1, minWidth: 150 },
    { field: "mission_fr", headerName: "Mission (FR)", flex: 1, minWidth: 150 },
    { field: "vision_en", headerName: "Vision (EN)", flex: 1, minWidth: 150 },
    { field: "vision_ar", headerName: "Vision (AR)", flex: 1, minWidth: 150 },
    { field: "vision_fr", headerName: "Vision (FR)", flex: 1, minWidth: 150 },
    { field: "target_en", headerName: "Target (EN)", flex: 1, minWidth: 150 },
    { field: "target_ar", headerName: "Target (AR)", flex: 1, minWidth: 150 },
    { field: "target_fr", headerName: "Target (FR)", flex: 1, minWidth: 150 },
    {
      field: "actions",
      headerName: "Actions",
      flex: 1,
      minWidth: 150,
      sortable: false,
      renderCell: (params) => (
        <>
          <button onClick={() => handleEdit(params.row.id)}>
            <FaPencilAlt size={20} className="text-primary" />
          </button>
        </>
      ),
    },
  ];

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
  const handleEdit = (id) => {
    handleMenuClose();
    navigate(`/dashboard/edit-about/${id}`);
  };

  // Handle Single Delete
  const handleDelete = async () => {
    handleMenuClose();
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "Do you really want to delete this about? This action cannot be undone.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    });

    if (result.isConfirmed) {
      try {
        await deleteAbout(selectedId);
        Swal.fire("Deleted!", "The about has been deleted.", "success");
        setRows(rows.filter((row) => row.id !== selectedId));
      } catch (error) {
        console.error("Error deleting about:", error);
      }
    }
  };

  // Handle Bulk Delete
  const handleBulkDelete = async () => {};

  return (
    <>
      <GridTable
        title={"View About"}
        handleBulkDelete={handleBulkDelete}
        selectedRows={selectedRows}
        rows={rows}
        columns={columns}
        setSelectedRows={setSelectedRows}
      />
    </>
  );
};

export default ViewAbout;
