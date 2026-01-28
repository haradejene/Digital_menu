'use client';

import { FiX, FiPhone } from 'react-icons/fi';
import { useState } from 'react';
import Image from 'next/image';

interface MenuItemProps {
  item: {
    id: number;
    name: string;
    subtitle?: string;
    ingredients: string;
    calories: string;
    spicy?: boolean;
    price?: string;
  };
}

export default function MenuItem({ item }: MenuItemProps) {
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
      {/* Container for image and card */}
      <div className="absolute -top-6 sm:-top-20 left-1/2 transform -translate-x-1/2 z-30 w-24 h-24 sm:w-28 sm:h-28 md:w-72 md:h-72">
        <Image
          src={getImageForItem(item.id)}
          alt={item.name}
          fill
          className="object-contain drop-shadow-[0_10px_30px_rgba(0,0,0,0.4)]"
          sizes="(max-width: 640px) 96px, (max-width: 768px) 112px, 288px"
          priority
        />
      </div>
      
      <div className="relative">
        {/* Card - shorter for mobile */}
        <div className="mt-12 sm:mt-24">
          <div 
            className={`group relative overflow-hidden bg-gradient-to-br from-white/90 to-white/80 backdrop-blur-lg border-2 border-transparent rounded-2xl sm:rounded-3xl shadow-xl sm:shadow-2xl transition-all duration-500 ease-out h-[260px] sm:h-[380px] md:h-[420px] flex flex-col
              ${isHovered ? 'hover:border-[#F9C73D] hover:shadow-[0_25px_60px_rgba(249,199,61,0.3)]' : ''}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Card Content */}
            <div className="flex-1 p-3 sm:p-6 md:p-8 flex flex-col">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-1 sm:gap-3 mb-1 sm:mb-4">
                <div className="flex-1">
                  <h2 className="font-bebas mt-2 sm:mt-8 text-base sm:text-xl md:text-3xl lg:text-4xl uppercase tracking-wide text-[#730202] leading-tight">
                    {item.name}
                  </h2>
                  {item.subtitle && (
                    <h3 className="font-bebas text-[#F9C73D] text-xs sm:text-lg md:text-2xl lg:text-3xl tracking-wide mt-0.5 sm:mt-1">
                      {item.subtitle}
                    </h3>
                  )}
                </div>
              </div>
              
              {/* Ingredients */}
              <p className="text-gray-800 text-xs sm:text-base md:text-lg mb-2 sm:mb-4 leading-relaxed font-inter flex-1 line-clamp-2 sm:line-clamp-3">
                <span className="text-[#730202] font-bold text-xs sm:text-base">Ingredients:</span>{' '}
                {item.ingredients}
              </p>
              
              {/* Spicy indicator if applicable */}
              {item.spicy && (
                <div className="mb-2 sm:mb-4">
                  <span className="inline-flex items-center gap-1 bg-red-100 text-red-700 px-2 py-1 rounded-full text-xs font-inter">
                    <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                    SPICY
                  </span>
                </div>
              )}

              {/* Price Display - ALWAYS VISIBLE for both mobile and desktop */}
              {item.price && (
                <div className="mb-2 sm:mb-4">
                  <span className="font-bebas text-lg sm:text-xl md:text-3xl text-[#730202]">
                    {item.price}
                  </span>
                </div>
              )}

              {/* Hover Overlay - Responsive for mobile */}
              <div className={`absolute inset-0 bg-gradient-to-br from-[#730202]/95 to-[#B80000]/95 backdrop-blur-md rounded-2xl sm:rounded-3xl p-3 sm:p-6 md:p-8 flex flex-col justify-center items-center transition-all duration-500 transform
                ${isHovered ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}
              >
                {/* Close Button */}
                <button
                  onClick={() => setIsHovered(false)}
                  className="absolute top-2 sm:top-4 right-2 sm:right-4 text-white/70 hover:text-white transition-colors"
                >
                  <FiX size={16} className="sm:w-5 sm:h-5 md:w-6 md:h-6" />
                </button>

                {/* Simple Order Via Delivery Button in Center */}
                <div className="text-white text-center space-y-3 sm:space-y-4 md:space-y-6 w-full px-2">
                  {/* ORDER VIA DELIVERY Text - More top margin/padding for mobile */}
                  <h3 className="font-bebas text-lg sm:text-xl md:text-2xl lg:text-3xl text-[#F9C73D] pt-4 sm:pt-0">
                    ORDER VIA DELIVERY
                  </h3>
                  
                  {/* Simple instruction text - even smaller on mobile */}
                  <p className="font-inter text-white/80 text-xs sm:text-sm md:text-base max-w-xs mx-auto">
                    Click to call for delivery
                  </p>
                  
                  {/* Call Button - EVEN SMALLER for mobile */}
                  <button 
                    onClick={handleDeliveryCall}
                    className="bg-[#F9C73D] text-[#730202] font-bebas text-xs sm:text-base md:text-xl lg:text-2xl px-4 sm:px-8 md:px-12 py-1.5 sm:py-3 md:py-4 rounded-full hover:bg-yellow-500 hover:scale-105 transition-all duration-300 shadow-lg sm:shadow-2xl flex items-center justify-center gap-1.5 sm:gap-3 w-full max-w-[200px] sm:max-w-xs mx-auto"
                  >
                    <FiPhone size={14} className="sm:w-5 sm:h-5 md:w-6 md:h-6" />
                    <span>CALL TO ORDER</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}