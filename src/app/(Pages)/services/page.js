import CommonPagesBanne from '@/app/Commons/CommonPagesBanne'
import OurServices from '@/app/Components/OurServices/OurServices'
import SurrogacyPackage from '@/app/Components/SurrogacyPackage/SurrogacyPackage'
import React from 'react'

const page = () => {
  return (
    <>
      <CommonPagesBanne pageName={"Service"} pageNameBig={"Service"} />
      <OurServices/>
      <SurrogacyPackage/>
    </>
  )
}

export default page