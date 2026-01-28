'use client';

import { useState } from 'react';
import { FiMenu, FiX, FiSearch } from 'react-icons/fi';
import Image from 'next/image';
import Link from 'next/link';

interface NavItem {
  name: string;
  href: string;
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  
  const navItems: NavItem[] = [
    { name: 'HOME', href: '/' },
    { name: 'MENU', href: '/menu' },
    { name: 'ABOUT', href: '/about' },
    { name: 'CONTACT', href: '/contact' },
  ];

  return (
    <nav className="sticky top-0 z-50">
      {/* Very transparent background for both mobile and desktop */}
      <div className="bg-gradient-to-r from-[#730202]/20 to-[#B80000]/20 backdrop-blur-sm">
        <div className="flex items-center h-24 px-6 md:px-8">
          {/* Left: Logo */}
          <div className="flex-1">
            <Link href="/">
              <div className="relative w-16 h-16 md:w-20 md:h-20 cursor-pointer">
                <Image
                  src="/Component 1(1).png"
                  alt="Chicken Place Logo"
                  fill
                  className="object-contain"
                  sizes="80px"
                  priority
                />
              </div>
            </Link>
          </div>

          {/* Center: Navigation Links and Search (Desktop only) */}
          <div className="hidden md:flex items-center space-x-12 flex-1 justify-center">
            {/* Navigation Links */}
            <div className="flex items-center space-x-12">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-white hover:text-[#F9C73D] font-inter font-medium text-base transition-colors duration-300"
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Search Bar (Desktop only) */}
            <div className="flex items-end relative ml-8">
              <div className="relative">
                <input
                  type="text"
                  placeholder="SEARCH"
                  className="bg-transparent text-white placeholder-white/70 focus:outline-none w-36 pb-1 pr-8 text-base"
                />
                {/* Horizontal line */}
                <div className="absolute bottom-0 left-0 w-44 h-0.5 bg-white/70"></div>
                {/* Search icon at the end of line */}
                <FiSearch className="text-white/70 absolute right-0 bottom-1.5 transform rotate-90" size={16} />
              </div>
            </div>
          </div>

          {/* Right: Order Now Button and Mobile Menu */}
          <div className="flex-1 flex items-center justify-end space-x-4">
            {/* Order Now Button (Desktop) */}
            <Link 
              href="/menu" 
              className="hidden md:flex relative group items-center"
            >
              <div className="relative bg-transparent border-2 border-white text-white font-bebas text-lg px-7 py-2 rounded-full hover:bg-white/10 hover:border-[#F9C73D] hover:text-[#F9C73D] transition-all duration-300 tracking-wider">
                ORDER NOW
              </div>
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-white hover:text-[#F9C73D] p-2 rounded-lg hover:bg-white/10 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t border-white/20 bg-gradient-to-r from-[#730202]/80 to-[#B80000]/80 backdrop-blur-md">
            <div className="px-4 pt-4 pb-6 space-y-3">
              {/* Mobile Navigation Items - NO SEARCH BAR */}
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="flex items-center justify-center text-white hover:text-[#F9C73D] font-inter font-medium text-lg transition-colors duration-300 px-4 py-3 rounded-lg hover:bg-white/10 w-full"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              
              {/* Mobile Order Now Button */}
              <Link 
                href="/menu" 
                className="flex justify-center mt-4"
                onClick={() => setIsOpen(false)}
              >
                <div className="bg-transparent border-2 border-white text-white font-bebas text-xl px-8 py-3 rounded-full hover:bg-white/10 hover:border-[#F9C73D] hover:text-[#F9C73D] transition-all duration-300 tracking-wider text-center">
                ORDER NOW
                </div>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}