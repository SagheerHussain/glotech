import React, { useEffect, useState } from "react";
import { LanguageSwitcher, Logo } from "./index"; // Fixed import
import { Link } from "react-router-dom";

import Particles from "./bits ui/Particles";
import "../i18n";
import { Navbar } from "./Navbar";
import { Trans, useTranslation } from "react-i18next";
import GradientText from "./bits ui/GradientText";

const Header = () => {
  const { t } = useTranslation();

  const [isScrollingUp, setIsScrollingUp] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 200) {
        // Scroll Down -> Hide Navbar
        setIsScrollingUp(false);
        setIsAtTop(false);
      } else if (currentScrollY === 0) {
        setIsAtTop(true);
      } else {
        // Scroll Up -> Show Navbar
        setIsScrollingUp(true);
        setIsAtTop(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <header id="header" className="w-full h-screen">
      {/* Particles Waves backgroud */}
      <div className="h-screen w-full absolute">
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

      {/* Navbar */}
      <div
        className={`w-full z-50 transition-all duration-500 ease-in-out py-4 flex justify-center
                ${
                  isScrollingUp
                    ? `translate-y-0 ${
                        isAtTop
                          ? ""
                          : "bg-[#171717]/50 backdrop-blur-[10px] shadow-lg"
                      }`
                    : "-translate-y-full"
                } 
            `}
      >
        <div className="container max-w-[1500px] flex items-center justify-between">
          <div>
            <GradientText
              colors={["#fff", "#4079ff", "#fff", "#4079ff", "#fff"]}
              animationSpeed={8}
              showBorder={false}
              className="custom-class"
            >
              GLOTECH-KSA
            </GradientText>
          </div>
          <div>
            <Navbar />
          </div>
          <div>
            <LanguageSwitcher />
          </div>
        </div>
      </div>

      {/* Header Content */}
      <div className="header_content h-[calc(100vh-105px)] flex flex-col items-center justify-center">
        <div className="header_content_width lg:max-w-4xl xl:max-w-6xl">
          <h1 className="text-white font-bold text-center text-6xl">
            <Trans i18nKey="title" components={{ 1: <br /> }} />
          </h1>

          <p className="text-zinc-300 text-center text-xl pt-8 pb-4">
            {t("description")}
          </p>

          <div className="text-center mt-6 flex items-center justify-center">
            <button className="primary-button me-3">Our Services</button>
            <button className="primary-button">
              Contact Us
              <span></span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
