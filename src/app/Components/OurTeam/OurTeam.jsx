import React from 'react'
import './OurTeam.css'
import CommonTeamCard from '@/app/Commons/CommonTeamCard'

const OurTeam = () => {
    return (
        <>
            <section className='ourTeamSection'>
                <div className="container">
                    <ul className='meetOurTeamCol'>
                        <h1>Meet Our Team</h1>

                        {/* ======= teams ======== */}
                        <li className='teamRow'>
                            <CommonTeamCard
                                commonTeamImg={"/founder_img.png"}
                                commonMemberPosition={"Founder"}
                                commonMemberName={"Marcel"}
                                commonMemberInfo={"the visionary behind NewBloom, founded the agency to help families who had lost hope. With expertise and dedication, he ensures every journey is handled with care and compassion, turning parenthood dreams into reality."}
                            />

                            <CommonTeamCard
                                commonTeamImg={"/project_manager_img.png"}
                                commonMemberPosition={"Lead Project Manager"}
                                commonMemberName={"Mariam"}
                                commonMemberInfo={"our lead project manager, is committed to making your surrogacy journey smooth and reassuring. She provides unwavering support and meticulous attention to detail, ensuring you feel cared for at every step.Sales Manager"}
                            />
                        </li>
                        <button>Learn More</button>
                    </ul>
                </div>
            </section>
        </>
    )
}

export default OurTeam