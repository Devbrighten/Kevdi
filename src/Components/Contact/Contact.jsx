import React from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer/Footer';
import WhatsappIcon from '../Elements/WhatsappIcon';
import ButtonElement from '../Elements/ButtonElement';

const Contact = () => {
    return (
        <div className="bg-gray-50">
            <Navbar />
            <h1 className="text-5xl font-bold  text-center my-10 text-seconderyGreen">Contact us</h1>
            <div className="container mx-auto py-12 px-6 md:px-12 flex justify-between md:flex-row flex-col items-center md:items-start gap-16">

                <div className="md:w-1/2 mb-8">
                    <h2 className="text-3xl font-semibold text-seconderyGreen mb-4">Get in Touch</h2>
                    <p className="text-lg text-gray-700 mb-4">
                        We would love to hear from you! Whether you have questions about our products, need assistance, or just want to say hello, feel free to reach out to us.
                    </p>
                    <h3 className="text-2xl font-semibold text-seconderyGreen mt-10 mb-3">Contact Information</h3>
                    <p className="text-lg text-gray-700 mb-2"><strong>Email:</strong> support@kevdifoods.com</p>
                    <p className="text-lg text-gray-700 mb-2"><strong>Phone:</strong> +1 (123) 456-7890</p>
                    <p className="text-lg text-gray-700 mb-2"><strong>Address:</strong> 123 Organic St, Fresh City, CA 90001</p>
                </div>

                <div className="md:w-1/2 w-full">
                    <h2 className="text-3xl font-semibold text-seconderyGreen  mb-7">Send Us a Message</h2>
                    <form className="mb-8">
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                                Message
                            </label>
                            <textarea
                                id="message"
                                rows="4"
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"

                            ></textarea>
                        </div>
                      <ButtonElement text='Send Message'/>
                    </form>
                </div>
            </div>
            <WhatsappIcon />
            <Footer />
        </div>
    );
};

export default Contact;
