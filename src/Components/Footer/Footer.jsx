import React from 'react';
import { Link } from 'react-router-dom';
import { logo } from '../Images/Image';
import { FaWhatsappSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaSquareYoutube } from "react-icons/fa6";
const Footer = () => {
    return (
        <div>
            <footer className='mt-10 p-5 text-white text-center bottom-0 w-[100%] lg:bottom-0 bg-gradient'>
                <div className='flex sm:flex-row justify-start flex-col gap-[15px] sm:gap-0 sm:justify-between items-start sm:items-center container'>
                    <div>
                        <img src={logo} alt="Company Logo" className='green-image w-20 mb-3' />
                        <p className='mb-1 max-w-80 text-start'>
                            Discover the freshest and finest quality produce delivered right to your doorstep.
                            Select from an extensive variety of vegetables at unbeatable prices.
                            We prioritize your satisfaction above all else!
                        </p>
                        <div className='flex items-center gap-x-3 mt-3'>
                            <Link to="" className='text-[28px] relative group'>
                                <i className="fa fa-facebook-official group-hover:translate-y-[-5px]  transition-transform duration-300 ease-in-out" aria-hidden="true"></i>
                            </Link>
                            <Link to="" className='text-[28px] relative group mt-[3px]'>
                                <FaSquareXTwitter className='group-hover:translate-y-[-5px] transition-transform duration-300 ease-in-out' />
                            </Link>
                            <Link to="" className='text-[29px] relative mb-1 group'>
                                <FaSquareYoutube className="fa fa-linkedin-square group-hover:translate-y-[-5px] transition-transform duration-300 ease-in-out" />
                            </Link>
                            <Link to="https://wa.me/919429948500" className='text-[29px] relative group mt-[2px]'>
                                <FaWhatsappSquare className='group-hover:translate-y-[-5px] transition-transform duration-300 ease-in-out' />
                            </Link>
                            <Link to="" className='text-[29px] relative group mt-[1px]'>
                                <FaInstagramSquare className='group-hover:translate-y-[-5px] transition-transform duration-300 ease-in-out' />
                            </Link>
                        </div>
                    </div>

                    <div className='flex flex-col items-start'>
                        <h2 className='sm:text-lg text-[22px] font-bold mb-2'>Our Policies</h2>
                        <div>
                            <ul className='flex flex-col gap-y-2 text-start'>
                                <li className='hover:text-gray-200 transition duration-200 cursor-pointer'>Delivery & Shipping</li>
                                <li className='hover:text-gray-200 transition duration-200 cursor-pointer'>Return & Refund Policy</li>
                                <li className='hover:text-gray-200 transition duration-200 cursor-pointer'>Privacy Policy</li>
                                <li className='hover:text-gray-200 transition duration-200 cursor-pointer'>Terms & Conditions</li>
                            </ul>
                        </div>
                    </div>

                    <div className='flex flex-col items-start mt-[10px]'>
                        <h2 className='sm:text-lg text-[22px] font-bold mb-2'>Contact Us</h2>
                        <div className='flex flex-col gap-y-2 text-start'>
                            <p className='hover:text-gray-200 transition duration-200 cursor-pointer'>+91 9429948500</p>
                            <a href="mailto:Sales@kevdiindustries.in">
                                <p className='hover:text-gray-200 transition duration-200 cursor-pointer'>Sales@kevdiindustries.in</p>
                            </a>
                            {/* <p className='hover:text-gray-200 transition duration-200 cursor-pointer'>123, Fresh Street, New York, USA</p> */}
                        </div>
                    </div>
                </div>

                <div className='border-t-[1px] mt-[15px] pt-[15px]'>
                    <Link to="" className='sm:text-[18px] text-[14px] font-roboto hover:text-gray-200 transition duration-300'>
                        <p>Copyright © Sales@kevdiindustries.in | All Rights Reserved</p>
                    </Link>
                </div>
            </footer>
        </div>
    );
}

export default Footer;
