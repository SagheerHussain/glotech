import React, { useEffect, useRef, useState } from "react";
import TiltedCard from "../bits ui/TiltedCardEffect";
import { LuCodepen } from "react-icons/lu";
import { MdManageAccounts } from "react-icons/md";
import { TbDeviceMobileCog, TbBrandGoogleAnalytics } from "react-icons/tb";
import { useTranslation } from "react-i18next";
import { SlTag } from "react-icons/sl";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import client1 from "/Images/clients/client (1).png";
import client2 from "/Images/clients/client (2).png";
import client3 from "/Images/clients/client (3).png";
import client4 from "/Images/clients/client (4).png";
import client5 from "/Images/clients/client (5).png";
import client6 from "/Images/clients/client (1).png";

gsap.registerPlugin(ScrollTrigger);

const TechWorkWith = () => {
  const cardsRef = useRef([]);
  const { i18n, t } = useTranslation();
  const [arabic, setArabic] = useState(false);

  const icons = [
    <LuCodepen size={64} className="text-primary mb-3" />,
    <TbDeviceMobileCog size={64} className="text-primary mb-3" />,
    <TbBrandGoogleAnalytics size={64} className="text-primary mb-3" />,
    <SlTag size={64} className="text-primary mb-3" />,
    <MdManageAccounts size={64} className="text-primary mb-3" />,
  ];

  const services = t("home-page-components.services", { returnObjects: true });
  const content = services.map((service, index) => ({
    icon: icons[index],
    title: service.name,
  }));

  useEffect(() => {
    const isArabic = i18n.language === "ar";
    setArabic(isArabic);
  }, [i18n.language]);

  useEffect(() => {
    cardsRef.current.forEach((card, index) => {
      if (!card) return;
      gsap.fromTo(
        card,
        { y: 100, opacity: 0 },
        {
          scrollTrigger: {
            trigger: card,
            start: "top 90%",
            toggleActions: "play none none none",
          },
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          delay: index * 0.1, // ek ek card ke animation mein thoda delay (stagger)
        }
      );
    });
  }, []);

  return (
    <section id="techWorkingWith" className="pb-24 min-h-[250px] relative z-[9] bg-[#eee]">
      <div className="container">
        {/* Services */}
        <div className="tech_working_with_content relative py-20 lg:py-0 lg:-top-[100px]">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10">
            {content?.map((service, ind) => (
              <div
                key={ind}
                ref={(el) => (cardsRef.current[ind] = el)}
                className="w-full h-full"
              >
                <TiltedCard
                  captionText={service.title}
                  containerHeight="200px"
                  containerWidth="100%"
                  rotateAmplitude={12}
                  scaleOnHover={1.08}
                  showMobileWarning={false}
                  showTooltip={false}
                >
                  {service.icon}
                  <h1 className="text-base xl:text-lg text-center font-bold text-text_dark">
                    {service.title}
                  </h1>
                </TiltedCard>
              </div>
            ))}
          </div>
        </div>

        {/* Technologies / Brands */}
        <div className="flex lg:flex-row flex-col justify-center items-center">
          <div className="clients_heading lg:w-1/3 lg:mb-0 mb-10">
            <h6
              className={`text-text_dark font-semibold text-xl lg:text-sm relative after:content-[''] after:align-middle ${
                arabic ? "after:-translate-x-5" : "after:translate-x-5"
              } after:inline-block after:w-[80px] after:h-[1px] after:bg-text_dark`}
            >
              {t("home-page-components.clients_counter_title")}
            </h6>
          </div>
          <div className="clients_slider w-full lg:w-2/3">
            <Swiper
              className="mySwiper"
              modules={[Autoplay]}
              slidesPerView={5}
              spaceBetween={20}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              loop={true}
              breakpoints={{
                0: { slidesPerView: 3 },
                640: { slidesPerView: 5 },
              }}
            >
              {[client1, client2, client3, client4, client5, client6].map((client, idx) => (
                <SwiperSlide key={idx}>
                  <img src={client} alt={`client-${idx}`} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechWorkWith;
