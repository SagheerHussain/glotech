import React, { useEffect, useState } from "react";
import react from "/Images/technologies/website_development/reactjs.webp";
import angular from "/Images/technologies/website_development/angular.webp";
import html from "/Images/technologies/website_development/html5.webp";
import css from "/Images/technologies/website_development/css.webp";
import javascript from "/Images/technologies/website_development/javascript.webp";
import jquery from "/Images/technologies/website_development/jquery.webp";
import node from "/Images/technologies/website_development/node.webp";
import php from "/Images/technologies/website_development/php.webp";
import postgres from "/Images/technologies/website_development/postgre.webp";
import python from "/Images/technologies/website_development/python.webp";
import mongodb from "/Images/technologies/website_development/mongodb.webp";
import mySql from "/Images/technologies/website_development/mysql.webp";
import aws from "/Images/technologies/website_development/aws-2.webp";
import google_cloud from "/Images/technologies/website_development/google_cloud.webp";
import apple_objective from "/Images/technologies/app_development/apple_objective.webp";
import cpluscplus from "/Images/technologies/app_development/cplusplus.webp";
import csharp from "/Images/technologies/app_development/csharp.webp";
import java from "/Images/technologies/app_development/java.webp";
import kotlin from "/Images/technologies/app_development/kotlin.webp";
import flutter from "/Images/technologies/app_development/Flutter.webp";
import swift from "/Images/technologies/app_development/swift.webp";
import ionic from "/Images/technologies/app_development/Ionic.webp";
import labelBox from "/Images/technologies/data_analytics/labelbox.png";
import excel from "/Images/technologies/data_analytics/excel.png";
import powerBi from "/Images/technologies/data_analytics/power bi.png";
import spacy from "/Images/technologies/data_analytics/spacy.png";
import superAnnotate from "/Images/technologies/data_analytics/super annotate.png";
import vision_ai from "/Images/technologies/data_analytics/vision_ai.png";
import { Trans } from "react-i18next";

const Technologies = ({ params, filteredService }) => {
  const [currentStack, setCurrentStack] = useState({});

  const technologies = [
    {
      category: "web-development",
      src: [
        { icon: react, title: "React Js" },
        { icon: node, title: "Node Js" },
        { icon: angular, title: "Angular" },
        { icon: html, title: "HTML" },
        { icon: css, title: "CSS" },
        { icon: javascript, title: "JavaScript" },
        { icon: jquery, title: "jQuery" },
        { icon: php, title: "PHP" },
        { icon: postgres, title: "PostgreSQL" },
        { icon: python, title: "Python" },
        { icon: mongodb, title: "MongoDB" },
        { icon: mySql, title: "MySQL" },
        { icon: aws, title: "AWS" },
        { icon: google_cloud, title: "Google Cloud" },
      ],
    },
    {
      category: "app-development",
      src: [
        { icon: apple_objective, title: "Objective C" },
        { icon: flutter, title: "Flutter" },
        { icon: swift, title: "Swift" },
        { icon: ionic, title: "Ionic" },
        { icon: kotlin, title: "Kotlin" },
        { icon: java, title: "Java" },
        { icon: javascript, title: "JavaScript" },
        { icon: jquery, title: "jQuery" },
        { icon: php, title: "PHP" },
        { icon: postgres, title: "PostgreSQL" },
        { icon: python, title: "Python" },
        { icon: mongodb, title: "MongoDB" },
        { icon: mySql, title: "MySQL" },
        { icon: aws, title: "AWS" },
        { icon: google_cloud, title: "Google Cloud" },
      ],
    },
    {
      category: "data-analytics",
      src: [
        { icon: labelBox, title: "LabelBox" },
        { icon: excel, title: "Excel" },
        { icon: powerBi, title: "Power BI" },
        { icon: spacy, title: "Spacy" },
        { icon: superAnnotate, title: "Super Annotate" },
        { icon: vision_ai, title: "Vision AI" },
      ],
    },
  ];

  useEffect(() => {
    const filteredTechnology = technologies.find(
      (technology) => technology.category === params
    );
    setCurrentStack(filteredTechnology);
  }, [params]);

  console.log("current tack", currentStack);

  return (
    <>
      <section id="technologies" className="py-20">
        <div className="container">
          <div className="flex lg:flex-row flex-col items-center pb-20 gap-8">
            <h2 className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold lg:text-start text-center">
              {filteredService?.why_choose?.technologies?.title && (
                <Trans
                  components={{
                    1: (
                      <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text" />
                    ),
                  }}
                >
                  {filteredService.why_choose.technologies.title}
                </Trans>
              )}
            </h2>
            <p className="text-text_light text-center lg:text-start">
              {filteredService?.why_choose?.technologies?.description}
            </p>
          </div>

          <div className="grid grid-cols-3 sm:grid-cols-6 md:grid-cols-7 lg:grid-cols-8 xl:grid-cols-9 gap-12">
            {currentStack?.src?.map(({ icon, title }) => (
              <div>
                <img src={icon} className="max-w-[90px] mx-auto" alt="" />
                <h4 className="text-white text-center font-medium mt-2">{title}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Technologies;
