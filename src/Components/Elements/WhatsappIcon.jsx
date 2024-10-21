import React from 'react'
import { Link } from 'react-router-dom'
import { IoLogoWhatsapp } from "react-icons/io";

const WhatsappIcon = () => {
    return (
        <div>
            <div className="text-[#25D366] text-[48px] fixed right-5 bottom-6 border-[4px] hover:scale-110 duration-300 rounded-full p-0">
                <Link to=''>
                    <IoLogoWhatsapp />
                </Link>
            </div>
        </div>
    )
}
export default WhatsappIcon
