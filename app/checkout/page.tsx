'use client';

import { useState, useEffect } from 'react';
import Navbar from '@/Components/Navbar';
import { FiMapPin, FiPhone, FiCreditCard, FiCheckCircle } from 'react-icons/fi';
import { useRouter } from 'next/navigation';

interface OrderItem {
  id: number;
  name: string;
  dineOption: 'IN' | 'OUT';
  size: 'REG' | 'LARGE';
  price: string;
}

export default function CheckoutPage() {
  const [order, setOrder] = useState<OrderItem | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    phone: '',
    email: '',
    deliveryInstructions: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const storedOrder = sessionStorage.getItem('currentOrder');
    if (storedOrder) {
      setOrder(JSON.parse(storedOrder));
    } else {
      router.push('/menu');
    }
  }, [router]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      alert('Order placed successfully!');
      sessionStorage.removeItem('currentOrder');
      router.push('/order-success');
      setIsSubmitting(false);
    }, 1500);
  };

  if (!order) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen flex items-center justify-center">
          <p>Loading order...</p>
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar />
      
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          {/* Progress Steps */}
          <div className="flex justify-between items-center mb-12">
            <div className="text-center">
              <div className="w-12 h-12 bg-[#730202] text-white rounded-full flex items-center justify-center mx-auto mb-2">
                <FiCheckCircle size={24} />
              </div>
              <span className="font-inter text-[#730202] font-medium">Order Details</span>
            </div>
            
            <div className="flex-1 h-1 bg-gray-300 mx-4"></div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-[#730202] text-white rounded-full flex items-center justify-center mx-auto mb-2">
                <span className="font-bebas text-xl">2</span>
              </div>
              <span className="font-inter text-[#730202] font-medium">Delivery Info</span>
            </div>
            
            <div className="flex-1 h-1 bg-gray-300 mx-4"></div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-gray-300 text-gray-600 rounded-full flex items-center justify-center mx-auto mb-2">
                <span className="font-bebas text-xl">3</span>
              </div>
              <span className="font-inter text-gray-500">Payment</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left - Order Summary */}
            <div className="bg-white rounded-3xl shadow-2xl p-8">
              <h2 className="font-bebas text-3xl text-[#730202] mb-6">ORDER SUMMARY</h2>
              
              <div className="space-y-6">
                <div className="p-6 bg-gradient-to-r from-[#730202]/5 to-[#B80000]/5 rounded-2xl">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="font-bebas text-2xl text-[#730202]">{order.name}</h3>
                      <div className="flex items-center space-x-4 mt-2">
                        <span className="font-inter bg-[#F9C73D] text-[#730202] px-3 py-1 rounded-full text-sm">
                          {order.dineOption}
                        </span>
                        <span className="font-inter bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm">
                          {order.size} SIZE
                        </span>
                      </div>
                    </div>
                    <span className="font-bebas text-2xl text-[#730202]">{order.price}</span>
                  </div>
                </div>

                <div className="border-t pt-6">
                  <div className="flex justify-between mb-4">
                    <span className="font-inter text-gray-600">Subtotal</span>
                    <span className="font-inter font-medium">{order.price}</span>
                  </div>
                  <div className="flex justify-between mb-4">
                    <span className="font-inter text-gray-600">Delivery Fee</span>
                    <span className="font-inter font-medium">$2.99</span>
                  </div>
                  <div className="flex justify-between text-lg font-bold pt-4 border-t">
                    <span className="font-bebas text-[#730202]">TOTAL</span>
                    <span className="font-bebas text-[#730202]">
                      ${(parseFloat(order.price.replace('$', '')) + 2.99).toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Delivery Form */}
            <div className="bg-white rounded-3xl shadow-2xl p-8">
              <h2 className="font-bebas text-3xl text-[#730202] mb-2">DELIVERY INFORMATION</h2>
              <p className="font-inter text-gray-600 mb-8">We'll deliver your order to your doorstep</p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block font-inter font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F9C73D] focus:border-transparent"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label className="block font-inter font-medium text-gray-700 mb-2">
                    Delivery Address *
                  </label>
                  <div className="flex items-center">
                    <FiMapPin className="text-gray-400 mr-3" />
                    <input
                      type="text"
                      required
                      value={formData.address}
                      onChange={(e) => setFormData({...formData, address: e.target.value})}
                      className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F9C73D] focus:border-transparent"
                      placeholder="123 Main Street, City, State"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block font-inter font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <div className="flex items-center">
                      <FiPhone className="text-gray-400 mr-3" />
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F9C73D] focus:border-transparent"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-inter font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F9C73D] focus:border-transparent"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-inter font-medium text-gray-700 mb-2">
                    Delivery Instructions
                  </label>
                  <textarea
                    value={formData.deliveryInstructions}
                    onChange={(e) => setFormData({...formData, deliveryInstructions: e.target.value})}
                    rows={3}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F9C73D] focus:border-transparent"
                    placeholder="Building code, gate instructions, etc."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-[#730202] to-[#B80000] text-white font-bebas text-2xl py-4 rounded-full transition-all duration-300 hover:scale-105 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'PROCESSING...' : 'PROCEED TO PAYMENT'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}