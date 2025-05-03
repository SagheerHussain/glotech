import React, { useEffect, useState } from "react";

import { IconButton, Menu, MenuItem } from "@mui/material";
// import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useNavigate } from "react-router-dom"; // For navigation
import Swal from "sweetalert2";
import GridTable from "../GridTable";
import { FaPencilAlt } from "react-icons/fa";
import { deleteOverallStats, getOverallStats } from "../../../services/overallStats";
import EditOverallStats from "./EditOverallStats";

const ViewOverallStats = () => {
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
  const handleEdit = (id) => {
    navigate(`/dashboard/edit-overall-stats/${id}`);
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
        await deleteOverallStats(selectedId);
        Swal.fire("Deleted!", "The overall stats has been deleted.", "success");
        setRows(rows.filter((row) => row.id !== selectedId));
      } catch (error) {
        console.error("Error deleting overall stats:", error);
      }
    }
  };

  // Handle Bulk Delete
  const handleBulkDelete = async () => {};

  const columns = [
    { field: "No", headerName: "Index", flex: 1, minWidth: 150 },
    {
      field: "projectsDeliveredTitleEnglish",
      headerName: "Projects Delivered Title English",
      flex: 1,
      minWidth: 250,
    },
    {
      field: "projectsDeliveredTitleArabic",
      headerName: "Projects Delivered Title Arabic",
      flex: 1,
      minWidth: 250,
    },
    {
      field: "projectsDeliveredTitleFrench",
      headerName: "Projects Delivered Title French",
      flex: 1,
      minWidth: 250,
    },
    {
      field: "projectsDeliveredCount",
      headerName: "Projects Delivered Count",
      flex: 1,
      minWidth: 250,
    },
    {
      field: "clientsTitleEnglish",
      headerName: "Clients Title English",
      flex: 1,
      minWidth: 250,
    },
    {
      field: "clientsTitleArabic",
      headerName: "Clients Title Arabic",
      flex: 1,
      minWidth: 250,
    },
    {
      field: "clientsTitleFrench",
      headerName: "Clients Title French",
      flex: 1,
      minWidth: 250,
    },
    {
      field: "clientsCount",
      headerName: "Clients Count",
      flex: 1,
      minWidth: 250,
    },
    {
      field: "divisionsTitleEnglish",
      headerName: "Divisions Title English",
      flex: 1,
      minWidth: 250,
    },
    {
      field: "divisionsTitleArabic",
      headerName: "Divisions Title Arabic",
      flex: 1,
      minWidth: 250,
    },
    {
      field: "divisionsTitleFrench",
      headerName: "Divisions Title French",
      flex: 1,
      minWidth: 250,
    },
    {
      field: "divisionsCount",
      headerName: "Divisions Count",
      flex: 1,
      minWidth: 250,
    },
    {
      field: "awardsCount",
      headerName: "Awards Count",
      flex: 1,
      minWidth: 250,
    },
    {
      field: "awardsTitleEnglish",
      headerName: "Awards Title English",
      flex: 1,
      minWidth: 250,
    },
    {
      field: "awardsTitleArabic",
      headerName: "Awards Title Arabic",
      flex: 1,
      minWidth: 250,
    },
    {
      field: "awardsTitleFrench",
      headerName: "Awards Title French",
      flex: 1,
      minWidth: 250,
    },
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

  const fetchOverallStats = async () => {
    try {
      const { data } = await getOverallStats();
      const formattedRows = data?.map((item, index) => ({
        id: item._id,
        No: index + 1,
        projectsDeliveredTitleEnglish: item.projectsDelivered.title.en,
        projectsDeliveredTitleArabic: item.projectsDelivered.title.ar,
        projectsDeliveredTitleFrench: item.projectsDelivered.title.fr,
        projectsDeliveredCount: item.projectsDelivered.count,
        clientsCount: item.clients.count,
        clientsTitleEnglish: item.clients.title.en,
        clientsTitleArabic: item.clients.title.ar,
        clientsTitleFrench: item.clients.title.fr,
        divisionsCount: item.divisions.count,
        divisionsTitleEnglish: item.divisions.title.en,
        divisionsTitleArabic: item.divisions.title.ar,
        divisionsTitleFrench: item.divisions.title.fr,
        awardsCount: item.awards.count,
        awardsTitleEnglish: item.awards.title.en,
        awardsTitleArabic: item.awards.title.ar,
        awardsTitleFrench: item.awards.title.fr,
      }));
      setRows(formattedRows);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchOverallStats();
  }, []);

  return (
    <>
      <GridTable
        title={"View Overall Stats"}
        handleBulkDelete={handleBulkDelete}
        selectedRows={selectedRows}
        rows={rows}
        columns={columns}
        setSelectedRows={setSelectedRows}
      />

      {/* Edit Sales Modal */}
      {selectedId && <EditOverallStats id={selectedId} />}
    </>
  );
};

export default ViewOverallStats;
