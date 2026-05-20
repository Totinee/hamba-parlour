import { useState } from 'react';
import ProductCard from './ProductCard';
import { CartItem } from '../App';

interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  category: string;
  image?: string;
}

interface ProductSectionProps {
  onAddToCart: (product: Omit<CartItem, 'quantity'>) => void;
}

const categories = [
  { id: 'all', name: 'সব পণ্য' },
  { id: 'food', name: 'পশুর খাবার' },
  { id: 'decoration', name: 'পশু সাজানোর সামগ্রী' },
  { id: 'rope', name: 'দড়ি ও আনুষঙ্গিক' },
  { id: 'care', name: 'পরিষ্কারক সামগ্রী' },
];

const sampleProducts: Product[] = [
  {
    id: '1',
    name: 'প্রিমিয়াম গো-খাদ্য (১০ কেজি)',
    price: 1200,
    description: 'উচ্চ পুষ্টিসম্পন্ন গো-খাদ্য যা আপনার পশুকে সুস্থ ও সবল রাখবে',
    category: 'food',
  },
  {
    id: '2',
    name: 'বিশেষ ভুট্টা মিশ্রণ (৫ কেজি)',
    price: 600,
    description: 'তাজা ভুট্টা ও খড়ের মিশ্রণ, পশুর প্রিয় খাবার',
    category: 'food',
  },
  {
    id: '3',
    name: 'সুপার ভিটামিন সাপ্লিমেন্ট',
    price: 450,
    description: 'পশুর রোগ প্রতিরোধ ক্ষমতা বাড়ায়',
    category: 'food',
  },
  {
    id: '4',
    name: 'প্রিমিয়াম গলার মালা সেট',
    price: 850,
    description: 'রঙিন ফুল ও ঘন্টি দিয়ে তৈরি আকর্ষণীয় গলার মালা',
    category: 'decoration',
  },
  {
    id: '5',
    name: 'ঈদ বিশেষ সাজসজ্জা প্যাকেজ',
    price: 1500,
    description: 'সম্পূর্ণ সাজসজ্জার জন্য সব উপকরণ একসাথে',
    category: 'decoration',
  },
  {
    id: '6',
    name: 'রঙিন কাপড় ও ফিতা',
    price: 350,
    description: 'উজ্জ্বল রঙের কাপড় যা পশুকে আকর্ষণীয় করবে',
    category: 'decoration',
  },
  {
    id: '7',
    name: 'শক্ত নাইলন দড়ি (২০ মিটার)',
    price: 550,
    description: 'মজবুত ও টেকসই নাইলন দড়ি',
    category: 'rope',
  },
  {
    id: '8',
    name: 'হেভি ডিউটি চেইন',
    price: 900,
    description: 'বড় পশুর জন্য অতিরিক্ত মজবুত চেইন',
    category: 'rope',
  },
  {
    id: '9',
    name: 'অ্যান্টিসেপটিক স্প্রে',
    price: 380,
    description: 'পশুর ক্ষত ও চর্মরোগ প্রতিরোধে কার্যকর',
    category: 'care',
  },
  {
    id: '10',
    name: 'ভেটেরিনারি কেয়ার কিট',
    price: 1200,
    description: 'প্রাথমিক চিকিৎসার সম্পূর্ণ সেট',
    category: 'care',
  },
  {
    id: '11',
    name: 'মশা তাড়ানোর স্প্রে',
    price: 320,
    description: 'পশুকে মশা ও পোকামাকড় থেকে রক্ষা করে',
    category: 'care',
  },
  {
    id: '12',
    name: 'চকচকে ব্রাশ সেট',
    price: 280,
    description: 'পশুর লোম পরিষ্কার ও চকচকে করার জন্য',
    category: 'care',
  },
];

export default function ProductSection({ onAddToCart }: ProductSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredProducts =
    selectedCategory === 'all'
      ? sampleProducts
      : sampleProducts.filter((p) => p.category === selectedCategory);

  return (
    <section id="products" className="py-16 sm:py-24 bg-[#FFF8E7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0F5132] mb-4">
            আমাদের পণ্য সমূহ
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            কুরবানির জন্য প্রয়োজনীয় সব উপকরণ পাবেন এখানে
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all ${
                selectedCategory === category.id
                  ? 'bg-[#0F5132] text-white shadow-lg scale-105'
                  : 'bg-white text-gray-700 hover:bg-gray-50 hover:shadow-md'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Products Grid - UPDATED CLASSES HERE FOR 2 COLUMNS ON MOBILE */}
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-6">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={onAddToCart}
            />
          ))}
        </div>

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-16">
            <p className="text-xl text-gray-600">
              এই ক্যাটাগরিতে এখনো পণ্য যুক্ত করা হয়নি
            </p>
          </div>
        )}
      </div>
    </section>
  );
}