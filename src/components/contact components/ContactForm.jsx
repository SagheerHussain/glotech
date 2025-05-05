import React, { useState, useEffect } from "react";
import { FaLocationCrosshairs } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import Button from "../Button";
import Swal from "sweetalert2";
import { BeatLoader } from "react-spinners";
import { useTranslation } from "react-i18next";
import { getContacts } from "../../services/contact";

const ContactForm = () => {
  const { t, i18n } = useTranslation();

  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const [contact, setContact] = useState({});

  // Submit Form
  const handleContactForm = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      // Step 2: Proceed with form submission only if reCAPTCHA is verified
      const formData = new FormData(event.target);
      formData.append("access_key", "e074078e-7716-4aaa-9995-7c06c9183dfe");

      const object = Object.fromEntries(formData);

      const json = JSON.stringify(object);

      const formResponse = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      });

      const formResult = await formResponse.json();

      if (formResult.success) {
        Swal.fire({
          icon: "success",
          title: "Successfully sent your form",
          timer: 1000,
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Form submission failed. Please try again!",
          timer: 1000,
        });
      }

      setLoading(false);
    } catch (error) {
      console.error("Error:", error);
      setLoading(false);
      Swal.fire({
        icon: "error",
        title: "An error occurred. Please try again later.",
      });
    }
  };

  const getData = async () => {
    const { data } = await getContacts();
    setContact(data[0]);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <section id="contact" className="py-20 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 px-8 py-16 gap-4 bg-[#ddd] rounded-[10px]">
            <div className="contact-info">
              <h1 className="text-5xl font-bold text-dark">
                {t("contact-page-components.title")}
              </h1>
              <p className="text-dark text-sm py-6 leading-loose">
                {t("contact-page-components.description")}
              </p>
              <div className="contact_info_location py-4">
                <div className="flex">
                  <FaLocationCrosshairs size={24} className="text-primary" />
                  <p className="text-dark ms-4">
                    {i18n.language === "ar"
                      ? contact?.location?.ar
                      : i18n.language === "fr"
                      ? contact?.location?.fr
                      : contact?.location?.en}
                  </p>
                </div>
                <a href="tel:+966115123177" className="flex py-6">
                  <FaPhoneAlt size={24} className="text-primary" />
                  <p
                    className="text-dark ms-4"
                    style={{ direction: "ltr", margin: "0 1rem" }}
                  >
                    {contact?.phone}
                  </p>
                </a>
                <a href="mailto:info@glotech-ksa.com" className="flex">
                  <AiOutlineMail size={24} className="text-primary" />
                  <p className="text-dark ms-4">{contact?.email}</p>
                </a>
              </div>
              <div className="pt-4">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d463877.3124267603!2d46.492884444110445!3d24.725455373183237!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f03890d489399%3A0xba974d1c98e79fd5!2sRiyadh%20Saudi%20Arabia!5e0!3m2!1sen!2s!4v1744788141010!5m2!1sen!2s"
                  width="100%"
                  height={250}
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
            <div className="contact_form bg-[#fff] px-6 py-8 rounded-[15px]">
              <form action="" onSubmit={handleContactForm}>
                <div className="name">
                  <label
                    htmlFor="name"
                    className="text-dark text-sm pb-2 inline-block"
                  >
                    {t("contact-page-components.form.name")}*
                  </label>
                  <input
                    type="text"
                    name="name"
                    className="w-full block bg-transparent border-[1px] border-[#999] px-4 py-2 rounded-[5px] focus:outline-none text-dark"
                    placeholder={t("contact-page-components.form.name")}
                  />
                </div>
                <div className="email pt-4">
                  <label
                    htmlFor="email"
                    className="text-dark text-sm pb-2 inline-block"
                  >
                    {t("contact-page-components.form.email")}*
                  </label>
                  <input
                    type="email"
                    name="email"
                    className="w-full block bg-transparent border-[1px] border-[#999] px-4 py-2 rounded-[5px] focus:outline-none text-dark"
                    placeholder={t("contact-page-components.form.email")}
                  />
                </div>
                <div className="subject pt-4">
                  <label
                    htmlFor="subject"
                    className="text-dark text-sm pb-2 inline-block"
                  >
                    {t("contact-page-components.form.subject")}*
                  </label>
                  <input
                    type="text"
                    name="subject"
                    className="w-full block bg-transparent border-[1px] border-[#999] px-4 py-2 rounded-[5px] focus:outline-none text-dark"
                    placeholder={t("contact-page-components.form.subject")}
                  />
                </div>
                <div className="message pt-4">
                  <label
                    htmlFor="message"
                    className="text-dark text-sm pb-2 inline-block"
                  >
                    {t("contact-page-components.form.message")}*
                  </label>
                  <textarea
                    name="message"
                    className="w-full block bg-transparent border-[1px] border-[#999] px-4 py-2 h-[150px] rounded-[5px] focus:outline-none text-dark"
                    placeholder={t("contact-page-components.form.message")}
                  ></textarea>
                  <div className="mt-4">
                    {loading ? (
                      <div className="bg-gradient-to-r from-primary to-secondary inline-block px-16 py-[.6rem] rounded-[25px]">
                        <BeatLoader size={12} color="#fff" />
                      </div>
                    ) : (
                      <Button label={t("buttons.send-message")} />
                    )}
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactForm;
