import React from "react";
import StickyScroll from "../ui/StickyScrollReveal";
import why_choose_4 from "/Images/why choose/why_choose (4).png";
import why_choose_1 from "/Images/why choose/why_choose (1).png";
import why_choose_2 from "/Images/why choose/why_choose (2).png";
import why_choose_3 from "/Images/why choose/why_choose (3).png";
import habibi from "/Images/why choose/habibi.png";
import bulb from "/Images/why choose/bulb.png";
import headphone from "/Images/why choose/headphone.png";
import notes from "/Images/why choose/notes.png";
import { useTranslation } from "react-i18next";

const WhyChoose = () => {
  const { t } = useTranslation();
  const services = t("home-page-components.why-choose.service", { returnObjects: true });

  console.log("services", services)

  const icons = [habibi, bulb, headphone, notes];
  const images = [why_choose_4, why_choose_1, why_choose_2, why_choose_3];

  const content = services.map((service, index) => ({
    title: service.title,
    icon: (
      <div className="flex items-center justify-center text-white">
        <img
          src={icons[index]}
          className="h-[50px] w-[50px] object-cover"
          alt="Service Icon"
        />
      </div>
    ),
    description: service.description,
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <img
          src={images[index]}
          className="h-full w-full object-cover"
          alt="Service Visual"
        />
      </div>
    ),
  }));

  return (
    <>
      <section id="why_choose_glotech" className="bg-theme py-20 ">
        <div className="container">
          <div className="pb-20">
            <h2 className="text-white text-5xl font-bold text-center">
              Why Choose GloTech-KSA
            </h2>
            <p className="text-text_light text-center pt-6">
              At GloTech-KSA, we blend deep regional expertise with cutting-edge
              innovation to deliver tech solutions that truly matter. Our
              customized strategies, local market understanding, and dedicated
              support empower businesses to grow smarter, faster, and
              stronger—making us the trusted digital partner for visionary
              success in Saudi Arabia and beyond.
            </p>
          </div>

          <StickyScroll content={content} />
        </div>
      </section>
    </>
  );
};

export default WhyChoose;
