import React from "react";
import {
  FaMobileAlt,
  FaGlobe,
  FaUserCog,
  FaTags,
  FaBrain,
  FaShieldAlt,
  FaBullhorn,
  FaMoneyCheckAlt,
  FaTasks,
} from "react-icons/fa";
import { Trans, useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const FeatureServices = () => {
  const { t, i18n } = useTranslation();

  const features_services = t("features_service", { returnObjects: true });

  const icons = [
    <FaMobileAlt size={40} className="text-primary" />,
    <FaGlobe size={48} className="text-primary" />,
    <FaUserCog size={48} className="text-primary" />,
    <FaTags size={48} className="text-primary" />,
    <FaBrain size={48} className="text-primary" />,
    <FaShieldAlt size={48} className="text-primary" />,
    <FaBullhorn size={48} className="text-primary" />,
    <FaMoneyCheckAlt size={48} className="text-primary" />,
    <FaTasks size={48} className="text-primary" />,
  ];

  const services = features_services.map((service, index) => ({
    ...service,
    icon: icons[index],
  }));

  return (
    <>
      <section id="services" className="py-20">
        <div className="container">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-black mb-8" style={{ textAlign: i18n.language === "ar" ? "right" : "left" }}>
            <Trans
              i18nKey="feature_service_title"
              components={{ 1: <span className="text-primary font-bold" /> }}
            />
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:p-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="rounded-3xl shadow hover:shadow-md transition-all duration-300 group hover:bg-primary p-8"
              >
                <div
                  style={{
                    marginLeft: i18n.language === "ar" ? "auto" : "0",
                  }}
                  className="flex items-center justify-center w-12 h-12 bg-white p-2 rounded-full shadow mb-4"
                >
                  {service.icon}
                </div>
                <h3
                  style={{
                    textAlign: i18n.language === "ar" ? "right" : "left",
                  }}
                  className="text-3xl py-6 font-bold text-primary group-hover:text-white"
                >
                  {service.title}
                </h3>
                <p
                  style={{
                    textAlign: i18n.language === "ar" ? "right" : "left",
                  }}
                  className="text-zinc-600 mb-4 group-hover:text-white"
                >
                  {service.description}
                </p>
                <div
                  style={{
                    textAlign: i18n.language === "ar" ? "right" : "left",
                  }}
                >
                  <Link
                    to={service.href}
                    className="text-zinc-600 underline group-hover:text-white"
                  >
                    {i18n.language === "ar" ? "المزيد" : "Learn More"}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default FeatureServices;
