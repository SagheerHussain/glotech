import React from "react";
import { motion } from "framer-motion"; // Use framer-motion in Vite
import { Link } from "react-router-dom"; // React Router for navigation
import { IoMdArrowDropdown } from "react-icons/io";
import { useTranslation } from "react-i18next";

const transition = {
  type: "spring",
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

export const MenuItem = ({ setActive, active, item, children }) => {
  return (
    <div onMouseEnter={() => setActive(item)} className="relative">
      <motion.p
        transition={{ duration: 0.3 }}
        className="cursor-pointer hover:opacity-[0.9] text-white"
      >
        <span className="flex items-center">{item} <IoMdArrowDropdown className="ms-1 mt-[2px]" /></span>
      </motion.p>
      {active !== null && (
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={transition}
          className="menu_index"
        >
          {active === item && (
            <div className="z-50 absolute top-[calc(100%_+_1.2rem)] left-1/2 transform -translate-x-1/2 pt-4">
              <motion.div
                transition={transition}
                layoutId="active"
                className="bg-[#171717] z-50 backdrop-blur-sm rounded-2xl overflow-hidden border shadow-2xl"
              >
                <motion.div layout className="z-50 w-max h-full">
                  {children}
                </motion.div>
              </motion.div>
            </div>
          )}
        </motion.div>
      )}
    </div>
  );
};

export const Menu = ({ setActive, children }) => {
  return (
    <nav
      onMouseLeave={() => setActive(null)}
      className="relative rounded-[50px] border text-dark bg-gradient-to-r from-primary to-secondary border-secondary shadow-2xl flex justify-center space-x-8 px-8 py-6"
    >
      {children}
    </nav>
  );
};

export const ProductItem = ({ title, description, to, src }) => {
  return (
    <Link to={to} className="flex space-x-2">
      <img
        src={src}
        width={140}
        height={70}
        alt={title}
        className="shrink-0 rounded-md shadow-2xl"
        loading="lazy"
      />
      <div className="px-3">
        <h4 className="text-xl font-bold mb-1 text-dark">
          {title}
        </h4>
        <p className="text-sm max-w-[10rem] text-dark">
          {description}
        </p>
      </div>
    </Link>
  );
};

export const HoveredLink = ({ children, to }) => {

  const { i18n } = useTranslation();

  return (
    <Link
      to={to}
      className={`text-zinc-200 dark:text-neutral-200 hover:text-zinc-300 ${i18n.language === "ar" && children == "عنا" ? "ps-6" : "px-0"}`}
    >
      {children}
    </Link>
  );
};
