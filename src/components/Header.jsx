import React from "react";
import { LanguageSwitcher, Logo } from "./index"; // Fixed import
import { Link } from "react-router-dom";

import Particles from "./bits ui/Particles";
import "../i18n";
import { Navbar } from "./Navbar";
import { Trans, useTranslation } from "react-i18next";
import GradientText from "./bits ui/GradientText";

const Header = () => {
  const { t } = useTranslation();

  return (
    <header id="header" className="w-full h-screen relative pt-6">
      {/* Particles Waves backgroud */}
      <div className="w-full h-[95vh]">
        <Particles
          particleCount={800}
          particleSpread={12}
          particleColors={["#666666"]}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>

      <div className="fixed top-10 left-[50%] -translate-x-[50%] flex items-center justify-between container mx-auto">
        <div className="w-full">
          <GradientText
            colors={["#fff", "#4079ff", "#fff", "#4079ff", "#fff"]}
            animationSpeed={8}
            showBorder={false}
            className="custom-class"
          >
            GLOTECH-KSA
          </GradientText>
        </div>
        <div className="w-full">
          <Navbar />
        </div>
        <div className="w-full text-end">
          <LanguageSwitcher />
        </div>
      </div>

      <div className="header_content absolute top-[50%] left-[50%]  -translate-x-[50%] -translate-y-[50%]">
        <h1 className="text-white font-bold text-center text-6xl">
          <Trans i18nKey="title" components={{ 1: <br /> }} />
        </h1>
        <p className="text-zinc-300 text-center text-xl pt-8 pb-4">
          {t("description")}
        </p>
        <div className="text-center mt-6 flex items-center justify-center">
          <button className="primary-button me-3">Our Services</button>
          <button className="primary-button">
            {" "}
            Contact Us
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
