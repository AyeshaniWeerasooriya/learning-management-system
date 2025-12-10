"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import SearchBar from "../../common-components/SearchBar";

type UtilityLink = {
  name: string;
  href: string;
};

type MegaMenuItem = {
  name: string;
  href: string;
  isViewAll?: boolean;
};

type MegaMenuContent = {
  [key: string]: MegaMenuItem[];
};

const utilityLinks: UtilityLink[] = [
  { name: "Plans & Pricing", href: "#plans" },
  { name: "Login", href: "#login" },
  { name: "Sign Up", href: "#signup" },
];

const megaMenuContent: MegaMenuContent = {
  "Explore Courses": [
    { name: "Artificial Intelligence", href: "/categories/ai" },
    { name: "Business & Finance", href: "/categories/business" },
    { name: "Computer Science", href: "/categories/cs" },
    { name: "Data Science", href: "/categories/ds" },
    // { name: "View All Categories", href: "/categories", isViewAll: true },
  ],
};

const TopNavBar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState<boolean>(false);

  const megaMenuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        megaMenuRef.current &&
        !megaMenuRef.current.contains(event.target as Node)
      ) {
        setIsMegaMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleMegaMenu = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsMegaMenuOpen((prev) => !prev);
  };

  const handleMegaMenuLinkClick = () => {
    setIsMegaMenuOpen(false);
  };

  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-black mr-8">
              LMS
            </Link>
          </div>

          <div className="flex-grow flex justify-start">
            <div className="relative flex" ref={megaMenuRef}>
              <button
                onClick={toggleMegaMenu}
                onMouseEnter={() => setIsMegaMenuOpen(true)}
                onMouseLeave={() => {
                  setTimeout(() => {
                    if (
                      megaMenuRef.current &&
                      !megaMenuRef.current.matches(":hover")
                    ) {
                      setIsMegaMenuOpen(false);
                    }
                  }, 50);
                }}
                className={`hidden lg:flex items-center gap-1 text-sm font-medium transition-colors p-2 rounded-md -ml-2 mr-6 ${
                  isMegaMenuOpen
                    ? "text-blue-600 bg-gray-50"
                    : "text-gray-600 hover:text-blue-600 hover:bg-gray-50"
                }`}
                aria-expanded={isMegaMenuOpen}
                aria-haspopup="true"
              >
                <span>Explore</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${
                    isMegaMenuOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {isMegaMenuOpen && (
                <div
                  className="absolute z-50 top-full mt-1 w-100 bg-white shadow-xl rounded-md  overflow-hidden"
                  onMouseEnter={() => setIsMegaMenuOpen(true)}
                  onMouseLeave={() => setIsMegaMenuOpen(false)}
                >
                  {Object.entries(megaMenuContent).map(([title, items]) => (
                    <div key={title} className="p-4">
                      <p className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-2  pb-1">
                        {title}
                      </p>
                      <div className="space-y-1">
                        {items.map((item) => (
                          <Link
                            key={item.name}
                            href={item.href}
                            onClick={handleMegaMenuLinkClick}
                            className={`block p-2 rounded-md transition-colors ${
                              item.isViewAll
                                ? "text-blue-600 font-bold hover:bg-blue-50"
                                : "text-gray-700 hover:bg-gray-50 hover:text-blue-600"
                            }`}
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <SearchBar />
          </div>
          <div className="flex items-center space-x-4 ml-4">
            <div className="hidden lg:flex items-center space-x-4">
              {utilityLinks.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-sm font-medium text-gray-600 hover:text-blue-600 whitespace-nowrap"
                >
                  {item.name}
                </Link>
              ))}
            </div>
            <div className="flex items-center space-x-2">
              <button className="bg-blue-600 px-3 py-2 rounded-md text-white text-sm font-bold hover:bg-blue-700 whitespace-nowrap">
                Buy Now
              </button>
            </div>
            <button
              className="lg:hidden p-2 text-gray-600 rounded-lg focus:outline-none"
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
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:bg-gray-50 hover:text-blue-600 transition-colors"
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
