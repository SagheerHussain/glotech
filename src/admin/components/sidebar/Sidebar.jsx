import React, { useState } from "react";
import logoSrc from "/Images/logo.png";
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
import { IoMdClose, IoMdHome } from "react-icons/io";
import { BiCategory } from "react-icons/bi";
import { GoDot } from "react-icons/go";
import { MdOutlineDesignServices } from "react-icons/md";
import { MdLightMode } from "react-icons/md";
import { GrNotes } from "react-icons/gr";
import { IoIosStats } from "react-icons/io";
import { ImStatsBars2 } from "react-icons/im";
import { FaUsers } from "react-icons/fa";
import { MdOutlineRateReview } from "react-icons/md";
import { IoLogoIonic } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { GrDocumentNotes } from "react-icons/gr";
import { GrTechnology } from "react-icons/gr";

const Sidebar = ({ onMenuClick }) => {
  const [services, setServices] = useState(false);
  const [categories, setCategories] = useState(false);
  const [color, setColor] = useState(false);
  const [about, setAbout] = useState(false);
  const [stats, setStats] = useState(false);
  const [overallStats, setOverallStats] = useState(false);
  const [team, setTeam] = useState(false);
  const [testimonial, setTestimonial] = useState(false);
  const [logo, setLogo] = useState(false);
  const [contact, setContact] = useState(false);
  const [technology, setTechnology] = useState(false);

  const handleService = () => {
    setServices(!services);
  };
  const handleCategories = () => {
    setCategories(!categories);
  };
  const handleColor = () => {
    setColor(!color);
  };
  const handleStats = () => {
    setStats(!stats);
  };
  const handleAbout = () => {
    setAbout(!about);
  };
  const handleOverallStats = () => {
    setOverallStats(!overallStats);
  };
  const handleTeam = () => {
    setTeam(!team);
  };
  const handleTestimonial = () => {
    setTestimonial(!testimonial);
  };
  const handleLogo = () => {
    setLogo(!logo);
  };
  const handleContact = () => {
    setContact(!contact);
  };
  const handleTechnology = () => {
    setTechnology(!technology);
  };

  return (
    <>
      <aside
        id="sidebar"
        className="sidebar bg-[#fff] lg:py-10 py-0 border-r-2 transition-all duration-1000 ease-in-out border-[#0000002c] min-h-screen overflow-y-auto w-[300px] lg:w-full"
      >
        <div className="close_icon flex justify-end pr-4 py-4 lg:hidden">
          <IoMdClose onClick={onMenuClick} className="text-2xl text-[#000]" />
        </div>

        <div className="sidbar_logo flex justify-center mb-4">
          <Link to="/development/dashboard" className="flex items-center">
            <img src={logoSrc} className={`max-w-[60px]`} alt="" />
            <span className="text-secondary text-3xl font-bold">GLOTECH</span>
          </Link>
        </div>
        <div className="sidebar_menus">
          <List>
            <ListItem
              disablePadding
              className="my-[.75rem] border-1 border-transparent border-b-[#ffffff24]"
            >
              <div className="px-[.75rem] w-full">
                <Link className="text-light_text" to={`/development/dashboard`}>
                  <ListItemButton>
                    <ListItemIcon className="-mr-4">
                      <IoMdHome className="text-light_text text-xl" />
                    </ListItemIcon>
                    Home
                  </ListItemButton>
                </Link>
              </div>
            </ListItem>

            {/* Services */}
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
                      to={`/development/dashboard/add-service`}
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
                      to={`/development/dashboard/view-service`}
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

            {/* Technology */}
            <div className="text-light_text border-1 border-transparent border-b-[#ffffff24] mb-[.75rem]">
              <div className="px-[.75rem]">
                <ListItemButton
                  onClick={handleTechnology}
                  className='text-light_text relative before:content-[""] before:block before:absolute before:bottom-0 before:left-0 before:bg-slate-50'
                >
                  <ListItemIcon className="-mr-4">
                    <GrTechnology className="text-light_text text-xl" />
                  </ListItemIcon>
                  <h6 className="text-light_text">Technology</h6>
                  {technology ? (
                    <HiOutlineChevronDown className="ms-auto" />
                  ) : (
                    <HiOutlineChevronRight className="ms-auto" />
                  )}
                </ListItemButton>
                <Collapse in={technology} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    <Link
                      className="text-light_text"
                      to={`/development/dashboard/add-technology`}
                    >
                      <ListItemButton sx={{ pl: 4 }}>
                        <ListItemIcon className="-mr-4">
                          <GoDot className="text-light_text" />
                        </ListItemIcon>
                        Add Technology
                      </ListItemButton>
                    </Link>
                    <Link
                      className="text-light_text"
                      to={`/development/dashboard/view-technology`}
                    >
                      <ListItemButton sx={{ pl: 4 }}>
                        <ListItemIcon className="-mr-4">
                          <GoDot className="text-light_text" />
                        </ListItemIcon>
                        View Technology
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
                      to={`/development/dashboard/add-category`}
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
                      to={`/development/dashboard/view-category`}
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

            {/* Theme */}
            <div className="text-light_text border-1 border-transparent border-b-[#ffffff24] mb-[.75rem]">
              <div className="px-[.75rem]">
                <ListItemButton
                  onClick={handleColor}
                  className='text-light_text relative before:content-[""] before:block before:absolute before:bottom-0 before:left-0 before:bg-slate-50'
                >
                  <ListItemIcon className="-mr-4">
                    <MdLightMode className="text-light_text text-xl" />
                  </ListItemIcon>
                  <h6 className="text-light_text">Theme</h6>
                  {categories ? (
                    <HiOutlineChevronDown className="ms-auto" />
                  ) : (
                    <HiOutlineChevronRight className="ms-auto" />
                  )}
                </ListItemButton>
                <Collapse in={color} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    <Link
                      className="text-light_text"
                      to={`/development/dashboard/view-color`}
                    >
                      <ListItemButton sx={{ pl: 4 }}>
                        <ListItemIcon className="-mr-4">
                          <GoDot className="text-light_text" />
                        </ListItemIcon>
                        View Color
                      </ListItemButton>
                    </Link>
                  </List>
                </Collapse>
              </div>
            </div>

            {/* About */}
            <div className="text-light_text border-1 border-transparent border-b-[#ffffff24] mb-[.75rem]">
              <div className="px-[.75rem]">
                <ListItemButton
                  onClick={handleAbout}
                  className='text-light_text relative before:content-[""] before:block before:absolute before:bottom-0 before:left-0 before:bg-slate-50'
                >
                  <ListItemIcon className="-mr-4">
                    <GrNotes className="text-light_text text-xl" />
                  </ListItemIcon>
                  <h6 className="text-light_text">About</h6>
                  {about ? (
                    <HiOutlineChevronDown className="ms-auto" />
                  ) : (
                    <HiOutlineChevronRight className="ms-auto" />
                  )}
                </ListItemButton>
                <Collapse in={about} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    {/* <Link
                      className="text-light_text"
                      to={`/dashboard/add-about`}
                    >
                      <ListItemButton sx={{ pl: 4 }}>
                        <ListItemIcon className="-mr-4">
                          <GoDot className="text-light_text" />
                        </ListItemIcon>
                        Add About
                      </ListItemButton>
                    </Link> */}
                    <Link
                      className="text-light_text"
                      to={`/development/dashboard/view-about`}
                    >
                      <ListItemButton sx={{ pl: 4 }}>
                        <ListItemIcon className="-mr-4">
                          <GoDot className="text-light_text" />
                        </ListItemIcon>
                        View About
                      </ListItemButton>
                    </Link>
                  </List>
                </Collapse>
              </div>
            </div>

            {/* Stats */}
            <div className="text-light_text border-1 border-transparent border-b-[#ffffff24] mb-[.75rem]">
              <div className="px-[.75rem]">
                <ListItemButton
                  onClick={handleStats}
                  className='text-light_text relative before:content-[""] before:block before:absolute before:bottom-0 before:left-0 before:bg-slate-50'
                >
                  <ListItemIcon className="-mr-4">
                    <IoIosStats className="text-light_text text-xl" />
                  </ListItemIcon>
                  <h6 className="text-light_text">Stats</h6>
                  {stats ? (
                    <HiOutlineChevronDown className="ms-auto" />
                  ) : (
                    <HiOutlineChevronRight className="ms-auto" />
                  )}
                </ListItemButton>
                <Collapse in={stats} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    <Link
                      className="text-light_text"
                      to={`/development/dashboard/add-stats`}
                    >
                      <ListItemButton sx={{ pl: 4 }}>
                        <ListItemIcon className="-mr-4">
                          <GoDot className="text-light_text" />
                        </ListItemIcon>
                        Add Stats
                      </ListItemButton>
                    </Link>
                    <Link
                      className="text-light_text"
                      to={`/development/dashboard/view-stats`}
                    >
                      <ListItemButton sx={{ pl: 4 }}>
                        <ListItemIcon className="-mr-4">
                          <GoDot className="text-light_text" />
                        </ListItemIcon>
                        View Stats
                      </ListItemButton>
                    </Link>
                  </List>
                </Collapse>
              </div>
            </div>

            {/* Overall Stats */}
            <div className="text-light_text border-1 border-transparent border-b-[#ffffff24] mb-[.75rem]">
              <div className="px-[.75rem]">
                <ListItemButton
                  onClick={handleOverallStats}
                  className='text-light_text relative before:content-[""] before:block before:absolute before:bottom-0 before:left-0 before:bg-slate-50'
                >
                  <ListItemIcon className="-mr-4">
                    <ImStatsBars2 className="text-light_text text-xl" />
                  </ListItemIcon>
                  <h6 className="text-light_text">About Page Stats</h6>
                  {overallStats ? (
                    <HiOutlineChevronDown className="ms-auto" />
                  ) : (
                    <HiOutlineChevronRight className="ms-auto" />
                  )}
                </ListItemButton>
                <Collapse in={overallStats} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    <Link
                      className="text-light_text"
                      to={`/development/dashboard/view-overall-stats`}
                    >
                      <ListItemButton sx={{ pl: 4 }}>
                        <ListItemIcon className="-mr-4">
                          <GoDot className="text-light_text" />
                        </ListItemIcon>
                        View Stats
                      </ListItemButton>
                    </Link>
                  </List>
                </Collapse>
              </div>
            </div>

            {/* Team */}
            <div className="text-light_text border-1 border-transparent border-b-[#ffffff24] mb-[.75rem]">
              <div className="px-[.75rem]">
                <ListItemButton
                  onClick={handleTeam}
                  className='text-light_text relative before:content-[""] before:block before:absolute before:bottom-0 before:left-0 before:bg-slate-50'
                >
                  <ListItemIcon className="-mr-4">
                    <FaUsers className="text-light_text text-xl" />
                  </ListItemIcon>
                  <h6 className="text-light_text">Team</h6>
                  {team ? (
                    <HiOutlineChevronDown className="ms-auto" />
                  ) : (
                    <HiOutlineChevronRight className="ms-auto" />
                  )}
                </ListItemButton>
                <Collapse in={team} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    <Link
                      className="text-light_text"
                      to={`/development/dashboard/add-team`}
                    >
                      <ListItemButton sx={{ pl: 4 }}>
                        <ListItemIcon className="-mr-4">
                          <GoDot className="text-light_text" />
                        </ListItemIcon>
                        Add Team
                      </ListItemButton>
                    </Link>
                    <Link
                      className="text-light_text"
                      to={`/development/dashboard/view-team`}
                    >
                      <ListItemButton sx={{ pl: 4 }}>
                        <ListItemIcon className="-mr-4">
                          <GoDot className="text-light_text" />
                        </ListItemIcon>
                        View Team
                      </ListItemButton>
                    </Link>
                  </List>
                </Collapse>
              </div>
            </div>

            {/* Testimonial */}
            <div className="text-light_text border-1 border-transparent border-b-[#ffffff24] mb-[.75rem]">
              <div className="px-[.75rem]">
                <ListItemButton
                  onClick={handleTestimonial}
                  className='text-light_text relative before:content-[""] before:block before:absolute before:bottom-0 before:left-0 before:bg-slate-50'
                >
                  <ListItemIcon className="-mr-4">
                    <MdOutlineRateReview className="text-light_text text-xl" />
                  </ListItemIcon>
                  <h6 className="text-light_text">Testimonial</h6>
                  {testimonial ? (
                    <HiOutlineChevronDown className="ms-auto" />
                  ) : (
                    <HiOutlineChevronRight className="ms-auto" />
                  )}
                </ListItemButton>
                <Collapse in={testimonial} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    <Link
                      className="text-light_text"
                      to={`/development/dashboard/add-testimonial`}
                    >
                      <ListItemButton sx={{ pl: 4 }}>
                        <ListItemIcon className="-mr-4">
                          <GoDot className="text-light_text" />
                        </ListItemIcon>
                        Add Testimonial
                      </ListItemButton>
                    </Link>
                    <Link
                      className="text-light_text"
                      to={`/development/dashboard/view-testimonial`}
                    >
                      <ListItemButton sx={{ pl: 4 }}>
                        <ListItemIcon className="-mr-4">
                          <GoDot className="text-light_text" />
                        </ListItemIcon>
                        View Testimonial
                      </ListItemButton>
                    </Link>
                  </List>
                </Collapse>
              </div>
            </div>

            {/* Logo */}
            <div className="text-light_text border-1 border-transparent border-b-[#ffffff24] mb-[.75rem]">
              <div className="px-[.75rem]">
                <ListItemButton
                  onClick={handleLogo}
                  className='text-light_text relative before:content-[""] before:block before:absolute before:bottom-0 before:left-0 before:bg-slate-50'
                >
                  <ListItemIcon className="-mr-4">
                    <IoLogoIonic className="text-light_text text-xl" />
                  </ListItemIcon>
                  <h6 className="text-light_text">Header</h6>
                  {logo ? (
                    <HiOutlineChevronDown className="ms-auto" />
                  ) : (
                    <HiOutlineChevronRight className="ms-auto" />
                  )}
                </ListItemButton>
                <Collapse in={logo} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    <Link
                      className="text-light_text"
                      to={`/development/dashboard/view-logo`}
                    >
                      <ListItemButton sx={{ pl: 4 }}>
                        <ListItemIcon className="-mr-4">
                          <GoDot className="text-light_text" />
                        </ListItemIcon>
                        View Logo
                      </ListItemButton>
                    </Link>
                  </List>
                </Collapse>
              </div>
            </div>

            {/* Contact */}
            <div className="text-light_text border-1 border-transparent border-b-[#ffffff24] mb-[.75rem]">
              <div className="px-[.75rem]">
                <ListItemButton
                  onClick={handleContact}
                  className='text-light_text relative before:content-[""] before:block before:absolute before:bottom-0 before:left-0 before:bg-slate-50'
                >
                  <ListItemIcon className="-mr-4">
                    <GrDocumentNotes className="text-light_text text-xl" />
                  </ListItemIcon>
                  <h6 className="text-light_text">Footer</h6>
                  {contact ? (
                    <HiOutlineChevronDown className="ms-auto" />
                  ) : (
                    <HiOutlineChevronRight className="ms-auto" />
                  )}
                </ListItemButton>
                <Collapse in={contact} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    <Link
                      className="text-light_text"
                      to={`/development/dashboard/view-contact`}
                    >
                      <ListItemButton sx={{ pl: 4 }}>
                        <ListItemIcon className="-mr-4">
                          <GoDot className="text-light_text" />
                        </ListItemIcon>
                        View Contact
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
