import React from "react";
import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Social from "../ui/social/Social";
import Logo from "../header/logo/Logo";

function Footer() {
  return (
    <footer className="bg-zinc-800 text-white py-10">
      <div className="px-4 sm:px-12">
        <div className="flex flex-col lg:flex-row justify-between flex-wrap space-y-8 lg:space-y-0">
          {/* Contact Information */}
          <div className="w-full lg:w-1/3">
            <h3 className="flex text-xl font-bold mb-4 items-center gap-4">
              <span className="w-16 h-16">
                <Logo />
              </span>
              <span>The Family Butcher</span>
            </h3>
            <p className="mb-2 flex items-center">
              <PhoneIcon className="w-5 h-5 mr-2" />
              <Link
                href="mailto:sales@edmundhowdle.co.uk"
                className="hover:underline"
              >
                confirm telephone???
              </Link>
            </p>
            <p className="mb-2 flex items-center">
              <EnvelopeIcon className="w-5 h-5 mr-2" />
              <Link
                href="mailto:sales@edmundhowdle.co.uk"
                className="hover:underline"
              >
                sales@edmundhowdle.co.uk
              </Link>
            </p>
            <address className="not-italic">confirm address???</address>
          </div>

          {/* Quick Links */}
          <div className="w-full lg:w-1/3">
            <h3 className="text-xl font-bold mb-2">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/shop" className="hover:underline">
                  Shop
                </Link>
              </li>
              <li>
                <Link href="/our-story" className="hover:underline">
                  Our Story
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:underline">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:underline">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:underline">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter Signup */}
          <div className="w-full lg:w-1/3">
            <h3 className="text-xl font-bold mb-2">Newsletter</h3>
            <p className="mb-4">
              Sign up to receive updates and special offers.
            </p>
            <form className="flex flex-row">
              <input
                type="email"
                placeholder="Enter your email"
                className="basis-1/2 shrink grow max-w-48 py-2 px-4 sm:px-8 rounded-l-full text-black"
              />
              <button
                type="submit"
                className="basis-1/4 shrink grow max-w-32 bg-black py-2 px-4 sm:px-8 rounded-r-full hover:bg-gray-800"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="mt-10 border-t border-gray-700 pt-6 flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
          {/* Social Media Links */}
          <Social />

          {/* Legal Information */}
          <div className="flex flex-col gap-4 text-center lg:text-right text-gray-400">
            <p>
              &copy; {new Date().getFullYear()} The Family Butchers &copy;2024,
              All rights reserved.
            </p>
            <p>
              <Link href="/privacy-policy" className="hover:underline">
                Privacy Policy
              </Link>{" "}
              |{" "}
              <Link href="/terms-of-service" className="hover:underline">
                Terms of Service
              </Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
