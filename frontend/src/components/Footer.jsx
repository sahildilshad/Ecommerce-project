import React from "react";
import { Link } from "react-router-dom";
import {
  FaInstagramSquare,
  FaFacebookF,
  FaWhatsapp,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from from-blue-200 via-white to-white shadow-md mt-16 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 sm:gap-16 md:gap-32 text-gray-700">
        <div>
          <h5 className="text-blue-500 text-xl font-bold font w-auto cursor-pointer mb-10">
            SHOPORA
          </h5>
          <p>
           Your one-stop destination for quality products and unbeatable deals.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-bold">Quick Links</h3>
          <ul className="space-y-2 text-sm mt-10">
            <li>
              <Link className="hover:text-blue-500">Home</Link>
            </li>
            <li>
              <Link className="hover:text-blue-500">About</Link>
            </li>
            <li>
              <Link className="hover:text-blue-500">Contact</Link>
            </li>
            <li>
              <Link className="hover:text-blue-500">T&C</Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-3">Follow us</h3>
          <div className="flex space-x-3 text-xl mt-2">
            <Link className="hover:text-red-500">
            <FaInstagramSquare />
          </Link>
          <Link className="hover:text-blue-500">
            <FaFacebookF />
          </Link>
          <Link className="hover:text-green-500">
            <FaWhatsapp />
          </Link>
          <Link className="hover:text-blue-500">
            <FaTwitter />
          </Link>

          </div>
          
        </div>
      </div>
      <div className="text-center text-sm text-gray-500 py-4 border-t border-gray-400  ">
        <h2>&copy;{new Date().getFullYear()} CopyRight by Sahil 
</h2>
      </div>
    </footer>
  );
};

export default Footer;
