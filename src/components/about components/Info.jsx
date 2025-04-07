import React from "react";
import { ImCheckmark } from "react-icons/im";
import { FaEye } from "react-icons/fa";
import { FaMedal } from "react-icons/fa6";
import { FiTarget } from "react-icons/fi";
import { useTranslation } from "react-i18next";

const Info = () => {
  const { t } = useTranslation();

  const serviceTagging = t("about-page-components.service_tagging", {
    returnObjects: true,
  });

  return (
    <section
      id="info"
      className="bg-[#111] py-20 z-[2] relative"
      style={{
        background: `url('https://img.freepik.com/free-photo/black-background-geometric-gradient-design_677411-2882.jpg') no-repeat center center/cover`,
      }}
    >
      <div className="overlay absolute top-0 left-0 w-full h-full bg-[#111111e4] -z-[1]"></div>
      <div className="container">
        <div className="info_content flex md:flex-row flex-col gap-4 md:items-center">
          <div className="info_content_card md:w-[45%]">
            <h1 className="text-white text-[2.5rem] font-bold leading-snug">
              {t("about-page-components.info.title")}
            </h1>
            <p className="text-text_light text-sm pt-4 leading-loose">
              {t("about-page-components.info.description")}
            </p>
            <div className="service_tagging pt-8">
              {serviceTagging?.map((service) => (
                <div className="tagging flex items-center pb-4">
                  <ImCheckmark size={16} color="#3059f5" />
                  <h3 className="text-text_light ps-3">
                    {service}
                  </h3>
                </div>
              ))}
            </div>
          </div>
          <div className="info_content_img md:w-[55%]">
            <img
              src="https://wpdemo.archiwp.com/engitech/wp-content/uploads/sites/4/2020/02/image1-home1.png"
              className="w-full"
              alt=""
            />
          </div>
        </div>

        <div className="vision md:flex mt-32">
          <div className="skynet_mission px-4 text-center md:w-[33.3%] md:mb-0 mb-4">
            <FaMedal size={24} color="#3059f5" className="mx-auto block mb-4" />
            <h3 className="text-3xl font-bold mb-3 text-[#fff]">
              {t("about-page-components.mission.title")}
            </h3>
            <p className="text-sm text-text_light">
              {t("about-page-components.mission.description")}
            </p>
          </div>
          <div className="skynet_mission px-4 text-center md:w-[33.3%] md:mb-0 mb-4">
            <FaEye size={24} color="#3059f5" className="mx-auto block mb-4" />
            <h3 className="text-3xl font-bold mb-3 text-[#fff]">
              {t("about-page-components.vision.title")}
            </h3>
            <p className="text-sm text-text_light">
              {t("about-page-components.vision.description")}
            </p>
          </div>
          <div className="skynet_mission px-4 text-center md:w-[33.3%] md:mb-0 mb-4">
            <FiTarget
              size={24}
              color="#3059f5"
              className="mx-auto block mb-4"
            />
            <h3 className="text-3xl font-bold mb-3 text-[#fff]">
              {t("about-page-components.audience.title")}
            </h3>
            <p className="text-sm text-text_light">
              {t("about-page-components.audience.description")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Info;
