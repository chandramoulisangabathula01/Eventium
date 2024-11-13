"use client"; // Ensures this component runs on the client-side
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (!isMenuOpen) {
      gsap.fromTo(
        ".mobile-menu",
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.5 }
      );
    }
  };

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/system/about", label: "About us" },
    { href: "/Services", label: "Services" },
    // { href: "/system/careers", label: "Careers" },
    // { href: "/system/caseStudies", label: "Case Studies" },
    { href: "/system/gallary", label: "Gallary" },
  ];

  return (
    <header className="fixed top-4 left-1/2 transform -translate-x-1/2 z-[5000] w-[90%] max-w-5xl mx-auto">
      <div className="bg-gradient-to-r from-gray-200/30 via-gray-100/30 to-gray-200/30 backdrop-blur-md border border-gray-300 rounded-full container mx-auto px-6">
        <div className="flex justify-between items-center">
          {/* Brand Logo */}
          <Link
            href="/"
            title="eventium"
            className="relative flex items-center"
          >
            <h2 className='gap-2 py-4 font-bold text-xl sm:text-2xl lg:text-3xl text-gray-700'>Eventium</h2>
          </Link>

          {/* Navigation for larger screens */}
          <nav className="hidden lg:flex items-center space-x-8 text-gray-700">
            {navItems.map((item, index) => (
              <Link key={index} href={item.href}>
                <motion.span
                  className="text-lg font-medium hover:text-gray-900 transition-colors"
                  whileHover={{ scale: 1.05 }}
                >
                  {item.label}
                </motion.span>
              </Link>
            ))}
            <Link href="/system/contact">
              <motion.span
                className="bg-gradient-to-r from-gray-700 to-gray-600 text-white px-6 py-2 rounded-full text-base font-medium hover:from-gray-600 hover:to-gray-500 transition-all shadow-md"
                whileHover={{ scale: 1.05 }}
              >
                Contact
              </motion.span>
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            className="lg:hidden text-xl text-gray-700"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <motion.div
          className="mobile-menu lg:hidden bg-gradient-to-b from-gray-50/90 to-gray-100/90 backdrop-blur-md border border-gray-200/50 shadow-lg rounded-2xl mt-2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <nav className="container mx-auto px-4 py-3 flex flex-col space-y-2">
            {navItems.map((item, index) => (
              <Link key={index} href={item.href}>
                <motion.span
                  className="block py-2 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
                  whileHover={{ scale: 1.05 }}
                >
                  {item.label}
                </motion.span>
              </Link>
            ))}
            <Link href="/system/contact">
              <motion.span
                className="block bg-gradient-to-r from-gray-700 to-gray-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:from-gray-600 hover:to-gray-500 transition-all shadow-md text-center"
                whileHover={{ scale: 1.05 }}
              >
                Contact
              </motion.span>
            </Link>
          </nav>
        </motion.div>
      )}
    </header>
  );
};

export default Navbar;
