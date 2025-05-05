import React, { useEffect, useState } from "react";
import CountUp from "react-countup";
import { useTranslation } from "react-i18next";
import { useInView } from "react-intersection-observer";
import { getOverallStats } from "../services/overallStats";

const Counter = ({ stats }) => {

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.6, // Adjust as needed
  });

  const { t, i18n } = useTranslation();

  const [overallStats, setOverallStats] = useState([]);

  // Get Overall Stats
  const getStatsData = async () => {
    const { data } = await getOverallStats();
    console.log("overall stats", data[0], data[0].projectsDelivered?.count);
    setOverallStats(data[0]);
  };

  useEffect(() => {
    getStatsData();
  }, []);

  return (
    <>
      <section id="stats" className="bg-[#ddd]">
        <div className="container">
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 py-10"
            ref={ref}
          >
              <div className="text-center group">
                <div className="flex justify-center items-center text-6xl font-bold relative">
                  <span className="relative z-10 text-text_dark">
                    {inView ? <CountUp end={Number(overallStats?.projectsDelivered?.count.split("+")[0])} duration={2} /> : "0"}
                    
                  </span>
                  <span className="relative z-10 text-text_dark ml-1">{"+"}</span>
                  <span className="absolute w-10 h-10 bg-secondary group-hover:-translate-y-[70%] transition-all rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0"></span>
                </div>
                <div className="mt-2 text-base font-semibold tracking-wide text-text_dark uppercase">
                  {overallStats?.projectsDelivered?.title?.en}
                </div>
              </div>
              <div className="text-center group">
                <div className="flex justify-center items-center text-6xl font-bold relative">
                  <span className="relative z-10 text-text_dark">
                    {inView ? <CountUp end={Number(overallStats?.divisions?.count.split("+")[0])} duration={2} /> : "0"}
                    
                  </span>
                  <span className="relative z-10 text-text_dark ml-1">{"+"}</span>
                  <span className="absolute w-10 h-10 bg-secondary group-hover:-translate-y-[70%] transition-all rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0"></span>
                </div>
                <div className="mt-2 text-base font-semibold tracking-wide text-text_dark uppercase">
                  {overallStats?.divisions?.title?.en}
                </div>
              </div>
              <div className="text-center group">
                <div className="flex justify-center items-center text-6xl font-bold relative">
                  <span className="relative z-10 text-text_dark">
                    {inView ? <CountUp end={Number(overallStats?.clients?.count.split("+")[0])} duration={2} /> : "0"}
                    
                  </span>
                  <span className="relative z-10 text-text_dark ml-1">{"+"}</span>
                  <span className="absolute w-10 h-10 bg-secondary group-hover:-translate-y-[70%] transition-all rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0"></span>
                </div>
                <div className="mt-2 text-base font-semibold tracking-wide text-text_dark uppercase">
                  {overallStats?.clients?.title?.en}
                </div>
              </div>
              <div className="text-center group">
                <div className="flex justify-center items-center text-6xl font-bold relative">
                  <span className="relative z-10 text-text_dark">
                    {inView ? <CountUp end={Number(overallStats?.awards?.count.split("+")[0])} duration={2} /> : "0"}
                    
                  </span>
                  <span className="relative z-10 text-text_dark ml-1">{"+"}</span>
                  <span className="absolute w-10 h-10 bg-secondary group-hover:-translate-y-[70%] transition-all rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0"></span>
                </div>
                <div className="mt-2 text-base font-semibold tracking-wide text-text_dark uppercase">
                  {overallStats?.awards?.title?.en}
                </div>
              </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Counter;
