'use client';

import { useState, useEffect } from 'react';
import MenuItem from '@/Components/MenuItem';
import Navbar from '@/Components/Navbar';
import menuData from '@/data/Menu.json';

interface Category {
  id: number;
  name: string;
  description: string;
}

interface MenuItemData {
  id: number;
  name: string;
  subtitle?: string;
  ingredients: string;
  calories: string;
  spicy?: boolean;
  categoryId: number;
  image: string;
  price: string;
}

interface MenuData {
  title: string;
  categories: Category[];
  items: MenuItemData[];
}

export default function MenuPage() {
  const data = menuData as MenuData;
  const [showTitle, setShowTitle] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);
  const [filteredItems, setFilteredItems] = useState<MenuItemData[]>([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTitle(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (selectedCategory === null) {
      setFilteredItems(data.items);
    } else {
      const filtered = data.items.filter(item => item.categoryId === selectedCategory);
      setFilteredItems(filtered);
    }
  }, [selectedCategory, data.items]);

  const handleCategorySelect = (categoryId: number) => {
    setSelectedCategory(categoryId);
  };

  const handleShowAll = () => {
    setSelectedCategory(null);
  };

  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto px-3 sm:px-6 py-6 sm:py-8 min-h-screen">
        
       

        {/* Category Buttons */}
       
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="font-bebas text-xl sm:text-3xl md:text-4xl font-bold text-[#F9C73D] mb-3 sm:mb-6">OUR MENU CATEGORIES</h2>
            <p className="text-[#ffffff] font-inter text-sm sm:text-base mb-3 sm:mb-4 max-w-2xl mx-auto">
              Select a category to explore our delicious offerings
            </p>
            
            {/* Category Buttons - 2 columns on mobile, single row on desktop */}
            <div className="grid grid-cols-2 sm:flex sm:flex-wrap justify-center gap-2 sm:gap-4 mb-6 sm:mb-8">
              {/* All Items Button */}
              <button
                onClick={handleShowAll}
                className={`px-3 sm:px-6 py-2 sm:py-3 rounded-full font-bebas text-sm sm:text-xl tracking-wide transition-all duration-300 ${selectedCategory === null ? 'border-2 border-white text-white' : 'border-2 border-white text-white hover:bg-gray-300'}`}
              >
                ALL ITEMS
              </button>
              
              {/* Category Buttons */}
              {data.categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => handleCategorySelect(category.id)}
                  className={`px-3 sm:px-6 py-2 sm:py-3 rounded-full font-bebas text-sm sm:text-xl tracking-wide transition-all duration-300 ${selectedCategory === category.id ? 'bg-[#730202] text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
                >
                  {category.name}
                </button>
              ))}
            </div>

            {/* Selected Category Description */}
            {selectedCategory !== null && (
              <div className="mb-6 sm:mb-8 p-3 sm:p-4 rounded-xl sm:rounded-2xl border border-[#F9C73D]/30 max-w-2xl mx-auto">
                <h3 className="font-bebas text-lg sm:text-2xl text-[#F9C73D] mb-1 sm:mb-2">
                  {data.categories.find(c => c.id === selectedCategory)?.name}
                </h3>
                <p className="text-white font-inter text-xs sm:text-base">
                  {data.categories.find(c => c.id === selectedCategory)?.description}
                </p>
              </div>
            )}

            {/* Items Count */}
            <div className="mb-6 sm:mb-8">
              <p className="font-inter text-sm sm:text-base text-[#F9C73D]">
                Showing <span className="font-bold text-white">{filteredItems.length}</span> items
                {selectedCategory !== null && ` in ${data.categories.find(c => c.id === selectedCategory)?.name}`}
              </p>
            </div>
          </div>

          {/* Menu Items Grid */}
          <main className="max-w-6xl mx-auto">
            {filteredItems.length > 0 ? (
              <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
                {filteredItems.map((item) => (
                  <MenuItem key={item.id} item={item} />
                ))}
              </div>
            ) : (
              <div className="text-center py-8 sm:py-12">
                <h3 className="font-bebas text-xl sm:text-3xl text-[#730202] mb-2 sm:mb-4">No items found</h3>
                <p className="text-gray-600 font-inter text-sm sm:text-base">Try selecting a different category</p>
              </div>
            )}
          </main>
        
      </div>
    </>
  );
}