import React from 'react';
import { TbBrandMeta } from 'react-icons/tb';
import { IoLogoInstagram } from 'react-icons/io';
import { RiTwitterXLine } from 'react-icons/ri';

const Topbar = () => {
  return (
    <div className="bg-Pace-blue text-white">
      <div className="container mx-auto flex justify-between items-center py-3 px-4">
        {/* Left section - icons */}
        <div className="hidden md:flex items-center space-x-4">
          <a href="https://www.facebook.com/paceuniversity" className="hover:text-gray-300">
            <TbBrandMeta className="h-5 w-5" />
          </a>
          <a href="https://www.instagram.com/paceuniversity" className="hover:text-gray-300">
            <IoLogoInstagram className="h-5 w-5" />
          </a>
          <a href="https://x.com/paceuniversity" className="hover:text-gray-300">
            <RiTwitterXLine className="h-4 w-4" />
          </a>
        </div>
        {/* Center section - Shipping message */}
        <div className="text-sm text-center flex-grow">
          <span>Shipping Available - Fast and reliable shipping!</span>
        </div>
        {/* Right section - Phone number */}
        <div className="text-sm hidden md:block">
          <a href="tel:+1234567890" className="hover:text-gray-300">
            +1 (866) 722-3338
          </a>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
