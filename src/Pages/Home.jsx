import React from 'react'
import HeroSection from '../Components/molecules/HeroSection'
import WhatWeOffer from '../Components/molecules/WhatWeOffer'
import AboutSection from '../Components/molecules/AboutSection'
import WhyChooseUs from '../Components/molecules/WhyChooseUs'
import Project from '../Components/molecules/Project'

function Home() {
  return (
    <>
      <section id="home">
        <HeroSection />
      </section>
      <section id="services">
        <WhatWeOffer />
      </section>
      <section id="about">
        <AboutSection />
      </section>
      <section id="choose-us">
        <WhyChooseUs />
      </section>
      <section id="projects">
        <Project />
      </section>
    </>
  )
}

export default Home