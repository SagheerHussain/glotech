import React from "react";
import { useTranslation } from "react-i18next";

const Benefits = ({ services }) => {
  console.log("services inside", services);

  return (
    <section id="benefits" className="py-20">
      <div className="container">
        <div className="text-center">
          <h1 className="text-white text-3xl font-bold mb-2">
            {services?.benefits?.title}
          </h1>
          <p className="text-text_light text-sm md:text-base lg:text-lg font-normal mb-12 mt-3 max-w-4xl mx-auto">
            {services?.benefits?.description}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {services?.benefits?.benefits_features?.map((benefit, index) => (
            <div key={index} className="benefit_card bg-[#222] p-8">
              <div className="benefit_card_count text-text_light text-3xl font-semibold">
                0{index + 1}
              </div>
              <div className="benefit_card_title">
                <h1 className="text-white text-2xl py-4 font-medium">{benefit?.title}</h1>
              </div>
              <div className="benefit_card_description">
                <p className="text-white text-sm">{benefit?.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
