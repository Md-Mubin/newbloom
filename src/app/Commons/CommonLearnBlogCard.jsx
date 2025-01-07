import React from 'react'

const CommonLearnBlogCard = ({ commonLearnBlogHead, commonLearnBlogImg, commonLearnBlogInfo }) => {
    return (
        <>
            <ul className=' w-full lg:w-[425px] rounded-xl bg-[#fff] shadow-xl'>
                <img src={commonLearnBlogImg} alt="image" className='w-full'/>
                <ul className='p-5'>
                    <li className='font-semibold text-xl text-[#212D3A]'>{commonLearnBlogHead}</li>
                    <li className='mt-4 font-normal text-[16px] text-[#211c1db6]'>{commonLearnBlogInfo}</li>
                    <button className='text-[#7F39B1] font-medium text-[16px] mt-10'>Read More →</button>
                </ul>
            </ul>
        </>
    )
}

export default CommonLearnBlogCard