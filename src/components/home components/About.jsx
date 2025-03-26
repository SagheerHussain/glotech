import React from "react";
import { FaMedal } from "react-icons/fa6";
import { FaEye } from "react-icons/fa";
import { Trans, useTranslation } from "react-i18next";
import {
  FaPiggyBank,
  FaDesktop,
  FaNewspaper,
  FaTools,
  FaCheck,
  FaHeadset,
} from "react-icons/fa";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";

const About = () => {
  const { t } = useTranslation();

  return (
    <>
      <section id="about" className="bg-theme py-20">
        <div className="container max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="about_company_content">
              <h3 className="uppercase text-primary font-semibold">
                // {t("home-page-components.about.heading")}
              </h3>
              <h1 className="text-white font-bold text-4xl md:text-5xl py-6">
                <Trans
                  i18nKey="home-page-components.about.title"
                  components={{
                    1: <br className="hidden lg:block" />,
                  }}
                />
              </h1>
              <p className="text-text_light pe-3 leading-snug">
                {t("home-page-components.about.description")}
              </p>
              <div className="sm:flex items-center">
                <div className="our_mission py-6">
                  <FaMedal className="text-primary mb-3" size={24} />
                  <h3 className="text-white text-xl font-semibold">
                    {t("home-page-components.about.missionTitle")}
                  </h3>
                  <p className="text-text_light pe-3 leading-snug text-sm mt-3">
                    {t("home-page-components.about.missionText")}
                  </p>
                </div>
                <div className="our_vision py-4">
                  <FaEye className="text-primary mb-3" size={24} />
                  <h3 className="text-white text-xl font-semibold">
                    {t("home-page-components.about.visionTitle")}
                  </h3>
                  <p className="text-text_light pe-3 leading-snug text-sm mt-3">
                    {t("home-page-components.about.visionText")}
                  </p>
                </div>
              </div>
            </div>

            <div className="about_image">
              <img
                className="w-full"
                src="https://wpdemo.archiwp.com/engitech/wp-content/uploads/sites/4/2020/02/image1-home1.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
