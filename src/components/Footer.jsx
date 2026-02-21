import React from "react";
import { styles } from "../styles";

const Footer = () => {
    return (
        <footer className='w-full bg-black-100 py-8 sm:px-16 px-6 relative z-10'>
            <div className='max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6'>

                {/* Contact Info */}
                <div className='flex flex-col gap-3 text-secondary text-sm md:text-base'>
                    <h4 className='text-white font-bold text-lg mb-2'>Contact Information</h4>

                    <div className='flex items-center gap-2'>
                        <span className='font-medium text-white'>Phone:</span>
                        <p>0300 9192936 (pakistan)</p>
                    </div>
                </div>

                {/* Company Details */}
                <div className='flex flex-col gap-3 text-secondary text-sm md:text-base text-center md:text-right'>
                    <h4 className='text-white font-bold text-lg mb-2'>Company Details</h4>
                    <p>Abdul Nafay Portfolio</p>
                    <p>Pakistan</p>
                </div>
            </div>

            {/* Copyright */}
            <div className='w-full h-[1px] bg-secondary opacity-20 my-6' />

            <div className='text-center text-secondary text-sm'>
                <p>&copy; {new Date().getFullYear()} Abdul Nafay. All rights reserved.</p>
                <div className="mt-2 text-[12px] opacity-70">
                    get portfelio source code <a href="https://github.com/nafay365/portfelio/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors underline">Github</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
