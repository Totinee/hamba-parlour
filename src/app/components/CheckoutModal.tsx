import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Check } from 'lucide-react';
import { CartItem } from '../App';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  total: number;
  deliveryCharge: number;
}

export default function CheckoutModal({
  isOpen,
  onClose,
  cartItems,
  total,
  deliveryCharge,
}: CheckoutModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.phone || !formData.address) {
      alert('দয়া করে সব তথ্য পূরণ করুন');
      return;
    }

    setIsSubmitting(true);

    // Generate WhatsApp message
    let message = '🛒 *নতুন অর্ডার - হাম্বা পার্লার*\n\n';
    message += `👤 *নাম:* ${formData.name}\n`;
    message += `📞 *ফোন:* ${formData.phone}\n`;
    message += `📍 *ঠিকানা:* ${formData.address}\n\n`;
    message += '🧾 *অর্ডার:*\n';

    cartItems.forEach((item) => {
      message += `- ${item.name} × ${item.quantity} = ৳${item.price * item.quantity}\n`;
    });

    message += `\n🚚 *Delivery Charge:* ৳${deliveryCharge}\n`;
    message += `💰 *Total:* ৳${total}`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappNumber = '8801611820643'; 
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    setShowSuccess(true);

    setTimeout(() => {
      window.open(whatsappURL, '_blank');

      setTimeout(() => {
        setShowSuccess(false);
        setIsSubmitting(false);
        setFormData({ name: '', phone: '', address: '' });
        onClose();
      }, 1500);
    }, 1500);
  };

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
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            {/* Modal Container - FIXED: Added flex column construction and max height bounding */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-3xl shadow-2xl max-w-md w-full overflow-hidden flex flex-col max-h-[85vh] relative"
            >
              {/* Success Animation - Overlay container spans the active visible frame */}
              <AnimatePresence>
                {showSuccess && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 bg-green-500 flex items-center justify-center z-50"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: 'spring', damping: 15 }}
                      className="text-center p-6"
                    >
                      <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                        <Check className="w-16 h-16 text-green-500" />
                      </div>
                      <p className="text-2xl font-bold text-white">
                        অর্ডার সফল!
                      </p>
                      <p className="text-white/90 mt-2">
                        WhatsApp এ রিডাইরেক্ট হচ্ছে...
                      </p>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Header - FIXED: Set shrink-0 to stay pinned on scroll */}
              <div className="bg-gradient-to-r from-[#0F5132] to-[#16613f] p-5 sm:p-6 shrink-0">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl sm:text-2xl font-bold text-white">
                    চেকআউট
                  </h2>
                  <button
                    onClick={onClose}
                    className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors"
                  >
                    <X className="w-6 h-6 text-white" />
                  </button>
                </div>
              </div>

              {/* Form Content - FIXED: Form is now fully scrollable inside the modal container wrapper */}
              <form onSubmit={handleSubmit} className="p-5 sm:p-6 overflow-y-auto custom-scrollbar flex-1">
                <div className="space-y-4 mb-6">
                  {/* Name */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      আপনার নাম *
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      placeholder="উদাহরণ: আব্দুল করিম"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#0F5132] focus:border-transparent outline-none transition-all text-sm sm:text-base"
                      required
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      ফোন নম্বর *
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      placeholder="উদাহরণ: 01711-123456"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#0F5132] focus:border-transparent outline-none transition-all text-sm sm:text-base"
                      required
                    />
                  </div>

                  {/* Address */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      সম্পূর্ণ ঠিকানা *
                    </label>
                    <textarea
                      value={formData.address}
                      onChange={(e) =>
                        setFormData({ ...formData, address: e.target.value })
                      }
                      placeholder="বাসা, রোড, এলাকা, ঢাকা"
                      rows={3}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#0F5132] focus:border-transparent outline-none transition-all resize-none text-sm sm:text-base"
                      required
                    />
                  </div>
                </div>

                {/* Warning Banner */}
                <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-3.5 mb-6">
                  <p className="text-xs sm:text-sm text-yellow-800 text-center font-medium">
                    শুধুমাত্র ঢাকার ভিতরে অর্ডার গ্রহণ করা হয়
                  </p>
                </div>

                {/* Order Summary */}
                <div className="bg-gray-50 rounded-xl p-4 mb-6">
                  <h3 className="font-bold text-sm text-gray-700 border-b pb-2 mb-3">
                    অর্ডার সারাংশ
                  </h3>
                  <div className="space-y-2 text-xs sm:text-sm">
                    {cartItems.map((item) => (
                      <div
                        key={item.id}
                        className="flex justify-between text-gray-600 gap-4"
                      >
                        <span className="line-clamp-1">
                          {item.name} × {item.quantity}
                        </span>
                        <span className="font-medium shrink-0">
                          ৳{item.price * item.quantity}
                        </span>
                      </div>
                    ))}
                    <div className="border-t border-gray-200 pt-2 mt-2">
                      <div className="flex justify-between text-gray-600 mb-1.5">
                        <span>ডেলিভারি চার্জ</span>
                        <span>৳{deliveryCharge}</span>
                      </div>
                      <div className="flex justify-between text-base sm:text-lg font-bold text-[#0F5132]">
                        <span>সর্বমোট</span>
                        <span>৳{total}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 sm:py-4 bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white rounded-full font-bold hover:shadow-xl transition-all text-base sm:text-lg flex items-center justify-center gap-2 disabled:opacity-50 tracking-wide"
                >
                  {isSubmitting ? (
                    'প্রক্রিয়াকরণ হচ্ছে...'
                  ) : (
                    'WhatsApp এ অর্ডার নিশ্চিত করুন'
                  )}
                </button>
              </form>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}