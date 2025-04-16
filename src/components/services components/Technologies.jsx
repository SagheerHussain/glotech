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
import facebookAd from "/Images/technologies/marketing/facebook-ad.png";
import googleAd from "/Images/technologies/marketing/google_ads.webp";
import canva from "/Images/technologies/marketing/canva.jpg";
import semrush from "/Images/technologies/marketing/semrush.png";
import mailchimp from "/Images/technologies/marketing/mailchimp.png";
import powerpoint from "/Images/technologies/payroll/powerpoint.png";
import word from "/Images/technologies/payroll/word.png";
import azure from "/Images/technologies/cloud/azure.webp";
import postgresSql from "/Images/technologies/cloud/postgresql.webp";
import nginx from "/Images/technologies/cloud/nginx.webp";
import ansible from "/Images/technologies/cloud/ansible.webp";
import claude from "/Images/technologies/ai/claude.webp";
import gemini from "/Images/technologies/ai/gemini.webp";
import dalle from "/Images/technologies/ai/dall_e.webp";
import gpt from "/Images/technologies/ai/gpt_logo.webp";
import llama from "/Images/technologies/ai/llama.webp";
import palm from "/Images/technologies/ai/palm.webp";
import stable from "/Images/technologies/ai/stable.webp";
import whisper from "/Images/technologies/ai/whisper.webp";
import { Trans, useTranslation } from "react-i18next";

const Technologies = ({ params, filteredService }) => {
  const { t } = useTranslation();

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
        { icon: mySql, title: "MySQL" },
        { icon: aws, title: "AWS" },
        { icon: google_cloud, title: "Google Cloud" },
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
    {
      category: "asset-tagging",
      src: [
        { icon: react, title: "React Js" },
        { icon: node, title: "Node Js" },
        { icon: angular, title: "Angular" },
        { icon: html, title: "HTML" },
        { icon: ionic, title: "Ionic" },
        { icon: kotlin, title: "Kotlin" },
        { icon: java, title: "Java" },
        { icon: javascript, title: "JavaScript" },
        { icon: jquery, title: "jQuery" },
        { icon: mySql, title: "MySQL" },
        { icon: aws, title: "AWS" },
        { icon: google_cloud, title: "Google Cloud" },
      ],
    },
    {
      category: "project-management",
      src: [
        { icon: react, title: "React Js" },
        { icon: node, title: "Node Js" },
        { icon: angular, title: "Angular" },
        { icon: html, title: "HTML" },
        { icon: ionic, title: "Ionic" },
        { icon: kotlin, title: "Kotlin" },
        { icon: java, title: "Java" },
        { icon: javascript, title: "JavaScript" },
        { icon: jquery, title: "jQuery" },
        { icon: mySql, title: "MySQL" },
        { icon: aws, title: "AWS" },
        { icon: google_cloud, title: "Google Cloud" },
      ],
    },
    {
      category: "payroll-outsourcing",
      src: [
        { icon: powerpoint, title: "PowerPoint" },
        { icon: excel, title: "Excel" },
        { icon: powerBi, title: "Power BI" },
        { icon: word, title: "Microsoft Word" },
        { icon: superAnnotate, title: "Super Annotate" },
        { icon: vision_ai, title: "Vision AI" },
      ],
    },
    {
      category: "digital-marketing",
      src: [
        { icon: facebookAd, title: "Facebook Ads" },
        { icon: googleAd, title: "Google Ads" },
        { icon: canva, title: "Canva" },
        { icon: semrush, title: "Semrush" },
        { icon: mailchimp, title: "Mailchimp" },
      ],
    },
    {
      category: "cloud-services",
      src: [
        { icon: aws, title: "AWS" },
        { icon: google_cloud, title: "Google Cloud" },
        { icon: azure, title: "Azure" },
        { icon: python, title: "Python" },
        { icon: mySql, title: "MySQL" },
        { icon: postgresSql, title: "PostgreSQL" },
        { icon: mongodb, title: "Mongo DB" },
        { icon: nginx, title: "Nginx" },
        { icon: ansible, title: "Ansible" },
      ],
    },
    {
      category: "artificial-intelligence",
      src: [
        { icon: claude, title: "Claude" },
        { icon: gemini, title: "Gemini" },
        { icon: dalle, title: "Dall-E" },
        { icon: gpt, title: "GPT" },
        { icon: python, title: "Python" },
        { icon: llama, title: "llama" },
        { icon: palm, title: "Palm" },
        { icon: stable, title: "Stable" },
        { icon: whisper, title: "Whisper" },
        { icon: mySql, title: "MySql" },
        { icon: postgres, title: "Postgre Sql" },
      ],
    },
    {
      category: "it-services",
      src: [
        { icon: aws, title: "AWS" },
        { icon: google_cloud, title: "Google Cloud" },
        { icon: azure, title: "Azure" },
        { icon: python, title: "Python" },
        { icon: mySql, title: "MySQL" },
        { icon: postgresSql, title: "PostgreSQL" },
        { icon: mongodb, title: "Mongo DB" },
        { icon: nginx, title: "Nginx" },
        { icon: ansible, title: "Ansible" },
        { icon: word, title: "Word" },
        { icon: powerBi, title: "Power BI" },
        { icon: powerpoint, title: "PowerPoint" },
        { icon: excel, title: "Excel" },
        { icon: vision_ai, title: "Vision AI" },
      ],
    },
  ];

  const services = t("services", {
    returnObjects: true,
  });

  const featuredTechnology = services.filter(
    (service) => service.category === params
  );

  useEffect(() => {
    const filteredTechnology = technologies.find((stack) => stack.category === featuredTechnology[0].category);
    console.log("fitlered technology ====.", filteredTechnology)
    setCurrentStack(filteredTechnology);
  }, [params])

  return (
    <>
      {featuredTechnology[0]?.why_choose?.technologies && (
        <section id="technologies" className="py-20 bg-white">
          <div className="container">
            <div className="flex lg:flex-row flex-col items-center pb-20 gap-8">
              <h2 className="text-text_dark text-3xl sm:text-4xl lg:text-5xl font-bold lg:text-start text-center">
                {featuredTechnology[0]?.why_choose?.technologies?.title && (
                  <Trans
                    components={{
                      1: (
                        <span className="bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text" />
                      ),
                    }}
                  >
                    {featuredTechnology[0]?.why_choose?.technologies?.title}
                  </Trans>
                )}
              </h2>
              <p className="text-text_dark text-center lg:text-start">
                {featuredTechnology[0]?.why_choose?.technologies?.description}
              </p>
            </div>

            <div className="grid grid-cols-3 sm:grid-cols-6 md:grid-cols-7 lg:grid-cols-8 xl:grid-cols-9 gap-12">
              {currentStack?.src?.map(({ icon, title }) => (
                <div>
                  <img src={icon} className="max-w-[100px] object-fit mx-auto" alt="" />
                  <h4 className="text-text_dark text-center font-medium mt-2">
                    {title}
                  </h4>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default Technologies;
