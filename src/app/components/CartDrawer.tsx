import { motion, AnimatePresence } from 'motion/react';
import { X, Plus, Minus, Trash2, ShoppingBag } from 'lucide-react';
import { CartItem } from '../App';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (id: string, quantity: number) => void;
  onRemove: (id: string) => void;
  subtotal: number;
  deliveryCharge: number;
  total: number;
  onCheckout: () => void;
}

const categoryNames: Record<string, string> = {
  food: 'খাবার',
  decoration: 'সাজসজ্জা',
  rope: 'দড়ি',
  care: 'পরিষ্কার',
};

export default function CartDrawer({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemove,
  subtotal,
  deliveryCharge,
  total,
  onCheckout,
}: CartDrawerProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="fixed right-0 top-0 bottom-0 w-full sm:w-[480px] bg-white shadow-2xl z-50 flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200 bg-gradient-to-r from-[#0F5132] to-[#16613f]">
              <div className="flex items-center gap-3">
                <ShoppingBag className="w-6 h-6 text-white" />
                <h2 className="text-2xl font-bold text-white">
                  আপনার কার্ট
                </h2>
              </div>
              <button
                onClick={onClose}
                className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors"
              >
                <X className="w-6 h-6 text-white" />
              </button>
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto p-6">
              {cartItems.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center">
                  <p className="text-xl text-gray-600 mb-2">
                    আপনার কার্ট খালি
                  </p>
                  <p className="text-sm text-gray-500">
                    পণ্য যোগ করে কেনাকাটা শুরু করুন
                  </p>
                </div>
              ) : (
                <div className="space-y-4">
                  {cartItems.map((item) => (
                    <motion.div
                      key={item.id}
                      layout
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="flex gap-4 p-4 bg-gray-50 rounded-2xl"
                    >
                      {/* Product Icon */}
                      <div className="w-20 h-20 bg-gradient-to-br from-[#0F5132]/10 to-[#D4A017]/10 rounded-xl flex items-center justify-center shrink-0">
                        <span className="text-sm font-bold text-[#0F5132]">
                          {categoryNames[item.category] || item.category}
                        </span>
                      </div>

                      {/* Product Info */}
                      <div className="flex-1 min-w-0">
                        <h3 className="font-medium text-gray-800 mb-1 line-clamp-2">
                          {item.name}
                        </h3>
                        <p className="text-lg font-bold text-[#0F5132] mb-2">
                          ৳{item.price} × {item.quantity}
                        </p>

                        {/* Quantity Controls */}
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() =>
                              onUpdateQuantity(item.id, item.quantity - 1)
                            }
                            className="w-8 h-8 rounded-full bg-white hover:bg-gray-100 flex items-center justify-center shadow-sm transition-colors"
                          >
                            <Minus className="w-4 h-4 text-gray-700" />
                          </button>
                          <span className="w-8 text-center font-medium">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() =>
                              onUpdateQuantity(item.id, item.quantity + 1)
                            }
                            className="w-8 h-8 rounded-full bg-white hover:bg-gray-100 flex items-center justify-center shadow-sm transition-colors"
                          >
                            <Plus className="w-4 h-4 text-gray-700" />
                          </button>
                          <button
                            onClick={() => onRemove(item.id)}
                            className="ml-auto w-8 h-8 rounded-full bg-red-50 hover:bg-red-100 flex items-center justify-center transition-colors"
                          >
                            <Trash2 className="w-4 h-4 text-red-600" />
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer with totals */}
            {cartItems.length > 0 && (
              <div className="border-t border-gray-200 p-6 bg-gray-50">
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between text-gray-600">
                    <span>সাবটোটাল</span>
                    <span className="font-medium">৳{subtotal}</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>ডেলিভারি চার্জ</span>
                    <span className="font-medium">৳{deliveryCharge}</span>
                  </div>
                  <div className="flex justify-between text-xl font-bold text-[#0F5132] pt-3 border-t border-gray-300">
                    <span>সর্বমোট</span>
                    <span>৳{total}</span>
                  </div>
                </div>

                <button
                  onClick={onCheckout}
                  className="w-full py-4 bg-gradient-to-r from-[#0F5132] to-[#16613f] text-white rounded-full font-medium hover:shadow-lg transition-all text-lg"
                >
                  চেকআউট করুন
                </button>

                <p className="text-xs text-center text-gray-500 mt-3">
                  শুধুমাত্র ঢাকার ভিতরে ডেলিভারি
                </p>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
