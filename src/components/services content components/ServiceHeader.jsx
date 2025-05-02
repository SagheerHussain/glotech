import React from "react";
import { NavigationLayout } from "../index";
import { useTranslation } from "react-i18next";
import banner from "/Images/banner.png";

const ServiceHeader = () => {

  const { t } = useTranslation();

  return (
    <>
      <header
        id="header"
        style={{ background: `url(${banner})` }}
        className="max-w-full h-[60vh]"
      >
        <NavigationLayout />
        <div className="container">
          <div className="header-content h-[calc(65vh)] flex items-start flex-col justify-center">
            <div className="flex">
              <h1 className="text-xl font-semibold pr-[60px]">{t("service_content_intro.home_navigation")} </h1>
              <span className="text-xl font-semibold relative before:content-[''] before:bg-primary before:w-2 before:h-2 before:rounded-full before:absolute before:top-1/2 before:-translate-x-[30px] before:-translate-y-1/2 before:left-0">
                {t("service_content_intro.service_navigation")}
              </span>
            </div>
            <h1 className="text-6xl font-bold py-6">{t("service_content_intro.title")}</h1>
            <p className="text-xl font-semibold">{t("service_content_intro.headline")}</p>
          </div>
        </div>
      </header>
    </>
  );
};

export default ServiceHeader;
