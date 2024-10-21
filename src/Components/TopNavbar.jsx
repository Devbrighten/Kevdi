import React from 'react'
import { FaWhatsappSquare } from "react-icons/fa";
const TopNavbar = () => {
    return (
        <div className='bg-gradient'>
            <div className="container flex md:flex-row flex-col justify-between items-center py-3 md:py-4 px-6 2xl:px-0">

                {/* Email Section */}
                <div className='flex items-center gap-[5px]'>
                    <a href="mailto:mail@ankitchaudhari.info" className="flex items-center gap-[5px]">
                        <p className='text-white sm:text-[25px]'>
                            <i className="fa fa-envelope" aria-hidden="true"></i>
                        </p>
                        <p className='text-white   sm:text-[20px] '>  adminUsertest1234@gmail.com</p>
                    </a>
                </div>

                {/* Phone number Section */}
                <div className='flex items-center gap-[5px]'>
                    <a href="tel:+919974870436" className="flex items-center gap-[5px]">
                        <p className='text-white sm:text-[25px]'>
                            <i className="fa fa-phone-square" aria-hidden="true"></i>
                        </p>
                        <p className='text-white  sm:text-[18px] '> +91 8756932121 </p>
                    </a>
                </div>

                {/* Whatsapp Section */}
                <div className='flex items-center justify-center gap-[5px]'>
                    <a href="
                     https://wa.me/919974870436"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-[5px]">
                        <p className='text-white sm:text-[27px]'>
                            <FaWhatsappSquare />
                        </p>
                        <p className='text-white  sm:text-[18px] '> Connect With Whatsapp  </p>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default TopNavbar

