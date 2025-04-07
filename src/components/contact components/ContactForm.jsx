import React from "react";
import { FaLocationCrosshairs } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import Button from "../Button";

const ContactForm = () => {
  return (
    <>
      <section id="contact" className="py-20 bg-[#111]">
        <div className="container bg-[#222]">
          <div className="grid grid-cols-2 px-8 py-16 gap-4">
            <div className="contact-info">
              <h1 className="text-5xl font-bold text-white">Contact Us</h1>
              <p className="text-white text-sm py-6 leading-loose">
                Have a question that can’t be handled by our support staff? Fill
                this form below and we will get back to you as soon as we can.
                If you’re looking for assistance regarding your service or
                account at Godlike.host, please contact us via an appropriate
                support channel at our support portal.
              </p>
              <div className="contact_info_location py-4">
                <div className="flex">
                  <FaLocationCrosshairs size={24} className="text-white" />
                  <p className="text-white ms-4">
                    Hunaid City Gulistan-e-Johar Block 17 Karachi.
                  </p>
                </div>
                <div className="flex py-6">
                  <FaPhoneAlt size={24} className="text-white" />
                  <p className="text-white ms-4">+92 312 1234567.</p>
                </div>
                <div className="flex">
                  <AiOutlineMail size={24} className="text-white" />
                  <p className="text-white ms-4">contact@glotech.com.</p>
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
            <div className="contact_form bg-[#333] px-6 py-8 rounded-[15px]">
              <form action="">
                <div className="name">
                  <label
                    htmlFor="name"
                    className="text-text_light text-sm pb-2 inline-block"
                  >
                    Name*
                  </label>
                  <input
                    type="text"
                    className="w-full block bg-[#222] px-4 py-2 rounded-[5px] focus:outline-none focus:text-white"
                    placeholder="Name"
                  />
                </div>
                <div className="email pt-4">
                  <label
                    htmlFor="email"
                    className="text-text_light text-sm pb-2 inline-block"
                  >
                    Email*
                  </label>
                  <input
                    type="email"
                    className="w-full block bg-[#222] px-4 py-2 rounded-[5px] focus:outline-none focus:text-white"
                    placeholder="Email"
                  />
                </div>
                <div className="subject pt-4">
                  <label
                    htmlFor="subject"
                    className="text-text_light text-sm pb-2 inline-block"
                  >
                    Subject*
                  </label>
                  <input
                    type="text"
                    className="w-full block bg-[#222] px-4 py-2 rounded-[5px] focus:outline-none focus:text-white"
                    placeholder="Subject"
                  />
                </div>
                <div className="message pt-4">
                  <label
                    htmlFor="message"
                    className="text-text_light text-sm pb-2 inline-block"
                  >
                    Message*
                  </label>
                  <textarea
                    className="w-full block bg-[#222] px-4 py-2 h-[150px] rounded-[5px] focus:outline-none focus:text-white"
                    placeholder="Message"
                  ></textarea>
                  <div className="mt-4">
                    <Button label="Send Message" />
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
