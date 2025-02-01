import React, { useState } from 'react'
import './ResponsiveNav.css'
import Link from 'next/link'
import { HiOutlineBars4 } from "react-icons/hi2";

const ResponisveNav = () => {

    const [navOpen, setNavOpen] = useState(false)

    return (
        <>
            {/* ======================= Responsive Navbar Part Start ======================= */}
            <nav className='resNavRow'>
                <div className="container">
                    <ul className='resNav'>
                        <img src="/logo.png" alt="logo_image" />
                        <button onClick={() => setNavOpen(!navOpen)}><HiOutlineBars4 /></button>
                    </ul>
                </div>
                <ul className={`resNavItemsRow ${navOpen ? "z-[-1] opacity-0 translate-y-[-200px]" : "opacity-100 duration-500"}`}>
                    <Link href={"/"}>Home</Link>
                    <Link href={"/aboutUs"}>About us</Link>
                    <Link href={"/services"}>Services</Link>
                    <Link href={"/faqs"}>FAQs</Link>
                    <Link href={"/registration"}>Registration</Link>
                    <Link href={"/blog"}>Blog</Link>
                </ul>
            </nav>
            {/* ======================= Responsive Navbar Part End ======================= */}
        </>
    )
}

export default ResponisveNav