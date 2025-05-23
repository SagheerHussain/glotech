import React, { useEffect, useState } from "react";
import { ImCheckmark } from "react-icons/im";
import { FaEye } from "react-icons/fa";
import { FaMedal } from "react-icons/fa6";
import { FiTarget } from "react-icons/fi";
import { Trans, useTranslation } from "react-i18next";
import { getAboutLists } from "../../services/about";

const Info = () => {
  const { t, i18n } = useTranslation();

  // State Variables
  const [about, setAbout] = useState({});

  // Get About
  const getAboutData = async () => {
    const { data } = await getAboutLists();
    console.log("about", data[0]);
    setAbout(data[0]);
  };

  useEffect(() => {
    getAboutData();
  }, []);

  return (
    <section id="info" className="bg-white py-20 z-[2] relative">
      <div className="container">
        <div className="info_content flex md:flex-row flex-col gap-4 md:items-center">
          <div className="info_content_card md:w-[45%]">
            <h1 className="text-dark text-[2.5rem] font-bold leading-snug">
              {t("about-page-components.info.title")}
            </h1>
            <p className="text-dark text-sm pt-4 leading-loose">
              {/* {t("about-page-components.info.description")} */}
              <Trans
                i18nKey="about-page-components.info.description"
                components={{ 1: <><br /> <br /></> }}
              />
            </p>
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
            <FaMedal size={24} color="#8c6238" className="mx-auto block mb-4" />
            <h3 className="text-3xl font-bold mb-3 text-dark">
              {t("about-page-components.mission.title")}
            </h3>
            <p className="text-sm text-dark">
              {
                i18n.language === "ar"
                  ? about?.mission?.ar
                  : i18n.language === "fr"
                  ? about?.mission?.fr
                  : about?.mission?.en
              }
            </p>
          </div>
          <div className="skynet_mission px-4 text-center md:w-[33.3%] md:mb-0 mb-4">
            <FaEye size={24} color="#8c6238" className="mx-auto block mb-4" />
            <h3 className="text-3xl font-bold mb-3 text-dark">
              {t("about-page-components.vision.title")}
            </h3>
            <p className="text-sm text-dark">
              {
                i18n.language === "ar"
                  ? about?.vision?.ar
                  : i18n.language === "fr"
                  ? about?.vision?.fr
                  : about?.vision?.en
              }
            </p>
          </div>
          <div className="skynet_mission px-4 text-center md:w-[33.3%] md:mb-0 mb-4">
            <FiTarget
              size={24}
              color="#8c6238"
              className="mx-auto block mb-4"
            />
            <h3 className="text-3xl font-bold mb-3 text-dark">
              {t("about-page-components.audience.title")}
            </h3>
            <p className="text-sm text-dark">
              {
                i18n.language === "ar"
                  ? about?.target?.ar
                  : i18n.language === "fr"
                  ? about?.target?.fr
                  : about?.target?.en
              }
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Info;
