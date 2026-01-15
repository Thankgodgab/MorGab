import React from 'react'
import HeroSection from '../Components/molecules/HeroSection'
import PartnerSection from '../Components/molecules/PartnerSection'
import WhatWeOffer from '../Components/molecules/WhatWeOffer'
import AboutSection from '../Components/molecules/AboutSection'
import WhyChooseUs from '../Components/molecules/WhyChooseUs'
import ServiceTicker from '../Components/molecules/ServiceTicker'
import Project from '../Components/molecules/Project'
import TeamSection from '../Components/molecules/TeamSection'
import Testimonies from '../Components/molecules/Testimonies'

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
        <Project />
      </section>
      <section id="team">
        <TeamSection />
      </section>
      <section id="testimonies">
        <Testimonies />
      </section>
    </>
  )
}



export default Home