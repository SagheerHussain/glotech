import React from "react";
import { Footer, NavigationLayout } from "../components/index";
import { TextHoverEffect } from "../components/ui/TextHoverEffect";
import { Spotlight } from "../components/ui/SpotlightEffect";
import { useTranslation } from "react-i18next";
import ContactForm from "../components/contact components/ContactForm";

const ContactPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <header id="header" className="h-[30vh] sm:h-[40vh] bg-[#111]">
        <NavigationLayout />
        <div className="h-[30vh] sm:h-[40vh] pt-[60px] sm:pt-[120px] w-full rounded-md flex md:items-center md:justify-center bg-[#ddd] antialiased bg-grid-white/[0.02] relative overflow-hidden">
          <Spotlight />
          <div className="container">
            <div className="flex items-center justify-center flex-col h-full w-full">
              <TextHoverEffect
                className="text-[2rem] uppercase"
                text={t("text.contact")}
              />
            </div>
          </div>
        </div>
      </header>
      <main id="main">
        <ContactForm />
      </main>
      <Footer />
    </>
  );
};

export default ContactPage;
