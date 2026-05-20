import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus, ShoppingCart, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { CartItem } from '../App';

interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  category: string;
  images: string[];
}

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Omit<CartItem, 'quantity'>, quantity: number) => void;
}

const categoryNames: Record<string, string> = {
  food: 'খাবার',
  decoration: 'সাজসজ্জা',
  rope: 'দড়ি',
  care: 'পরিষ্কার',
};

// Utility function to convert English numbers to Bengali digits
const convertToBengaliNumber = (num: number | string): string => {
  const englishDigits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  const bengaliDigits = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];
  
  return num
    .toString()
    .split('')
    .map((digit) => {
      const index = englishDigits.indexOf(digit);
      return index !== -1 ? bengaliDigits[index] : digit;
    })
    .join('');
};

export default function ProductCard({ product, onAddToCart }: ProductCardProps) {
  const [quantity, setQuantity] = useState(1);
  const [isAdding, setIsAdding] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (isModalOpen) {
      setCurrentImageIndex(0);
    }
  }, [isModalOpen]);

  const handleIncrement = (e: React.MouseEvent) => {
    e.stopPropagation();
    setQuantity((prev) => Math.min(99, prev + 1));
  };

  const handleDecrement = (e: React.MouseEvent) => {
    e.stopPropagation();
    setQuantity((prev) => Math.max(1, prev - 1));
  };

  const handleAddToCartClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsAdding(true);

    const cartItem: Omit<CartItem, 'quantity'> = {
      id: product.id,
      name: product.name,
      price: product.price,
      category: product.category,
      images: product.images,
    };

    onAddToCart(cartItem, quantity);

    setTimeout(() => {
      setIsAdding(false);
      setQuantity(1);
      setIsModalOpen(false);
    }, 600);
  };

  const handleDragEnd = (event: any, info: any) => {
    const swipeThreshold = 50;
    if (info.offset.x < -swipeThreshold && currentImageIndex < product.images.length - 1) {
      setCurrentImageIndex((prev) => prev + 1);
    } else if (info.offset.x > swipeThreshold && currentImageIndex > 0) {
      setCurrentImageIndex((prev) => prev - 1);
    }
  };

  const handlePrevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (currentImageIndex > 0) {
      setCurrentImageIndex((prev) => prev - 1);
    }
  };

  const handleNextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (currentImageIndex < product.images.length - 1) {
      setCurrentImageIndex((prev) => prev + 1);
    }
  };

  return (
    <>
      {/* 1. Grid Card Item */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        whileHover={{ y: -8 }}
        onClick={() => setIsModalOpen(true)}
        className="bg-white rounded-2xl sm:rounded-3xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden group flex flex-col h-full cursor-pointer"
      >
        <div className="relative w-full aspect-square bg-gradient-to-br from-[#0F5132]/10 to-[#D4A017]/10 flex items-center justify-center overflow-hidden shrink-0">
          {product.images && product.images.length > 0 && (
            <img 
              src={product.images[0]} 
              alt={product.name} 
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
            />
          )}
          <div className="absolute top-2 right-2 sm:top-3 sm:right-3 px-2 sm:px-3 py-0.5 sm:py-1 bg-[#0F5132] text-[10px] sm:text-xs text-white rounded-full z-10">
            {categoryNames[product.category] || product.category}
          </div>
        </div>

        <div className="p-4 sm:p-5 flex flex-col flex-1">
          <h3 className="font-bold text-base sm:text-lg text-gray-800 mb-1 sm:mb-2 line-clamp-2 min-h-[2.5rem] sm:min-h-[3.5rem] group-hover:text-[#0F5132] transition-colors">
            {product.name}
          </h3>
          <p className="text-xs sm:text-sm text-gray-500 line-clamp-3 leading-relaxed">
            {product.description}
          </p>
        </div>
      </motion.div>

      {/* 2. Full Screen Modal Popout */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsModalOpen(false)}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-3xl shadow-2xl max-w-sm sm:max-w-md w-full overflow-hidden flex flex-col max-h-[90vh] md:max-h-[85vh] relative"
            >
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/40 hover:bg-black/60 flex items-center justify-center z-50 transition-colors border border-white/10"
              >
                <X className="w-5 h-5 text-white" />
              </button>

              <div className="overflow-y-auto custom-scrollbar flex-1 pb-6">
                
                <div className="relative w-full h-auto max-h-[60vh] bg-[#f4ebe1] overflow-hidden shrink-0 select-none flex items-center justify-center">
                  <motion.div
                    className="flex w-full items-center"
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    onDragEnd={handleDragEnd}
                    animate={{ x: `-${currentImageIndex * 100}%` }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    style={{ width: `${product.images.length * 100}%` }}
                  >
                    {product.images.map((imgUrl, index) => (
                      <div key={index} className="w-full shrink-0 flex items-center justify-center">
                        <img
                          src={imgUrl}
                          alt={`${product.name} template ${index + 1}`}
                          className="w-full h-auto max-h-[60vh] object-contain"
                          draggable="false"
                        />
                      </div>
                    ))}
                  </motion.div>

                  {currentImageIndex > 0 && (
                    <button
                      onClick={handlePrevImage}
                      className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/30 hover:bg-black/40 text-white flex items-center justify-center transition-all backdrop-blur-sm z-20 shadow-sm active:scale-90"
                    >
                      <ChevronLeft className="w-6 h-6 mr-0.5" />
                    </button>
                  )}

                  {currentImageIndex < product.images.length - 1 && (
                    <button
                      onClick={handleNextImage}
                      className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/30 hover:bg-black/40 text-white flex items-center justify-center transition-all backdrop-blur-sm z-20 shadow-sm active:scale-90"
                    >
                      <ChevronRight className="w-6 h-6 ml-0.5" />
                    </button>
                  )}

                  <span className="absolute bottom-4 left-4 bg-[#0F5132] text-white text-[10px] sm:text-xs px-3 py-1 rounded-full font-medium shadow-sm z-10">
                    {categoryNames[product.category] || product.category}
                  </span>

                  {product.images.length > 1 && (
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 bg-black/20 backdrop-blur-md py-1.5 px-3 rounded-full z-10">
                      {product.images.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentImageIndex(index)}
                          className={`h-2 rounded-full transition-all duration-300 ${
                            index === currentImageIndex ? 'w-5 bg-[#0F5132]' : 'w-2 bg-white/60'
                          }`}
                        />
                      ))}
                    </div>
                  )}
                </div>

                <div className="p-5 sm:p-6">
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2">
                    {product.name}
                  </h2>
                  <p className="text-sm text-gray-600 leading-relaxed mb-6">
                    {product.description}
                  </p>

                  <div className="flex items-baseline gap-0.5 mb-6">
                    <span className="text-l sm:text-l font-normal text-black-500 mr-0.5">দাম</span>
                    <span className="text-2xl font-black text-[#0F5132]">
                      {/* ACTION: Converted the price display to Bengali characters here */}
                      {/*৳{convertToBengaliNumber(product.price)} */ }
                      {convertToBengaliNumber(product.price)}
                    </span>
                    <span className="text-xs sm:text-sm text-black-500 ml-0.5">টাকা</span>
                  </div>

                  <div className="flex items-center justify-between border border-gray-200 bg-gray-50 rounded-2xl p-3 mb-6">
                    <span className="text-xs sm:text-sm font-medium text-gray-700 ml-1">পরিমাণ:</span>
                    <div className="flex items-center gap-3 bg-white rounded-xl shadow-sm border border-gray-100 p-1">
                      <button
                        type="button"
                        onClick={handleDecrement}
                        className="w-8 h-8 rounded-lg bg-gray-50 hover:bg-gray-100 flex items-center justify-center transition-colors text-gray-600"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="font-bold text-gray-800 w-6 text-center text-sm sm:text-base">
                        {/* ACTION: Optional - Converted quantity counter digits to Bengali characters too */}
                        {quantity}
                      </span>
                      <button
                        type="button"
                        onClick={handleIncrement}
                        className="w-8 h-8 rounded-lg bg-gray-50 hover:bg-gray-100 flex items-center justify-center transition-colors text-gray-600"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  <motion.button
                    onClick={handleAddToCartClick}
                    disabled={isAdding}
                    whileTap={{ scale: 0.97 }}
                    className={`w-full py-3.5 sm:py-4 rounded-full font-bold text-sm sm:text-lg flex items-center justify-center gap-2 transition-all shadow-md ${
                      isAdding ? 'bg-green-500 text-white' : 'bg-[#0F5132] text-white hover:bg-[#0a3821]'
                    }`}
                  >
                    {isAdding ? <>✔ যুক্ত হয়েছে!</> : <><ShoppingCart className="w-5 h-5" />কার্টে যোগ করুন</>}
                  </motion.button>
                </div>

              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}