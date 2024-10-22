import React, { } from 'react';
import Navbar from '../Navbar';
import { tomato, potato, onion } from '../Images/Image';
import ButtonElement from '../Elements/ButtonElement';
import Footer from '../Footer/Footer';
import WhatsappIcon from '../Elements/WhatsappIcon';
import { useNavigate } from 'react-router-dom';
import { FaMoneyBillWave, FaTruck, FaShieldAlt } from 'react-icons/fa';

const Products = () => {
    const Navigate = useNavigate();
    const product = [
        {
            id: 1,
            image: tomato,
            name: 'Tomato',
            info: 'Shop our fresh, premium tomatoes—perfect for salads, sauces, and cooking. Packed with vitamins and antioxidants, they add flavor and health to your meals!',
            price: '50/kg'
        },
        {
            id: 2,
            image: potato,
            name: 'Potato',
            info: 'Discover our fresh, high-quality potatoes, ideal for baking, frying, and mashing. Packed with nutrients and versatility, our potatoes enhance any meal.',
            price: '35/kg'
        },
        {
            id: 3,
            image: onion,
            name: 'Onion',
            info: 'Explore our fresh, flavorful onions, perfect for adding depth to any dish. Packed with nutrients, they enhance salads, soups, and more.',
            price: '70/kg'
        },
    ];

    const handleBuyNowClick = (item) => {
        console.log("Button clicked for:", item);
        try {
            Navigate(`/products/${item.id}`, { state: item });
        } catch (error) {
            console.error('Navigation failed', error);
        }
    };

    return (
        <>
            <Navbar />
            <div className="container relative ">
                <h2 className="text-4xl font-poppins font-semibold text-gray_text mt-20 mb-10 flex items-center gap-2 pl-4 2xl:pl-6 lg:mb-16 xl:justify-start justify-center">
                    Featured Products
                </h2>
                <div className="flex justify-center gap-10 flex-wrap items-center">
                    {product.map((item, index) => (
                        <div key={index} className="shadow hover:box-shadow border-Radius mx-4 sm:px-0">
                            <div className="overflow-hidden border-Radius -z-10 relative">
                                <img
                                    src={item.image}
                                    alt={item.name}

                                    className='w-[380px] h-[255px] object-cover border-Radius transform transition-transform duration-300 hover:scale-150'
                                />
                            </div>
                            <div className="py-4 px-4">
                                <p className='text-seconderyGreen font-poppins text-[35px] font-medium mt-1 mb-4'>{item.name}</p>
                                <p className='text-lg font-normal w-full max-w-[350px]'>{item.info}</p>
                                <div className="flex justify-between pt-5 pb-2">
                                    <h4 className='text-[24px] font-semibold text-seconderyGreen'>{item.price}</h4>
                                    <ButtonElement text='Buy Now' onClick={() => handleBuyNowClick(item)} />

                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="py-10 mt-20 relative">
                <div className="container mx-auto px-5">
                    <div className="flex flex-col justify-center items-center mb-16">
                        <h2 className='text-gray_text text-2xl text-center pb-1 font-poppins'> Shop Smart, Shop Secure!</h2>
                        <div className="border-b w-full max-w-60 border-seconderyGreen"></div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="flex flex-col items-center bg-white p-5 rounded-lg effect3 shadow">
                            <FaTruck className="text-seconderyGreen text-4xl mb-3" />
                            <h3 className="text-xl font-semibold text-gray-800">Free Delivery</h3>
                            <p className="text-gray-600 text-center">Enjoy free delivery on all orders above a certain amount.</p>
                        </div>
                        <div className="flex flex-col items-center bg-white p-5 rounded-lg effect3 shadow">
                            <FaMoneyBillWave className="text-seconderyGreen text-4xl mb-3" />
                            <h3 className="text-xl font-semibold text-gray-800">COD Available</h3>
                            <p className="text-gray-600 text-center">Pay cash on delivery for a hassle-free experience.</p>
                        </div>
                        <div className="flex flex-col items-center bg-white p-5 rounded-lg effect3 shadow">
                            <FaShieldAlt className="text-seconderyGreen text-4xl mb-3" />
                            <h3 className="text-xl font-semibold text-gray-800">Secure Payments</h3>
                            <p className="text-gray-600 text-center">Your payments are safe with us. Shop with confidence!</p>
                        </div>
                    </div>
                </div>
            </div>
            <WhatsappIcon />
            <div className="mt-44">
                <Footer />
            </div>
        </>
    );
}

export default Products;
