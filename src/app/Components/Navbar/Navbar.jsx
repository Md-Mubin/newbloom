"use client"
import React from 'react'
import './Navbar.css'
import Link from 'next/link'
import ResponisveNav from './ReponsiveNav/ResponisveNav'

const Navbar = () => {

    return (
        <>
            {/* ======================= Navbar Part Start ======================= */}
            <nav>
                <div className="container">
                    <ul className='navRow'>
                        <img src="/logo.png" alt="logo_image" />
                        <ul className='navItemsRow'>
                            <Link href={"/"}>Home</Link>
                            <Link href={"/aboutUs"}>About us</Link>
                            <Link href={"/services"}>Services</Link>
                            <Link href={"/faqs"}>FAQs</Link>
                            <Link href={"/blog"}>Blog</Link>
                        </ul>
                        <Link href={"/contact"} className='contactButton'>Contact Us</Link>
                    </ul>
                </div>
                <ResponisveNav />
            </nav>
            {/* ======================= Navbar Part End ======================= */}
        </>
    )
}

export default Navbar