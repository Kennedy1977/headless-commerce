"use client";
import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline"; // Importing Heroicons v2
import Account from "./account/Account";
import Checkout from "./checkout/Checkout";
import Logo from "./logo/Logo";
import Navigation from "./navigation/Navigation";
import Search from "./search/Search";
import Link from "next/link";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="flex items-center justify-between bg-gray-100 px-12 h-16">
      <Link href="/" className="flex items-center">
        <span className="w-8 h-8"><Logo /></span>
        <span className="px-4 font-extrabold">EDMUND HOWDLE</span>
      </Link>
      <Navigation isMenuOpen={isMenuOpen} />
      <div className="flex items-center space-x-4">
        <Search />
        <Account />
        <Checkout />
      </div>
      <button className="block lg:hidden p-2" onClick={toggleMenu}>
        {isMenuOpen ? (
          <XMarkIcon className="w-6 h-6" />
        ) : (
          <Bars3Icon className="w-6 h-6" />
        )}
      </button>
    </header>
  );
}

export default Header;
