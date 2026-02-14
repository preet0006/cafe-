import React from "react";
import { locationsData } from "../utils/constants";
import { cateringData } from "../utils/constants";
import ContactSection from "../components/ContactSection";

const ContactPage = () => {
  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden ">
      <div className=" relative h-[50dvh] w-full text-white text-4xl">
        <img
          src="/texture-light.jpg"
          alt="Contact Background"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="w-full h-80 md:h-96  rounded-lg overflow-hidden">
        <iframe
          title="Our Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.123456!2d90.123456!3d23.123456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c123456789ab%3A0xabcdef1234567890!2sYour%20Place!5e0!3m2!1sen!2sin!4v1691234567890!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <ContactSection
        title={locationsData.title}
        image={locationsData.image}
        sections={locationsData.sections}
      />

      <ContactSection
        title={cateringData.title}
        image={cateringData.image}
        sections={cateringData.sections}
      />
    </div>
  );
};

export default ContactPage;
