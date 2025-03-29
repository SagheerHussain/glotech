import React, { useEffect, useState } from "react";
import { LanguageSwitcher, Logo } from "./index"; // Fixed import
import { Link } from "react-router-dom";


import Particles from "./bits ui/Particles";
import "../i18n";
import { Navbar } from "./Navbar";
import { Trans, useTranslation } from "react-i18next";
import GradientText from "./bits ui/GradientText";
import Button from "./Button";

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
    <header
      id="header"
      className="w-full lg:max-h-[125vh] 2xl:max-h-[100vh] overflow-hidden relative before:content-[''] before:bg-[#4079ff06] before:w-[400px] before:h-[400px] before:absolute before:top-[115%] before:-translate-x-full before:-translate-y-full -before:z-0 before:rounded-full after:content-[''] after:bg-[#4079ff1a] after:w-[500px] after:h-[500px] after:absolute after:top-[115%] after:-translate-x-full after:-translate-y-full -after:z-0 after:rounded-full"
    >
      <div className="overlay absolute left-0 top-0 h-full w-[40%] bg-[#4079ff0f] z-[1]"></div>

      {/* Particles Waves backgroud */}
      <div className="lg:h-[125vh] 2xl:h-[100vh] w-full absolute z-0">
        <Particles
          particleCount={800}
          particleSpread={12}
          particleColors={["#666666"]}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
          className={"h-full w-full relative"}
        />
      </div>

      {/* Navbar */}
      <div
        className={`fixed top-0 w-screen z-50 transition-all duration-500 ease-in-out py-4 flex justify-center
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
        <div className="container flex items-center justify-between">
          <div>
            <GradientText
              colors={["#6223f0", "#3059f5", "#fff", "#3059f5", "#6223f0"]}
              animationSpeed={8}
              showBorder={false}
              className=""
            >
              GLOTECH-KSA
            </GradientText>
          </div>
          <div className="mx-3">
            <Navbar />
          </div>
          <div>
            <LanguageSwitcher />
          </div>
        </div>
      </div>

      {/* Header Content */}
      <div className="header_content lg:h-[calc(125vh-90px)] 2xl:h-[calc(100vh-90px)] z-[2] flex flex-col items-start justify-center">
        <div className="container">
          <div className="header_title z-[9999] ">
            <h1 className="text-white font-bold text-5xl xl:text-[3.2rem]">
              <Trans i18nKey="title" components={{ 1: <br /> }} />
            </h1>
          </div>

          <p className="text-zinc-300 text-lg pt-8 pb-4 lg:max-w-3xl xl:max-w-3xl">
            {t("description")}
          </p>

          <div className="mt-6 flex items-center">
          <Button label={t("buttons.get-in-touch")} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
