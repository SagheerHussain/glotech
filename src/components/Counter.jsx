import React from "react";
import CountUp from "react-countup";
import { useTranslation } from "react-i18next";
import { useInView } from "react-intersection-observer";

const Counter = ({ stats }) => {
 

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.6, // Adjust as needed
  });
  return (
    <>
      <section id="stats">
        <div className="container">
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 py-10"
            ref={ref}
          >
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="flex justify-center items-center text-6xl font-bold relative">
                  <span className="relative z-10 text-white">
                    {inView ? <CountUp end={stat.value || stat.count} duration={2} /> : "0"}
                    
                  </span>
                  <span className="relative z-10 text-white ml-1">{stat.icon ? stat.icon : "+"}</span>
                  <span className="absolute w-10 h-10 bg-[#3059f5] group-hover:-translate-y-[70%] transition-all rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0"></span>
                </div>
                <div className="mt-2 text-base font-semibold tracking-wide text-white uppercase">
                  {stat.title || stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Counter;
