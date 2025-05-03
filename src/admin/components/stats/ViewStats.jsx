import React, { useEffect, useState } from "react";
import { IconButton, Menu, MenuItem } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { BsThreeDotsVertical } from "react-icons/bs";
import Swal from "sweetalert2";
// import { MoreVert } from '@mui/icons-material';
import GridTable from "../GridTable";
import { getAboutLists } from "../../../services/about";
import { FaPencilAlt } from "react-icons/fa";
import { deleteStats, getStatsLists } from "../../../services/stats";

const ViewStats = () => {
  const [rows, setRows] = useState([]);
  const [selectedRows, setSelectedRows] = useState([]);
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedId, setSelectedId] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await getStatsLists();
        const formattedRows = data?.map((item, index) => ({
          id: item._id,
          No: index + 1,
          StatOne_title_en: item.statOne.title.en || "N/A",
          StatOne_title_ar: item.statOne.title.ar || "N/A",
          StatOne_title_fr: item.statOne.title.fr || "N/A",
          StatOne_count: item.statOne.count || "N/A",
          StatTwo_title_en: item.statTwo.title.en || "N/A",
          StatTwo_title_ar: item.statTwo.title.ar || "N/A",
          StatTwo_title_fr: item.statTwo.title.fr || "N/A",
          StatTwo_count: item.statTwo.count || "N/A",
          StatThree_title_en: item.statThree.title.en || "N/A",
          StatThree_title_ar: item.statThree.title.ar || "N/A",
          StatThree_title_fr: item.statThree.title.fr || "N/A",
          StatThree_count: item.statThree.count || "N/A",
          StatFour_title_en: item.statFour.title.en || "N/A",
          StatFour_title_ar: item.statFour.title.ar || "N/A",
          StatFour_title_fr: item.statFour.title.fr || "N/A",
          StatFour_count: item.statFour.count || "N/A",
          category: item.category.name.en || "N/A",
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
    {
      field: "StatOne_title_en",
      headerName: "Stat One Title (EN)",
      flex: 1,
      minWidth: 150,
    },
    {
      field: "StatOne_title_ar",
      headerName: "Stat One Title (AR)",
      flex: 1,
      minWidth: 150,
    },
    {
      field: "StatOne_title_fr",
      headerName: "Stat One Title (FR)",
      flex: 1,
      minWidth: 150,
    },
    {
      field: "StatOne_count",
      headerName: "Stat One Count",
      flex: 1,
      minWidth: 150,
    },
    {
      field: "StatTwo_title_en",
      headerName: "Stat Two Title (EN)",
      flex: 1,
      minWidth: 150,
    },
    {
      field: "StatTwo_title_ar",
      headerName: "Stat Two Title (AR)",
      flex: 1,
      minWidth: 150,
    },
    {
      field: "StatTwo_title_fr",
      headerName: "Stat Two Title (FR)",
      flex: 1,
      minWidth: 150,
    },
    {
      field: "StatTwo_count",
      headerName: "Stat Two Count",
      flex: 1,
      minWidth: 150,
    },
    {
      field: "StatThree_title_en",
      headerName: "Stat Three Title (EN)",
      flex: 1,
      minWidth: 150,
    },
    {
      field: "StatThree_title_ar",
      headerName: "Stat Three Title (AR)",
      flex: 1,
      minWidth: 150,
    },
    {
      field: "StatThree_title_fr",
      headerName: "Stat Three Title (FR)",
      flex: 1,
      minWidth: 150,
    },
    {
      field: "StatThree_count",
      headerName: "Stat Three Count",
      flex: 1,
      minWidth: 150,
    },
    {
      field: "StatFour_title_en",
      headerName: "Stat Four Title (EN)",
      flex: 1,
      minWidth: 150,
    },
    {
      field: "StatFour_title_ar",
      headerName: "Stat Four Title (AR)",
      flex: 1,
      minWidth: 150,
    },
    {
      field: "StatFour_title_fr",
      headerName: "Stat Four Title (FR)",
      flex: 1,
      minWidth: 150,
    },
    {
      field: "StatFour_count",
      headerName: "Stat Four Count",
      flex: 1,
      minWidth: 150,
    },
    { field: "category", headerName: "Category", flex: 1, minWidth: 150 },
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
    handleMenuClose();
    navigate(`/dashboard/edit-stats/${selectedId}`);
  };

  // Handle Single Delete
  const handleDelete = async () => {
    handleMenuClose();
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "Do you really want to delete this stats? This action cannot be undone.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    });

    if (result.isConfirmed) {
      try {
        await deleteStats(selectedId);
        Swal.fire("Deleted!", "The stats has been deleted.", "success");
        setRows(rows.filter((row) => row.id !== selectedId));
      } catch (error) {
        console.error("Error deleting stats:", error);
      }
    }
  };

  // Handle Bulk Delete
  const handleBulkDelete = async () => {};

  return (
    <>
      <GridTable
        title={"View Stats"}
        handleBulkDelete={handleBulkDelete}
        selectedRows={selectedRows}
        rows={rows}
        columns={columns}
        setSelectedRows={setSelectedRows}
      />
    </>
  );
};

export default ViewStats;
