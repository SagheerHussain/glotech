import React from "react";
import { FiSettings } from "react-icons/fi";
import { useTranslation } from "react-i18next";

const Features = () => {

    const { t } = useTranslation();

    const features = t("features", { returnObjects: true });

  return (
    <section id="features" className="py-20">
      <div className="container">
        <div className="grid grid-cols-2 gap-x-6">
          <div className="feature-content">
            <FiSettings color="#8c6238" size={40} />
            <h1 className="text-primary text-4xl font-bold pt-12 pb-3">
              {features[0].what_we_do}
            </h1>
            <p className="text-black font-medium mb-12 mt-3 max-w-4xl mx-auto leading-loose">
              {features[0].requirements_we_fulfill}
            </p>
          </div>
          <div className="feature-content">
            <FiSettings color="#8c6238" size={40} />
            <h1 className="text-primary text-4xl font-bold pt-12 pb-3">
              {features[1].what_we_do}
            </h1>
            <p className="text-black font-medium mb-12 mt-3 max-w-4xl mx-auto leading-loose">
              {features[1].requirements_we_fulfill}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
