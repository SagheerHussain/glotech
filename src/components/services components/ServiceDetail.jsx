import React from "react";
import { Timeline } from "../ui/timeline";
import responsiveOne from "/Images/Services Images/website/responsive.avif";
import responsiveTwo from "/Images/Services Images/website/responsive.jfif";
import seoOne from "/Images/Services Images/website/seo.jfif";
import seoTwo from "/Images/Services Images/website/seo.jpg";
import cmsOne from "/Images/Services Images/website/cms.png";
import cmsTwo from "/Images/Services Images/website/cms.webp";
import webAppOne from "/Images/Services Images/website/web-apps.jpg";
import webAppTwo from "/Images/Services Images/website/web-apps.webp";
import securityOne from "/Images/Services Images/website/security.jfif";
import securityTwo from "/Images/Services Images/website/security.png";
import requirementOne from "/Images/Services Images/apps/requirement (1).png"
import requirementTwo from "/Images/Services Images/apps/requirement (2).png"
import designOne from "/Images/Services Images/apps/design (1).png"
import designTwo from "/Images/Services Images/apps/design (2).png"
import crossPlatformOne from "/Images/Services Images/apps/cross-platform.jfif"
import crossPlatformTwo from "/Images/Services Images/apps/cross-platform.png"
import apiOne from "/Images/Services Images/apps/api.jpg"
import apiTwo from "/Images/Services Images/apps/api.png"
import deploymentOne from "/Images/Services Images/apps/deployment (1).png"
import deploymentTwo from "/Images/Services Images/apps/deployment (2).png"
import { useTranslation } from "react-i18next";
import { MdVerified } from "react-icons/md";
import { IoMdHappy } from "react-icons/io";
import { Ri24HoursLine } from "react-icons/ri";
import { FaMedal } from "react-icons/fa6";

export function ServiceDetail({ params }) {
  const { t } = useTranslation();

  const icons = [
    { icon: <MdVerified /> },
    { icon: <Ri24HoursLine /> },
    { icon: <IoMdHappy /> },
    { icon: <FaMedal /> },
    { icon: <FaMedal /> },
  ];

  const services = t("services", {
    returnObjects: true,
  });

  const featuredServices = services.filter(
    (service) => service.category === params
  );

  const images = [
    {
      category: "web-development",
      src: [
        responsiveOne,
        responsiveTwo,
        seoOne,
        seoTwo,
        cmsOne,
        cmsTwo,
        webAppOne,
        webAppTwo,
        securityOne,
        securityTwo,
      ],
    },
    {
      category: "app-development",
      src: [
        requirementOne,
        requirementTwo,
        designOne,
        designTwo,
        crossPlatformOne,
        crossPlatformTwo,
        apiOne,
        apiTwo,
        deploymentOne,
        deploymentTwo
      ],
    },
    {
      category: "data-analytics",
      src: [
        
      ],
    },
  ];

  const filteredImages = images.find((image) => image.category === params);

  // Data For Timeline
  const data = featuredServices[0].features.features_services?.map(
    (commitment, index) => {
      const image1 = filteredImages?.src[index * 2]; // 0, 2, 4, 6
      const image2 = filteredImages?.src[index * 2 + 1]; // 1, 3, 5, 7

      return {
        title: commitment.title,
        content: (
          <div>
            <h1 className="text-white text-3xl font-bold mb-2">
              {commitment.subTitle || commitment.title}
            </h1>
            <p className="text-text_light text-sm md:text-base lg:text-lg font-normal mb-8">
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
    }
  );

  return (
    <>
      <section id="commitment" className="py-20 bg-[#111] overflow-hidden">
        <div className="container">
          <Timeline
            data={data}
            icons={icons}
            title={featuredServices[0].features.title}
            description={featuredServices[0].features.description}
          />
        </div>
      </section>
    </>
  );
}
