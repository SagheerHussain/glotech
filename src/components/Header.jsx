import React, { useEffect, useState } from "react";
import { LanguageSwitcher, Logo, NavigationLayout } from "./index"; // Fixed import
import { Link } from "react-router-dom";

import Particles from "./bits ui/Particles";
import "../i18n";
import { Navbar } from "./Navbar";
import { Trans, useTranslation } from "react-i18next";
import GradientText from "./bits ui/GradientText";
import Button from "./Button";
import Drawer from "./Drawer";

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
      className="w-full max-h-screen lg:max-h-[125vh] 2xl:max-h-[100vh] overflow-hidden relative before:content-[''] before:bg-[#4079ff06] before:lg:w-[400px] before:md:w-[300px] before:lg:h-[400px] before:md:h-[300px] before:absolute before:top-[115%] before:-translate-x-full before:-translate-y-full -before:z-0 before:rounded-full after:content-[''] after:bg-[#4079ff1a] after:lg:w-[500px] after:md:w-[400px] after:lg:h-[500px] after:md:h-[400px] after:absolute after:top-[115%] after:-translate-x-full after:-translate-y-full -after:z-0 after:rounded-full"
    >
      <div className="overlay absolute left-0 top-0 h-full md:w-1/2 lg:w-[40%] bg-[#4079ff0f] z-[1]"></div>

      {/* Particles Waves backgroud */}
      <div className=" h-screen lg:h-[125vh] 2xl:h-[100vh] w-full absolute z-0">
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
      <NavigationLayout />

      {/* Header Content */}
      <div className="header_content h-[calc(100vh-90px)] lg:h-[calc(125vh-0px)] 2xl:h-[calc(100vh-0px)] z-[2] flex flex-col items-start justify-center">
        <div className="container">
          <div className="header_title z-[9999] ">
            <h1 className="text-white font-bold text-2xl sm:text-4xl lg:text-5xl xl:text-[3.2rem]">
              <Trans i18nKey="title" components={{ 1: <br /> }} />
            </h1>
          </div>

          <p className="text-zinc-300 lg:text-lg pt-8 pb-4 md:max-w-3xl xl:max-w-3xl">
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
