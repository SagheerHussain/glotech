import React from "react";
import serviceBg from "/Images/service_bg.avif";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FiLayers } from "react-icons/fi";
import { FaCashRegister } from "react-icons/fa";
import { Trans, useTranslation } from "react-i18next";
import { IoLogoAndroid } from "react-icons/io";
import { SiSimpleanalytics } from "react-icons/si";
import { TbAsset } from "react-icons/tb";
import { PiNetworkLight } from "react-icons/pi";
import { FaRegHandshake } from "react-icons/fa";
import { GrTechnology } from "react-icons/gr";
import { FaDigitalOcean } from "react-icons/fa6";
import { MdSignalWifi3BarLock } from "react-icons/md";
import { PiSoundcloudLogoFill } from "react-icons/pi";
import { BsRobot } from "react-icons/bs";

const Services = () => {
  const { t } = useTranslation();

  const icons = [
    <FiLayers
      size={36}
      className="text-white group-hover:text-primary -rotate-45 group-hover:rotate-45"
    />,
    <IoLogoAndroid
      size={36}
      className="text-white group-hover:text-primary -rotate-45 group-hover:rotate-45"
    />,
    <SiSimpleanalytics
      size={36}
      className="text-white group-hover:text-primary -rotate-45 group-hover:rotate-45"
    />,
    <FaCashRegister
      size={36}
      className="text-white group-hover:text-primary -rotate-45 group-hover:rotate-45"
    />,
    <TbAsset
      size={36}
      className="text-white group-hover:text-primary -rotate-45 group-hover:rotate-45"
    />,
    <PiNetworkLight
      size={36}
      className="text-white group-hover:text-primary -rotate-45 group-hover:rotate-45"
    />,
    <FaRegHandshake
      size={36}
      className="text-white group-hover:text-primary -rotate-45 group-hover:rotate-45"
    />,
    <GrTechnology
      size={36}
      className="text-white group-hover:text-primary -rotate-45 group-hover:rotate-45"
    />,
    <FaDigitalOcean
      size={36}
      className="text-white group-hover:text-primary -rotate-45 group-hover:rotate-45"
    />,
    <MdSignalWifi3BarLock
      size={36}
      className="text-white group-hover:text-primary -rotate-45 group-hover:rotate-45"
    />,
    <PiSoundcloudLogoFill
      size={36}
      className="text-white group-hover:text-primary -rotate-45 group-hover:rotate-45"
    />,
    <BsRobot
      size={36}
      className="text-white group-hover:text-primary -rotate-45 group-hover:rotate-45"
    />,
  ];

  const services = t("home-page-components.services_details", {
    returnObjects: true,
  });

  const content = services?.map((service, index) => ({
    icon: icons[index],
    title: service.title,
    description: service.description,
  }));

  return (
    <>
      <section
        id="services"
        className="relative z-[2] py-24 bg-white"
      >
        <div className="container">
          <div className="service_intro">
            <h3 className="flex justify-center mb-4">
              <span className="text-white bg-primary inline-block px-8 py-2 rounded-[25px]">
                {t("home-page-components.service_details_intro.title")}
              </span>
            </h3>
            <h2 className="text-dark text-center text-4xl py-4 font-bold leading-snug">
              <Trans
                i18nKey="home-page-components.service_details_intro.headline"
                components={{
                  1: (
                    <span className="bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text" />
                  ),
                }}
              />
            </h2>
          </div>

          <div className="service_content">
            <Swiper
              spaceBetween={20}
              autoplay={{
                delay: 1500,
                disableOnInteraction: false,
              }}
              navigation={true}
              loop={true}
              modules={[Autoplay, Navigation]}
              className="mySwiper"
              breakpoints={{
                0: {
                  slidesPerView: 1,
                },
                550: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 3,
                },
                1280: {
                  slidesPerView: 4,
                },
              }}
            >
              {content.map((item) => (
                <SwiperSlide key={item}>
                  <div className="service_content_card group hover:rounded-[10px_80px_10px_10px] transition-all relative bg-white shadow-2xl p-8 rounded-[80px_10px_10px_10px] z-[0]">
                    <div className="overlay opacity-60 transition-all bg-gradient-to-r from-primary to-secondary w-full h-1/2 rounded-[10px_80px_0px_0px] absolute -top-[70px] left-0 -z-[1]">
                      <svg
                        className="absolute bottom-0 left-0 w-full z-[-1]"
                        viewBox="0 0 1440 100"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill="#fff"
                          stroke="#fff"
                          d="M0,0 C480,120 960,-20 1440,100 L1440,100 L0,100 Z"
                        />
                      </svg>
                    </div>

                    <div className="icon justify-center flex absolute -top-[30px] left-1/2 -translate-x-1/2 shadow-4xl z-[3]">
                      <span className="bg-gradient-to-r from-primary to-primary group-hover:from-[#fff] group-hover:-rotate-[45deg] group-hover:to-[#fff] transition-all duration-200 p-4 rounded-[25px] rotate-45">
                        {item.icon}
                      </span>
                    </div>
                    <div className="service_typography text-center z-[3]">
                      <h2 className="text-dark pt-7 pb-10 transition-all text-xl font-bold after:content-[''] after:block after:w-[100px] after:h-[2px] after:bg-gradient-to-r after:from-primary after:to-primary after:mx-auto after:translate-y-3">
                        {item.title}
                      </h2>
                      <p className="text-dark">{item.description}</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
