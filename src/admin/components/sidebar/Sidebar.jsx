import React, { useState } from "react";
import logoSrc from "/Images/logo.png";
import GradientText from "../../../components/bits ui/GradientText";
import {
  Collapse,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { HiOutlineChevronRight, HiOutlineChevronDown } from "react-icons/hi";
import { Link } from "react-router-dom";
import { IoMdHome } from "react-icons/io";
import { FaBook } from "react-icons/fa";
import { PiStudentDuotone } from "react-icons/pi";
import { BiCategory } from "react-icons/bi";
import { GoDot } from "react-icons/go";
import { MdOutlineDesignServices } from "react-icons/md";

const Sidebar = () => {
  const [services, setServices] = useState(false);
  const [categories, setCategories] = useState(false);
  const [pricing, setPricing] = useState(false);

  const handleService = () => {
    setServices(!services);
  };
  const handleStudents = () => {
    setStudents(!students);
  };
  const handleCategories = () => {
    setCategories(!categories);
  };
  const handleAuthors = () => {
    setAuthors(!authors);
  };
  const handlePricing = () => {
    setPricing(!pricing);
  };

  return (
    <>
      <aside
        id="sidebar"
        className="sidebar bg-[#fff] border-r-2 border-[#0000002c] h-full py-10"
      >
        <div className="sidbar_logo flex justify-center mb-4">
          <Link to="/dashboard" className="flex items-center">
            <img src={logoSrc} className={`max-w-[100px]`} alt="" />
            <GradientText
              colors={["#c9a66f", "#8C6238", "#c9a66f", "#c9a66f", "#8C6238"]}
              animationSpeed={8}
              showBorder={false}
              className=""
            >
              GLOTECH
            </GradientText>
          </Link>
        </div>
        <div className="sidebar_menus">
          <List>
            <ListItem
              disablePadding
              className="my-[.75rem] border-1 border-transparent border-b-[#ffffff24]"
            >
              <div className="px-[.75rem] w-full">
                <Link className="text-light_text" to={`/dashboard`}>
                  <ListItemButton>
                    <ListItemIcon className="-mr-4">
                      <IoMdHome className="text-light_text text-xl" />
                    </ListItemIcon>
                    Home
                  </ListItemButton>
                </Link>
              </div>
            </ListItem>

            {/* Books */}
            <div className="text-light_text border-1 border-transparent border-b-[#ffffff24] mb-[.75rem]">
              <div className="px-[.75rem]">
                <ListItemButton onClick={handleService}>
                  <ListItemIcon className="-mr-4">
                    <MdOutlineDesignServices className="text-light_text text-xl" />
                  </ListItemIcon>
                  <h6 className="text-light_text">Services</h6>
                  {services ? (
                    <HiOutlineChevronDown className="ms-auto" />
                  ) : (
                    <HiOutlineChevronRight className="ms-auto" />
                  )}
                </ListItemButton>

                <Collapse in={services} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    <Link
                      className="text-light_text"
                      to={`/dashboard/add-service`}
                    >
                      <ListItemButton sx={{ pl: 4 }}>
                        <ListItemIcon className="-mr-4">
                          <GoDot className="text-light_text" />
                        </ListItemIcon>
                        Add Service
                      </ListItemButton>
                    </Link>
                    <Link
                      className="text-light_text"
                      to={`/dashboard/view-service`}
                    >
                      <ListItemButton sx={{ pl: 4 }}>
                        <ListItemIcon className="-mr-4">
                          <GoDot className="text-light_text" />
                        </ListItemIcon>
                        View Service
                      </ListItemButton>
                    </Link>
                  </List>
                </Collapse>
              </div>
            </div>

            {/* Categories */}
            <div className="text-light_text border-1 border-transparent border-b-[#ffffff24] mb-[.75rem]">
              <div className="px-[.75rem]">
                <ListItemButton
                  onClick={handleCategories}
                  className='text-light_text relative before:content-[""] before:block before:absolute before:bottom-0 before:left-0 before:bg-slate-50'
                >
                  <ListItemIcon className="-mr-4">
                    <BiCategory className="text-light_text text-xl" />
                  </ListItemIcon>
                  <h6 className="text-light_text">Categories</h6>
                  {categories ? (
                    <HiOutlineChevronDown className="ms-auto" />
                  ) : (
                    <HiOutlineChevronRight className="ms-auto" />
                  )}
                </ListItemButton>
                <Collapse in={categories} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    <Link
                      className="text-light_text"
                      to={`/dashboard/add-category`}
                    >
                      <ListItemButton sx={{ pl: 4 }}>
                        <ListItemIcon className="-mr-4">
                          <GoDot className="text-light_text" />
                        </ListItemIcon>
                        Add Category
                      </ListItemButton>
                    </Link>
                    <Link
                      className="text-light_text"
                      to={`/dashboard/view-category`}
                    >
                      <ListItemButton sx={{ pl: 4 }}>
                        <ListItemIcon className="-mr-4">
                          <GoDot className="text-light_text" />
                        </ListItemIcon>
                        View Categories
                      </ListItemButton>
                    </Link>
                  </List>
                </Collapse>
              </div>
            </div>
          </List>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
