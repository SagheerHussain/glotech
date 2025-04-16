import React from "react";
import Button from "./Button";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const Banner = ({ title, description, className = "", ...props }) => {
  const { t } = useTranslation();

  return (
    <section
      id="banner"
      {...props}
      className={`py-10 relative z-[10] ${className} bg-[#14171f]`}
    >
      <div className="container">
        <div className="sm:flex items-center">
          <div className="sm:w-[60%] sm:text-start text-center">
            <h2 className="text-white text-[1.7rem] pb-6 font-bold leading-snug">
              {title}
            </h2>
            <p className="text-text_light -mt-4">{description}</p>
          </div>
          <div className="sm:w-[40%] text-center sm:text-end">
            <Link to={`/contact`}>
              <Button label={t("buttons.get-in-touch")} className="mt-6" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
