import React from 'react'
import { FaFacebookF, FaLinkedin, FaTwitter } from 'react-icons/fa'

const CommonTeamCard = ({ commonMemberInfo, commonMemberName, commonMemberPosition, commonTeamImg }) => {
    return (
        <>
            <ul className='w-[648px] px-[25px] py-[42px] flex gap-6 items-start bg-[#fff] rounded-xl'>
                <img src={commonTeamImg} alt="team_image" />
                <ul>
                    <li className='font-normal text-lg text-[#211c1db5]'>{commonMemberPosition}</li>
                    <li className='mt-4 font-bold text-[32px] text-[#7F39B1]'>{commonMemberName}</li>
                    <li className='mt-4 font-normal text-[18px] text-[#211c1db5]'>{commonMemberInfo}</li>
                    <li className='mt-4 flex items-center gap-[13px]'>
                        <a href="#" className='p-2 bg-[#7F39B1] text-lg text-[#fff] rounded-full'><FaFacebookF /></a>
                        <a href="#" className='p-2 bg-[#7F39B1] text-lg text-[#fff] rounded-full'><FaTwitter /></a>
                        <a href="#" className='p-2 bg-[#7F39B1] text-lg text-[#fff] rounded-full'><FaLinkedin /></a>
                    </li>
                </ul>
            </ul>
        </>
    )
}

export default CommonTeamCard