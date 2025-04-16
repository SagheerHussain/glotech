import React from "react";
import {
  Info,
  NavigationLayout,
  Counter,
  GlotechChoosen,
  Team,
  Testimonial,
  Footer,
  Banner,
  ValueAddition,
} from "../components/index";
import { Spotlight } from "../components/ui/SpotlightEffect";
import { TextHoverEffect } from "../components/ui/TextHoverEffect";
import { useTranslation } from "react-i18next";

const AboutPage = () => {
  const { t, i18n } = useTranslation();
  
  const stats = [
    { label: t("counter.projects"), value: 10 },
    { label: t("counter.years"), value: 3 },
    { label: t("counter.members"), value: 5 },
    { label: t("counter.clients"), value: 9 },
  ];

  return (
    <>
      <header id="header" className="h-[50vh] bg-[#111]">
        <NavigationLayout />
        <div className="h-[50vh] pt-[150px] w-full rounded-md flex md:items-center md:justify-center bg-[#ddd] antialiased bg-grid-white/[0.02] relative overflow-hidden">
          <Spotlight />
          <div className="container">
            <div className="flex items-center justify-center flex-col h-full w-full">
              <TextHoverEffect key={i18n.language} text={t("text.about")} />
            </div>
          </div>
        </div>
      </header>
      <main id="main">
        <Info />
        <Counter stats={stats} />
        <GlotechChoosen />
        <Team />
        <ValueAddition />
        <Testimonial />
        {/* <ValueAddition />  */}
        <Banner
          title={t("home-page-components.banner.title")}
          description={t("home-page-components.banner.description")}
        />
      </main>
      <Footer />
    </>
  );
};

export default AboutPage;
