import React, { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";

import Button from "./Button";
import { IoIosStar } from "react-icons/io";
import { useTranslation } from "react-i18next";
import reviewOne from "/Images/testimonials/review (1).png";
import reviewTwo from "/Images/testimonials/review (2).png";
import { Link } from "react-router-dom";

const Testimonial = () => {
  const { t } = useTranslation();
  const { i18n } = useTranslation();

  // State Variables
  const [isArabic, setIsArabic] = useState(false);

  const testimonials = t("testimonials", {
    returnObjects: true,
  });

  const images = [reviewOne, reviewTwo];

  useEffect(() => {
    const arabic = i18n.language === "ar";
    setIsArabic(arabic);
  }, [i18n.language]);

  return (
    <section
      id="testimonials"
      className="py-20 relative z-[10]"
      style={{
        background: `url(https://media.istockphoto.com/id/1485424068/vector/world-map-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=FfRJAk0f0XWCMl1PjdGRVQSdUsVHpDjyfBBQE9L8GWg=)`,
      }}
    >
      <div className="overlay absolute top-0 left-0 w-full h-full bg-[#ffffffac] -z-[1]"></div>
      <div className="container">
        <div className="md:flex items-center">
          <div className="testimonial_intro md:w-1/2">
            <div className="service_intro">
              <h3 className="flex mb-4">
                <span className="text-white bg-primary inline-block px-8 py-2 rounded-[25px]">
                  {t("testimonial_intro.subTitle")}
                </span>
              </h3>
              <h2 className="text-dark text-4xl pb-6 font-bold leading-snug">
                {t("testimonial_intro.title")}
              </h2>
              <p className="text-dark">{t("testimonial_intro.description")}</p>
              <Link to={`/contact`}>
                <Button label={t("buttons.get-in-touch")} className="mt-6" />
              </Link>
            </div>
          </div>
          <div
            className={`testimonial_carousel z-[999] md:w-1/2 ${
              isArabic ? "md:me-[4rem]" : "md:ms-[4rem]"
            }`}
          >
            <Swiper
              navigation={true}
              modules={[Navigation, Autoplay]}
              className="mySwiper"
              loop={true} // optional: to keep looping
              spaceBetween={20} // optional spacing
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
            >
              {testimonials.map((testimonial, index) => (
                <SwiperSlide key={index}>
                  <div className="testimonial_card bg-white shadow-2xl p-10 rounded-[20px]">
                    <div className="card_ratings flex items-center">
                      <IoIosStar size={24} className="text-yellow-600" />
                      <IoIosStar size={24} className="text-yellow-600" />
                      <IoIosStar size={24} className="text-yellow-600" />
                      <IoIosStar size={24} className="text-yellow-600" />
                      <IoIosStar size={24} className="text-yellow-600" />
                    </div>
                    <div className="card_description">
                      <em className="text-dark py-6 leading-loose inline-block">
                        {testimonial.description}
                      </em>
                    </div>
                    <div className="card_company flex items-center">
                      <div className="company_img">
                        <img
                          src={images[index]}
                          className="w-[60px] h-[60px]"
                          alt=""
                        />
                      </div>
                      <div className="company_headline ms-4">
                        <h3 className="text-dark">{testimonial.name}</h3>
                        <span className="text-dark">{testimonial.title}</span>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
