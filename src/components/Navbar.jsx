import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/NavbarMenu";
import { cn } from "../lib/utils";

export function Navbar({ className }) {
  const [active, setActive] = useState(null);

  const { t } = useTranslation();

  return (
    <div className={cn("inset-x-0 max-w-4xl mx-auto", className)}>
      <Menu setActive={setActive}>
        <HoveredLink>{t("menu.Home.name")}</HoveredLink>
        <HoveredLink>{t("menu.About.name")}</HoveredLink>

        <MenuItem
          setActive={setActive}
          active={active}
          item={t("menu.Services.name")}
        >
          <div className="text-sm grid grid-cols-2 gap-10 p-4">
            <ProductItem
              title="Web Development"
              to="/"
              src="https://thumbs.dreamstime.com/b/web-development-coding-programming-internet-technology-business-concept-web-development-coding-programming-internet-technology-121903546.jpg"
              description="Prepare for tech interviews like never before."
            />
            <ProductItem
              title="Mobile App Development"
              to="/"
              src="https://img.freepik.com/free-vector/app-development-banner_33099-1720.jpg"
              description="Production ready Tailwind css components for your next project"
            />
            <ProductItem
              title="Data Analytics"
              to="/"
              src="https://i.ytimg.com/vi/CvN2fD604Gk/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCJBcrzWmQYuSkeFJoHoqrbw-sLkg"
              description="Never write from scratch again. Go from idea to blog in minutes."
            />
            <ProductItem
              title="HR Management"
              to="/"
              src="https://c8.alamy.com/comp/TDG9FJ/human-resource-management-hr-team-building-and-recruitment-concept-on-blurred-background-TDG9FJ.jpg"
              description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
            />
            <ProductItem
              title="Asset Management"
              to="/"
              src="https://media.licdn.com/dms/image/v2/D4D12AQHnaA1r5t42Xg/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1703169946255?e=2147483647&v=beta&t=M1ZNg7UH3HHpH57VPKdPwqSeMjhTBgonGPq5t6g02HA"
              description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
            />
            <ProductItem
              title="Project Management"
              to="/"
              src="https://media.licdn.com/dms/image/v2/D4D12AQHAzpZZDBIkfA/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1710486640359?e=2147483647&v=beta&t=9iRUJ8yBIVaBKctslR9DBFXaD7R21PBHugsefN3ZcoM"
              description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
            />
          </div>
        </MenuItem>

        <HoveredLink>{t("menu.Contact.name")}</HoveredLink>
      </Menu>
    </div>
  );
}
