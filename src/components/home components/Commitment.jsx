import React from "react";
import { Timeline } from "../ui/timeline";
import commitmentOne from "/Images/commitment/commitment (1).jpg";
import commitmentTwo from "/Images/commitment/commitment (2).jpg";
import commitmentThree from "/Images/commitment/commitment (3).jpg";
import commitmentFour from "/Images/commitment/commitment (4).jpg";
import commitmentFive from "/Images/commitment/commitment (5).jpg";
import commitmentSix from "/Images/commitment/commitment (6).jpg";
import commitmentSeven from "/Images/commitment/commetment (7).webp";
import commitmentEight from "/Images/commitment/commitment (8).jpg";
import { useTranslation } from "react-i18next";
import { MdVerified } from "react-icons/md";
import { IoMdHappy } from "react-icons/io";
import { Ri24HoursLine } from "react-icons/ri";
import { FaMedal } from "react-icons/fa6";

export function Commitment() {
  const { t } = useTranslation();

  const icons = [
    { icon: <MdVerified /> },
    { icon: <Ri24HoursLine /> },
    { icon: <IoMdHappy /> },
    { icon: <FaMedal /> },
  ];

  const services = t("home-page-components.commitment", {
    returnObjects: true,
  });

  const images = [
    commitmentOne,
    commitmentTwo,
    commitmentThree,
    commitmentFour,
    commitmentFive,
    commitmentSix,
    commitmentSeven,
    commitmentEight,
  ];

  // Data For Timeline
  const data = services.map((commitment, index) => {
    const image1 = images[index * 2]; // 0, 2, 4, 6
    const image2 = images[index * 2 + 1]; // 1, 3, 5, 7

    return {
      title: commitment.title,
      content: (
        <div>
          <h1 className="text-dark text-3xl font-bold mb-2">
            {commitment.subTitle}
          </h1>
          <p className="text-dark text-sm md:text-base lg:text-lg font-normal mb-8">
            {commitment.description}
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src={image1}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[...]"
              alt=""
              loading="lazy"
            />
            <img
              src={image2}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[...]"
              alt=""
              loading="lazy"
            />
          </div>
        </div>
      ),
    };
  });

  return (
    <>
      <section id="commitment" className=" bg-white overflow-hidden">
        <div className="container">
          <Timeline
            data={data}
            icons={icons}
            title={t("home-page-components.commitment_intro.title")}
            description={t("home-page-components.commitment_intro.description")}
          />
        </div>
      </section>
    </>
  );
}
