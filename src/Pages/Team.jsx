import React from 'react'
import BreadcrumbHeader from '../Components/organisms/BreadcrumbHeader'
import TeamSectionFull from '../Components/organisms/TeamSectionFull'

function Team() {
  return (
    <>
      <BreadcrumbHeader title="Our Team" path={["Team"]} />
      <TeamSectionFull />
    </>
  )
}

export default Team