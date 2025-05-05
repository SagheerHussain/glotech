import React, { useEffect, useState } from "react";
import {
  ServiceHeader,
  Features,
  FeatureServices,
  Testimonial,
  Banner,
  Footer,
  Counter,
  NavigationLayout,
} from "../components/index";
import { Spotlight } from "../components/ui/SpotlightEffect";
import { TextHoverEffect } from "../components/ui/TextHoverEffect";
import { useTranslation } from "react-i18next";
import { getOverallStats } from "../services/overallStats";

const ServiceContentPage = () => {
  const { t, i18n } = useTranslation();

  const [overallStats, setOverallStats] = useState([]);

  // Get Overall Stats
  const getStatsData = async () => {
    const { data } = await getOverallStats();
    setOverallStats(data[0]);
  };

  useEffect(() => {
    getStatsData();
  }, []);

  return (
    <>
      <div className="App">
        <header id="header" className="h-[50vh] bg-[#111]">
          <NavigationLayout />
          <div className="h-[50vh] pt-[150px] w-full rounded-md flex md:items-center md:justify-center bg-[#ddd] antialiased bg-grid-white/[0.02] relative overflow-hidden">
            <Spotlight />
            <div className="container">
              <div className="flex items-center justify-center flex-col h-full w-full">
                <TextHoverEffect
                  className="text-[2rem] uppercase"
                  key={i18n.language}
                  text={t("text.service")}
                />
              </div>
            </div>
          </div>
        </header>
        <main id="main">
          <Features />
          <FeatureServices />
          <Counter stats={overallStats} />
          <Testimonial />
          <Banner
            title={t("home-page-components.banner.title")}
            description={t("home-page-components.banner.description")}
          />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default ServiceContentPage;
