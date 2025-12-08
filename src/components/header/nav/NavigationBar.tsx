"use client";
import React, { useState } from "react";
import Link from "next/link";
import {
  ShoppingCart,
  Heart,
  Bell,
  Menu,
  X,
  ChevronDown,
  User,
} from "lucide-react";
import SearchBar from "../../common-components/SearchBar";

const utilityLinks = [
  { name: "Plans & Pricing", href: "#plans" },
  { name: "Login", href: "#login" },
  { name: "Sign Up", href: "#signup" },
];

const TopNavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-black mr-8">
              LMS
            </Link>
          </div>

          <div className="flex-grow flex justify-start">
            <div className="flex">
              <Link
                href="#"
                className="hidden lg:flex items-center gap-1 text-sm font-medium text-lms-gray hover:text-lms-blue transition-colors mr-6"
              >
                <span>Explore</span>
                <ChevronDown className="w-4 h-4" />
              </Link>
            </div>
            <SearchBar />
          </div>

          <div className="flex items-center space-x-4 ml-4">
            <div className="hidden lg:flex items-center space-x-4">
              {utilityLinks.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-sm font-medium text-lms-gray hover:text-lms-blue whitespace-nowrap"
                >
                  {item.name}
                </Link>
              ))}
            </div>
            {/* 
            <div className="flex items-center space-x-4 border-l pl-4">
              <Link href="#cart" aria-label="Shopping Cart">
                <ShoppingCart
                  size={20}
                  className="text-lms-gray hover:text-lms-blue"
                />
              </Link>
              <Link href="#notifications" aria-label="Notifications">
                <Bell
                  size={20}
                  className="text-lms-gray hover:text-lms-blue"
                />
              </Link>
            </div> */}

            <div className="flex items-center  space-x-2">
              <button className="bg-lms-blue px-3 hover:cursor-pointer py-2 rounded-md text-white text-sm font-bold hover:bg-lms-blue-dark whitespace-nowrap ">
                Buy Now
              </button>
              {/* <div className="w-8 h-8 flex items-center justify-center bg-black text-white font-bold rounded-full text-xs">
                <User size=
                {20} />
              </div> */}
            </div>

            <button
              className="lg:hidden p-2 text-lms-gray rounded-lg focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t">
          {[...utilityLinks, { name: "All Courses", href: "#categories" }].map(
            (item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="block px-3 py-2 rounded-md text-base font-medium text-lms-gray hover:bg-gray-50 hover:text-lms-blue transition-colors"
              >
                {item.name}
              </Link>
            )
          )}
        </div>
      )}
    </nav>
  );
};

export default TopNavBar;
