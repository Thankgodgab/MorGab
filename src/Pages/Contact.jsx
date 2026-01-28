import React from 'react'
import BreadcrumbHeader from '../Components/organisms/BreadcrumbHeader'
import ContactSection from '../Components/organisms/ContactSection'

function Contact() {
  return (
    <>
      <BreadcrumbHeader title="Contact Us" path={["Contact"]} />

      {/* Main Contact Section */}
      <ContactSection />

      {/* Google Maps Embed Section */}
      <section className="w-full h-[450px] md:h-[550px] relative overflow-hidden bg-gray-100">
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d158858.11470513903!2d-0.24168051648011266!3d51.528771840889!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondon%2C%20UK!5e0!3m2!1sen!2sng!4v1706314800000!5m2!1sen!2sng"
          width="100%"
          height="100%"
          style={{ border: 0, filter: 'grayscale(0.1) contrast(1.1) brightness(0.95)' }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="grayscale hover:grayscale-0 transition-all duration-700 ease-in-out"
        ></iframe>
      </section>
    </>
  )
}

export default Contact