import React from "react";
import {
  ServiceHeader,
  Features,
  FeatureServices,
  Testimonial,
  Banner,
  Footer,
} from "../components/index";
import { useTranslation } from "react-i18next";

const ServiceContentPage = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="App">
        <ServiceHeader />
        <main id="main">
          <Features />
          <FeatureServices />
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
