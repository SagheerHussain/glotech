import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/NavbarMenu";
import { cn } from "../lib/utils";
import { Link } from "react-router-dom";

export function Navbar({ className }) {
  const [active, setActive] = useState(null);

  const { t } = useTranslation();

  const services = t("menu.Services.subMenus", { returnObjects: true });

  console.log("services navbar", services);

  const src = [
    "https://thumbs.dreamstime.com/b/web-development-coding-programming-internet-technology-business-concept-web-development-coding-programming-internet-technology-121903546.jpg",
    "https://img.freepik.com/free-vector/app-development-banner_33099-1720.jpg",
    "https://i.ytimg.com/vi/CvN2fD604Gk/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCJBcrzWmQYuSkeFJoHoqrbw-sLkg",
    "https://c8.alamy.com/comp/TDG9FJ/human-resource-management-hr-team-building-and-recruitment-concept-on-blurred-background-TDG9FJ.jpg",
    "https://media.licdn.com/dms/image/v2/D4D12AQHnaA1r5t42Xg/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1703169946255?e=2147483647&v=beta&t=M1ZNg7UH3HHpH57VPKdPwqSeMjhTBgonGPq5t6g02HA",
    "https://media.licdn.com/dms/image/v2/D4D12AQHAzpZZDBIkfA/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1710486640359?e=2147483647&v=beta&t=9iRUJ8yBIVaBKctslR9DBFXaD7R21PBHugsefN3ZcoM",
  ];

  return (
    <div className={cn("inset-x-0 max-w-4xl mx-auto", className)}>
      <Menu setActive={setActive}>
        <HoveredLink to={`/`}>{t("menu.Home.name")}</HoveredLink>

        <HoveredLink to={`/about`}>{t("menu.About.name")}</HoveredLink>

        <Link to={""}>
          <MenuItem
            setActive={setActive}
            active={active}
            item={t("menu.Services.name")}
          >
            <div className="text-sm grid grid-cols-2 gap-10 p-4">
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
