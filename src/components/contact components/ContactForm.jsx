import React, { useState } from "react";
import { FaLocationCrosshairs } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import Button from "../Button";
import Swal from "sweetalert2";
import { BeatLoader } from "react-spinners";

const ContactForm = () => {
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

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
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Form submission failed. Please try again!",
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

  return (
    <>
      <section id="contact" className="py-20 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 px-8 py-16 gap-4 bg-[#ddd] rounded-[10px]">
            <div className="contact-info">
              <h1 className="text-5xl font-bold text-dark">Contact Us</h1>
              <p className="text-dark text-sm py-6 leading-loose">
                Have a question that can’t be handled by our support staff? Fill
                this form below and we will get back to you as soon as we can.
                If you’re looking for assistance regarding your service or
                account at Godlike.host, please contact us via an appropriate
                support channel at our support portal.
              </p>
              <div className="contact_info_location py-4">
                <div className="flex">
                  <FaLocationCrosshairs size={24} className="text-primary" />
                  <p className="text-dark ms-4">
                    Hunaid City Gulistan-e-Johar Block 17 Karachi.
                  </p>
                </div>
                <div className="flex py-6">
                  <FaPhoneAlt size={24} className="text-primary" />
                  <p className="text-dark ms-4">+92 312 1234567.</p>
                </div>
                <div className="flex">
                  <AiOutlineMail size={24} className="text-primary" />
                  <p className="text-dark ms-4">contact@glotech.com.</p>
                </div>
              </div>
              <div className="pt-4">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3618.6637132310398!2d67.11840167644404!3d24.909449943293474!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb338e02cf4dc85%3A0x8eb0b6c37d200f42!2sHunaid%20City!5e0!3m2!1sen!2s!4v1743954906628!5m2!1sen!2s"
                  width="100%"
                  height={250}
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  className="rounded-[10px]"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
            <div className="contact_form bg-[#ccc] px-6 py-8 rounded-[15px]">
              <form action="" onSubmit={handleContactForm}>
                <div className="name">
                  <label
                    htmlFor="name"
                    className="text-dark text-sm pb-2 inline-block"
                  >
                    Name*
                  </label>
                  <input
                    type="text"
                    name="name"
                    className="w-full block bg-transparent border-[1px] border-[#999] px-4 py-2 rounded-[5px] focus:outline-none text-dark"
                    placeholder="Name"
                  />
                </div>
                <div className="email pt-4">
                  <label
                    htmlFor="email"
                    className="text-dark text-sm pb-2 inline-block"
                  >
                    Email*
                  </label>
                  <input
                    type="email"
                    name="email"
                    className="w-full block bg-transparent border-[1px] border-[#999] px-4 py-2 rounded-[5px] focus:outline-none text-dark"
                    placeholder="Email"
                  />
                </div>
                <div className="subject pt-4">
                  <label
                    htmlFor="subject"
                    className="text-dark text-sm pb-2 inline-block"
                  >
                    Subject*
                  </label>
                  <input
                    type="text"
                    name="subject"
                    className="w-full block bg-transparent border-[1px] border-[#999] px-4 py-2 rounded-[5px] focus:outline-none text-dark"
                    placeholder="Subject"
                  />
                </div>
                <div className="message pt-4">
                  <label
                    htmlFor="message"
                    className="text-dark text-sm pb-2 inline-block"
                  >
                    Message*
                  </label>
                  <textarea
                    name="message"
                    className="w-full block bg-transparent border-[1px] border-[#999] px-4 py-2 h-[150px] rounded-[5px] focus:outline-none text-dark"
                    placeholder="Message"
                  ></textarea>
                  <div className="mt-4">
                    {loading ? (
                      <div className="bg-gradient-to-r from-primary to-secondary inline-block px-16 py-[.6rem] rounded-[25px]">
                        <BeatLoader size={12} color="#fff" />
                      </div>
                    ) : (
                      <Button label={"Send Message"} />
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
