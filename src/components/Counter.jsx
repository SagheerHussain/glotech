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
                    {i18n.language === "ar"
                      ? stats?.projectsDelivered?.title?.ar
                      : i18n.language === "fr"
                      ? stats?.projectsDelivered?.title?.fr
                      : stats?.projectsDelivered?.title?.en}
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
                    {i18n.language === "ar"
                      ? stats?.divisions?.title?.ar
                      : i18n.language === "fr"
                      ? stats?.divisions?.title?.fr
                      : stats?.divisions?.title?.en}
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
                    {i18n.language === "ar"
                      ? stats?.clients?.title?.ar
                      : i18n.language === "fr"
                      ? stats?.clients?.title?.fr
                      : stats?.clients?.title?.en}
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
                    {i18n.language === "ar"
                      ? stats?.awards?.title?.ar
                      : i18n.language === "fr"
                      ? stats?.awards?.title?.fr
                      : stats?.awards?.title?.en}
                  </div>
                </div>
              </>
            ) : (
              stats?.map((stat) => (
                <>
                  <div className="text-center group">
                    <div className="flex justify-center items-center text-6xl font-bold relative">
                      <span className="relative z-10 text-text_dark">
                        {inView ? (
                          <CountUp
                            end={Number(stat?.statOne?.count)}
                            duration={2}
                          />
                        ) : (
                          "0"
                        )}
                      </span>
                      <span className="relative z-10 text-text_dark ml-1">
                        {stat?.statOne?.symbol}
                      </span>
                      <span className="absolute w-10 h-10 bg-secondary group-hover:-translate-y-[70%] transition-all rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0"></span>
                    </div>
                    <div className="mt-2 text-base font-semibold tracking-wide text-text_dark uppercase">
                      {i18n.language === "ar"
                        ? stat?.statOne?.title?.ar
                        : i18n.language === "fr"
                        ? stat?.statOne?.title?.fr
                        : stat?.statOne?.title?.en}
                    </div>
                  </div>
                  <div className="text-center group">
                    <div className="flex justify-center items-center text-6xl font-bold relative">
                      <span className="relative z-10 text-text_dark">
                        {inView ? (
                          <CountUp
                            end={Number(stat?.statTwo?.count)}
                            duration={2}
                          />
                        ) : (
                          "0"
                        )}
                      </span>
                      <span className="relative z-10 text-text_dark ml-1">
                        {stat?.statTwo?.symbol}
                      </span>
                      <span className="absolute w-10 h-10 bg-secondary group-hover:-translate-y-[70%] transition-all rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0"></span>
                    </div>
                    <div className="mt-2 text-base font-semibold tracking-wide text-text_dark uppercase">
                      {i18n.language === "ar"
                        ? stat?.statTwo?.title?.ar
                        : i18n.language === "fr"
                        ? stat?.statTwo?.title?.fr
                        : stat?.statTwo?.title?.en}
                    </div>
                  </div>
                  <div className="text-center group">
                    <div className="flex justify-center items-center text-6xl font-bold relative">
                      <span className="relative z-10 text-text_dark">
                        {inView ? (
                          <CountUp
                            end={Number(stat?.statThree?.count)}
                            duration={2}
                          />
                        ) : (
                          "0"
                        )}
                      </span>
                      <span className="relative z-10 text-text_dark ml-1">
                        {stat?.statThree?.symbol}
                      </span>
                      <span className="absolute w-10 h-10 bg-secondary group-hover:-translate-y-[70%] transition-all rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0"></span>
                    </div>
                    <div className="mt-2 text-base font-semibold tracking-wide text-text_dark uppercase">
                      {i18n.language === "ar"
                        ? stat?.statThree?.title?.ar
                        : i18n.language === "fr"
                        ? stat?.statThree?.title?.fr
                        : stat?.statThree?.title?.en}
                    </div>
                  </div>
                  <div className="text-center group">
                    <div className="flex justify-center items-center text-6xl font-bold relative">
                      <span className="relative z-10 text-text_dark">
                        {inView ? (
                          <CountUp
                            end={Number(stat?.statFour?.count)}
                            duration={2}
                          />
                        ) : (
                          "0"
                        )}
                      </span>
                      <span className="relative z-10 text-text_dark ml-1">
                        {stat?.statFour?.symbol}
                      </span>
                      <span className="absolute w-10 h-10 bg-secondary group-hover:-translate-y-[70%] transition-all rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0"></span>
                    </div>
                    <div className="mt-2 text-base font-semibold tracking-wide text-text_dark uppercase">
                      {i18n.language === "ar"
                        ? stat?.statFour?.title?.ar
                        : i18n.language === "fr"
                        ? stat?.statFour?.title?.fr
                        : stat?.statFour?.title?.en}
                    </div>
                  </div>
                </>
              ))
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Counter;
