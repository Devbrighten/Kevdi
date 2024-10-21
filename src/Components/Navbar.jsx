import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { MdOutlineMenu } from "react-icons/md";
import { AiOutlineCloseCircle } from "react-icons/ai";
// Import the Drawer component
import Drawer from 'react-drawer';
import 'react-drawer/lib/react-drawer.css';
import { logo } from './Images/Image'
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const menuItem = [
        { name: 'HOME', path: '/' },
        { name: 'PRODUCT', path: '/products' },
        { name: 'ABOUT', path: '/about' },
        // { name: 'SERVICE', path: '/service' },
        { name: 'CONTACT', path: '/contact' },
    ];
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    return (
        <div>
            <div className="container py-[25px] px-7 2xl:px-0 flex justify-between items-center border-b">
                <Link to="/" className='w-20 flex items-center justify-center bg-transparent'>
                    <img
                        src={logo}
                        alt="Logo"
                        className="mix-blend-screen"
                    />
                </Link>
                <div className="lg:hidden">
                    <button onClick={toggleMenu} className="text-gray_text bg-transparent focus:outline-none">
                        {isOpen ? '' : <MdOutlineMenu className='text-[35px] text-seconderyGreen ' />}
                    </button>
                </div>
                <div className={`hidden lg:flex `}>
                    <ul className='flex gap-4 font-semibold text-xl'>
                        {menuItem.map((item, index) => (
                            <li key={index} className='lg:text-[18px] md:text-[16px] font-semibold text-gray_text hover:underline  duration-300'>
                                <NavLink to={item.path}
                                    className={({ isActive }) => (isActive ? 'text-seconderyGreen' : 'text-gray_text')}
                                >
                                    {item.name}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            {/* Mobile Menu */}
            <Drawer open={isOpen} onClose={() => setIsOpen(false)} styles={{ drawer: { zIndex: 20 } }}>
                <div className="flex flex-col p-4 bg-white h-full ">
                    <button onClick={toggleMenu} className='bg-transparent fixed top-2 right-7'><AiOutlineCloseCircle className='text-[35px]  text-seconderyGreen ' /></button>
                    <ul className='flex flex-col gap-4 z-[999] mt-5'>
                        {menuItem.map((item, index) => (
                            <li key={index} className='text-lg font-semibold text-gray_text hover:text-seconderyGreen duration-300'>
                                <Link to={item.path} onClick={() => setIsOpen(false)}>{item.name}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </Drawer>
        </div>
    );
};

export default Navbar;
