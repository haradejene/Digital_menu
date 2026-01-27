'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="min-h-screen overflow-hidden mt-5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-screen">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center h-full py-12 lg:py-0">
          
          {/* Left Section - Text Content */}
          <div className="flex flex-col justify-center space-y-8 lg:space-y-12 text-center lg:text-left mt-7">
            {/* Main Headline */}
            <div>
              <h1 className="font-bebas text-7xl md:text-2xl lg:text-5xl xl:text-6xl uppercase leading-[0.85] tracking-tight text-[#F9C73D]">
                HEADQUARTERS<br />OF FRIED<br /><span >CHICKEN</span>
              </h1>
            </div>

            {/* Subtitle */}
            <div className="max-w-lg mx-auto lg:mx-0">
              <p className="font-inter text-white/90 text-lg md:text-xl lg:text-2xl leading-relaxed">
                From golden fried chicken to stacked burgers, every bite is made fresh and packed with gold flavour.
              </p>
            </div>

            {/* Call to Action Button */}
            <div className="flex justify-center lg:justify-start">
              <Link 
                href="/menu" 
                className="group relative inline-flex items-center"
              >
                {/* Button with border/outline effect */}
                <div className="relative">
                  {/* Border/Stroke Effect */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-[#F9C73D]/20 to-[#F9C73D]/10 rounded-full blur-sm group-hover:blur-md transition-all duration-300"></div>
                  
                  {/* Main Button */}
                  <button className="relative bg-transparent border-2 border-white/30 hover:border-white/50 text-white font-bebas text-2xl md:text-xl lg:text-2xl px-12 md:px-16 py-4 md:py-5 rounded-full tracking-wider transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#F9C73D]/20">
                    ORDER NOW
                  </button>
                  
                  {/* Hover Glow Effect */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#F9C73D]/0 via-[#F9C73D]/10 to-[#F9C73D]/0 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500"></div>
                </div>
              </Link>
            </div>

            {/* Stats/Features */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center lg:text-left">
                <div className="font-bebas text-3xl md:text-4xl text-white">24+</div>
                <div className="font-inter text-white/70 text-sm md:text-base">Flavours</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="font-bebas text-3xl md:text-4xl text-white">100%</div>
                <div className="font-inter text-white/70 text-sm md:text-base">Fresh</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="font-bebas text-3xl md:text-4xl text-white">30min</div>
                <div className="font-inter text-white/70 text-sm md:text-base">Delivery</div>
              </div>
            </div>
          </div>

          {/* Right Section - Image */}
          <div className="relative h-full flex items-center justify-center">
            <div className="relative w-full max-w-2xl aspect-square lg:aspect-auto lg:h-[90vh]">
              {/* Floating Image Container */}
              <div className="relative w-full h-full">
                <Image
                  src="/image-removebg-preview(4).png" // Change this to your image path
                  alt="Golden Fried Chicken"
                  fill
                  className="object-contain drop-shadow-[0_25px_50px_rgba(0,0,0,0.5)]"
                  sizes="(max-width: 568px) 100vw, 50vw"
                  priority
                />
                
                {/* Floating Elements/Effects */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#F9C73D]/10 rounded-full blur-xl"></div>
                <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-[#730202]/20 rounded-full blur-xl"></div>
                
                {/* Decorative Elements */}
                <div className="absolute -top-10 -right-10 w-40 h-40 border-2 border-[#F9C73D]/20 rounded-full"></div>
                <div className="absolute -bottom-10 -left-10 w-40 h-40 border-2 border-white/10 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="flex flex-col items-center space-y-4">
          <span className="font-inter text-white/50 text-sm">SCROLL</span>
          <div className="w-px h-16 bg-gradient-to-b from-[#F9C73D] to-transparent"></div>
        </div>
      </div>
    </section>
  );
}