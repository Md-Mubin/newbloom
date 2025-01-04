import React from 'react'
import { MdOutlineKeyboardDoubleArrowRight } from 'react-icons/md'

const CommonPagesBanne = ({pageName, pageNameBig}) => {
    return (
        <>
            <section className={`w-full py-[125px] bg-[url("/commonBanner_bg.png")] bg-cover bg-center bg-no-repeat`}>
                <div className="container">
                    <ul className='flex flex-col items-center'>
                        <li  className='flex items-center font-normal text-xl text-[#fff]'>Home <MdOutlineKeyboardDoubleArrowRight className='text-2xl mt-1'/> {pageName}</li>
                        <li className='mt-4 font-bold text-[72px] text-[#fff]'>{pageNameBig}</li>
                    </ul>
                </div>
            </section>
        </>
    )
}

export default CommonPagesBanne