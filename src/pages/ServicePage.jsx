import React, { useEffect, useState } from "react";
import {
  Banner,
  Benefits,
  Counter,
  Footer,
  NavigationLayout,
} from "../components/index";
import { TextHoverEffect } from "../components/ui/TextHoverEffect";
import { Spotlight } from "../components/ui/SpotlightEffect";
import { useLocation, useParams } from "react-router-dom";
import { ServiceDetail } from "../components/services components/ServiceDetail";
import { useTranslation } from "react-i18next";
import InfiniteMovingBrands from "../components/services components/InfiniteMovingBrands";
import Technologies from "../components/services components/Technologies";
import { getStatsByCategory } from "../services/stats";
import { getCategoryBySlug } from "../services/categories";

const ServicePage = () => {
  const { t, i18n } = useTranslation();

  const { service } = useParams();

  const formattedParams = service
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  const [stats, setStats] = useState([]);
  const [category, setCategory] = useState("");

  useEffect(() => {
    const fetchCategory = async () => {
      const { data } = await getCategoryBySlug(service);
      setCategory(data._id);
    };
    fetchCategory();
  }, [service]);

  useEffect(() => {
    const fetchStats = async () => {
      const { data } = await getStatsByCategory(category);
      console.log("seperate stats", data);
      setStats(data);
    };
    fetchStats();
  }, [category, service]);

  return (
    <>
      <header id="header" className="h-[30vh] sm:h-[40vh] bg-[#111]">
        <NavigationLayout />
        <div className="h-[30vh] sm:h-[40vh] pt-[60px] sm:pt-[120px] w-full rounded-md flex md:items-center md:justify-center bg-[#ddd] antialiased bg-grid-white/[0.02] relative overflow-hidden">
          <Spotlight />
          <div className="container">
            <div className="flex items-center justify-center flex-col h-full w-full">
              <TextHoverEffect
                className={`text-[2rem] sm:text-[2.5rem] ${
                  i18n.language === "fr"
                    ? "md:text-[.9rem]"
                    : "md:text-[1.2rem]"
                }`}
                text={formattedParams}
                key={i18n.language}
              />
            </div>
          </div>
        </div>
      </header>
      <main id="main">
        {/* <div className="bg-[#aaa]">
        <InfiniteMovingBrands />
        </div> */}
        <ServiceDetail params={service} />
        <Counter stats={stats} />
        <Technologies params={service} formattedParams={formattedParams} />
        <Banner
          title={t("home-page-components.banner.title")}
          description={t("home-page-components.banner.description")}
        />
      </main>
      <Footer />
    </>
  );
};

export default ServicePage;
