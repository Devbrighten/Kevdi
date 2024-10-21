import React from 'react';
import { Link } from 'react-router-dom';
import { GiAppleSeeds } from "react-icons/gi";

const Footer = () => {
    return (
        <div>
            <footer className='mt-10 p-5 text-white text-center bottom-0 w-[100%] lg:bottom-0 bg-gradient ' >
                <div className='flex sm:flex-row justify-start flex-col gap-[15px] sm:gap-0 sm:justify-between items-start sm:items-center container'>
                    <div>
                        <h2 className='sm:text-[35px] text-[22px] font-bold mb-2 flex items-center gap-2 justify-center sm:justify-start'>
                            <GiAppleSeeds className='' /> KEVDI
                        </h2>
                        <p className='mb-1'>Lorem ipsum dolor sit amet. <br />Lorem ipsum dolor sit amet. <br />Lorem ipsum dolor sit amet.</p>
                        <div className='flex gap-x-3 mt-3'>
                            <Link to="" className='text-[29px] hover:text-gray-200 transition duration-300'><i className="fa fa-facebook-official" aria-hidden="true"></i></Link>
                            <Link to="" className='text-[29px] hover:text-gray-200 transition duration-300'><i className="fa fa-twitter" aria-hidden="true"></i></Link>
                            <Link to="" className='text-[29px] hover:text-gray-200 transition duration-300'><i className="fa fa-linkedin-square" aria-hidden="true"></i></Link>
                        </div>
                    </div>

                    <div className='flex flex-col items-start'>
                        <h2 className='sm:text-lg text-[22px] font-bold mb-2'>Policies</h2>
                        <div>
                            <ul className='flex flex-col gap-y-2 text-start'>
                                <li className='hover:text-gray-200 transition duration-200 cursor-pointer'>Terms & Conditions</li>
                                <li className='hover:text-gray-200 transition duration-200 cursor-pointer'>Return Policy</li>
                                <li className='hover:text-gray-200 transition duration-200 cursor-pointer'>Accessibility</li>
                                <li className='hover:text-gray-200 transition duration-200 cursor-pointer'>Privacy</li>
                            </ul>
                        </div>
                    </div>

                    <div className='flex flex-col items-start mt-[10px]  '>
                        <h2 className='sm:text-lg text-[22px] font-bold mb-2 '>Our Info</h2>
                        <div className='flex flex-col gap-y-2 text-start'>
                            <p className='hover:text-gray-200 transition duration-200 cursor-pointer'>+91 9974870436</p>
                            <p className='hover:text-gray-200 transition duration-200 cursor-pointer'>Kevdiveggies@gmail.com</p>
                            <p className='hover:text-gray-200 transition duration-200 cursor-pointer'>123, New Street, USA.</p>
                        </div>
                    </div>
                </div>

                <div className='border-t-[1px] mt-[15px] pt-[15px]'>
                    <Link to="https://brightensolutions.com/" className='sm:text-[18px] text-[14px] font-roboto hover:text-gray-200 transition duration-300'>
                        <p>Copyright © 2016-24 brighten solutions | All Right Reserved</p>
                    </Link>
                </div>
            </footer>
        </div>
    );
}

export default Footer;
