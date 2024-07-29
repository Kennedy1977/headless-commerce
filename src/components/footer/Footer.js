import React from "react";
import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/outline";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="px-12">
        <div className="flex flex-col lg:flex-row justify-between flex-wrap space-y-8 lg:space-y-0">
          {/* Contact Information */}
          <div className="w-full lg:w-1/3">
            <h3 className="text-xl font-bold mb-2">Contact Us</h3>
            <p className="mb-2 flex items-center">
              <PhoneIcon className="w-5 h-5 mr-2" /> (123) 456-7890
            </p>
            <p className="mb-2 flex items-center">
              <EnvelopeIcon className="w-5 h-5 mr-2" /> support@example.com
            </p>
            <p>1234 Street Name, City, State, 12345</p>
          </div>

          {/* Quick Links */}
          <div className="w-full lg:w-1/3">
            <h3 className="text-xl font-bold mb-2">Quick Links</h3>
            <ul>
              <li>
                <a href="/shop" className="hover:underline">
                  Shop
                </a>
              </li>
              <li>
                <a href="/about" className="hover:underline">
                  About Us
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:underline">
                  Contact
                </a>
              </li>
              <li>
                <a href="/faq" className="hover:underline">
                  FAQ
                </a>
              </li>
              <li>
                <a href="/blog" className="hover:underline">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter Signup */}
          <div className="w-full lg:w-1/3">
            <h3 className="text-xl font-bold mb-2">Newsletter</h3>
            <p className="mb-4">
              Sign up to receive updates and special offers.
            </p>
            <form className="flex flex-col sm:flex-row">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full p-2 rounded-t-md sm:rounded-l-md sm:rounded-t-none text-black"
              />
              <button
                type="submit"
                className="bg-blue-500 p-2 rounded-b-md sm:rounded-r-md sm:rounded-b-none hover:bg-blue-700"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="mt-10 border-t border-gray-700 pt-6 flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
          {/* Social Media Links */}
          <div className="flex flex-col items-center lg:items-start">
            <h3 className="text-xl font-bold mb-2">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-gray-400">
                Facebook
              </a>
              <a href="#" className="hover:text-gray-400">
                Twitter
              </a>
              <a href="#" className="hover:text-gray-400">
                Instagram
              </a>
              <a href="#" className="hover:text-gray-400">
                LinkedIn
              </a>
            </div>
          </div>

          {/* Legal Information */}
          <div className="text-center lg:text-right text-gray-400">
            <p>&copy; 2024 Your Company. All rights reserved.</p>
            <p>
              <a href="/privacy-policy" className="hover:underline">
                Privacy Policy
              </a>{" "}
              |{" "}
              <a href="/terms-of-service" className="hover:underline">
                Terms of Service
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
