import React from "react";
import "../App.css";
import { MdArrowOutward } from "react-icons/md";

const Button = ({ label, className = "", ...props }) => {
  return (
    <button className={`cssbuttons-io group ${className}`} {...props}>
      <span>
        {label}
        <MdArrowOutward className={`ml-2 group-hover:rotate-45 transition-all duration-300 ease-in-out`} />
      </span>
    </button>
  );
};

export default Button;
