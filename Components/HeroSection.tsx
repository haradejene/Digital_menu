'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

export default function HeroSection() {
  const statsContainerRef = useRef<HTMLDivElement>(null);
  const desktopStatsRef = useRef<HTMLDivElement>(null);
  const [isScrolling, setIsScrolling] = useState(true);

  // Auto-scroll effect for mobile stats
  useEffect(() => {
    if (!statsContainerRef.current || !isScrolling) return;

    const container = statsContainerRef.current;
    const scrollWidth = container.scrollWidth;
    const clientWidth = container.clientWidth;
    let scrollPosition = 0;
    let direction = 1;

    const scroll = () => {
      if (!isScrolling) return;

      scrollPosition += direction * 0.5;
      
      if (scrollPosition >= scrollWidth - clientWidth) {
        direction = -1;
      } else if (scrollPosition <= 0) {
        direction = 1;
      }

      container.scrollLeft = scrollPosition;
      requestAnimationFrame(scroll);
    };

    const animationId = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationId);
  }, [isScrolling]);

  // Auto-scroll effect for desktop stats
  useEffect(() => {
    if (!desktopStatsRef.current || !isScrolling) return;

    const container = desktopStatsRef.current;
    const scrollWidth = container.scrollWidth;
    const clientWidth = container.clientWidth;
    let scrollPosition = 0;
    let direction = 1;

    const scroll = () => {
      if (!isScrolling) return;

      scrollPosition += direction * 0.3; // Slower for desktop
      
      if (scrollPosition >= scrollWidth - clientWidth) {
        direction = -1;
      } else if (scrollPosition <= 0) {
        direction = 1;
      }

      container.scrollLeft = scrollPosition;
      requestAnimationFrame(scroll);
    };

    const animationId = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationId);
  }, [isScrolling]);

  const handleStatsHover = () => setIsScrolling(false);
  const handleStatsLeave = () => setIsScrolling(true);

  return (
    <section className="min-h-[90vh] md:min-h-screen overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        {/* Desktop Layout - Full 2 columns */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-12 items-center h-full py-0">
          
          {/* Left Section - Text Content (Desktop) */}
          <div className="flex flex-col justify-center space-y-8 lg:space-y-12 text-left">
            {/* Main Headline */}
            <div>
              <h1 className="font-bebas text-7xl xl:text-8xl uppercase leading-[0.85] tracking-tight text-[#F9C73D]">
                HEADQUARTERS<br />OF FRIED<br /><span className="text-white">CHICKEN</span>
              </h1>
            </div>

            {/* Subtitle (Desktop only) */}
            <div className="max-w-lg">
              <p className="font-inter text-white/90 text-xl lg:text-2xl leading-relaxed">
                From golden fried chicken to stacked burgers, every bite is made fresh and packed with gold flavour.
              </p>
            </div>

            {/* Call to Action Button (Desktop) - Moved up */}
            <div className="flex justify-start">
              <Link 
                href="/menu" 
                className="group relative inline-flex items-center"
              >
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-[#F9C73D]/20 to-[#F9C73D]/10 rounded-full blur-sm group-hover:blur-md transition-all duration-300"></div>
                  <div className="relative bg-transparent border-2 border-white/30 hover:border-white/50 text-white font-bebas text-2xl px-12 py-4 rounded-full tracking-wider transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#F9C73D]/20 cursor-pointer">
                    ORDER NOW
                  </div>
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#F9C73D]/0 via-[#F9C73D]/10 to-[#F9C73D]/0 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500"></div>
                </div>
              </Link>
            </div>

            {/* Desktop Stats - Auto-scrolling (Original design) */}
            <div className="relative pt-4">
              <div 
                ref={desktopStatsRef}
                className="flex space-x-12 py-4 overflow-x-hidden"
                onMouseEnter={handleStatsHover}
                onMouseLeave={handleStatsLeave}
              >
                {[
                  { value: "24+", label: "Flavours" },
                  { value: "100%", label: "Fresh" },
                  { value: "30min", label: "Delivery" },
                  { value: "5⭐", label: "Rating" },
                  { value: "50K+", label: "Customers" },
                  { value: "14yrs", label: "Experience" },
                  { value: "24/7", label: "Service" },
                  { value: "5+", label: "Locations" },
                  // Duplicate for seamless loop
                  { value: "24+", label: "Flavours" },
                  { value: "100%", label: "Fresh" },
                  { value: "30min", label: "Delivery" },
                ].map((stat, index) => (
                  <div key={index} className="flex-shrink-0 text-left min-w-[100px]">
                    <div className="font-bebas text-4xl text-white">{stat.value}</div>
                    <div className="font-inter text-white/70 text-base">{stat.label}</div>
                  </div>
                ))}
              </div>
              <div className="text-xs font-inter text-white/40 mt-2">Hover to pause • Auto-scrolling</div>
            </div>
          </div>

          {/* Right Section - Image (Desktop) */}
          <div className="relative h-full flex items-center justify-center">
            <div className="relative w-full h-[90vh]">
              <div className="relative w-full h-full">
                <Image
                  src="/image-removebg-preview(4).png"
                  alt="Golden Fried Chicken"
                  fill
                  className="object-contain drop-shadow-[0_25px_50px_rgba(0,0,0,0.5)]"
                  sizes="50vw"
                  priority
                />
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#F9C73D]/10 rounded-full blur-xl"></div>
                <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-[#730202]/20 rounded-full blur-xl"></div>
                <div className="absolute -top-10 -right-10 w-40 h-40 border-2 border-[#F9C73D]/20 rounded-full"></div>
                <div className="absolute -bottom-10 -left-10 w-40 h-40 border-2 border-white/10 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Layout - 2 columns side by side */}
        <div className="lg:hidden grid grid-cols-2 gap-4 items-center h-full py-6">
          
          {/* Left Column - Text (Mobile) */}
          <div className="flex flex-col justify-center h-full space-y-2">
            {/* Only the headline on mobile */}
            <h1 className="font-bebas text-3xl sm:text-4xl uppercase leading-[0.9] tracking-tight text-[#F9C73D]">
              HEAD<br />QUARTERS<br />OF<br />FRIED<br /><span className="text-white">CHICKEN</span>
            </h1>

            {/* Call to Action Button (Mobile - Smaller size) */}
            <div className="pt-1">
              <Link 
                href="/menu" 
                className="group relative inline-flex items-center"
              >
                <div className="relative">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-[#F9C73D]/10 to-[#F9C73D]/5 rounded-full blur-sm"></div>
                  <div className="relative bg-transparent border border-white/20 text-white font-bebas text-sm px-3 py-1.5 rounded-full tracking-wider cursor-pointer">
                    ORDER NOW
                  </div>
                </div>
              </Link>
            </div>
          </div>

          {/* Right Column - Image (Mobile) */}
          <div className="relative h-[200px] sm:h-[250px] flex items-center justify-center">
            <div className="relative w-full h-full">
              <Image
                src="/image-removebg-preview(4).png"
                alt="Golden Fried Chicken"
                fill
                className="object-contain drop-shadow-[0_8px_16px_rgba(0,0,0,0.3)]"
                sizes="(max-width: 768px) 50vw, 100vw"
                priority
              />
            </div>
          </div>
        </div>

        {/* Mobile-only elements below the 2-column section */}
        <div className="lg:hidden">
          {/* Stats/Features - Auto-scrolling Horizontal (Mobile only - Original design) */}
          <div 
            ref={statsContainerRef}
            className="mt-4 overflow-x-hidden pb-4"
            onTouchStart={handleStatsHover}
            onTouchEnd={handleStatsLeave}
          >
            <div className="flex space-x-8 min-w-max px-4">
              {[
                { value: "24+", label: "Flavours" },
                { value: "100%", label: "Fresh" },
                { value: "30min", label: "Delivery" },
                { value: "5⭐", label: "Rating" },
                { value: "50K+", label: "Customers" },
                { value: "14yrs", label: "Experience" },
                { value: "24/7", label: "Service" },
                { value: "5+", label: "Locations" },
                // Duplicate for seamless loop
                { value: "24+", label: "Flavours" },
                { value: "100%", label: "Fresh" },
                { value: "30min", label: "Delivery" },
                { value: "5⭐", label: "Rating" },
              ].map((stat, index) => (
                <div key={index} className="text-center flex-shrink-0 min-w-[70px]">
                  <div className="font-bebas text-xl sm:text-2xl text-white">{stat.value}</div>
                  <div className="font-inter text-white/70 text-xs sm:text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Scroll indicator for mobile stats */}
          <div className="flex justify-center mt-1">
            <div className="flex items-center space-x-1">
              <div className="w-1.5 h-1.5 rounded-full bg-[#F9C73D] animate-pulse"></div>
              <div className="text-[10px] font-inter text-white/50">Auto-scrolling • Touch to pause</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator - Desktop only */}
      <div className="hidden lg:block absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="flex flex-col items-center space-y-4">
          <span className="font-inter text-white/50 text-sm">SCROLL</span>
          <div className="w-px h-16 bg-gradient-to-b from-[#F9C73D] to-transparent"></div>
        </div>
      </div>
    </section>
  );
}