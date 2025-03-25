import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import getUserLocation from "./components/getUserLocation"; // Import location function

import en from "./languages/en.json";
import ar from "./languages/ar.json";
import fr from "./languages/fr.json";

const initializeLanguage = async () => {
  try {
    const userLocation = await getUserLocation();
    let detectedLang = "en"; // Default language

    if (userLocation) {
      const country = userLocation.country;
      if (country === "SA" || country === "AE" || country === "EG") {
        detectedLang = "ar"; // Set Arabic for Saudi Arabia, UAE, Egypt
      } else if (country === "FR" || country === "CA") {
        detectedLang = "fr"; // Set French for France, Canada
      }
    }

    i18n.changeLanguage(detectedLang);
    document.documentElement.dir = detectedLang === "ar" ? "rtl" : "ltr";
  } catch (error) {
    console.error("Language detection failed:", error);
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      ar: { translation: ar },
      fr: { translation: fr },
    },
    fallbackLng: "en",
    interpolation: { escapeValue: false },
  });

initializeLanguage(); // Run function to set default language

export default i18n;
