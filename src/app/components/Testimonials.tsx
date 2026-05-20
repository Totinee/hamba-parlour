import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'মো. আব্দুল করিম',
    location: 'মিরপুর, ঢাকা',
    rating: 5,
    comment:
      'অসাধারণ সার্ভিস! সময়মত ডেলিভারি পেয়েছি এবং পণ্যের মান খুবই ভালো ছিল। আমার গরু খুব খুশি!',
    image: '👨',
  },
  {
    name: 'ফাতেমা খাতুন',
    location: 'উত্তরা, ঢাকা',
    rating: 5,
    comment:
      'সাজসজ্জার জিনিসগুলো দেখতে খুব সুন্দর। আমার পরিবার খুব খুশি হয়েছে। ধন্যবাদ হাম্বা পার্লার!',
    image: '👩',
  },
  {
    name: 'মো. রফিকুল ইসলাম',
    location: 'মোহাম্মদপুর, ঢাকা',
    rating: 5,
    comment:
      'খাবারের মান অত্যন্ত ভালো এবং দাম ও যুক্তিসঙ্গত। প্রতি বছর এখান থেকেই কিনবো ইনশাল্লাহ।',
    image: '🧔',
  },
];

export default function Testimonials() {
  return (
    <section className="py-16 sm:py-24 bg-gradient-to-br from-[#FFF8E7] to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0F5132] mb-4">
            গ্রাহক পর্যালোচনা 💬
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            আমাদের সন্তুষ্ট গ্রাহকরা কী বলছেন দেখুন
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 text-[#D4A017]/20">
                <Quote className="w-12 h-12" />
              </div>

              {/* Avatar */}
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-[#0F5132] to-[#D4A017] rounded-full flex items-center justify-center text-3xl shadow-lg">
                  {testimonial.image}
                </div>
                <div>
                  <h3 className="font-bold text-gray-800">
                    {testimonial.name}
                  </h3>
                  <p className="text-sm text-gray-500">{testimonial.location}</p>
                </div>
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-[#D4A017] text-[#D4A017]"
                  />
                ))}
              </div>

              {/* Comment */}
              <p className="text-gray-700 leading-relaxed">
                "{testimonial.comment}"
              </p>

              {/* Verified Badge */}
              <div className="mt-4 inline-flex items-center gap-1 px-3 py-1 bg-green-50 text-green-700 rounded-full text-xs font-medium">
                <span>✓</span>
                Verified Customer
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
