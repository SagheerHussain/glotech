"use client";
import React, { useRef, useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

export const TextHoverEffect = ({ text, duration = 0, className = "text-[3rem]" }) => {
  const svgRef = useRef(null);
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);
  const [maskPosition, setMaskPosition] = useState({ cx: "50%", cy: "50%" });

  const springCx = useSpring(50, { duration, ease: "easeOut" });
  const springCy = useSpring(50, { duration, ease: "easeOut" });

  useEffect(() => {
    if (svgRef.current && cursor.x !== null && cursor.y !== null) {
      const svgRect = svgRef.current.getBoundingClientRect();
      const cxPercentage = ((cursor.x - svgRect.left) / svgRect.width) * 100;
      const cyPercentage = ((cursor.y - svgRect.top) / svgRect.height) * 100;
      setMaskPosition({
        cx: `${cxPercentage}%`,
        cy: `${cyPercentage}%`,
      });

      springCx.set(cxPercentage);
      springCy.set(cyPercentage);
    }
  }, [cursor]);

  return (
    <svg
      ref={svgRef}
      width="100%"
      height="100%"
      viewBox="0 0 300 100"
      xmlns="http://www.w3.org/2000/svg"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onMouseMove={(e) => setCursor({ x: e.clientX, y: e.clientY })}
      className="select-none"
    >
      <defs>
        <linearGradient id="textGradient" gradientUnits="userSpaceOnUse">
          {hovered && (
            <>
              <stop offset="0%" stopColor="#111" />
              <stop offset="25%" stopColor="#111" />
              <stop offset="50%" stopColor="#222" />
              <stop offset="75%" stopColor="#111" />
              <stop offset="100%" stopColor="#111" />
            </>
          )}
        </linearGradient>

        <radialGradient
          id="revealMask"
          gradientUnits="userSpaceOnUse"
          r="20%"
          cx={maskPosition.cx}
          cy={maskPosition.cy}
        >
          <stop offset="0%" stopColor="white" />
          <stop offset="100%" stopColor="black" />
        </radialGradient>

        <mask id="textMask">
          <rect x="0" y="0" width="100%" height="100%" fill="url(#revealMask)" />
        </mask>
      </defs>

      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        strokeWidth="0.3"
        className={`fill-transparent stroke-secondary font-[helvetica] ${className} font-bold dark:stroke-neutral-800`}
        style={{ opacity: hovered ? 0.7 : 0 }}
      >
        {text}
      </text>

      <motion.text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        strokeWidth="0.3"
        className={`fill-transparent stroke-secondary font-[helvetica] ${className} font-bold dark:stroke-neutral-800`}
        initial={{ strokeDashoffset: 1000, strokeDasharray: 1000 }}
        animate={{
          strokeDashoffset: 0,
          strokeDasharray: 1000,
        }}
        transition={{
          duration: 4,
          ease: "easeInOut",
        }}
      >
        {text}
      </motion.text>

      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        stroke="url(#textGradient)"
        strokeWidth="0.3"
        mask="url(#textMask)"
        className={`fill-transparent font-[helvetica] font-bold ${className}`}
      >
        {text}
      </text>
    </svg>
  );
};
