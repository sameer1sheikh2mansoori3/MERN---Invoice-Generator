import React from 'react';
import { BadgeCheck } from 'lucide-react'; // Example of using lucide-react for icon
import LogButton from './LogButton';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 p-4 transition-all duration-300 bg-gray-500 bg-opacity-20">
      <div className="container flex items-center justify-between mx-auto">
        {/* Left Section: Logo and Name */}
        <div className="flex items-center">
          <BadgeCheck className="w-8 h-8 mr-2 text-yellow-400" />
          <span className="text-xl font-semibold text-white">Company Name</span>
        </div>

        {/* Right Section: Button */}
        <div>
          <LogButton title='Login' />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
