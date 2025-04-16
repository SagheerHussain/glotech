"use client";
import { useScroll, useTransform, motion } from "motion/react";
import React, { useEffect, useRef, useState } from "react";
import { Trans, useTranslation } from "react-i18next";
import GlassIcons from "../bits ui/GlassIcons";

export const Timeline = ({ data, title, description, icons }) => {
  const { i18n } = useTranslation();

  const ref = useRef(null);
  const containerRef = useRef(null);
  const [height, setHeight] = useState(0);
  const [arabic, setArabic] = useState(false);

  useEffect(() => {
    const isArabic = i18n.language === "ar";
    setArabic(isArabic);
  }, [i18n.language]);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      console.log("rect", rect);
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div className="w-full font-sans" ref={containerRef}>
      <div className="max-w-5xl text-center mx-auto pt-20 pb-10 px-4 md:px-8 lg:px-10">
        <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-dark">
          <Trans
            i18nKey={title}
            components={{
              1: (
                <span className="bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text" />
              ),
            }}
          />
        </h2>
        <p className="text-dark text-base xl:text-lg">{description}</p>
      </div>
      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt-10 md:pt-40 md:gap-10"
          >
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-primary flex items-center justify-center">
                <div className="h-4 w-4 rounded-full bg-secondary border border-primary p-2" />
              </div>
              <h3 className="hidden md:flex flex-col text-xl md:pl-20 md:text-5xl font-bold text-black ">
                <span>
                  <GlassIcons item={icons[index]} />
                </span>
                {item.title}
              </h3>
            </div>

            <div className="relative pl-20 pr-4 md:pl-4 w-full">
              <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-black">
                {item.title}
              </h3>
              {item.content}{" "}
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className={`absolute ${
            arabic ? "left-8 md:right-[285px] lg:right-[350px]" : "left-8"
          } top-0 md:block hidden overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]`}
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0  w-[2px] bg-gradient-to-t from-[#8C6238] via-[#c9a66f] to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
