import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { MdOutlineMenu } from "react-icons/md";
import { AiOutlineCloseCircle } from "react-icons/ai";
import Drawer from 'react-modern-drawer'; // Ensure this import exists
import 'react-modern-drawer/dist/index.css'; // Make sure to import the CSS for styling


import { logo } from './Images/Image';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const menuItem = [
        { name: 'HOME', path: '/' },
        { name: 'PRODUCT', path: '/products' },
        { name: 'ABOUT', path: '/about' },
        { name: 'CONTACT', path: '/contact' },
    ];

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            <div className="container sm:py-[25px] py-[12px] px-7 2xl:px-0 flex justify-between items-center border-b">
                <Link to="/" className='w-20 flex items-center justify-center bg-transparent z-10'>
                    <img src={logo} alt="Logo" className="mix-blend-screen" />
                </Link>
                <div className="lg:hidden">
                    <button onClick={toggleMenu} className="text-gray_text bg-transparent focus:outline-none">
                        {isOpen ? '' : <MdOutlineMenu className='text-[35px] text-seconderyGreen ' />}
                    </button>
                </div>
                <div className={`hidden lg:flex`}>
                    <ul className='flex gap-4 font-semibold text-xl'>
                        {menuItem.map((item, index) => (
                            <li key={index} className='lg:text-[18px] md:text-[16px] font-semibold text-gray_text hover:underline font-poppins   duration-300'>
                                <NavLink
                                    to={item.path}
                                    className={({ isActive }) => (isActive ? 'text-seconderyGreen' : 'text-gray_text')}
                                >
                                    {item.name}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Mobile Menu with React Modern Drawer */}
            <Drawer
                open={isOpen}
                onClose={toggleMenu}
                direction='right'
                className='drawer bg-white'>
                <div className="flex flex-col p-4 bg-white h-full">
                    <button onClick={toggleMenu} className='bg-transparent fixed top-2 right-7'>
                        <AiOutlineCloseCircle className='text-[35px] text-seconderyGreen' />
                    </button>
                    <ul className='flex flex-col gap-4 z-[999] mt-5'>
                        {menuItem.map((item, index) => (
                            <li key={index} className='text-lg font-semibold text-gray_text hover:text-seconderyGreen duration-300'>
                                <Link to={item.path} onClick={toggleMenu}>{item.name}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </Drawer>
        </div>
    );
};

export default Navbar;
