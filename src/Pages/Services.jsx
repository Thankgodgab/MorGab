import React from 'react'
import BreadcrumbHeader from '../Components/organisms/BreadcrumbHeader'
import ServiceSection from '../Components/organisms/ServiceSection'

function Services() {
  return (
    <>
      <BreadcrumbHeader title="Our Services" path={["Services"]} />
      <ServiceSection />
    </>
  )
}

export default Services