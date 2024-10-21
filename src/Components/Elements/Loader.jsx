import React from 'react';
import Loadergif from '../Images/loader.gif';

const Loader = () => {
    return (
        <div className='w-full h-screen flex justify-center items-center'>
            <img src={Loadergif} alt="loader" className='w-64' />
        </div>
    );
};

export default Loader;
