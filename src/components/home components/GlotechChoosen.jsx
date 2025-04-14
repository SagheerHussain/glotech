import React from "react";
import { Tabs } from "../ui/tabs";
import TabContent from "../TabContent";
import whyChooseOne from "/Images/why choose/why_choose (1).jpg";
import whyChooseTwo from "/Images/why choose/why_choose (2).jpg";
import whyChooseThree from "/Images/why choose/why_choose (3).jpg";
import whyChooseFour from "/Images/why choose/why_choose (4).jpg";
import { Trans, useTranslation } from "react-i18next";

export function GlotechChoosen() {
  const { t } = useTranslation();

  const services = t("home-page-components.why-choose.service", {
    returnObjects: true,
  });

  const images = [whyChooseOne, whyChooseTwo, whyChooseThree, whyChooseFour];

  const tabs = services.map((service, index) => ({
    title: service.title,
    value: service?.title
      ?.split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(""),
    content: (
      <TabContent
        title={service.title}
        src={images[index]}
        description={service.description}
        features={service.features}
      />
    ),
  }));

  return (
    <section id="glotech-choosen" className="pt-20 pb-56 bg-white">
      <div className="container">
        <div className="glotech_choosen_intro mb-20">
          <h3 className="flex justify-center mb-4">
            <span className="text-white bg-primary inline-block px-8 py-2 rounded-[25px]">
              {t("home-page-components.why_choose_intro.subTitle")}
            </span>
          </h3>
          <h2 className="text-dark text-center text-4xl pb-3 font-bold leading-snug">
            <Trans
              i18nKey="home-page-components.why_choose_intro.title"
              components={{
                1: (
                  <span className="bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text" />
                )
              }}
            />
          </h2>
          <p className="text-dark text-lg text-center">
            {t("home-page-components.why_choose_intro.description")}
          </p>
        </div>

        <div className="h-[80rem] md:h-[60rem] lg:h-[50rem] xl:h-[45rem] [perspective:1000px] relative flex flex-col mx-auto w-full items-start justify-start">
          <Tabs tabs={tabs} />
        </div>
      </div>
    </section>
  );
}
