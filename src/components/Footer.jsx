import React from "react";
import footerBg from "/Images/bg-footer.jpg";
import Button from "./Button";
import { useTranslation } from "react-i18next";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaLocationArrow,
  FaInstagram,
  FaPhoneAlt,
} from "react-icons/fa";
import { Input } from "@heroui/input";
import { FaLocationDot } from "react-icons/fa6";

const Footer = () => {
  const { t } = useTranslation();

  const footer = t("footer", { returnObjects: true });

  return (
    <footer
      id="footer"
      className="py-20 relative z-[5]"
      style={{ background: `url('${footerBg}')` }}
    >
      <div className="container">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="company_intro">
            <h1 className="text-white text-2xl font-bold">GLOTECH-KSA</h1>
            <p className="text-text_light py-6 text-sm">{footer[0].description}</p>
            <Button label={t("buttons.about")} />
          </div>
          <div className="newsletter">
            <h1 className="text-white text-2xl font-bold after:content-[''] after:block after:translate-y-2 after:w-[40px] after:h-[2px] after:bg-primary">
              {footer[1].title}
            </h1>
            <p className="text-text_light py-6 text-sm">
              {footer[1].description}
            </p>
            <div className="input flex items-center">
            <input
                    type="email"
                    className="w-full block bg-[#222] py-4 px-4 rounded-[15px_0px_0px_15px] focus:outline-none focus:text-white"
                    placeholder={`${t("labels.subscribe")}`}
                  />
              <button className="bg-gradient-to-r from-primary to-secondary py-4 px-4 rounded-[0_15px_15px_0]">
                <FaLocationArrow size={20} className="text-white" />
              </button>
            </div>
          </div>
          <div className="office_info">
            <h1 className="text-white text-2xl font-bold after:content-[''] after:block after:translate-y-2 after:w-[40px] after:h-[2px] after:bg-primary">
              {footer[2].title}
            </h1>
            <div className="flex items-center mt-6">
              <FaLocationDot className="text-primary inline-block" />
              <span className="text-text_light text-sm ms-2">
                {footer[2].address.description}
              </span>
            </div>
            <div className="flex items-center mt-4">
              <FaPhoneAlt className="text-primary inline-block" />
              <address className="text-text_light text-sm ms-2">
                {footer[2].phone.description}
              </address>
            </div>
            <div className="mt-6">
              <h6 className="text-sm font-bold text-white">
                {footer[2].opening_hours.title}
              </h6>
              <span className="text-text_light text-sm">
                {footer[2].opening_hours.description}
              </span>
            </div>
          </div>
          <div className="gallery">
            <h1 className="text-white text-2xl font-bold after:content-[''] after:block after:translate-y-2 after:w-[40px] after:h-[2px] after:bg-primary">
              {footer[4].title}
            </h1>
            <div className="flex gap-4 mt-10">
              <FaFacebookF
                size={28}
                className="text-white bg-gradient-to-r from-primary to-secondary hover:from-primary transition-all p-[5px] rounded-full"
              />
              <FaLinkedinIn
                size={28}
                className="text-white bg-gradient-to-r from-primary to-secondary hover:from-primary transition-all p-[5px] rounded-full"
              />
              <FaTwitter
                size={28}
                className="text-white bg-gradient-to-r from-primary to-secondary hover:from-primary transition-all p-[5px] rounded-full"
              />
              <FaInstagram
                size={28}
                className="text-white bg-gradient-to-r from-primary to-secondary hover:from-primary transition-all p-[5px] rounded-full"
              />
            </div>
          </div>
        </div>

        <hr className="mt-20 border-primary" />

        <p className="text-text_light text-center pt-5">&copy; {footer[3].description}</p>

      </div>
    </footer>
  );
};

export default Footer;
