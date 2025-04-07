import React from "react";
import {
  FaHandHoldingHeart,
  FaHandHoldingHand,
  FaDoorOpen,
  FaHandsHoldingCircle,
} from "react-icons/fa6";
import { LuHandshake } from "react-icons/lu";
import { FaBalanceScale } from "react-icons/fa";
import { GiBossKey, GiRun, GiProgression, GiLovers } from "react-icons/gi";
import { MdCelebration } from "react-icons/md";
import { Trans, useTranslation } from "react-i18next";

const ValueAddition = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="skynet_value py-20">
        <div className="container">
          <div className="team_intro mb-20">
            <h3 className="flex justify-center">
              <span className="text-white bg-[#222] inline-block px-8 py-2 rounded-[25px]">
                {t("about-page-components.values_intro.subTitle")}
              </span>
            </h3>
            <h2 className="text-white text-center text-4xl py-4 font-bold leading-snug">
              <Trans
                i18nKey="about-page-components.values_intro.title"
                components={{
                  1: (
                    <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text" />
                  ),
                }}
              />
            </h2>
            <p className="text-text_light text-center max-w-3xl mx-auto">
              {" "}
              {t("about-page-components.values_intro.description")}
            </p>
          </div>

          <div className="mb-10 grid lg:grid-cols-4 md:grid-cols-2 gap-6 grid-cols-1">
            <div className="skynet_value_content text-center px-4 py-10 bg-[#222] relative group transition-all rounded-[80px_10px_10px_10px] shadow-2xl z-[0]">
              <div className="skynet_value_icon icon justify-center flex absolute -top-[30px] left-1/2 -translate-x-1/2 shadow-4xl z-[3]">
                <span className="bg-gradient-to-r from-primary to-secondary group-hover:-rotate-[360deg] transition-all duration-200 p-3 rounded-[25px] rotate-0">
                  <FaHandHoldingHeart className="text-white text-4xl bg-[#3059f5] p-[6px] rounded-full" />
                </span>
              </div>
              <div className="skynet_value_title mt-2">
                <h5 className="text-lg text-white font-semibold">
                  {t("about-page-components.values.honesty.title")}
                </h5>
                <h3 className="text-[#1092fd] text-2xl font-bold uppercase">
                  {t("about-page-components.values.honesty.heading")}
                </h3>
              </div>
              <div className="skynet_value_description mt-2">
                <p className="text-sm text-white">
                  {t("about-page-components.values.honesty.description")}
                </p>
              </div>
            </div>

            <div className="skynet_value_content text-center px-4 py-10 bg-[#222] relative group transition-all rounded-[80px_10px_10px_10px] shadow-2xl z-[0]">
              <div className="skynet_value_icon icon justify-center flex absolute -top-[30px] left-1/2 -translate-x-1/2 shadow-4xl z-[3]">
                <span className="bg-gradient-to-r from-primary to-secondary group-hover:-rotate-[360deg] transition-all duration-200 p-3 rounded-[25px] rotate-0">
                  <LuHandshake className="text-white text-4xl bg-[#3059f5] p-[6px] rounded-full" />
                </span>
              </div>
              <div className="skynet_value_title mt-2">
                <h5 className="text-lg text-white font-semibold">
                  {t("about-page-components.values.fist.title")}
                </h5>
                <h3 className="text-[#1092fd] text-2xl font-bold uppercase">
                  {t("about-page-components.values.fist.heading")}
                </h3>
              </div>
              <div className="skynet_value_description mt-2">
                <p className="text-sm text-white">
                  {t("about-page-components.values.fist.description")}
                </p>
              </div>
            </div>

            <div className="skynet_value_content text-center px-4 py-10 bg-[#222] relative group transition-all rounded-[80px_10px_10px_10px] shadow-2xl z-[0]">
              <div className="skynet_value_icon icon justify-center flex absolute -top-[30px] left-1/2 -translate-x-1/2 shadow-4xl z-[3]">
                <span className="bg-gradient-to-r from-primary to-secondary group-hover:-rotate-[360deg] transition-all duration-200 p-3 rounded-[25px] rotate-0">
                  <GiBossKey className="text-white text-4xl bg-[#3059f5] p-[6px] rounded-full" />
                </span>
              </div>
              <div className="skynet_value_title mt-2">
                <h5 className="text-lg text-white font-semibold">
                  {t("about-page-components.values.boss.title")}
                </h5>
                <h3 className="text-[#1092fd] text-2xl font-bold uppercase">
                  {t("about-page-components.values.boss.heading")}
                </h3>
              </div>
              <div className="skynet_value_description mt-2">
                <p className="text-sm text-white">
                  {t("about-page-components.values.boss.description")}
                </p>
              </div>
            </div>

            <div className="skynet_value_content text-center px-4 py-10 bg-[#222] relative group transition-all rounded-[80px_10px_10px_10px] shadow-2xl z-[0]">
              <div className="skynet_value_icon icon justify-center flex absolute -top-[30px] left-1/2 -translate-x-1/2 shadow-4xl z-[3]">
                <span className="bg-gradient-to-r from-primary to-secondary group-hover:-rotate-[360deg] transition-all duration-200 p-3 rounded-[25px] rotate-0">
                  <GiRun className="text-white text-4xl bg-[#3059f5] p-[6px] rounded-full" />
                </span>
              </div>
              <div className="skynet_value_title mt-2">
                <h5 className="text-lg text-white font-semibold">
                  {t("about-page-components.values.flash.title")}
                </h5>
                <h3 className="text-[#1092fd] text-2xl font-bold uppercase">
                  {t("about-page-components.values.flash.heading")}
                </h3>
              </div>
              <div className="skynet_value_description mt-2">
                <p className="text-sm text-white">
                  {t("about-page-components.values.flash.description")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ValueAddition;
