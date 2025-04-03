import React from "react";
import {
  Header,
  About,
  TechWorkWith,
  Services,
  Commitment,
  GlotechChoosen,
  Testimonial,
  Banner,
  Footer,
} from "../components";
import { useTranslation } from "react-i18next";

const HomePage = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="App">
        <Header />
        <main id="main">
          <TechWorkWith />
          <About />
          <Services />
          <Commitment />
          <GlotechChoosen />
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

export default HomePage;
