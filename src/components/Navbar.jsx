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
          <div className="flex flex-col space-y-4 text-sm">
            {t("menu.Services.subMenus", { returnObjects: true }).map(
              (submenu, index) => (
                <HoveredLink key={index} to="#">
                  {submenu}
                </HoveredLink>
              )
            )}
          </div>
        </MenuItem>

        <MenuItem
          setActive={setActive}
          active={active}
          item={t("menu.Company.name")}
        >
          <div className="text-sm grid grid-cols-2 gap-10 p-4">
            <ProductItem
              title="Algochurn"
              to="https://algochurn.com"
              src="https://assets.aceternity.com/demos/algochurn.webp"
              description="Prepare for tech interviews like never before."
            />
            <ProductItem
              title="Tailwind Master Kit"
              to="https://tailwindmasterkit.com"
              src="https://assets.aceternity.com/demos/tailwindmasterkit.webp"
              description="Production ready Tailwind css components for your next project"
            />
            <ProductItem
              title="Moonbeam"
              to="https://gomoonbeam.com"
              src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.51.31%E2%80%AFPM.png"
              description="Never write from scratch again. Go from idea to blog in minutes."
            />
            <ProductItem
              title="Rogue"
              to="https://userogue.com"
              src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.47.07%E2%80%AFPM.png"
              description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
            />
          </div>
        </MenuItem>

        <HoveredLink>{t("menu.Pricing.name")}</HoveredLink>

        <HoveredLink>{t("menu.Contact.name")}</HoveredLink>
      </Menu>
    </div>
  );
}
