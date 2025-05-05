import React, { useEffect, useState } from "react";
import { LanguageSwitcher, Logo, NavigationLayout } from "./index"; // Fixed import
import { Link, useLocation } from "react-router-dom";

import Particles from "./bits ui/Particles";
import "../i18n";
import { Navbar } from "./Navbar";
import { Trans, useTranslation } from "react-i18next";
import GradientText from "./bits ui/GradientText";
import Button from "./Button";
import Drawer from "./Drawer";
import { getColors } from "../services/colors";

const Header = () => {
  const { t } = useTranslation();

  const [isScrollingUp, setIsScrollingUp] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isAtTop, setIsAtTop] = useState(true);
  const [color, setColor] = useState("#e9c307");

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

  const location = useLocation();

  // Fetch color
  useEffect(() => {
    const getColorsData = async () => {
      const { data } = await getColors();
      setColor(data.primary);
    };
    getColorsData();
  }, [location.pathname]);

  return (
    <header
      id="header"
      className="w-full max-h-screen lg:max-h-[125vh] 2xl:max-h-[100vh] overflow-hidden relative"
    >

      {/* Particles Waves backgroud */}
      <div className="h-screen lg:h-[125vh] 2xl:h-[100vh] w-full absolute">
        <Particles
          particleCount={800}
          particleSpread={10}
          particleColors={'#000'}
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
      <div className="header_content pt-[100px] h-[100vh] lg:h-[calc(125vh-0px)] 2xl:h-[calc(100vh-0px)] flex flex-col items-start justify-center">
        <div className="container">
          <div className="header_title">
            <h1 className="text-dark font-bold text-2xl sm:text-4xl lg:text-5xl xl:text-[3.2rem]">
              <Trans
                i18nKey="title"
                components={{ 1: <br />, 2: <span className="arabic-decor text-[.8rem]" /> }}
              />
            </h1>
          </div>

          <p className="text-dark lg:text-lg pt-8 pb-4 md:max-w-3xl xl:max-w-3xl">
            {t("description")}
          </p>

          <div className="mt-6 flex items-center">
            <Link to={"/contact"}>
              <Button label={t("buttons.get-in-touch")} />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
