'use client';

import { useEffect, useState } from 'react';
import Navbar from '@/Components/Navbar';
import { FiCheckCircle, FiClock, FiMapPin } from 'react-icons/fi';
import { useRouter } from 'next/navigation';

interface OrderItem {
  id: number;
  name: string;
  dineOption: 'IN' | 'OUT';
  size: 'REG' | 'LARGE';
  price: string;
}

export default function OrderConfirmationPage() {
  const [order, setOrder] = useState<OrderItem | null>(null);
  const [orderNumber, setOrderNumber] = useState('');
  const [estimatedTime, setEstimatedTime] = useState('');
  const router = useRouter();

  useEffect(() => {
    const storedOrder = sessionStorage.getItem('currentOrder');
    if (storedOrder) {
      const parsedOrder = JSON.parse(storedOrder);
      setOrder(parsedOrder);
      
      // Generate random order number
      setOrderNumber(`ORD${Math.floor(100000 + Math.random() * 900000)}`);
      
      // Set estimated time (15-30 minutes for IN, 30-45 for OUT)
      const isTakeout = parsedOrder.dineOption === 'OUT';
      const minTime = isTakeout ? 30 : 15;
      const maxTime = isTakeout ? 45 : 30;
      const time = Math.floor(minTime + Math.random() * (maxTime - minTime));
      setEstimatedTime(`${time} minutes`);
    } else {
      router.push('/menu');
    }
  }, [router]);

  if (!order) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen flex items-center justify-center">
          <p>Loading...</p>
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar />
      
      <div className="min-h-screen bg-gradient-to-b from-[#730202] to-[#B80000] py-12">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          {/* Success Card */}
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 text-center">
            {/* Success Icon */}
            <div className="w-24 h-24 bg-gradient-to-r from-green-400 to-green-500 rounded-full flex items-center justify-center mx-auto mb-8">
              <FiCheckCircle className="text-white text-5xl" />
            </div>
            
            <h1 className="font-bebas text-4xl md:text-5xl text-[#730202] mb-4">
              ORDER CONFIRMED!
            </h1>
            
            <p className="font-inter text-gray-600 text-lg mb-8">
              Thank you for your order. We&apos;re preparing it with care.
            </p>
            
            {/* Order Details */}
            <div className="bg-gradient-to-r from-[#730202]/5 to-[#B80000]/5 rounded-2xl p-6 mb-8">
              <div className="text-center mb-6">
                <div className="font-bebas text-2xl text-[#730202]">ORDER #{orderNumber}</div>
                <div className="font-inter text-gray-600 text-sm mt-1">{new Date().toLocaleString()}</div>
              </div>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="font-inter text-gray-700">{order.name}</span>
                  <span className="font-bebas text-[#730202]">{order.price}</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-4">
                    <span className="font-inter bg-[#F9C73D] text-[#730202] px-3 py-1 rounded-full text-sm">
                      {order.dineOption}
                    </span>
                    <span className="font-inter bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm">
                      {order.size} SIZE
                    </span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Estimated Time */}
            <div className="bg-gradient-to-r from-[#F9C73D]/10 to-[#F9C73D]/5 rounded-2xl p-6 mb-8">
              <div className="flex items-center justify-center space-x-4 mb-4">
                <FiClock className="text-[#730202] text-2xl" />
                <div>
                  <div className="font-bebas text-2xl text-[#730202]">ESTIMATED TIME</div>
                  <div className="font-inter text-gray-600">{estimatedTime}</div>
                </div>
              </div>
              
              {order.dineOption === 'IN' ? (
                <div className="flex items-center justify-center space-x-3 text-[#730202]">
                  <FiMapPin />
                  <span className="font-inter">Your table will be ready shortly</span>
                </div>
              ) : (
                <div className="flex items-center justify-center space-x-3 text-[#730202]">
                  <FiMapPin />
                  <span className="font-inter">We&apos;ll deliver to your address</span>
                </div>
              )}
            </div>
            
            {/* Next Steps */}
            <div className="space-y-4 mb-10">
              <h3 className="font-bebas text-2xl text-[#730202]">WHAT&apos;S NEXT?</h3>
              <ul className="font-inter text-gray-600 space-y-2 text-left max-w-md mx-auto">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>We&apos;ve received your order</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Kitchen is preparing your food</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#F9C73D] mr-2">⏱</span>
                  <span>Estimated ready in {estimatedTime}</span>
                </li>
              </ul>
            </div>
            
            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => router.push('/menu')}
                className="bg-transparent border-2 border-[#730202] text-[#730202] font-bebas text-xl px-8 py-3 rounded-full hover:bg-[#730202] hover:text-white transition-all duration-300"
              >
                ORDER MORE
              </button>
              <button
                onClick={() => router.push('/')}
                className="bg-gradient-to-r from-[#730202] to-[#B80000] text-white font-bebas text-xl px-8 py-3 rounded-full hover:scale-105 transition-all duration-300 shadow-lg"
              >
                GO TO HOME
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}