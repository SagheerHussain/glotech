import React from "react";
import { heroBrands } from "../heroBrands";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";

const InfiniteMovingBrands = () => {
  return (
    <>
      <div className="container px-4">
        <h2 className="text-text_light text-[1.7rem] py-6 font-medium leading-snug">
          Trusted by the Top Brands
        </h2>
      </div>
      <InfiniteMovingCards items={heroBrands} direction="left" speed="slow" />
    </>
  );
};

export default InfiniteMovingBrands;
