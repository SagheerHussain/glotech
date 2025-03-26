import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion"; // using framer-motion
import { cn } from "../../lib/utils"; // ensure this utility exists or remove it
import { PiMouseSimpleThin } from "react-icons/pi";

const StickyScroll = ({ content, contentClassName }) => {
  const [activeCard, setActiveCard] = useState(0);
  const [showScrollIcon, setShowScrollIcon] = useState(true);
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    container: ref,
    offset: ["start start", "end start"],
  });

  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      },
      0
    );
    setActiveCard(closestBreakpointIndex);

    // ✅ Control arrow visibility
    if (latest > 0.01) {
      setShowScrollIcon(false);
    } else {
      setShowScrollIcon(true);
    }
  });

  const backgroundColors = ["#111111", "#111111", "#111111"];
  const linearGradients = [
    "linear-gradient(to bottom right, #06b6d4, #10b981)",
    "linear-gradient(to bottom right, #ec4899, #6366f1)",
    "linear-gradient(to bottom right, #f97316, #eab308)",
  ];

  const [backgroundGradient, setBackgroundGradient] = useState(
    linearGradients[0]
  );

  useEffect(() => {
    setBackgroundGradient(linearGradients[activeCard % linearGradients.length]);
    console.log(activeCard, scrollYProgress);
  }, [activeCard]);

  return (
    <motion.div
      animate={{
        backgroundColor: backgroundColors[activeCard % backgroundColors.length],
      }}
      className="relative flex h-[325px] justify-between overflow-y-auto rounded-md"
      ref={ref}
    >
      <motion.div
        className="absolute bottom-0 left-[50%] -translate-x-[50%]"
        animate={{ opacity: showScrollIcon ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="arrow bounce">
          <PiMouseSimpleThin
            className="bounce text-white rotate-90"
            size={32}
          />
        </div>
      </motion.div>

      <div className="relative flex items-start">
        <div className="w-full">
          {content.map((item, index) => (
            <div key={item.title + index} className="my-20 flex">
              <div className="icon me-5">{item.icon}</div>
              <div className="content">
                <motion.h2
                  initial={{ opacity: 0 }}
                  animate={{ opacity: activeCard === index ? 1 : 0.3 }}
                  className="text-2xl font-bold text-slate-100"
                >
                  {item.title}
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: activeCard === index ? 1 : 0.3 }}
                  className="mt-3 max-w-xl text-slate-300"
                >
                  {item.description}
                </motion.p>
              </div>
            </div>
          ))}
          <div className="h-30" />
        </div>
      </div>

      <div
        style={{ background: backgroundGradient }}
        className={cn(
          "sticky top-10 hidden w-80 h-80 overflow-hidden rounded-md bg-white lg:block",
          contentClassName
        )}
      >
        {content[activeCard].content ?? null}
      </div>
    </motion.div>
  );
};

export default StickyScroll;
