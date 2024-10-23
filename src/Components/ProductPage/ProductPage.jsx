import React from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../Navbar';
import Footer from '../Footer/Footer';
import ButtonElement from '../Elements/ButtonElement';
import WhatsappIcon from '../Elements/WhatsappIcon';

const ProductPage = () => {
    const { state } = useLocation();
    const whatsappLink = `https://wa.me/919429948500`;
    return (
        <div className="">
            <Navbar />
            <div className="mx-5 pt-20">
                <div className="container py-7 px-5 flex flex-col md:flex-row bg-white p-6 mt-10 rounded-lg shadow ">
                    <div className="md:w-1/2 overflow-hidden">
                        <img
                            src={state.image}
                            alt={state.name}
                            className="w-full max-w-[650px] h-full max-h-[433px] object-cover rounded-lg shadow-lg hover:scale-125 duration-500"
                        />
                    </div>
                    <div className="md:w-1/2 md:pl-10 flex flex-col justify-around">
                        <h1 className="text-4xl font-semibold text-seconderyGreen mb-2 font-poppins  mt-4">{state.name}</h1>
                        <p className="text-lg text-gray-600  mb-4 ">{state.info}</p>
                        <div className="">
                            <ul className=" list-inside text-lg text-gray-600 space-y-2  mb-4">
                                <li>✓ Free  Shipping</li>
                                <li>✓ 3 Days Return</li>
                                <li>✓ Member Discount</li>
                            </ul>
                        </div>
                        <p className="text-2xl font-semibold text-seconderyGreen mb-8">{state.price}</p>
                        <ButtonElement text='Buy Now' onClick={() => window.open(whatsappLink)} />
                    </div>
                </div>
            </div>
            <div className="my-16 mx-5 ">
                <div className="container bg-white p-6 shadow rounded-lg">
                    <h2 className="text-2xl font-semibold text-seconderyGreen mb-4">Why Choose Our Products?</h2>
                    <ul className="list-disc list-inside text-lg text-gray-600 space-y-2">
                        <li>100% Organic Food from Farm </li>
                        <li>100% Organic Food</li>
                        <li>100% Fresh, No Chemicals</li>
                    </ul>
                </div>
            </div>
            <Footer />
            <WhatsappIcon />
        </div>
    );
}

export default ProductPage;
