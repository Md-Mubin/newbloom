"use client"
import React, { useState } from 'react'
import './Footer.css'
import Link from 'next/link'
import { FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa"
import { FaLinkedinIn } from "react-icons/fa"
import { MdKeyboardDoubleArrowRight } from "react-icons/md"
import { FiMapPin } from "react-icons/fi"
import { FiPhone } from "react-icons/fi";
import { LuMailOpen } from "react-icons/lu"

const Footer = () => {

    const [form, setForm] = useState({ name: "", number: "", email: "", text: ""})
    const [formError, setFormError] = useState({ nameError: "", numberError: "", emailError: "", textError : ""})

    const handleSubmit=(e)=>{
        e.preventDefault()

        if(!form.name){
            setFormError((prev)=>({...prev, nameError : "Please Enter Your Name"}))
        }
        if(!form.number){
            setFormError((prev)=>({...prev, numberError : "Please Enter Your Number"}))
        }
        if(!form.email){
            setFormError((prev)=>({...prev, emailError : "Please Enter Your Email"}))
        }
        if(!form.text){
            setFormError((prev)=>({...prev, textError : "Please Enter Massages"}))
        }
    }

    return (
        <>
            <footer>
                <div className="container">
                    <ul className='footerRow'>

                        {/* ================ footer head ================ */}
                        <ul className='footerHead'>
                            <img src="/logo.png" alt="logo_image" />
                            <p>NewBloom is your trusted partner for a smooth, secure, and joyful surrogacy journey in Georgia</p>
                            <li className='socialLinks'>
                                <a href="#"><FaFacebookF /></a>
                                <a href="#"><FaInstagram /></a>
                                <a href="#"><FaLinkedinIn /></a>
                                <a href="#"><FaTwitter /></a>
                                <a href="#"><FaYoutube /></a>
                            </li>
                        </ul>

                        {/* ================ footer usefull links part ================ */}
                        <ul className='footerUsefulLink'>
                            <h2>Useful Links</h2>
                            <Link href={"/"}><MdKeyboardDoubleArrowRight className='text-2xl' /> Home</Link>
                            <Link href={"/services"}><MdKeyboardDoubleArrowRight className='text-2xl' /> Service</Link>
                            <Link href={"/aboutUs"}><MdKeyboardDoubleArrowRight className='text-2xl' /> About us</Link>
                            <Link href={"/blog"}><MdKeyboardDoubleArrowRight className='text-2xl' /> Blog</Link>
                            <Link href={"/contact"}><MdKeyboardDoubleArrowRight className='text-2xl' /> Contact us</Link>
                        </ul>

                        {/* ================ footer address part ================ */}
                        <ul className='footerAddress'>
                            <h2>Our Address</h2>
                            <li className='items-start!'>
                                <FiMapPin className='text-2xl text-[#7F39B1] mt-1' />
                                <span className='w-[220px]'>
                                    Old Westbury 256, New York 11201, United States
                                </span>
                            </li>
                            <li>
                                <FiPhone className='text-2xl text-[#7F39B1]' /> +995598785151
                            </li>
                            <li>
                                <LuMailOpen className='text-2xl text-[#7F39B1]' /> ewbloomagency@gmail.com
                            </li>
                        </ul>

                        {/* ================ footer contact part ================ */}
                        <ul className='foooterContact'>
                            <h2>Contact us</h2>
                            <form onSubmit={handleSubmit} className='contactForm'>

                                {/* name */}
                                <ul>
                                    <input 
                                    
                                    type="text" 
                                    
                                    placeholder='Full Name' 
                                    
                                    onChange={(e)=>{setForm((prev)=>({...prev, name: e.target.value})), setFormError((prev)=>({...prev, nameError: ""}))}}
                                    
                                    />
                                    <li>{formError.nameError}</li>
                                </ul>

                                {/* number */}
                                <ul>
                                    <input 
                                    
                                    type="number" 
                                    
                                    placeholder='Phone Number' 
                                    
                                    onChange={(e)=>{setForm((prev)=>({...prev, number: e.target.value})), setFormError((prev)=>({...prev, numberError: ""}))}}

                                    />
                                    <li>{formError.numberError}</li>
                                </ul>

                                {/* email */}
                                <ul>
                                    <input 
                                    
                                    type="email" 
                                    
                                    placeholder='Email' 
                                    
                                    onChange={(e)=>{setForm((prev)=>({...prev, email: e.target.value})), setFormError((prev)=>({...prev, emailError: ""}))}}

                                    />
                                    <li>{formError.emailError}</li>
                                </ul>

                                {/* text massage */}
                                <ul>
                                    <textarea 
                                    
                                    placeholder='Massage'
                                    
                                    onChange={(e)=>{setForm((prev)=>({...prev, text: e.target.value})), setFormError((prev)=>({...prev, textError: ""}))}}
                                    
                                    ></textarea>
                                    <li>{formError.textError}</li>
                                </ul>
                                <button className='sendMassageBtn'>send massage</button>
                            </form>
                        </ul>

                    </ul>
                </div>

                {/* footer last part */}
                <ul className='footerLastPart'>
                    <div className="container">
                        <ul className='footerLastRow'>
                            <li>Terms and Conditions | Privacy Policy</li>
                            <li>© Copyright | Designed  by Ayeman | All Rights Reserved</li>
                        </ul>
                    </div>
                </ul>
            </footer>
        </>
    )
}

export default Footer
