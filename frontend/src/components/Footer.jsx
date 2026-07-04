import React from 'react'
import footerLogo  from "../assets/footer-logo.png"

import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa"

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 px-4">
      {/* Top Section */}
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        {/* Left Side - Logo and Nav */}
        <div className="md:w-1/2 w-full">
          <img src={footerLogo} alt="Logo" className="mb-5 w-36" />
          <ul className="flex flex-col md:flex-row gap-4">
            <li><a href="#home" className="hover:text-primary">Home</a></li>
            <li><a href="#services" className="hover:text-primary">Services</a></li>
            <li><a href="#about" className="hover:text-primary">About Us</a></li>
            <li><a href="#contact" className="hover:text-primary">Contact</a></li>
          </ul>
        </div>

        {/* Right Side - Small About */}
        <div className="md:w-1/2 w-full">
          <h3 className="text-lg font-semibold mb-2">About the Book Store</h3>
          <p className="mb-4 text-sm text-gray-300">
            We are a small independent bookstore curating the best reads across
            genres — new releases, timeless classics, and staff recommendations.
            Our goal is to help you find your next great read.
          </p>
          <p className="text-sm mb-3 text-gray-400">Open: Mon–Sat · 9:00 AM – 6:00 PM</p>
          <p className="text-sm mb-4 text-gray-400">Contact: <a href="mailto:hello@bookstore.example" className="underline">hello@bookstore.example</a></p>
          <div>
            <button
              onClick={() => {
                const el = document.getElementById('books-section');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-primary px-4 py-2 rounded hover:bg-primary-dark text-white"
            >
              Explore Books
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center mt-10 border-t border-gray-700 pt-6">
        {/* Left Side - Privacy Links */}
        <ul className="flex gap-6 mb-4 md:mb-0">
          <li><a href="#privacy" className="hover:text-primary">Privacy Policy</a></li>
          <li><a href="#terms" className="hover:text-primary">Terms of Service</a></li>
        </ul>

        {/* Right Side - Social Icons */}
        <div className="flex gap-6">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
            <FaFacebook size={24} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
            <FaTwitter size={24} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
            <FaInstagram size={24} />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer