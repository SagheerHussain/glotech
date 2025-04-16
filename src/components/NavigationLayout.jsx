import React, { useEffect, useState } from "react";
import GradientText from "./bits ui/GradientText";
import { Navbar } from "./Navbar";
import LanguageSwitcher from "./LanguageSwitcher";
import DrawerMenus from "./Drawer";
import Logo from "./Logo";
import { Link } from "react-router-dom";

const NavigationLayout = () => {
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
    <>
      <div
        className={`desktop_only fixed hidden top-0 w-screen z-50 transition-all duration-500 ease-in-out py-4 lg:flex justify-center
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
          <div className="">
            <Link to={`/`} className="flex items-center">
              <Logo />
              <GradientText
                colors={["#c9a66f", "#8C6238", "#c9a66f", "#c9a66f", "#8C6238"]}
                animationSpeed={8}
                showBorder={false}
                className=""
              >
                GLOTECH
              </GradientText>
            </Link>
          </div>
          <div className="mx-3">
            <Navbar />
          </div>
          <div>
            <LanguageSwitcher />
          </div>
        </div>
      </div>

      {/* Mobile Navbar */}
      <div
        className={`fixed top-0 w-screen z-50 transition-all duration-500 ease-in-out py-4 lg:hidden flex justify-center ${
          isScrollingUp
            ? `translate-y-0 ${
                isAtTop ? "" : "bg-[#171717]/50 backdrop-blur-[10px] shadow-lg"
              }`
            : "-translate-y-full"
        } `}
      >
        <div className="container flex items-center justify-between">
          <div className="flex items-center">
            <Link to={`/`} className="flex items-center">
              <Logo />
              <GradientText
                colors={["#c9a66f", "#8C6238", "#c9a66f", "#c9a66f", "#8C6238"]}
                animationSpeed={8}
                showBorder={false}
                className=""
              >
                GLOTECH
              </GradientText>
            </Link>
          </div>
          <div>
            <DrawerMenus />
          </div>
        </div>
      </div>
    </>
  );
};

export default NavigationLayout;
