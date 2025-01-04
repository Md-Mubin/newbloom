"use client"
import React, { useState } from 'react'
import './Contact.css'
import { BsTelephone } from "react-icons/bs";
import { LuMailOpen, LuMapPin } from 'react-icons/lu';

const Contact = () => {

    const [form, setForm] = useState({ name: "", number: "", email: "", subject: "", text: "" })
    const [formError, setFormError] = useState({ nameError: "", numberError: "", emailError: "", subjectError: "", textError: "" })

    const handleSubmit = (e) => {
        e.preventDefault()

        if (!form.name) {
            setFormError((prev) => ({ ...prev, nameError: "Please Enter Your Name" }))
        }
        if (!form.number) {
            setFormError((prev) => ({ ...prev, numberError: "Please Enter Your Number" }))
        }
        if (!form.email) {
            setFormError((prev) => ({ ...prev, emailError: "Please Enter Your Email" }))
        }
        if (!form.subject) {
            setFormError((prev) => ({ ...prev, subjectError: "Please Enter Your Subject" }))
        }
        if (!form.text) {
            setFormError((prev) => ({ ...prev, textError: "Please Enter Massages" }))
        }
    }

    return (
        <>
            <section className='contactSection'>
                <div className="container">
                    <ul className='contactPartRow'>
                        <ul className='contactInfoCol'>
                            <h2>Contact info</h2>
                            <p>NewBloom is your trusted partner for a smooth, secure, and joyful surrogacy journey in Georgia</p>

                            <li><LuMapPin className='text-[#7F39B1] text-xl' /> Old Westbury 256, New York 11201, United States</li>
                            <li><BsTelephone className='text-[#7F39B1] text-xl' />+995598785151</li>
                            <li><LuMailOpen className='text-[#7F39B1] text-xl' />newbloomagency@gmail.com</li>
                        </ul>

                        <ul className='contactFormCol'>
                            <h2>Get in Touch</h2>
                            <form onClick={handleSubmit}>
                                <ul className='flex gap-7'>

                                    {/* name part */}
                                    <li className='nameForm'>
                                        <input

                                            type="text"

                                            placeholder='Name'

                                            onChange={(e) => { setForm((prev) => ({ ...prev, name: e.target.value })), setFormError((prev) => ({ ...prev, nameError: "" })) }}

                                        />
                                        <div className='error'>{formError.nameError}</div>
                                    </li>

                                    {/* email part */}
                                    <li className='emailForm'>
                                        <input

                                            type="email"

                                            placeholder='Email'

                                            onChange={(e) => { setForm((prev) => ({ ...prev, email: e.target.value })), setFormError((prev) => ({ ...prev, emailError: "" })) }}

                                        />
                                        <div className='error'>{formError.emailError}</div>
                                    </li>
                                </ul>

                                <ul className='flex gap-7 mt-6'>
                                    {/* phone number part */}
                                    <li className='phoneForm'>
                                        <input

                                            type="number"

                                            placeholder='Phone'

                                            onChange={(e) => { setForm((prev) => ({ ...prev, number: e.target.value })), setFormError((prev) => ({ ...prev, numberError: "" })) }}

                                        />
                                        <div className='error'>{formError.numberError}</div>
                                    </li>

                                    {/* subject part */}
                                    <li className='subjectForm'>
                                        <input

                                            type="text"

                                            placeholder='Your Subject'

                                            onChange={(e) => { setForm((prev) => ({ ...prev, subject: e.target.value })), setFormError((prev) => ({ ...prev, subjectError: "" })) }}

                                        />
                                        <div className='error'>{formError.subjectError}</div>
                                    </li>
                                </ul>

                                {/* text massage part */}
                                <ul className='massagePart'>
                                    <textarea 
                                    
                                    placeholder='Your Massage'
                                    
                                    onChange={(e)=>{setForm((prev)=>({...prev, text: e.target.value})), setFormError((prev)=>({...prev, textError: ""}))}}>
                                    </textarea>
                                    <div className='error'>{formError.textError}</div>
                                </ul>

                                {/* send massage button */}
                                <button className='sendMsgButton'>Send Massage</button>
                            </form>
                        </ul>
                    </ul>
                </div>
            </section>
        </>
    )
}

export default Contact