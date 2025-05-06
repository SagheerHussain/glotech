import React, { useState, useEffect } from "react";
import GaugeChart from "react-gauge-chart";
import { useSpring, animated } from "@react-spring/web";

const Performance = ({ title }) => {
  const [value, setValue] = useState(0.85); // Default: 85% (safe number)

  // Smooth animation using react-spring
  const { animatedValue } = useSpring({
    animatedValue: value,
    config: { tension: 80, friction: 20 },
  });

  useEffect(() => {
    const updateValue = () => {
      const newVal = Math.random() * 0.15 + 0.75; // Between 0.75–0.90
      setValue(parseFloat(newVal.toFixed(2)));
    };

    const interval = setInterval(updateValue, 3000); // update every 3s
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="rounded-xl p-4 bg-white dark:bg-gray-800 w-full md:w-1/3">
      <h2 className="text-lg font-semibold mb-2 text-center text-black dark:text-white">
        {title}
      </h2>

      <GaugeChart
        id={title}
        nrOfLevels={30}
        colors={["#FF4E42", "#FFC107", "#4CAF50"]}
        arcWidth={0.3}
        percent={isNaN(value) ? 0.85 : value}
        textColor="#4CAF50"
      />

      <p className="text-center mt-2 font-semibold text-[#4CAF50] text-2xl dark:text-gray-300">
        <animated.span>
          {animatedValue.to((v) => `${isNaN(v) ? "85" : Math.round(v * 100)}%`)}
        </animated.span>
      </p>
    </div>
  );
};

export default Performance;
