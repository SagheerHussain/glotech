import { Button, Menu, MenuItem } from "@mui/material";
import React, { useEffect, useState } from "react";
import { IoMenu } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import "../dashboard.css";
import Swal from "sweetalert2";

const Navbar = () => {

  const user = JSON.parse(localStorage.getItem("user"));

  // Navigate
  const navigate = useNavigate();

  // Logout
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    localStorage.clear();
    Swal.fire({
      title: "Logout Successfully",
      icon: "success",
      timer: 700
    });
    setTimeout(() => {
      navigate("/login");
    }, 1200);
  }

  return (
    <>
      <nav
        id="navbar"
        className="bg-[#fff] border-b-2 border-[#0000002c] lg:w-[75vw] xl:w-[80vw] 2xl:w-[85vw] lg:h-[10vh] xl:h-[7vh] flex items-center px-4"
      >
          <div className="navbar_content flex justify-between w-[100%] items-center">
            {/* <div className="navbar_menu ">
              <IoMenu className="text-3xl text-[#fff]" />
            </div> */}

            <div className="navbar_logout w-full flex justify-end">
              <Button
                id="basic-button"
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
              >
                <div className="profile_menu_icon w-[30px] h-[30px] bg-primary rounded-full flex items-center justify-center me-2">
                  <span className="text-white font-semibold text-lg">
                    {user?.username[0]}
                  </span>
                </div>
                <span className="text-black">{user?.username}</span>
              </Button>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
                className="navbar-dropdown-menu"
              >
                <MenuItem className="w-full" onClick={handleLogout}>Logout</MenuItem>
              </Menu>
            </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
