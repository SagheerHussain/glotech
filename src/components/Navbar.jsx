import React, { useEffect, useState } from "react";
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
import { getCategories } from "../services/categories";

export function Navbar({ className }) {
  const [active, setActive] = useState(null);
  const [categories, setCategories] = useState([]);

  const { t, i18n } = useTranslation();

  // const services = t("menu.Services.subMenus", { returnObjects: true });

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

  // Get Categories
  const fetchCategories = async () => {
    try {
      const response = await getCategories();
      console.log("categories", response);
      if (response.success) {
        setCategories(response.data);
      }
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <div className={cn("inset-x-0 max-w-4xl mx-auto", className)}>
      <Menu setActive={setActive}>
        <HoveredLink to={`/development`}>{t("menu.Home.name")}</HoveredLink>

        <HoveredLink to={`/development/about`}>{t("menu.About.name")}</HoveredLink>

        <Link to={"/development/services"} className="">
          <MenuItem
            setActive={setActive}
            active={active}
            item={t("menu.Services.name")}
            className="bg-white"
          >
            <div className="text-sm grid lg:grid-cols-2 2xl:grid-cols-3 gap-10 p-4 max-h-[80vh] overflow-y-auto bg-[#eee]">
              {categories?.map((category, index) => (
                <ProductItem
                  key={index}
                  title={i18n.language === "ar" ? category?.name?.ar : i18n.language === "en" ? category?.name?.en : category?.name?.fr}
                  to={`/development/services/${category?.slug}`}
                  src={category?.image}
                  description={i18n.language === "ar" ? category?.description?.ar : i18n.language === "en" ? category?.description?.en : category?.description?.fr}
                />
              ))}
            </div>
          </MenuItem>
        </Link>

        <HoveredLink to={'/development/contact'}>{t("menu.Contact.name")}</HoveredLink>
      </Menu>
    </div>
  );
}
