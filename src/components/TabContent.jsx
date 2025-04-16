import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { IoCheckmarkDone } from "react-icons/io5";
import verticalShape from "/Images/shape (1).png";
import Button from "../components/Button";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const TabContent = ({ src, title, description, features }) => {
  const shapeRef = useRef(null);
  const { i18n } = useTranslation();
  const { t } = useTranslation();
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
    }
  }, [i18n.language]);

  return (
    <div className="w-full relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-dark bg-[#ddd]">
      <div className="flex md:flex-row flex-col py-14">
        {/* Image */}
        <div className="image p-6 md:w-[40%] relative h-full z-[2]">
          <div className="overlay absolute -top-[5px] -left-[5px] w-[85%] h-[85%] bg-[#f4f9fd1e] opacity-50 rounded-[25px] -z-[1]" />
          <img src={src} className="w-full rounded-[25px] z-[1]" alt="" />
          <div
            className={`absolute top-0 ${
              isArabic ? "-left-10" : "-right-10"
            } -z-[1]`}
          >
            <img ref={shapeRef} src={verticalShape} alt="" />
          </div>
        </div>

        {/* Content */}
        <div className="content md:ms-[10%] md:w-[50%]">
          <h6 className="text-sm bg-gradient-to-r from-primary to-secondary text-white inline-block px-3 py-1 rounded-full mb-4">
            {t("home-page-components.why_choose_intro.subHeading")}
          </h6>
          <h1 className="text-3xl font-bold text-dark py-6">{title}</h1>
          <p className="text-dark text-base font-normal">{description}</p>
          <div className="features pt-10">
            {features.map((point, idx) => (
              <span
                key={idx}
                className="text-dark text-sm font-normal block pb-3"
              >
                <IoCheckmarkDone
                  size={20}
                  className="inline-block me-2 mb-1 text-primary"
                />
                {point}
              </span>
            ))}
          </div>
          <Link to="/about">
            <Button label={t("buttons.about")} className="mt-10" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TabContent;
