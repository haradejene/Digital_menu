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

  // Hide title after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTitle(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  // Filter items by category
  useEffect(() => {
    if (selectedCategory === null) {
      setFilteredItems(data.items);
    } else {
      const filtered = data.items.filter(item => item.categoryId === selectedCategory);
      setFilteredItems(filtered);
    }
  }, [selectedCategory, data.items]);

  // Handle category selection
  const handleCategorySelect = (categoryId: number) => {
    setSelectedCategory(categoryId);
  };

  // Reset to show all items
  const handleShowAll = () => {
    setSelectedCategory(null);
  };

  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 min-h-screen">
        {/* Animated Title */}
        <header className={`text-center mb-12 pt-8 transition-all duration-1000 ${showTitle ? 'opacity-100 h-auto' : 'opacity-0 h-0 overflow-hidden'}`}>
          <h1 className="best-chicken-title text-4xl md:text-5xl lg:text-6xl font-extrabold">
            {data.title}
          </h1>
        </header>

        {/* Category Buttons */}
        <div className={`transition-all duration-1000 delay-1000 ${showTitle ? 'opacity-0' : 'opacity-100'}`}>
          <div className="text-center mb-12">
            <h2 className="font-bebas text-3xl md:text-4xl font-bold text-[#F9C73D] mb-6">OUR MENU CATEGORIES</h2>
            <p className="text-[#ffffff] font-inter mb-4 max-w-2xl mx-auto">
              Select a category to explore our delicious offerings
            </p>
            
            {/* Category Buttons */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {/* All Items Button */}
              <button
                onClick={handleShowAll}
                className={`px-6 py-3 rounded-full font-bebas text-xl tracking-wide transition-all duration-300 ${selectedCategory === null ? 'border-2 border-white text-white' : 'border-2 border-white text-white hover:bg-gray-300'}`}
              >
                ALL ITEMS
              </button>
              
              {/* Category Buttons */}
              {data.categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => handleCategorySelect(category.id)}
                  className={`px-6 py-3 rounded-full font-bebas text-xl tracking-wide transition-all duration-300 ${selectedCategory === category.id ? 'bg-[#730202] text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
                >
                  {category.name}
                </button>
              ))}
            </div>

            {/* Selected Category Description */}
            {selectedCategory !== null && (
              <div className="mb-8 p-4 rounded-2xl border border-[#F9C73D]/30 max-w-2xl mx-auto">
                <h3 className="font-bebas text-2xl text-[#F9C73D] mb-2">
                  {data.categories.find(c => c.id === selectedCategory)?.name}
                </h3>
                <p className="text-white font-inter">
                  {data.categories.find(c => c.id === selectedCategory)?.description}
                </p>
              </div>
            )}

            {/* Items Count */}
            <div className="mb-8">
              <p className="font-inter text-[#F9C73D]">
                Showing <span className="font-bold text-white">{filteredItems.length}</span> items
                {selectedCategory !== null && ` in ${data.categories.find(c => c.id === selectedCategory)?.name}`}
              </p>
            </div>
          </div>

          {/* Menu Items Grid */}
          <main className="max-w-6xl mx-auto">
            {filteredItems.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredItems.map((item) => (
                  <MenuItem key={item.id} item={item} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <h3 className="font-bebas text-3xl text-[#730202] mb-4">No items found</h3>
                <p className="text-gray-600 font-inter">Try selecting a different category</p>
              </div>
            )}
          </main>
        </div>
      </div>
    </>
  );
}