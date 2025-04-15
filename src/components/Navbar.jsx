import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/NavbarMenu";
import { cn } from "../lib/utils";
import { Link } from "react-router-dom";
import serviceOne from "/Images/menus/service (1).webp";
import serviceTwo from "/Images/menus/service (2).webp";
import serviceThree from "/Images/menus/service (3).jpg";
import serviceFour from "/Images/menus/service (4).jpg";
import serviceFive from "/Images/menus/service (5).jpg";
import serviceSix from "/Images/menus/service (6).jpg";
import serviceSeven from "/Images/menus/service (7).jpg";
import serviceEight from "/Images/menus/service (8).webp";
import serviceNine from "/Images/menus/service (9).jpg";
import serviceTen from "/Images/menus/service (10).jpg";
import serviceEleven from "/Images/menus/service (11).webp";
import serviceTwelve from "/Images/menus/service (12).webp";

export function Navbar({ className }) {
  const [active, setActive] = useState(null);

  const { t } = useTranslation();

  const services = t("menu.Services.subMenus", { returnObjects: true });

  const src = [
    serviceOne,
    serviceTwo,
    serviceThree,
    serviceFour,
    serviceFive,
    serviceSix,
    serviceSeven,
    serviceEight,
    serviceNine,
    serviceTen,
    serviceEleven,
    serviceTwelve,
  ];

  return (
    <div className={cn("inset-x-0 max-w-4xl mx-auto", className)}>
      <Menu setActive={setActive}>
        <HoveredLink to={`/`}>{t("menu.Home.name")}</HoveredLink>

        <HoveredLink to={`/about`}>{t("menu.About.name")}</HoveredLink>

        <Link to={""} className="">
          <MenuItem
            setActive={setActive}
            active={active}
            item={t("menu.Services.name")}
            className="bg-white"
          >
            <div className="text-sm grid lg:grid-cols-2 2xl:grid-cols-3 gap-10 p-4 max-h-[80vh] overflow-y-auto bg-[#eee]">
              {services.map((service, index) => (
                <ProductItem
                  key={index}
                  title={service.title}
                  to={`/services/${service.category}`}
                  src={src[index]}
                  description={service.description}
                />
              ))}
            </div>
          </MenuItem>
        </Link>

        <HoveredLink to={'/contact'}>{t("menu.Contact.name")}</HoveredLink>
      </Menu>
    </div>
  );
}
