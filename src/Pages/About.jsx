import React from 'react'
import BreadcrumbHeader from '../Components/organisms/BreadcrumbHeader'
import AboutSection2 from '../Components/organisms/AboutSection2'
import AboutFeatures from '../Components/organisms/AboutFeatures'
import TestimonialSection from '../Components/organisms/TestimonialSection'

function About() {
  return (
    <>
      <BreadcrumbHeader title="About Us" path={["About Us"]} />
      <AboutSection2 />
      <AboutFeatures />
      <TestimonialSection />
    </>
  )
}

export default About