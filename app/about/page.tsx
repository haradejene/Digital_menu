'use client';

import Navbar from '@/Components/Navbar';
import Image from 'next/image';
import { FiClock, FiMapPin, FiUsers, FiAward } from 'react-icons/fi';

export default function AboutPage() {
  const features = [
    {
      icon: <FiClock className="text-3xl" />,
      title: "24/7 SERVICE",
      description: "We serve delicious chicken round the clock"
    },
    {
      icon: <FiMapPin className="text-3xl" />,
      title: "5 LOCATIONS",
      description: "Multiple locations across the city for your convenience"
    },
    {
      icon: <FiUsers className="text-3xl" />,
      title: "100K+ CUSTOMERS",
      description: "Served over 100,000 satisfied customers"
    },
    {
      icon: <FiAward className="text-3xl" />,
      title: "AWARD WINNING",
      description: "Best chicken place award 2023 & 2024"
    }
  ];

  const teamMembers = [
    {
      name: "CHEF RAMON",
      role: "HEAD CHEF",
      image: "/chef-1.jpg",
      description: "15+ years of culinary experience"
    },
    {
      name: "MARIA GONZALEZ",
      role: "MANAGER",
      image: "/chef-2.jpg",
      description: "Ensuring perfect customer experience"
    },
    {
      name: "JAMES WILSON",
      role: "SOUS CHEF",
      image: "/chef-3.jpg",
      description: "Specialized in crispy chicken recipes"
    }
  ];

  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-[60vh] overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-20 md:py-32">
          <div className="text-center">
            <h1 className="font-bebas text-5xl md:text-7xl lg:text-8xl text-[#F9C73D] mb-6">
              OUR <span className="text-white">STORY</span>
            </h1>
            <p className="font-inter text-white/90 text-lg md:text-xl max-w-3xl mx-auto">
              From a small family recipe to the headquarters of fried chicken
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left - Image */}
            <div className="relative h-[400px] lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/about-kitchen.jpg"
                alt="Our Kitchen"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#730202]/30 to-transparent"></div>
            </div>

            {/* Right - Content */}
            <div className="space-y-8">
              <h2 className="font-bebas text-4xl md:text-5xl text-[#730202]">
                WELCOME TO <span className="text-[#F9C73D]">CHICKEN HQ</span>
              </h2>
              
              <div className="space-y-6">
                <p className="font-inter text-gray-700 text-lg">
                  Founded in 2010, Chicken HQ started as a small food truck with a simple mission: 
                  to serve the crispiest, most flavorful fried chicken in town. What began as a 
                  family recipe passed down through generations has now become a local favorite.
                </p>
                
                <p className="font-inter text-gray-700 text-lg">
                  Our secret lies in our 24-hour buttermilk marinade, special blend of 11 herbs 
                  and spices, and commitment to using only the freshest, highest-quality chicken. 
                  Every piece is hand-breaded and cooked to golden perfection.
                </p>
                
                <p className="font-inter text-gray-700 text-lg">
                  Today, we&apos;re proud to be recognized as the &quot;Headquarters of Fried Chicken&quot; 
                  in our city, serving thousands of happy customers every week.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-6 pt-6">
                <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
                  <div className="font-bebas text-4xl text-[#730202]">14</div>
                  <div className="font-inter text-gray-600 mt-2">YEARS OF EXCELLENCE</div>
                </div>
                <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
                  <div className="font-bebas text-4xl text-[#730202]">50K+</div>
                  <div className="font-inter text-gray-600 mt-2">HAPPY CUSTOMERS</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-br from-[#730202] to-[#B80000]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="font-bebas text-4xl md:text-5xl text-[#F9C73D] mb-6">
              WHY <span className="text-white">CHOOSE US</span>
            </h2>
            <p className="font-inter text-white/80 text-lg max-w-2xl mx-auto">
              What makes us the best chicken place in town
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-8 bg-white/10 backdrop-blur-sm rounded-3xl border border-white/20 hover:border-[#F9C73D] transition-all duration-300 hover:scale-105">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#F9C73D] rounded-full mb-6 text-[#730202]">
                  {feature.icon}
                </div>
                <h3 className="font-bebas text-2xl text-white mb-3">{feature.title}</h3>
                <p className="font-inter text-white/80">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="font-bebas text-4xl md:text-5xl text-[#730202] mb-6">
              MEET OUR <span className="text-[#F9C73D]">TEAM</span>
            </h2>
            <p className="font-inter text-gray-600 text-lg max-w-2xl mx-auto">
              The passionate people behind your favorite chicken
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="group text-center p-6 rounded-3xl hover:shadow-2xl transition-all duration-300">
                <div className="relative w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden border-4 border-[#F9C73D]">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#730202]/20 to-transparent"></div>
                  <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                    <span className="font-bebas text-3xl text-gray-400">IMAGE</span>
                  </div>
                </div>
                <h3 className="font-bebas text-2xl text-[#730202]">{member.name}</h3>
                <div className="font-bebas text-[#F9C73D] text-lg mb-2">{member.role}</div>
                <p className="font-inter text-gray-600">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#730202] to-[#B80000]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-bebas text-4xl md:text-5xl text-white mb-8">
            READY TO <span className="text-[#F9C73D]">TASTE</span> THE DIFFERENCE?
          </h2>
          <p className="font-inter text-white/80 text-lg mb-10 max-w-2xl mx-auto">
            Visit us today and experience why we&apos;re called the Headquarters of Fried Chicken
          </p>
          <a 
            href="/menu" 
            className="inline-flex bg-transparent border-2 border-white text-white font-bebas text-2xl px-12 py-4 rounded-full hover:bg-white/10 hover:border-[#F9C73D] hover:text-[#F9C73D] transition-all duration-300 tracking-wider"
          >
            ORDER NOW
          </a>
        </div>
      </section>
    </>
  );
}