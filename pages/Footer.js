import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto text-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          <div>
            <h3 className="text-2xl font-semibold mb-4">About Us</h3>
            <p className="text-gray-400 mb-4">
              We are dedicated to empowering individuals through digital literacy and support.
            </p>
            <p className="text-gray-400">
              Our mission is to create a community where everyone can thrive in the digital age.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-4">Quick Links</h3>
            <ul className="text-gray-400">
              <li><a href="/" className="hover:text-orange-500">Home</a></li>
              <li><a href="/about" className="hover:text-orange-500">About Us</a></li>
              <li><a href="/services" className="hover:text-orange-500">Services</a></li>
              <li><a href="/contact" className="hover:text-orange-500">Contact</a></li>
              <li><a href="/volunteer" className="hover:text-orange-500">Volunteer</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-4">Subscribe to Our Newsletter</h3>
            <form className="flex flex-col md:flex-row justify-center">
              <input
                type="email"
                placeholder="Your Email"
                className="p-3 bg-gray-800 text-white border border-gray-700 rounded-lg focus:outline-none focus:border-orange-500 mb-4 md:mb-0 md:mr-2"
                required
              />
              <button
                type="submit"
                className="bg-orange-500 hover:bg-orange-400 text-white font-bold py-3 px-6 rounded transition duration-300 ease-in-out"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="flex justify-center space-x-4 mb-4">
          <a href="#" className="text-gray-400 hover:text-white transition duration-300">
            <img src="/icons/facebook.svg" alt="Facebook" className="w-6 h-6" />
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition duration-300">
            <img src="/icons/twitter.svg" alt="Twitter" className="w-6 h-6" />
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition duration-300">
            <img src="/icons/linkedin.svg" alt="LinkedIn" className="w-6 h-6" />
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition duration-300">
            <img src="/icons/instagram.svg" alt="Instagram" className="w-6 h-6" />
          </a>
        </div>

        <p className="text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} Cyber Smart Community. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;