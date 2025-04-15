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
import barcodeOne from "/Images/Services Images/asset/barcode.jpg"
import barcodeTwo from "/Images/Services Images/asset/rfid.jpg"
import mobileAssetOne from "/Images/Services Images/asset/mobile-asset-tracking.png"
import mobileAssetTwo from "/Images/Services Images/asset/mobile-asset.jpg"
import centralAssetOne from "/Images/Services Images/asset/central-asset-db.png"
import centralAssetTwo from "/Images/Services Images/asset/central-asset.png"
import geoTaggingOne from "/Images/Services Images/asset/geo-tagg.jpg"
import geoTaggingTwo from "/Images/Services Images/asset/geo-tagging.jpg"
import automatedReportOne from "/Images/Services Images/asset/automated-report.png"
import automatedReportTwo from "/Images/Services Images/asset/automated-reports.png"
import visualizationOne from "/Images/Services Images/data-analytics/visualization.jpg"
import visualizationTwo from "/Images/Services Images/data-analytics/visualization.png"
import predictionOne from "/Images/Services Images/data-analytics/predict.jpg"
import predictionTwo from "/Images/Services Images/data-analytics/predictive.jpg"
import ETLOne from "/Images/Services Images/data-analytics/ETL.webp"
import ETLTwo from "/Images/Services Images/data-analytics/ETL-service.webp"
import cleanOne from "/Images/Services Images/data-analytics/data-clean.jpg"
import cleanTwo from "/Images/Services Images/data-analytics/data-clean.png"
import customReportOne from "/Images/Services Images/data-analytics/custom-report.jpg"
import customReportTwo from "/Images/Services Images/data-analytics/custom-reports.jpg"
import attendenceOne from "/Images/Services Images/hr-management/attendence.jpg"
import attendenceTwo from "/Images/Services Images/hr-management/attendence.png"
import onboaringOne from "/Images/Services Images/hr-management/onboarding.jpg"
import onboaringTwo from "/Images/Services Images/hr-management/onboarding.png"
import leaveOne from "/Images/Services Images/hr-management/leave.jpeg"
import leaveTwo from "/Images/Services Images/hr-management/leave.jpg"
import performanceOne from "/Images/Services Images/hr-management/performance.jpg"
import performanceTwo from "/Images/Services Images/hr-management/performance-review.jpg"
import taskOne from "/Images/Services Images/project-management/task.webp"
import taskTwo from "/Images/Services Images/project-management/task-track.webp"
import payrollOne from "/Images/Services Images/payroll/payroll_processing.jpg"
import payrollTwo from "/Images/Services Images/payroll/payroll_processing.webp"
import taxOne from "/Images/Services Images/payroll/tax.jpeg"
import taxTwo from "/Images/Services Images/payroll/tax.jpg"
import payslipOne from "/Images/Services Images/payroll/payslip.jpg"
import payslipTwo from "/Images/Services Images/payroll/payslip (2).jpg"
import contentOne from "/Images/Services Images/marketing/content-creation.jpg"
import contentTwo from "/Images/Services Images/marketing/content-creation (2).jpg"
import socialOne from "/Images/Services Images/marketing/social.png"
import socialTwo from "/Images/Services Images/marketing/social.webp"
import cloudOne from "/Images/Services Images/cloud/storage.jpg"
import cloudTwo from "/Images/Services Images/cloud/storage (2).jpg"
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
        visualizationOne,
        visualizationTwo,
        predictionOne,
        predictionTwo,
        ETLOne,
        ETLTwo,
        cleanOne,
        cleanTwo,
        customReportOne,
        customReportTwo
      ],
    },
    {
      category: "asset-tagging",
      src: [
        barcodeOne,
        barcodeTwo,
        mobileAssetOne,
        mobileAssetTwo,
        centralAssetOne,
        centralAssetTwo,
        geoTaggingOne,
        geoTaggingTwo,
        automatedReportOne,
        automatedReportTwo
      ],
    },
    {
      category: "hr-management",
      src: [
        onboaringOne,
        onboaringTwo,
        attendenceOne,
        attendenceTwo,
        leaveOne,
        leaveTwo,
        performanceOne,
        performanceTwo,
        automatedReportOne,
        automatedReportTwo
      ],
    },
    {
      category: "project-management",
      src: [
        taskOne,
        taskTwo,
        mobileAssetOne,
        mobileAssetTwo,
        centralAssetOne,
        centralAssetTwo,
        geoTaggingOne,
        geoTaggingTwo,
        automatedReportOne,
        automatedReportTwo
      ],
    },
    {
      category: "payroll-outsourcing",
      src: [
        payrollOne,
        payrollTwo,
        taxOne,
        taxTwo,
        payslipOne,
        payslipTwo,
        geoTaggingOne,
        geoTaggingTwo,
        automatedReportOne,
        automatedReportTwo
      ],
    },
    {
      category: "digital-marketing",
      src: [
        seoOne,
        seoTwo,
        contentOne,
        contentTwo,
        socialOne,
        socialTwo,
        visualizationOne,
        visualizationTwo,
        customReportOne,
        customReportTwo
      ],
    },
    {
      category: "cyber-security",
      src: [
        securityOne,
        securityTwo,
        onboaringOne,
        onboaringTwo,
        cloudOne,
        cloudTwo,
        predictionOne,
        predictionTwo,
        securityOne,
        securityTwo
      ],
    },
    {
      category: "artificial-intelligence",
      src: [
        deploymentOne,
        deploymentTwo,
        onboaringOne,
        onboaringTwo,
        cloudOne,
        cloudTwo,
        predictionOne,
        predictionTwo,
        securityOne,
        securityTwo
      ],
    },
    {
      category: "it-services",
      src: [
        deploymentOne,
        deploymentTwo,
        onboaringOne,
        onboaringTwo,
        cloudOne,
        cloudTwo,
        predictionOne,
        predictionTwo,
        securityOne,
        securityTwo
      ],
    },
    {
      category: "cloud-services",
      src: [
        deploymentOne,
        deploymentTwo,
        onboaringOne,
        onboaringTwo,
        cloudOne,
        cloudTwo,
        predictionOne,
        predictionTwo,
        securityOne,
        securityTwo
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
            <h1 className="text-text_dark text-3xl font-bold mb-2">
              {commitment.subTitle || commitment.title}
            </h1>
            <p className="text-text_dark text-sm md:text-base lg:text-lg font-normal mb-8">
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
      <section id="commitment" className="py-20 bg-[#fff] overflow-hidden">
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
