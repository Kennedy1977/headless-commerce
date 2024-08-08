import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ShopNav from "../shop-nav/ShopNav";

function Navigation({ isMenuOpen, setIsMenuOpen }) {
  const pathname = usePathname();
  const [activeNav, setActiveNav] = useState(null);

  const navItems = [
    { href: "/shop/", label: "Shop", component: ShopNav },
    { href: "/bundles/", label: "Bundles & Offers" },
    { href: "/recipes/", label: "Recipes" },
    { href: "/our-story/", label: "Our Story" },
    { href: "/blog/", label: "Blog" },
    { href: "/faq/", label: "FAQs" },
  ];

  const handleNavClick = (item) => {
    setActiveNav(item.label === activeNav ? null : item.label);
    if (!item.component) {
      setIsMenuOpen(false); // Close menu on link click
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
            ? "block bg-white w-full h-dvh left-0 top-16 absolute z-50"
            : "hidden"
        } `}
      >
        <ul className="flex flex-col h-full lg:flex-row space-y-3 lg:space-y-0 bg-gray-50 lg:bg-transparent space-x-0 lg:space-x-6 xl:space-x-12 px-12 py-6 lg:px-20 lg:py-0">
          {navItems.map((item) => (
            <li key={item.href} className="relative">
              {item.component ? (
                <button
                  className={`hover:underline cursor-pointer ${
                    activeNav === item.label ? "font-bold" : "font-normal"
                  }`}
                  onClick={() => handleNavClick(item)}
                >
                  {item.label}
                </button>
              ) : (
                <Link
                  href={item.href}
                  className={`hover:underline cursor-pointer ${
                    pathname === item.href ? "font-bold" : "font-normal"
                  }`}
                  onClick={() => handleNavClick(item)}
                >
                  {item.label}
                </Link>
              )}
              {/* Render the submenu as a child of the nav item on mobile */}
              {item.label === activeNav && item.component && (
                <div className="lg:hidden">
                  <item.component />
                </div>
              )}
            </li>
          ))}
        </ul>
      </nav>
      {/* Render the active navigation component below the nav on larger screens */}
      <div className="hidden lg:block">{renderActiveNav()}</div>
    </div>
  );
}

export default Navigation;
