import React from "react";
import {
  ServiceHeader,
  Features,
  FeatureServices,
  Testimonial,
  Banner,
  Footer,
  Counter,
} from "../components/index";
import { useTranslation } from "react-i18next";

const ServiceContentPage = () => {
  const { t } = useTranslation();

  const stats = [
    { label: t("counter.projects"), value: 10 },
    { label: t("counter.years"), value: 3 },
    { label: t("counter.members"), value: 5 },
    { label: t("counter.clients"), value: 9 },
  ];

  return (
    <>
      <div className="App">
        <ServiceHeader />
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
