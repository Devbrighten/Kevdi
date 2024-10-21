import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa6";
import WhatsappIcon from '../Elements/WhatsappIcon';
import { homeBg } from '../Images/Image'
const Home = () => {
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(90deg, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.8)),
           url(${homeBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '92.5vh',
        width: '100vw',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative'
      }}
    >
      <div className="container">
        <div className="flex flex-col justify-center items-center">
          <Link to='products'>
            <h1 className='text-[50px] font-semibold text-white mb-3 px-5 ' >DISCOVER OUR PRODUCTS</h1>
            <p className=' text-white flex flex-row justify-center items-center gap-2 font-medium text-2xl px-5 '>
              <span className=''>Shop Now for Quality Products </span>
              <FaArrowRight className='text-xl mt-[7px]' />
            </p>
          </Link>
        </div>
      </div>
      <WhatsappIcon />
    </div>
  );
}

export default Home;
