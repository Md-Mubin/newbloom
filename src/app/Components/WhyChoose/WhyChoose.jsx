import React from 'react'
import './WhyChoose.css'
import CommonWhyChooseCard from '@/app/Commons/CommonWhyChooseCard'

const WhyChoose = () => {
    return (
        <>
            <section className='whyChooseSection'>
                <div className="container">
                    <ul className='whyChooseHead'>
                        <img src="/whyChooseImg.png" alt="image" />
                        <h1>Why Choose NewBloom?</h1>
                        <p>NewBloom is your trusted partner for a smooth, secure, and joyful surrogacy journey in Georgia. Here's why:</p>
                    </ul>

                    <ul className='whyChooseCardsRow'>
                        <CommonWhyChooseCard
                            commonCardHead={"Quick Surrogate Matching"}
                            commonCardInfo1={"Start your family journey without delays:"}
                            commonCardInfo2={"Access a network of pre-screened surrogate mothers through our trusted clinic partners."}
                            commonCardInfo3={"Fast and efficient surrogate matching process."}
                            commonCardInfo4={"Minimal waiting times for a seamless experience."}
                            commonCardDot2={"•"}
                            commonCardDot3={"•"}
                            commonCardDot4={"•"} />

                        <CommonWhyChooseCard
                            commonCardHead={"Guaranteed Baby Program"}
                            commonCardInfo1={"Experience peace of mind with our unique program."}
                            commonCardInfo2={"Guaranteed successful outcomes for your surrogacy journey."}
                            commonCardInfo3={"No hidden fees or unexpected financial surprises."}
                            commonCardInfo4={"Focus on the joy of parenthood while we handle the challenges."}
                            commonCardDot1={"•"}
                            commonCardDot2={"•"}
                            commonCardDot3={"•"}
                            commonCardDot4={"•"} />

                        <CommonWhyChooseCard
                            commonCardHead={"Expert Legal Support"}
                            commonCardInfo1={"We specialize in managing the legal aspects of surrogacy in Georgia:"}
                            commonCardInfo2={"Drafting secure, legally binding contracts."}
                            commonCardInfo3={"Ensuring parental rights for intended parents in your home country."}
                            commonCardInfo4={"Full compliance with Georgian surrogacy laws for total peace of mind."}
                            commonCardDot2={"•"}
                            commonCardDot3={"•"}
                            commonCardDot4={"•"} />
                    </ul>
                </div>
            </section>
        </>
    )
}

export default WhyChoose