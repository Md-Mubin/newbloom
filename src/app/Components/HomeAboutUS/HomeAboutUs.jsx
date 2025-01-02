import React from 'react'
import './HomeAboutUs.css'

const HomeAboutUs = () => {
    return (
        <>
            <section className='homeAboutUsSection'>
                <div className="container">
                    <ul className="homeAboutUsRow">
                        <li>
                            <img src="/homeAboutSection_images.png" alt="images" />
                        </li>

                        <li className='homeAboutUsSectionInfos'>
                            <h6>About Us</h6>
                            <h1>Together, We Make Parenthood Possible</h1>
                            <p>
                                <span>NewBloom is a Georgian surrogacy agency created to fulfill the wishes of parents and bring their lifelong dreams to life.</span>
                                We know how deeply you wish to hold your baby in your arms and how vital this journey is to you. Surrogacy is more than a service—it's a personal journey filled with hope, love, and the desire to build a family. At NewBloom, we believe everyone deserves the joy of becoming a parent. Therefore, our mission is to provide surrogacy services that are swift, supportive, and fully transparent.
                            </p>
                            <button>Learn More</button>
                        </li>
                    </ul>
                </div>
            </section>
        </>
    )
}

export default HomeAboutUs