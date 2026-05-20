import { useState } from 'react';
import { motion } from 'motion/react';
import { Plus, Minus, ShoppingCart } from 'lucide-react';
import { CartItem } from '../App';

interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  category: string;
  image?: string;
}

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Omit<CartItem, 'quantity'>) => void;
}

const categoryNames: Record<string, string> = {
  food: 'খাবার',
  decoration: 'সাজসজ্জা',
  rope: 'দড়ি',
  care: 'পরিষ্কার',
};

export default function ProductCard({ product, onAddToCart }: ProductCardProps) {
  const [quantity, setQuantity] = useState(1);
  const [isAdding, setIsAdding] = useState(false);

  const handleAddToCart = () => {
    setIsAdding(true);
    const cartItem: Omit<CartItem, 'quantity'> = {
      id: product.id,
      name: product.name,
      price: product.price,
      category: product.category,
      image: product.image,
    };

    // Add to cart multiple times based on quantity
    for (let i = 0; i < quantity; i++) {
      onAddToCart(cartItem);
    }

    setTimeout(() => {
      setIsAdding(false);
      setQuantity(1);
    }, 600);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
      className="bg-white rounded-2xl sm:rounded-3xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden group flex flex-col h-full"
    >
      {/* Product Image/Icon Container - FIXED: Scaled height for mobile */}
      <div className="relative h-32 sm:h-48 bg-gradient-to-br from-[#0F5132]/10 to-[#D4A017]/10 flex items-center justify-center overflow-hidden shrink-0">
        {/* Category Badge - FIXED: Responsive text size and position */}
        <div className="absolute top-2 right-2 sm:top-3 sm:right-3 px-2 sm:px-3 py-0.5 sm:py-1 bg-[#0F5132] text-[10px] sm:text-xs text-white rounded-full">
          {categoryNames[product.category] || product.category}
        </div>
      </div>

      {/* Product Info Box - FIXED: flex dynamic wrapper with compact mobile padding */}
      <div className="p-3 sm:p-5 flex flex-col flex-1 justify-between">
        <div>
          {/* Title - FIXED: Lowered minimum heights for mobile view widths */}
          <h3 className="font-bold text-sm sm:text-lg text-gray-800 mb-1 sm:mb-2 line-clamp-2 min-h-[2.5rem] sm:min-h-[3.5rem]">
            {product.name}
          </h3>

          {/* Description - FIXED: Hidden on mobile grid to protect text spacing bounds */}
          <p className="text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4 line-clamp-2 min-h-0 sm:min-h-[2.5rem] hidden sm:block">
            {product.description}
          </p>
        </div>

        {/* Footer actions pinned perfectly layout-wise */}
        <div className="mt-auto space-y-2.5 sm:space-y-4">
          {/* Price - FIXED: Adjusted font size dynamically */}
          <div className="flex items-baseline gap-0.5">
            <span className="text-lg sm:text-2xl font-black text-[#0F5132]">
              Asking ৳{product.price}
            </span>
            <span className="text-[10px] sm:text-sm text-gray-500">টাকা</span>
          </div>

          {/* Quantity Selector - FIXED: Stacked beautifully or row-tightened layout */}
          <div className="flex items-center justify-between bg-gray-50 rounded-xl p-1 border border-gray-100">
            <span className="text-xs sm:text-sm text-gray-500 pl-1">পরিমাণ:</span>
            <div className="flex items-center gap-1 sm:gap-2">
              <button
                type="button"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white shadow-sm hover:bg-gray-100 flex items-center justify-center transition-colors"
              >
                <Minus className="w-3 h-3 sm:w-4 sm:h-4 text-gray-700" />
              </button>
              <span className="w-6 sm:w-8 text-center text-xs sm:text-sm font-bold text-gray-700">{quantity}</span>
              <button
                type="button"
                onClick={() => setQuantity(Math.min(99, quantity + 1))}
                className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white shadow-sm hover:bg-gray-100 flex items-center justify-center transition-colors"
              >
                <Plus className="w-3 h-3 sm:w-4 sm:h-4 text-gray-700" />
              </button>
            </div>
          </div>

          {/* Add to Cart Button - FIXED: Responsive text size and padding heights */}
          <motion.button
            onClick={handleAddToCart}
            disabled={isAdding}
            whileTap={{ scale: 0.95 }}
            className={`w-full py-2 sm:py-3 px-2 rounded-xl sm:rounded-full font-bold transition-all flex items-center justify-center gap-1.5 text-xs sm:text-base ${
              isAdding
                ? 'bg-green-500 text-white'
                : 'bg-[#0F5132] text-white hover:bg-[#0a3821] hover:shadow-lg'
            }`}
          >
            {isAdding ? (
              <>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 0.5, repeat: 1 }}
                  className="font-bold text-sm sm:text-lg"
                >
                  ✓
                </motion.div>
                <span className="truncate">যুক্ত হয়েছে!</span>
              </>
            ) : (
              <>
                <ShoppingCart className="w-3.5 h-3.5 sm:w-5 sm:h-5 shrink-0" />
                <span className="truncate">কার্টে যোগ করুন</span>
              </>
            )}
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}