import React, { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom"; // For navigation
import Swal from "sweetalert2";
import GridTable from "../GridTable";
import { deleteColor, getColors } from "../../../services/colors";
import { FaPencilAlt } from "react-icons/fa";
import { getContacts } from "../../../services/contact";

const ViewContact = () => {
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
    navigate(`/dashboard/edit-contact/${id}`);
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
    { field: "location_en", headerName: "Location (EN)", flex: 1, minWidth: 150 },
    { field: "location_ar", headerName: "Location (AR)", flex: 1, minWidth: 150 },
    { field: "location_fr", headerName: "Location (FR)", flex: 1, minWidth: 150 },
    { field: "email", headerName: "Email", flex: 1, minWidth: 150 },
    { field: "phone", headerName: "Phone", flex: 1, minWidth: 150 },
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

  const fetchColors = async () => {
    try {
      const { data } = await getContacts();
      const formattedRows = data.map((item, index) => ({
        id: item._id,
        No: index + 1,
        location_en: item.location.en || "N/A",
        location_ar: item.location.ar || "N/A",
        location_fr: item.location.fr || "N/A",
        email: item.email || "N/A",
        phone: item.phone || "N/A",
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
        title={"View Contact"}
        handleBulkDelete={handleBulkDelete}
        selectedRows={selectedRows}
        rows={rows}
        columns={columns}
        setSelectedRows={setSelectedRows}
      />

    </>
  );
};

export default ViewContact;
