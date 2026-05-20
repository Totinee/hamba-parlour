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
      className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
    >
      {/* Product Image/Icon */}
      <div className="relative h-48 bg-gradient-to-br from-[#0F5132]/10 to-[#D4A017]/10 flex items-center justify-center overflow-hidden">
        {/* Category Badge */}
        <div className="absolute top-3 right-3 px-3 py-1 bg-[#0F5132] text-white text-xs rounded-full">
          {categoryNames[product.category] || product.category}
        </div>
      </div>

      {/* Product Info */}
      <div className="p-5">
        <h3 className="font-bold text-lg text-gray-800 mb-2 line-clamp-2 min-h-[3.5rem]">
          {product.name}
        </h3>

        <p className="text-sm text-gray-600 mb-4 line-clamp-2 min-h-[2.5rem]">
          {product.description}
        </p>

        {/* Price */}
        <div className="flex items-center justify-between mb-4">
          <div>
            <span className="text-2xl font-bold text-[#0F5132]">
              ৳{product.price}
            </span>
            <span className="text-sm text-gray-500 ml-1">টাকা</span>
          </div>
        </div>

        {/* Quantity Selector */}
        <div className="flex items-center gap-3 mb-4">
          <span className="text-sm text-gray-600">পরিমাণ:</span>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
            >
              <Minus className="w-4 h-4 text-gray-700" />
            </button>
            <span className="w-8 text-center font-medium">{quantity}</span>
            <button
              onClick={() => setQuantity(Math.min(99, quantity + 1))}
              className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
            >
              <Plus className="w-4 h-4 text-gray-700" />
            </button>
          </div>
        </div>

        {/* Add to Cart Button */}
        <motion.button
          onClick={handleAddToCart}
          disabled={isAdding}
          whileTap={{ scale: 0.95 }}
          className={`w-full py-3 rounded-full font-medium transition-all flex items-center justify-center gap-2 ${
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
              >
                ✓
              </motion.div>
              যুক্ত হয়েছে!
            </>
          ) : (
            <>
              <ShoppingCart className="w-5 h-5" />
              কার্টে যোগ করুন
            </>
          )}
        </motion.button>
      </div>
    </motion.div>
  );
}
