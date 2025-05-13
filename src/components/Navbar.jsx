import React from 'react';
import { FaApple, FaSearch, FaShoppingBag } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="bg-black text-white py-2 px-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Left: Apple Logo */}
        <div className="text-xl">
          <a href="#"><FaApple /></a>
        </div>

        {/* Center: Menu Links */}
        <div className="hidden md:flex space-x-6 text-sm">
          <a href="#">Store</a>
          <a href="#">Mac</a>
          <a href="#">iPad</a>
          <a href="#">iPhone</a>
          <a href="#">Watch</a>
          <a href="#">AirPods</a>
          <a href="#">TV & Home</a>
          <a href="#">Accessories</a>
          <a href="#">Support</a>
        </div>

        {/* Right: Search and Cart */}
        <div className="flex items-center space-x-4 text-sm">
          <a href="#"><FaSearch /></a>
          <a href="#"><FaShoppingBag /></a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;


