import React from 'react';
import { FaShoppingCart } from "react-icons/fa";

function Navbar({ cartCount,restaurantName }) {
  return (
    <nav className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <h1 className="text-lg font-medium text-gray-900">{restaurantName}</h1>
          </div>
          <div className="ml-4 flex items-center md:ml-6">
            <button className="bg-gray-100 p-1 rounded-full text-gray-600 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-gray-600">
              My Order
              
            </button>
            <div className="ml-3 relative">
              <button className="bg-gray-100  p-1 rounded-full text-gray-600 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-gray-600" id="cart">
                <span className="sr-only">Cart</span>
                <FaShoppingCart className="h-7 w-6" />
                <span className="absolute -top-0.5 right--1 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">{cartCount}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
