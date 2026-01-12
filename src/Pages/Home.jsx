import React from 'react'
import HeroSection from '../Components/molecules/HeroSection'
import WhatWeOffer from '../Components/molecules/WhatWeOffer'

function Home() {
  return (
    <>
      <section id="home">
        <HeroSection />
      </section>
      <section id="services">
        <WhatWeOffer />
      </section>
    </>
  )
}

export default Home