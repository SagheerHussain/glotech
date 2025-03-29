import React from "react";
import Button from "./Button";
import { useTranslation } from "react-i18next";

const Banner = ({ title, description, className = "", ...props }) => {
  const { t } = useTranslation();

  return (
    <section
      id="banner"
      {...props}
      className={`py-10 relative z-[10] ${className} bg-[#14171f]`}
    >
      <div className="container">
        <div className="flex items-center">
          <div className="w-[60%]">
            <h2 className="text-white text-[1.7rem] pb-6 font-bold leading-snug">
              {title}
            </h2>
            <p className="text-text_light -mt-4">{description}</p>
          </div>
          <div className="w-[40%] text-end">
            <Button label={t("buttons.get-in-touch")} className="mt-6" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
