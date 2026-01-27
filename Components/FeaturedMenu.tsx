'use client';

import { FiZap, FiCheck, FiShoppingCart } from 'react-icons/fi';
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

// Image mapping for each item
const getImageForItem = (id: number) => {
  const images = [
    '/image-removebg-preview.png', // For item 1
    '/image-removebg-preview(2).png', // For item 2
    '/image-removebg-preview(1).png', // For item 3
    '/image-removebg-preview.png', // For item 4
    '/image-removebg-preview(5).png', // For item 5
    '/image-removebg-preview(6).png', // For item 6
    '/image-removebg-preview(7).png',
    '/image-removebg-preview(8).png',
    '/image-removebg-preview(9).png',
    '/image-removebg-preview(10).png',
  ];
  return images[id - 1] || '/default-food.png';
};

// Individual Featured Menu Item Component
const FeaturedMenuItem = ({ item }: { item: MenuItemData }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative mb-32">
      {/* Floating Image - positioned above the card */}
      <div className="absolute -top-18 left-1/2 transform -translate-x-1/2 z-30 w-48 h-48 md:w-64 md:h-64">
        <Image
          src={getImageForItem(item.id)}
          alt={item.name}
          fill
          className="object-contain drop-shadow-[0_15px_40px_rgba(0,0,0,0.4)]"
          sizes="(max-width: 768px) 192px, 256px"
          priority
        />
      </div>

      {/* Card Container */}
      <div className="relative pt-28">
        <div 
          className={`group relative overflow-hidden bg-gradient-to-br from-white/90 to-white/80 backdrop-blur-lg border-2 border-transparent rounded-3xl shadow-2xl transition-all duration-500 ease-out h-[380px] flex flex-col
            ${isHovered ? 'hover:border-[#F9C73D] hover:shadow-[0_25px_60px_rgba(249,199,61,0.3)]' : ''}`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Card Content */}
          <div className="flex-1 p-6 flex flex-col">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-4">
              <div className="flex-1">
                <h2 className="font-bebas text-2xl md:text-3xl uppercase tracking-wide text-[#730202] leading-none">
                  {item.name}
                </h2>
                {item.subtitle && (
                  <h3 className="font-bebas text-[#F9C73D] text-xl md:text-2xl tracking-wide mt-1">
                    {item.subtitle}
                  </h3>
                )}
              </div>
              
              
            </div>
            
            <p className="text-gray-800 text-sm md:text-base mb-3 leading-relaxed font-inter flex-1 line-clamp-3">
              <span className="text-[#730202] font-bold">Ingredients:</span>{' '}
              {item.ingredients}
            </p>
            
            <div className="pt-3 border-t border-gray-300 text-gray-800 font-inter mb-4">
              <span className="text-[#730202] font-bold">Calories:</span>{' '}
              <span className="font-semibold">{item.calories}</span>
            </div>

            {/* Price Display */}
            {item.price && (
              <div className="mb-4">
                <span className="font-bebas text-xl md:text-2xl text-[#730202]">
                  {item.price}
                </span>
              </div>
            )}

            {/* Hover Overlay */}
            <div className={`absolute inset-0 bg-gradient-to-br from-[#730202]/95 to-[#B80000]/95 backdrop-blur-md rounded-3xl p-6 flex flex-col justify-center transition-all duration-500 transform
              ${isHovered ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}
            >
              <div className="text-white space-y-6">
                {/* DINE IN/OUT Options */}
                <div className="space-y-3">
                  <h4 className="font-bebas text-xl text-[#F9C73D]">DINE:</h4>
                  <div className="flex space-x-4">
                    <button className="flex-1 bg-white/20 backdrop-blur-sm text-white font-inter font-medium py-2 rounded-lg hover:bg-white/30 hover:text-[#F9C73D] transition-all duration-300 border border-white/30">
                      IN
                    </button>
                    <button className="flex-1 bg-white/20 backdrop-blur-sm text-white font-inter font-medium py-2 rounded-lg hover:bg-white/30 hover:text-[#F9C73D] transition-all duration-300 border border-white/30">
                      OUT
                    </button>
                  </div>
                </div>

                {/* SIZE Options */}
                <div className="space-y-3">
                  <h4 className="font-bebas text-xl text-[#F9C73D]">SIZE:</h4>
                  <div className="flex space-x-4">
                    <button className="flex-1 bg-white/20 backdrop-blur-sm text-white font-inter font-medium py-2 rounded-lg hover:bg-white/30 hover:text-[#F9C73D] transition-all duration-300 border border-white/30">
                      REG
                    </button>
                    <button className="flex-1 bg-white/20 backdrop-blur-sm text-white font-inter font-medium py-2 rounded-lg hover:bg-white/30 hover:text-[#F9C73D] transition-all duration-300 border border-white/30">
                      LARGE
                    </button>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-4 pt-3">
                  <button className="flex-1 bg-[#F9C73D] text-[#730202] font-bebas text-base py-3 rounded-lg hover:bg-yellow-500 hover:scale-105 transition-all duration-300 shadow-lg flex items-center justify-center gap-2">
                    <FiShoppingCart size={20} />
                    ADD TO ORDER
                  </button>
                  <button className="flex-1 bg-white/20 backdrop-blur-sm text-white font-bebas text-base py-3 rounded-lg hover:bg-white/30 hover:text-[#F9C73D] hover:scale-105 transition-all duration-300 border border-white/30 flex items-center justify-center gap-2">
                    <FiCheck size={20} />
                    ORDER NOW
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
    <section className="py-20 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="font-bebas text-4xl md:text-5xl lg:text-6xl text-[#F9C73D] mb-6">
            FEATURED <span className="text-white">MENU</span>
          </h2>
          <p className="font-inter text-white/80 text-lg md:text-xl max-w-2xl mx-auto">
            Our most popular dishes that customers love
          </p>
        </div>

        {/* Featured Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-15 mb-12">
          {featuredItems.map((item) => (
            <div key={item.id} className="transform hover:-translate-y-2 transition-transform duration-300">
              <FeaturedMenuItem item={item} />
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Link href="/menu">
            <button className="inline-flex items-center gap-3 bg-transparent border-2 border-white/30 hover:border-white/50 text-white font-bebas text-xl md:text-2xl px-10 py-3 rounded-full tracking-wider transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-[#F9C73D]/10">
              VIEW FULL MENU
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}