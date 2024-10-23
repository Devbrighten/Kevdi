import React from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer/Footer';
import WhatsappIcon from '../Elements/WhatsappIcon';
import video2 from '../Images/video2.mp4';

const About = () => {
    return (
        <div className="">
            <Navbar />
            <div className="container mx-auto py-12 px-6 md:px-12">
                <h1 className="text-5xl font-poppins font-semibold text-seconderyGreen mb-20 text-center">About Us</h1>
                <div className="flex flex-col lg:flex-row md:space-x-8">
                    <div className="lg:w-1/2 mb-8">
                        <h2 className="text-3xl font-semibold mb-4 text-seconderyGreen">Who We Are</h2>
                        <p className="text-lg text-gray-700 mb-4">
                            At <strong>KEVDI INDUSTRIES</strong>, we are dedicated to delivering the freshest, highest-quality
                            tomatoes, potatoes, and onions straight from local farms to your table. Our focus is on providing
                            staple vegetables that are essential for every meal, ensuring freshness, flavor, and quality in every purchase.
                        </p>
                        <h2 className="text-3xl font-semibold mb-4 text-seconderyGreen">Our Mission</h2>
                        <p className="text-lg text-gray-700">
                            Our mission is simple: to offer the freshest tomatoes, potatoes, and onions while supporting sustainable farming.
                            We aim to be the trusted source for high-quality, chemical-free produce, promoting healthy eating and sustainable agricultural practices.
                        </p>
                    </div>
                    <div className="mt-2 mb-12 lg:mb-0 -z-0 relative">
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

                <h2 className="text-3xl font-semibold mb-4 text-seconderyGreen">Our Values</h2>
                <ul className="list-disc list-inside text-lg text-gray-700 mb-8">
                    <li><strong>Freshness:</strong> Always delivering the freshest tomatoes, potatoes, and onions.</li>
                    <li><strong>Sustainability:</strong> Committed to environmentally responsible farming methods.</li>
                    <li><strong>Health:</strong> Supporting a healthy lifestyle with nutrient-rich, farm-fresh produce.</li>
                    <li><strong>Transparency:</strong> Open and honest about our sourcing and quality standards.</li>
                </ul>
                <h2 className="text-3xl font-semibold mb-4 text-seconderyGreen">Join Us</h2>
                <p className="text-lg text-gray-700 mb-4">
                    We invite you to become a part of the <strong>KEVDI INDUSTRIES</strong> family by choosing our fresh tomatoes,
                    potatoes, and onions for your everyday meals. Experience the difference that quality makes.
                </p>
                <p className="text-lg text-gray-700 mb-4">
                    Thank you for trusting us to bring the best of the farm to your kitchen!
                </p>
            </div>
            <Footer />
            <WhatsappIcon />
        </div>
    );
};

export default About;
