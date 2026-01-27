import React from 'react'
import HeroSection from '../Components/organisms/HeroSection'
import PartnerSection from '../Components/organisms/PartnerSection'
import WhatWeOffer from '../Components/organisms/OfferSection'
import AboutSection from '../Components/organisms/AboutSection'
import WhyChooseUs from '../Components/organisms/WhyChooseUs'
import ServiceTicker from '../Components/organisms/ServiceTicker'
import ProjectSection from '../Components/organisms/ProjectSection'
import TeamSectionHome from '../Components/organisms/TeamSectionHome'
import TestimonialSection from '../Components/organisms/TestimonialSection'
import ContactSection from '../Components/organisms/ContactSection'

function Home() {
  return (
    <>
      <section id="home">
        <HeroSection />
        <PartnerSection />
      </section>
      <section id="services">
        <WhatWeOffer />
      </section>
      <section id="about">
        <AboutSection />
      </section>
      <section id="choose-us">
        <WhyChooseUs />
        <ServiceTicker />
      </section>
      <section id="projects">
        <ProjectSection />
      </section>
      <section id="team">
        <TeamSectionHome />
      </section>
      <section id="testimonies">
        <TestimonialSection />
      </section>
      <ContactSection />
    </>
  )
}

export default Home