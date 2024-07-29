import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ShopNav from "./ShopNav";

function Navigation({ isMenuOpen }) {
  const pathname = usePathname();
  const [activeNav, setActiveNav] = useState(null);

  const navItems = [
    { href: "/shop", label: "Shop", component: ShopNav },
    { href: "/bundles", label: "Bundles & Offers" },
    { href: "/recipes", label: "Recipes" },
    { href: "/our-story", label: "Our Story" },
    { href: "/blog", label: "Blog" },
    { href: "/faqs", label: "FAQs" },
  ];

  const handleNavClick = (item) => {
    if (item.component) {
      setActiveNav(item.label === activeNav ? null : item.label);
    } else {
      setActiveNav(null);
    }
  };

  const renderActiveNav = () => {
    const activeItem = navItems.find((item) => item.label === activeNav);
    if (activeItem && activeItem.component) {
      const Component = activeItem.component;
      return <Component />;
    }
    return null;
  };

  return (
    <div>
      <nav
        className={`lg:flex ${
          isMenuOpen
            ? "block bg-white w-full left-0 top-16 fixed z-50"
            : "hidden"
        } `}
      >
        <ul className="flex flex-col lg:flex-row space-y-3 lg:space-y-0 bg-gray-50 lg:bg-transparent space-x-0 lg:space-x-6 xl:space-x-12  px-12 py-6 lg:px-0 lg:py-0 ">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link href={item.href}>
                <a
                  className={`hover:underline cursor-pointer ${
                    pathname === item.href ? "font-bold" : "font-normal"
                  }`}
                  onClick={() => handleNavClick(item)}
                >
                  {item.label}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      {renderActiveNav()}
    </div>
  );
}

export default Navigation;
