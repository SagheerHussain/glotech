import React from "react";
import CountUp from "react-countup";
import { useTranslation } from "react-i18next";
import { useInView } from "react-intersection-observer";

const Counter = ({ stats }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.6, // Adjust as needed
  });

  const { t, i18n } = useTranslation();

  return (
    <>
      <section id="stats" className="bg-[#ddd]">
        <div className="container">
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 py-10"
            ref={ref}
          >
            {stats?.projectsDelivered ? (
              <>
                <div className="text-center group">
                  <div className="flex justify-center items-center text-6xl font-bold relative">
                    <span className="relative z-10 text-text_dark">
                      {inView ? (
                        <CountUp
                          end={Number(
                            stats?.projectsDelivered?.count.split("+")[0]
                          )}
                          duration={2}
                        />
                      ) : (
                        "0"
                      )}
                    </span>
                    <span className="relative z-10 text-text_dark ml-1">
                      {"+"}
                    </span>
                    <span className="absolute w-10 h-10 bg-secondary group-hover:-translate-y-[70%] transition-all rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0"></span>
                  </div>
                  <div className="mt-2 text-base font-semibold tracking-wide text-text_dark uppercase">
                    {stats?.projectsDelivered?.title?.en}
                  </div>
                </div>
                <div className="text-center group">
                  <div className="flex justify-center items-center text-6xl font-bold relative">
                    <span className="relative z-10 text-text_dark">
                      {inView ? (
                        <CountUp
                          end={Number(stats?.divisions?.count.split("+")[0])}
                          duration={2}
                        />
                      ) : (
                        "0"
                      )}
                    </span>
                    <span className="relative z-10 text-text_dark ml-1">
                      {"+"}
                    </span>
                    <span className="absolute w-10 h-10 bg-secondary group-hover:-translate-y-[70%] transition-all rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0"></span>
                  </div>
                  <div className="mt-2 text-base font-semibold tracking-wide text-text_dark uppercase">
                    {stats?.divisions?.title?.en}
                  </div>
                </div>
                <div className="text-center group">
                  <div className="flex justify-center items-center text-6xl font-bold relative">
                    <span className="relative z-10 text-text_dark">
                      {inView ? (
                        <CountUp
                          end={Number(stats?.clients?.count.split("+")[0])}
                          duration={2}
                        />
                      ) : (
                        "0"
                      )}
                    </span>
                    <span className="relative z-10 text-text_dark ml-1">
                      {"+"}
                    </span>
                    <span className="absolute w-10 h-10 bg-secondary group-hover:-translate-y-[70%] transition-all rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0"></span>
                  </div>
                  <div className="mt-2 text-base font-semibold tracking-wide text-text_dark uppercase">
                    {stats?.clients?.title?.en}
                  </div>
                </div>
                <div className="text-center group">
                  <div className="flex justify-center items-center text-6xl font-bold relative">
                    <span className="relative z-10 text-text_dark">
                      {inView ? (
                        <CountUp
                          end={Number(stats?.awards?.count.split("+")[0])}
                          duration={2}
                        />
                      ) : (
                        "0"
                      )}
                    </span>
                    <span className="relative z-10 text-text_dark ml-1">
                      {"+"}
                    </span>
                    <span className="absolute w-10 h-10 bg-secondary group-hover:-translate-y-[70%] transition-all rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0"></span>
                  </div>
                  <div className="mt-2 text-base font-semibold tracking-wide text-text_dark uppercase">
                    {stats?.awards?.title?.en}
                  </div>
                </div>
              </>
            ) : (
              stats?.map((stat) => (
                <div className="text-center group">
                <div className="flex justify-center items-center text-6xl font-bold relative">
                  <span className="relative z-10 text-text_dark">
                    {inView ? (
                      <CountUp
                        end={Number(stat?.count)}
                        duration={2}
                      />
                    ) : (
                      "0"
                    )}
                  </span>
                  <span className="relative z-10 text-text_dark ml-1">
                    {stat.icon ? stat.icon : "+"}
                  </span>
                  <span className="absolute w-10 h-10 bg-secondary group-hover:-translate-y-[70%] transition-all rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0"></span>
                </div>
                <div className="mt-2 text-base font-semibold tracking-wide text-text_dark uppercase">
                  {stat?.title}
                </div>
              </div>
              ))
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Counter;
