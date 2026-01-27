'use client';

import { FiZap, FiCheck, FiShoppingCart, FiX, FiCheckCircle } from 'react-icons/fi';
import { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

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
  const [selectedDine, setSelectedDine] = useState<'IN' | 'OUT' | null>(null);
  const [selectedSize, setSelectedSize] = useState<'REG' | 'LARGE' | null>(null);
  const [showAddedMessage, setShowAddedMessage] = useState(false);
  const router = useRouter();
  
  // Image mapping for each item
  const getImageForItem = (id: number) => {
    const images = [
      '/image-removebg-preview.png', // For item 1
      '/image-removebg-preview(2).png', // For item 2
      '/image-removebg-preview(1).png', // For item 3
      '/image-removebg-preview.png', // For item 4
      '/image-removebg-preview(5).png', // For item 5 (fallback)
      '/image-removebg-preview(6).png', // For item 6 (fallback)
      '/image-removebg-preview(7).png',
      '/image-removebg-preview(8).png',
      '/image-removebg-preview(9).png',
      '/image-removebg-preview(10).png',
    ];
    return images[id - 1] || '/default-food.png';
  };

  const handleDineSelect = (option: 'IN' | 'OUT') => {
    setSelectedDine(option);
  };

  const handleSizeSelect = (size: 'REG' | 'LARGE') => {
    setSelectedSize(size);
  };

  const handleAddToOrder = () => {
    if (!selectedDine || !selectedSize) {
      alert('Please select DINE option and SIZE first!');
      return;
    }
    
    // Show success message
    setShowAddedMessage(true);
    
    // Store order in localStorage or context (for demo, we'll use localStorage)
    const order = {
      id: item.id,
      name: item.name,
      dineOption: selectedDine,
      size: selectedSize,
      price: item.price,
      timestamp: new Date().toISOString()
    };
    
    const existingOrders = JSON.parse(localStorage.getItem('cartItems') || '[]');
    existingOrders.push(order);
    localStorage.setItem('cartItems', JSON.stringify(existingOrders));
    
    // Hide message after 2 seconds
    setTimeout(() => {
      setShowAddedMessage(false);
      setIsHovered(false); // Close hover overlay
    }, 2000);
  };

  const handleOrderNow = () => {
    if (!selectedDine || !selectedSize) {
      alert('Please select DINE option and SIZE first!');
      return;
    }
    
    // If OUT is selected, direct to delivery page
    if (selectedDine === 'OUT') {
      const order = {
        id: item.id,
        name: item.name,
        dineOption: selectedDine,
        size: selectedSize,
        price: item.price
      };
      
      // Store order for checkout page
      sessionStorage.setItem('currentOrder', JSON.stringify(order));
      router.push('/checkout');
    } else {
      // For IN, direct to order confirmation page
      const order = {
        id: item.id,
        name: item.name,
        dineOption: selectedDine,
        size: selectedSize,
        price: item.price
      };
      
      sessionStorage.setItem('currentOrder', JSON.stringify(order));
      router.push('/order-confirmation');
    }
  };

  const resetSelections = () => {
    setSelectedDine(null);
    setSelectedSize(null);
  };

  return (
    <div className="relative">
      {/* Success Message Popup */}
      {showAddedMessage && (
        <div className="fixed top-4 right-4 z-50 bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-4 rounded-xl shadow-2xl flex items-center space-x-3 animate-slide-in">
          <FiCheckCircle className="text-2xl" />
          <div>
            <p className="font-bebas text-xl">ADDED TO ORDER!</p>
            <p className="font-inter text-sm opacity-90">{item.name} - {selectedSize} size</p>
          </div>
        </div>
      )}

      {/* Container for image and card */}
      <div className="absolute -top-24 left-1/2 transform -translate-x-1/2 z-30 w-40 h-40 md:w-72 md:h-72 mt-10">
        <Image
          src={getImageForItem(item.id)}
          alt={item.name}
          fill
          className="object-contain drop-shadow-[0_10px_30px_rgba(0,0,0,0.3)]"
          sizes="(max-width: 768px) 240px, 288px"
          priority
        />
      </div>
      
      <div className="relative">
        {/* Card - positioned with margin-top to accommodate image */}
        <div className="mt-28">
          <div 
            className={`group relative overflow-hidden bg-gradient-to-br from-white/90 to-white/80 backdrop-blur-lg border-2 border-transparent rounded-3xl shadow-2xl transition-all duration-500 ease-out h-[420px] flex flex-col
              ${isHovered ? 'hover:border-[#F9C73D] hover:shadow-[0_25px_60px_rgba(249,199,61,0.3)]' : ''}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Card Content */}
            <div className="flex-1 p-6 md:p-8 flex flex-col">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-4">
                <div className="flex-1">
                  <h2 className="font-bebas mt-8 text-3xl md:text-4xl uppercase tracking-wide text-[#730202] leading-none">
                    {item.name}
                  </h2>
                  {item.subtitle && (
                    <h3 className="font-bebas text-[#F9C73D] text-2xl md:text-3xl tracking-wide mt-1">
                      {item.subtitle}
                    </h3>
                  )}
                </div>
                
                
              </div>
              
              <p className="text-gray-800 text-base md:text-lg mb-4 leading-relaxed font-inter flex-1 line-clamp-3">
                <span className="text-[#730202] font-bold">Ingredients:</span>{' '}
                {item.ingredients}
              </p>
              
              <div className="pt-4 border-t border-gray-300 text-gray-800 font-inter mb-6">
                <span className="text-[#730202] font-bold">Calories:</span>{' '}
                <span className="font-semibold">{item.calories}</span>
              </div>

              {/* Price Display - Only if price exists */}
              {item.price && (
                <div className="mb-4">
                  <span className="font-bebas text-2xl md:text-3xl text-[#730202]">
                    {item.price}
                  </span>
                </div>
              )}

              {/* Hover Overlay with Additional Details */}
              <div className={`absolute inset-0 bg-gradient-to-br from-[#730202]/95 to-[#B80000]/95 backdrop-blur-md rounded-3xl p-6 md:p-8 flex flex-col justify-center transition-all duration-500 transform
                ${isHovered ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}
              >
                {/* Close Button */}
                <button
                  onClick={() => setIsHovered(false)}
                  className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors"
                >
                  <FiX size={24} />
                </button>

                {/* Reset Button */}
                {(selectedDine || selectedSize) && (
                  <button
                    onClick={resetSelections}
                    className="absolute top-4 left-4 text-white/70 hover:text-white transition-colors text-sm font-inter flex items-center gap-1"
                  >
                    <FiX size={16} />
                    RESET
                  </button>
                )}

                <div className="text-white space-y-6">
                  {/* DINE IN/OUT Options */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <h4 className="font-bebas text-2xl text-[#F9C73D]">DINE:</h4>
                      {selectedDine && (
                        <div className="flex items-center gap-1 text-green-400">
                          <FiCheckCircle />
                          <span className="font-inter text-sm">SELECTED</span>
                        </div>
                      )}
                    </div>
                    <div className="flex space-x-4">
                      <button 
                        onClick={() => handleDineSelect('IN')}
                        className={`flex-1 py-2.5 rounded-lg transition-all duration-300 border flex items-center justify-center relative ${selectedDine === 'IN' ? 'bg-[#F9C73D] text-[#730202] border-[#F9C73D]' : 'bg-white/20 backdrop-blur-sm text-white border-white/30 hover:bg-white/30 hover:text-[#F9C73D]'}`}
                      >
                        IN
                        {selectedDine === 'IN' && (
                          <FiCheckCircle className="absolute right-3" />
                        )}
                      </button>
                      <button 
                        onClick={() => handleDineSelect('OUT')}
                        className={`flex-1 py-2.5 rounded-lg transition-all duration-300 border flex items-center justify-center relative ${selectedDine === 'OUT' ? 'bg-[#F9C73D] text-[#730202] border-[#F9C73D]' : 'bg-white/20 backdrop-blur-sm text-white border-white/30 hover:bg-white/30 hover:text-[#F9C73D]'}`}
                      >
                        OUT
                        {selectedDine === 'OUT' && (
                          <FiCheckCircle className="absolute right-3" />
                        )}
                      </button>
                    </div>
                  </div>

                  {/* SIZE Options */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <h4 className="font-bebas text-2xl text-[#F9C73D]">SIZE:</h4>
                      {selectedSize && (
                        <div className="flex items-center gap-1 text-green-400">
                          <FiCheckCircle />
                          <span className="font-inter text-sm">SELECTED</span>
                        </div>
                      )}
                    </div>
                    <div className="flex space-x-4">
                      <button 
                        onClick={() => handleSizeSelect('REG')}
                        className={`flex-1 py-2.5 rounded-lg transition-all duration-300 border flex items-center justify-center relative ${selectedSize === 'REG' ? 'bg-[#F9C73D] text-[#730202] border-[#F9C73D]' : 'bg-white/20 backdrop-blur-sm text-white border-white/30 hover:bg-white/30 hover:text-[#F9C73D]'}`}
                      >
                        REG
                        {selectedSize === 'REG' && (
                          <FiCheckCircle className="absolute right-3" />
                        )}
                      </button>
                      <button 
                        onClick={() => handleSizeSelect('LARGE')}
                        className={`flex-1 py-2.5 rounded-lg transition-all duration-300 border flex items-center justify-center relative ${selectedSize === 'LARGE' ? 'bg-[#F9C73D] text-[#730202] border-[#F9C73D]' : 'bg-white/20 backdrop-blur-sm text-white border-white/30 hover:bg-white/30 hover:text-[#F9C73D]'}`}
                      >
                        LARGE
                        {selectedSize === 'LARGE' && (
                          <FiCheckCircle className="absolute right-3" />
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Selection Summary */}
                  {(selectedDine || selectedSize) && (
                    <div className="p-4 bg-white/10 rounded-xl border border-white/20">
                      <p className="font-inter text-center">
                        {selectedDine && selectedSize ? (
                          <span>Selected: <span className="font-bold text-[#F9C73D]">{selectedDine}</span> • <span className="font-bold text-[#F9C73D]">{selectedSize}</span> size</span>
                        ) : selectedDine ? (
                          <span>Please select a size</span>
                        ) : (
                          <span>Please select dine option</span>
                        )}
                      </p>
                    </div>
                  )}

                  {/* Action Buttons */}
                  <div className="flex space-x-4 pt-3">
                    <button 
                      onClick={handleAddToOrder}
                      className="flex-1 bg-[#F9C73D] text-[#730202] font-bebas text-lg py-3 rounded-lg hover:bg-yellow-500 hover:scale-105 transition-all duration-300 shadow-lg flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                      disabled={!selectedDine || !selectedSize}
                    >
                      
                      ADD TO ORDER
                    </button>
                    <button 
                      onClick={handleOrderNow}
                      className="flex-1 bg-white/20 backdrop-blur-sm text-white font-bebas text-lg py-3 rounded-lg hover:bg-white/30 hover:text-[#F9C73D] hover:scale-105 transition-all duration-300 border border-white/30 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                      disabled={!selectedDine || !selectedSize}
                    >
                      
                      {selectedDine === 'OUT' ? 'ORDER DELIVERY' : 'ORDER NOW'}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes slide-in {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        
        .animate-slide-in {
          animation: slide-in 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}