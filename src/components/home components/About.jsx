import React, { useEffect, useRef, useState } from "react";
import { FaMedal } from "react-icons/fa6";
import { FaEye } from "react-icons/fa";
import { Trans, useTranslation } from "react-i18next";
import gsap from "gsap";
import verticalShape from "/Images/shape (1).png";
import horizontalShape from "/Images/shape (2).png";
import { getAboutLists } from "../../services/about";

const About = () => {
  const { t, i18n } = useTranslation();

  const shapeRef = useRef(null);
  const shapeRef2 = useRef(null);

  const [about, setAbout] = useState("");

  const [isArabic, setIsArabic] = useState(false);

  useEffect(() => {
    const arabic = i18n.language === "ar";
    setIsArabic(arabic);
    if (shapeRef.current || arabic) {
      gsap.to(shapeRef.current, {
        y: -50,
        duration: 4,
        ease: "power1.inOut",
        repeat: -1,
        yoyo: true,
      });

      gsap.to(shapeRef2.current, {
        x: isArabic ? 20 : -20,
        duration: 4,
        ease: "power1.inOut",
        repeat: -1,
        yoyo: true,
      });
    }
  }, [i18n.language]);

  const getData = async () => {
    const { data } = await getAboutLists();
    console.log("about", data[0]);
    setAbout(data[0]);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <section
        id="about"
        className="bg-white pb-20 relative overflow-y-visible"
      >
        <div className="container ">
          <div className="md:flex items-center">
            <div className="about_image relative md:w-1/2 lg:w-[30%] md:me-[2rem] lg:me-[12rem] z-[2] md:mb-0 mb-4">
              <div
                className={`lg:block hidden right_to_left_animater absolute top-0 ${
                  isArabic ? "left-[-120px]" : "right-[-120px]"
                } -z-[1]`}
              >
                <img ref={shapeRef2} src={horizontalShape} alt="" />
              </div>

              <img
                className="w-full rounded-[20px]"
                src={
                  "https://demo.casethemes.net/itfirm/wp-content/uploads/2021/11/h2-intro-video1.jpg"
                }
                alt=""
              />
            </div>
            <div className="about_company_content  md:w-1/2 lg:w-3/4">
              <h3 className="px-8 py-2 rounded-[25px] bg-primary inline-block">
                <span className="text-white">
                  {t("home-page-components.about.heading")}
                </span>
              </h3>
              <h1 className="text-dark font-bold text-4xl md:text-5xl py-6">
                <Trans
                  i18nKey="home-page-components.about.title"
                  components={{
                    1: (
                      <span className="bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text" />
                    )
                  }}
                />
              </h1>
              <p className="text-dark pe-3 leading-snug">
                {t("home-page-components.about.description")}
              </p>
              <div className="sm:flex">
                <div className="our_mission py-6 sm:w-1/2">
                  <FaMedal className="text-primary mb-3" size={24} />
                  <h3 className="text-dark text-xl font-semibold">
                    {t("home-page-components.about.missionTitle")}
                  </h3>
                  <p className="text-dark pe-3 leading-snug text-sm mt-3">
                    {
                      i18n.language === "ar"
                        ? about?.mission?.ar
                        : i18n.language === "fr"
                        ? about?.mission?.fr
                        : about?.mission?.en
                    }
                  </p>
                </div>
                <div className="our_vision py-6 sm:w-1/2">
                  <FaEye className="text-primary mb-3" size={24} />
                  <h3 className="text-dark text-xl font-semibold">
                    {t("home-page-components.about.visionTitle")}
                  </h3>
                  <p className="text-dark pe-3 leading-snug text-sm mt-3">
                    {
                      i18n.language === "ar"
                        ? about?.vision?.ar
                        : i18n.language === "fr"
                        ? about?.vision?.fr
                        : about?.vision?.en
                    }
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className={`xl:block hidden top_to_bottom_animater absolute top-0 ${
            isArabic ? "left-[100px]" : "right-[100px]"
          } z-[10]`}
        >
          <img ref={shapeRef} src={verticalShape} alt="" />
        </div>
      </section>
    </>
  );
};

export default About;
