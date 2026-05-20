import rajokioSet1 from "../../images/rajokioSet1.jpeg";
import rajokioSet2 from "../../images/rajokioSet2.jpeg";
import shahiSet1 from "../../images/shahiSet1.jpeg";
import shahiSet2 from "../../images/shahiSet2.jpeg";
import lilabotiCombo1 from "../../images/lilabotiCombo1.jpeg";
import lilabotiCombo2 from "../../images/lilabotiCombo2.jpeg";
import oirabotiCombo1 from "../../images/oirabotiCombo1.jpeg";
import oirabotiCombo2 from "../../images/oirabotiCombo2.jpeg";
import bonolotaMala1 from "../../images/bonolotaMala1.jpeg";
import bonolotaMala2 from "../../images/bonolotaMala2.jpeg";
import mayabotiMala1 from "../../images/mayabotiMala1.jpeg";
import mayabotiMala2 from "../../images/mayabotiMala2.jpeg";
import jomkaloMala1 from "../../images/jomkaloMala1.jpeg";
import jomkaloMala2 from "../../images/jomkaloMala2.jpeg";
import bhushiRegular1 from "../../images/bhushiRegular1.jpeg";
import bhushiGom from "../../images/bhushiGom.jpeg";
import kura from "../../images/kura.jpeg";
import combo1 from "../../images/combo1.jpeg";
import combo2 from "../../images/combo2.jpeg";
import khoil from "../../images/khoil.jpeg";


import { useState } from 'react';
import ProductCard from './ProductCard';
import { CartItem } from '../App';

// UPDATED: Shifted from single image to a string array
interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  category: string;
  images: string[]; 
}

// UPDATED: Added quantity parameter to sync seamlessly with App.tsx changes
interface ProductSectionProps {
  onAddToCart: (product: Omit<CartItem, 'quantity'>, quantity: number) => void;
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
    name: 'হাম্বা রাজকীয় সাজ সেট',
    price: 450,
    description: 'রঙিন ফুল ও ঘন্টি দিয়ে তৈরি আকর্ষণীয় গলার মালা',
    category: 'decoration',
    images: [rajokioSet1, rajokioSet2],
  },
  {
  id: '2',
  name: 'হাম্বা শাহী সাজ সেট',
  price: 350,
  description: 'কপাল পট্টি, শিংয়ের ক্যাপ ও ফুলের মালার আকর্ষণীয় শাহী সাজ সেট',
  category: 'decoration',
  images: [shahiSet1, shahiSet2],
  },
  {
  id: '3',
  name: 'লীলাবতী কম্বো',
  price: 590,
  description: 'ফুলের মালা, ঝালর ও লটকন সমৃদ্ধ চমৎকার ঈদ বিশেষ কম্বো প্যাক',
  category: 'decoration',
  images: [lilabotiCombo1, lilabotiCombo2],
  },
  {
  id: '4',
  name: 'ঐরাবতী কম্বো',
  price: 890,
  description: 'গলার মালা, কপাল পট্টি, শিং ও লেজের সাজসহ প্রিমিয়াম রাজকীয় কম্বো',
  category: 'decoration',
  images: [oirabotiCombo1, oirabotiCombo2],
  },
  {
  id: '5',
  name: 'রাজকীয় বনলতা মালা',
  price: 250,
  description: 'ঝলমলে ও আকর্ষণীয় বহু রঙের কম্বিনেশনে তৈরি হালকা ও টেকসই রাজকীয় গলার মালা',
  category: 'decoration',
  images: [bonolotaMala1, bonolotaMala2],
  },
  {
  id: '6',
  name: 'রাজকীয় মায়াবতী মালা',
  price: 150,
  description: 'উচ্চমানের নরম উপাদানে তৈরি হালকা, টেকসই ও আরামদায়ক গলার মালা',
  category: 'decoration',
  images: [mayabotiMala1, mayabotiMala2],
  },
  {
  id: '7',
  name: 'রাজকীয় জমকালো মালা',
  price: 280,
  description: 'মাল্টি কালার ডিজাইন ও ঝালর বিশিষ্ট জমকালো ঝুলন্ত ফুলের মালা',
  category: 'decoration',
  images: [jomkaloMala1, jomkaloMala2],
  },
  {
  id: '8',
  name: 'ভুসি (Regular) - ১ কেজি',
  price: 180,
  description: 'সহজে হজমযোগ্য ও আঁশযুক্ত পুষ্টিকর ভুসি',
  category: 'food',
  images: [bhushiRegular1],
  },
  {
  id: '9',
  name: 'গমের/ ডাবলির ভুসি - ১ কেজি',
  price: 280,
  description: 'উচ্চ পুষ্টিগুণ সম্পন্ন প্রিমিয়াম কোয়ালিটির ভুসি',
  category: 'food',
  images: [bhushiGom],
  },
  {
  id: '10',
  name: 'কুড়া - ১ কেজি',
  price: 180,
  description: 'শক্তির উৎস ও পুষ্টিগুণে ভরপুর খাঁটি কুড়া',
  category: 'food',
  images: [kura],
  },
  {
  id: '11',
  name: 'খাদ্য কম্বো-১',
  price: 490,
  description: 'ভুসি/কুড়া, গমের/ডাবলির ভুসি এবং লবণের সমন্বয়ে গঠিত পশুর সুষম ও পুষ্টিকর কম্বো প্যাক',
  category: 'food',
  images: [combo1],
  },
  {
  id: '12',
  name: 'খাদ্য কম্বো-২',
  price: 390,
  description: 'ভুসি, কুড়া, গমের/ডাবলির ভুসি এবং লবণের পুষ্টিকর খাদ্য কম্বো',
  category: 'food',
  images: [combo2],
  },
  {
  id: '13',
  name: 'খৈল - ১ কেজি',
  price: 180,
  description: 'পশুর পুষ্টির জন্য উৎকৃষ্ট মানের খৈল',
  category: 'food',
  images: [khoil],
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

        {/* Products Grid */}
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
              {/* FIXED: Changed activeCategory to selectedCategory */}
              {selectedCategory === 'care' ? (
                "Currently not available"
              ) : (
                "এই ক্যাটাগরিতে এখনো পণ্য যুক্ত করা হয়নি"
              )}
            </p>
          </div>
        )}
      </div>
    </section>
  );
}