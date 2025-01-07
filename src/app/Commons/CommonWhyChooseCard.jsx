import React from 'react'

const CommonWhyChooseCard = ({commonCardHead, commonCardDot1, commonCardDot2, commonCardDot3, commonCardDot4, commonCardInfo1, commonCardInfo2, commonCardInfo3, commonCardInfo4}) => {
    return (
        <>
            <ul className='w-full lg:w-[424px] px-6 pt-[37px] pb-5 lg:pb-[81px] bg-[#F6F6F6] rounded-xl hover:bg-[#e7e7e7] duration-300 hover:translate-y-[-4px] hover:shadow-xl cursor-default'>
                <li className='font-bold text-2xl text-[#211C1D] mb-6'>{commonCardHead}</li>
                <li className='flex items-center gap-3 text-[16px] font-normal text-[#211c1db5]'> <span className='text-[#7f39b1] text-3xl'>{commonCardDot1}</span> {commonCardInfo1}</li>
                <li className='flex items-center gap-3 mt-[18px] text-[16px] font-normal text-[#211c1db5]'> <span className='text-[#7f39b1] text-3xl'>{commonCardDot2}</span> {commonCardInfo2}</li>
                <li className='flex items-center gap-3 mt-[18px] text-[16px] font-normal text-[#211c1db5]'> <span className='text-[#7f39b1] text-3xl'>{commonCardDot3}</span> {commonCardInfo3}</li>
                <li className='flex items-center gap-3 mt-[18px] text-[16px] font-normal text-[#211c1db5]'> <span className='text-[#7f39b1] text-3xl'>{commonCardDot4}</span> {commonCardInfo4}</li>
            </ul>
        </>
    )
}

export default CommonWhyChooseCard