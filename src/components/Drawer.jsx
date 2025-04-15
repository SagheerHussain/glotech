import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { IoClose } from "react-icons/io5";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import { MdOutlineExpandMore } from "react-icons/md";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { HiMenuAlt3 } from "react-icons/hi";
import LanguageSwitcher from "./LanguageSwitcher";

export default function DrawerMenus() {
  const { t } = useTranslation();
  const { i18n } = useTranslation();

  const services = t("menu.Services.subMenus", { returnObjects: true });
  const menus = t("menu", { returnObjects: true });

  // StateVariables
  const [open, setOpen] = useState(false);
  const [isArabic, setIsArabic] = useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  useEffect(() => {
    const arabic = i18n.language === "ar";
    setIsArabic(arabic);
  }, [i18n.language, menus]);

  const DrawerList = (
    <Box
      sx={{
        width: 250,
        height: "100vh",
        padding: ".5rem",
        backgroundColor: "#222",
      }}
      role="presentation"
    >
      <div
        className={`${
          isArabic ? "text-start justify-start" : "text-end justify-end"
        } flex  m-2`}
      >
        <IoClose color={`#fff`} size={24} onClick={toggleDrawer(false)} />
      </div>
      <List>
        {[menus.Home, menus.About, menus.Services, menus.Contact]?.map((menu, index) => {
          return (
            <ListItem key={menu.name} disablePadding>
              <ListItemButton>
                {index === 2 ? (
                  <Accordion sx={{ direction: "ltr", width: "100%" }}>
                    <AccordionSummary
                      expandIcon={<MdOutlineExpandMore />}
                      aria-controls="panel1-content"
                      id="panel1-header"
                    >
                      <Typography component="span">{menu.name}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      {services.map((service) => (
                        <Link
                          to={`/services/${service.category}`}
                          className="pb-4 text-text_light hover:text-white transition-all duration-300 linear block"
                        >
                          {service.title}
                        </Link>
                      ))}
                    </AccordionDetails>
                  </Accordion>
                ) : (
                  <Link to={menu.slug}>
                    <ListItemText
                      primary={menu.name}
                      className={`text-text_light`}
                    />
                  </Link>
                )}
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
      <Divider className={`bg-[#363d4c]`} />
      <List>
        <LanguageSwitcher />
      </List>
    </Box>
  );

  return (
    <div>
      <Button onClick={toggleDrawer(true)} className="text-dark">
        <HiMenuAlt3 size={32} color={`#000`} />
      </Button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}
