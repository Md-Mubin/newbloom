import CommonPagesBanne from '@/app/Commons/CommonPagesBanne'
import OurTeam from '@/app/Components/OurTeam/OurTeam'
import ParentHood from '@/app/Components/ParentHood/ParentHood'
import StartJourney from '@/app/Components/StartJourney/StartJourney'
import React from 'react'

const page = () => {
  return (
    <>
      <CommonPagesBanne pageName={"About Us"} pageNameBig={"About Us"} />
      <ParentHood />
      <OurTeam />
      <StartJourney />
    </>
  )
}

export default page