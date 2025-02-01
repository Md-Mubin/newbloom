import React from 'react'
import './OurServices.css'
import CommonServiceCard from '@/app/Commons/CommonServiceCard'
import { HiOutlineUserGroup } from "react-icons/hi2"
import { MdBabyChangingStation, MdCardTravel, MdOutlineBalance } from 'react-icons/md'
import { LuHandHeart, LuTestTubeDiagonal } from 'react-icons/lu'
import { FaBaby, FaHandHoldingMedical } from 'react-icons/fa'

const OurServices = () => {
    return (
        <>
            {/* ======================= Our Service Part Start ======================= */}
            <section className='ourServiceSection'>
                <div className="container">
                    <h2></h2>
                    <ul className='serviceRow'>
                        <CommonServiceCard serviceIcon={<HiOutlineUserGroup />} serviceName={"Consultation & Planning"} serverInfo={"Personalized guidance on your surrogacy journey, including legal advice, timeline planning, and next steps."} />
                        <CommonServiceCard serviceIcon={<MdOutlineBalance />} serviceName={"Legal Support"} serverInfo={"Draft and finalize contracts while ensuring compliance with Georgian laws. We also help arrange for the birth certificate"} />
                        <CommonServiceCard serviceIcon={<LuHandHeart />} serviceName={"Surrogate Matching"} serverInfo={"Match with pre-screened surrogates through trusted clinic partners."} />
                        <CommonServiceCard serviceIcon={<LuHandHeart />} serviceName={"Egg Donor Matching"} serverInfo={"Connect with pre-screened, trusted egg donors to meet your family-building needs."} />
                        <CommonServiceCard serviceIcon={<FaHandHoldingMedical />} serviceName={"Medical Coordination"} serverInfo={"Partnered with clinics for IVF, embryo transfer, and related medical treatments coordination."} />
                        <CommonServiceCard serviceIcon={<LuTestTubeDiagonal />} serviceName={"Pregnancy Updates"} serverInfo={"Receive regular progress reports and surrogate support throughout the pregnancy."} />
                        <CommonServiceCard serviceIcon={<MdCardTravel />} serviceName={"Travel Assistance"} serverInfo={"Arrange flights and hotel accommodations to ensure a seamless and stress-free journey."} />
                        <CommonServiceCard serviceIcon={<FaBaby />} serviceName={"Birth Assistance"} serverInfo={"Coordinate hospital stays, handle legal paperwork, and arrange parent accommodations for the birth."} />
                        <CommonServiceCard serviceIcon={<MdBabyChangingStation />} serviceName={"Post-Birth Support"} serverInfo={"Help with baby documentation, including passports, and provide guidance for planning future surrogacy journeys."} />
                    </ul>
                </div>
            </section>
            {/* ======================= Our Service Part End ======================= */}
        </>
    )
}

export default OurServices