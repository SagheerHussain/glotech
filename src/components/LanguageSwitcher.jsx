import React from "react";
import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    document.documentElement.dir = lng === "ar" ? "rtl" : "ltr"; // RTL for Arabic
  };

  const languages = [
    { label: "English", key: "english", value: "en" },
    { label: "العربية", key: "arabic", value: "ar" },
    { label: "Français", key: "french", value: "fr" },
  ];

  return (
    <select
      className="px-6 py-3 bg-[#171717] text-white rounded-[25px]"
      onChange={(e) => changeLanguage(e.target.value)}
      value={i18n.language}
    >
      {languages.map((language) => (
        <option value={language.value} key={language.key}>
          {language.label}
        </option>
      ))}
    </select>
  );
};

export default LanguageSwitcher;
