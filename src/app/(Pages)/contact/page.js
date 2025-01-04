import CommonPagesBanne from '@/app/Commons/CommonPagesBanne'
import Contact from '@/app/Components/Contact/Contact'
import Map from '@/app/Components/Map/Map'
import React from 'react'

const page = () => {
  return (
    <>
      <CommonPagesBanne pageName={"Contact"} pageNameBig={"Contact Us"} />
      <Contact/>
      <Map/>
    </>
  )
}

export default page