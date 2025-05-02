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
  ServiceHeader,
} from "../components/index";
import { useTranslation } from "react-i18next";

const ServiceContent = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="App">
        <ServiceHeader />
      </div>
    </>
  );
};

export default ServiceContent;
