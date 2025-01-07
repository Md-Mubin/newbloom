import React from 'react'

const CommonServiceCard = ({serverInfo, serviceIcon, serviceName}) => {
    return (
        <>
            <ul className=' w-full lg:w-[424px] py-[38px] px-[25px] rounded-xl shadow-[8px_8px_25px_#F4F4F5] group hover:translate-y-[-4px] duration-200'>
                <li className='p-3 w-fit m-auto rounded-full bg-[#F4F4F5] group-hover:bg-[#7F39B1] duration-200'><span className='text-3xl group-hover:text-[#fff] duration-200'>{serviceIcon}</span></li>
                <li className='mt-6 font-bold text-[#211C1D] text-[32px] text-center'>{serviceName}</li>
                <li className='font-normal text-lg text-[#211c1db5] text-center mt-3'>{serverInfo}</li>
            </ul>
        </>
    )
}

export default CommonServiceCard