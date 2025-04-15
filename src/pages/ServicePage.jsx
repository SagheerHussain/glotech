import React, { useEffect, useState } from "react";
import { Benefits, Counter, Footer, NavigationLayout } from "../components/index";
import { TextHoverEffect } from "../components/ui/TextHoverEffect";
import { Spotlight } from "../components/ui/SpotlightEffect";
import { useParams } from "react-router-dom";
import { ServiceDetail } from "../components/services components/ServiceDetail";
import { useTranslation } from "react-i18next";
import InfiniteMovingBrands from "../components/services components/InfiniteMovingBrands";
import Technologies from "../components/services components/Technologies";

const ServicePage = () => {
  const { t } = useTranslation();
  const { i18n } = useTranslation();

  const [text, setText] = useState("");
  const [stats, setStats] = useState([]);
  const [filteredService, setFilteredService] = useState({});

  const { service } = useParams();

  useEffect(() => {
    const title = service
      .split("-")
      .map((word) => word.toUpperCase())
      .join(" ");
    setText(title);
  }, [service]);

  const services = t("services", {
    returnObjects: true,
  });

  useEffect(() => {
    const featuredServices = services.filter((s) => s.category === service);
    const stats = featuredServices[0]?.stats;
    setStats(stats);
    setFilteredService(featuredServices[0]);
  }, [service, i18n.language]);

  return (
    <>
      <header id="header" className="h-[30vh] sm:h-[40vh] bg-[#111]">
        <NavigationLayout />
        <div className="h-[30vh] sm:h-[40vh] pt-[60px] sm:pt-[120px] w-full rounded-md flex md:items-center md:justify-center bg-[#ddd] antialiased bg-grid-white/[0.02] relative overflow-hidden">
          <Spotlight />
          <div className="container">
            <div className="flex items-center justify-center flex-col h-full w-full">
              <TextHoverEffect
                className="text-[2rem] sm:text-[2.5rem] md:text-[1.2rem]"
                text={text}
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
        <Technologies params={service} filteredService={filteredService} />
      </main>
      <Footer />
    </>
  );
};

export default ServicePage;
