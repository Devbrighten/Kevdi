import React from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer/Footer';
import WhatsappIcon from '../Elements/WhatsappIcon';
import video2 from '../Images/video2.mp4'

const About = () => {
    return (
        <div className="bg-gray-50">
            <Navbar />
            <div className="container mx-auto py-12 px-6 md:px-12">
                <h1 className="text-5xl font-poppins font-semibold text-seconderyGreen mb-20 text-center">About Us</h1>
                <div className="flex flex-col lg:flex-row md:space-x-8">
                    <div className="lg:w-1/2 mb-8">
                        <h2 className="text-3xl font-semibold  mb-4 text-seconderyGreen">Who We Are</h2>
                        <p className="text-lg text-gray-700 mb-4">
                            At <strong>KEVDI</strong>, we are passionate about providing high-quality organic food that
                            nourishes both body and soul. Our focus is on delivering fresh produce straight from local
                            farms, ensuring every bite is packed with flavor and nutrients.
                        </p>
                        <h2 className="text-3xl font-semibold mb-4 text-seconderyGreen">Our Mission</h2>
                        <p className="text-lg text-gray-700">
                            We aim to revolutionize the way you think about food by offering products that are 100% organic,
                            free from chemicals, and grown with care. Our mission is to promote healthy living and sustainable
                            practices in our community.
                        </p>
                    </div>
                    <div className=" mt-2 mb-12 lg:mb-0 -z-0 relative">
                        <video
                            controls
                            className="rounded-lg shadow-lg w-[600px] h-80"
                            src={video2}
                            alt="About Us Video"
                        >
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </div>

                <h2 className="text-3xl font-semibold  mb-4 text-seconderyGreen">Our Values</h2>
                <ul className="list-disc list-inside text-lg text-gray-700 mb-8">
                    <li><strong>Sustainability:</strong> Committed to environmentally friendly practices.</li>
                    <li><strong>Health:</strong> Promoting health through organic produce.</li>
                    <li><strong>Community:</strong> Supporting local farmers and economies.</li>
                    <li><strong>Transparency:</strong> Open about sourcing and production.</li>
                </ul>
                <h2 className="text-3xl font-semibold  mb-4 text-seconderyGreen">Join Us</h2>
                <p className="text-lg text-gray-700 mb-4">
                    We invite you to join us on this journey towards better health and delicious meals. Explore our
                    range of organic products and become a part of the <strong>KEVDI</strong> family.
                </p>
                <p className="text-lg text-gray-700 mb-4">
                    Thank you for choosing us—where quality meets integrity!
                </p>
            </div>
            <Footer />
            <WhatsappIcon />
        </div>
    );
};

export default About;
