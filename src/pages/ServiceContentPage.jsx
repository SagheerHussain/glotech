import React from "react";
import {
  ServiceHeader,
  Features,
  FeatureServices,
  Testimonial,
  Banner,
  Footer,
  Counter,
<<<<<<< HEAD
  NavigationLayout,
} from "../components/index";
import { Spotlight } from "../components/ui/SpotlightEffect";
import { TextHoverEffect } from "../components/ui/TextHoverEffect";
import { useTranslation } from "react-i18next";

const ServiceContentPage = () => {
  const { t, i18n } = useTranslation();
=======
} from "../components/index";
import { useTranslation } from "react-i18next";

const ServiceContentPage = () => {
  const { t } = useTranslation();
>>>>>>> b82fcac51eacd2e91ae2d74e3c0c5227f28b01d6

  const stats = [
    { label: t("counter.projects"), value: 10 },
    { label: t("counter.years"), value: 3 },
    { label: t("counter.members"), value: 5 },
    { label: t("counter.clients"), value: 9 },
  ];

  return (
    <>
      <div className="App">
<<<<<<< HEAD
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
=======
        <ServiceHeader />
>>>>>>> b82fcac51eacd2e91ae2d74e3c0c5227f28b01d6
        <main id="main">
          <Features />
          <FeatureServices />
          <Counter stats={stats} />
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
