'use client';

import { FiX, FiPhone } from 'react-icons/fi';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import menuData from '@/data/Menu.json';

interface MenuItemData {
  id: number;
  name: string;
  subtitle?: string;
  ingredients: string;
  calories: string;
  spicy?: boolean;
  price?: string;
}

interface MenuData {
  title: string;
  items: MenuItemData[];
}

// Individual Featured Menu Item Component - Updated to match MenuItem.tsx
const FeaturedMenuItem = ({ item }: { item: MenuItemData }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  // Image mapping for each item
  const getImageForItem = (id: number) => {
    const images = [
      '/image-removebg-preview.png',
      '/image-removebg-preview(2).png',
      '/image-removebg-preview(1).png',
      '/image-removebg-preview.png',
      '/image-removebg-preview(5).png',
      '/image-removebg-preview(6).png',
      '/image-removebg-preview(7).png',
      '/image-removebg-preview(8).png',
      '/image-removebg-preview(9).png',
      '/image-removebg-preview(10).png',
    ];
    return images[id - 1] || '/default-food.png';
  };

  // Phone number for delivery orders
  const deliveryPhoneNumber = "+1234567890";

  const handleDeliveryCall = () => {
    window.location.href = `tel:${deliveryPhoneNumber}`;
  };

  return (
    <div className="relative w-full">
      {/* Container for image and card - Adjusted for 2-column */}
      <div className="absolute -top-10 sm:-top-18 left-1/2 transform -translate-x-1/2 z-30 w-20 h-20 sm:w-32 sm:h-32 md:w-48 md:h-48">
        <Image
          src={getImageForItem(item.id)}
          alt={item.name}
          fill
          className="object-contain drop-shadow-[0_10px_30px_rgba(0,0,0,0.4)]"
          sizes="(max-width: 640px) 80px, (max-width: 768px) 128px, 192px"
          priority
        />
      </div>
      
      <div className="relative">
        {/* Card - Adjusted for 2-column */}
        <div className="mt-12 sm:mt-24">
          <div 
            className={`group relative overflow-hidden bg-gradient-to-br from-white/90 to-white/80 backdrop-blur-lg border-2 border-transparent rounded-2xl sm:rounded-3xl shadow-xl sm:shadow-2xl transition-all duration-500 ease-out h-[260px] sm:h-[340px] md:h-[380px] flex flex-col
              ${isHovered ? 'hover:border-[#F9C73D] hover:shadow-[0_25px_60px_rgba(249,199,61,0.3)]' : ''}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Card Content */}
            <div className="flex-1 p-2.5 sm:p-6 flex flex-col">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-1 sm:gap-3 mb-1 sm:mb-4">
                <div className="flex-1">
                  <h2 className="font-bebas mt-2 sm:mt-6 text-sm sm:text-xl md:text-2xl uppercase tracking-wide text-[#730202] leading-tight">
                    {item.name}
                  </h2>
                  {item.subtitle && (
                    <h3 className="font-bebas text-[#F9C73D] text-xs sm:text-base md:text-xl tracking-wide mt-0.5 sm:mt-1">
                      {item.subtitle}
                    </h3>
                  )}
                </div>
              </div>
              
              {/* Ingredients - shorter line clamp for mobile */}
              <p className="text-gray-800 text-xs sm:text-sm md:text-base mb-1 sm:mb-4 leading-relaxed font-inter flex-1 line-clamp-2 sm:line-clamp-3">
                <span className="text-[#730202] font-bold text-xs sm:text-sm">Ingredients:</span>{' '}
                {item.ingredients}
              </p>
              
              {/* Spicy indicator if applicable */}
              {item.spicy && (
                <div className="mb-1 sm:mb-4">
                  <span className="inline-flex items-center gap-1 bg-red-100 text-red-700 px-2 py-1 rounded-full text-xs font-inter">
                    <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                    SPICY
                  </span>
                </div>
              )}

              {/* Price Display - ALWAYS VISIBLE for both mobile and desktop */}
              {item.price && (
                <div className="mt-auto">
                  <span className="font-bebas text-base sm:text-xl md:text-2xl text-[#730202]">
                    {item.price}
                  </span>
                </div>
              )}

              {/* Hover Overlay - Optimized for 2-column mobile */}
              <div className={`absolute inset-0 bg-gradient-to-br from-[#730202]/95 to-[#B80000]/95 backdrop-blur-md rounded-2xl sm:rounded-3xl p-2 sm:p-6 flex flex-col justify-center items-center transition-all duration-500 transform
                ${isHovered ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}
              >
                {/* Close Button */}
                <button
                  onClick={() => setIsHovered(false)}
                  className="absolute top-1.5 sm:top-4 right-1.5 sm:right-4 text-white/70 hover:text-white transition-colors"
                >
                  <FiX size={14} className="sm:w-5 sm:h-5 md:w-6 md:h-6" />
                </button>

                {/* Simple Order Via Delivery Button in Center - Optimized for 2-column */}
                <div className="text-white text-center space-y-2 sm:space-y-4 md:space-y-6 w-full px-1 sm:px-2">
                  {/* ORDER VIA DELIVERY Text - Compact for 2-column */}
                  <h3 className="font-bebas text-sm sm:text-xl md:text-2xl text-[#F9C73D] pt-2 sm:pt-0">
                    ORDER VIA DELIVERY
                  </h3>
                  
                  {/* Simple instruction text - very compact for 2-column */}
                  <p className="font-inter text-white/80 text-xs sm:text-sm md:text-base max-w-[160px] sm:max-w-xs mx-auto">
                    Click to call for delivery
                  </p>
                  
                  {/* Call Button - SUPER COMPACT for 2-column mobile */}
                  <button 
                    onClick={handleDeliveryCall}
                    className="bg-[#F9C73D] text-[#730202] font-bebas text-xs sm:text-base md:text-xl px-3 sm:px-8 md:px-12 py-1 sm:py-3 md:py-4 rounded-full hover:bg-yellow-500 hover:scale-105 transition-all duration-300 shadow-md sm:shadow-2xl flex items-center justify-center gap-1 sm:gap-3 w-full max-w-[150px] sm:max-w-xs mx-auto"
                  >
                    <FiPhone size={12} className="sm:w-5 sm:h-5 md:w-6 md:h-6" />
                    <span className="whitespace-nowrap text-xs sm:text-base">CALL TO ORDER</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function FeaturedMenu() {
  const data = menuData as MenuData;
  const featuredItems = data.items.slice(0, 3);

  return (
    <section className="py-12 sm:py-20">
      <div className="max-w-7xl mx-auto px-3 sm:px-6">
        <div className="text-center mb-8 sm:mb-16">
          <h2 className="font-bebas text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#F9C73D] mb-3 sm:mb-6">
            FEATURED <span className="text-white">MENU</span>
          </h2>
          <p className="font-inter text-white/80 text-sm sm:text-lg md:text-xl max-w-2xl mx-auto">
            Our most popular dishes that customers love
          </p>
        </div>

        {/* Featured Items Grid - 2 columns on mobile */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-15 mb-8 sm:mb-12">
          {featuredItems.map((item) => (
            <div key={item.id} className="transform hover:-translate-y-2 transition-transform duration-300">
              <FeaturedMenuItem item={item} />
            </div>
          ))}
        </div>

        {/* View All Button - Smaller on mobile */}
        <div className="text-center">
          <Link href="/menu">
            <button className="inline-flex items-center gap-2 sm:gap-3 bg-transparent border-2 border-white/30 hover:border-white/50 text-white font-bebas text-base sm:text-xl md:text-2xl px-6 sm:px-10 py-2 sm:py-3 rounded-full tracking-wider transition-all duration-300 hover:scale-105 hover:shadow-lg sm:hover:shadow-xl hover:shadow-[#F9C73D]/10">
              VIEW FULL MENU
              <svg className="w-4 h-4 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}