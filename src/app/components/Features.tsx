import { motion } from 'motion/react';
import { Truck, Shield, Clock, ThumbsUp } from 'lucide-react';

const features = [
  {
    icon: Truck,
    title: 'দ্রুত ডেলিভারি',
    description: 'ঢাকার ভিতরে দ্রুততম সময়ে পৌঁছে যাবে',
    color: 'from-blue-500 to-blue-600',
  },
  {
    icon: Shield,
    title: 'বিশ্বস্ত সেবা',
    description: 'মান ও গুণগত মান নিয়ে কোন আপোষ নেই',
    color: 'from-green-500 to-green-600',
  },
  {
    icon: Clock,
    title: '২৪/৭ সাপোর্ট',
    description: 'যেকোনো সময় আমাদের সাথে যোগাযোগ করুন',
    color: 'from-purple-500 to-purple-600',
  },
  {
    icon: ThumbsUp,
    title: 'তাজা পণ্য',
    description: 'সব পণ্য তাজা ও উচ্চ মানের নিশ্চয়তা',
    color: 'from-orange-500 to-orange-600',
  },
];

export default function Features() {
  return (
    <section id="features" className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0F5132] mb-4">
            কেন আমাদের বেছে নেবেন?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            আমরা প্রতিশ্রুতিবদ্ধ সর্বোচ্চ মানের সেবা প্রদানে
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="text-center group"
            >
              {/* Icon */}
              <div className="relative mb-6 inline-block">
                <div
                  className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center shadow-lg group-hover:shadow-2xl transition-all group-hover:scale-110`}
                >
                  <feature.icon className="w-10 h-10 text-white" />
                </div>
                {/* Decorative circle */}
                <div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${feature.color} opacity-20 blur-xl group-hover:opacity-30 transition-opacity`}
                />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6"
        >
          <div className="bg-gradient-to-br from-[#0F5132]/5 to-[#D4A017]/5 rounded-2xl p-6 text-center border border-[#0F5132]/10">
            <h4 className="font-bold text-[#0F5132] mb-1">তাজা পণ্য</h4>
            <p className="text-sm text-gray-600">সবসময় তাজা পণ্য</p>
          </div>

          <div className="bg-gradient-to-br from-[#0F5132]/5 to-[#D4A017]/5 rounded-2xl p-6 text-center border border-[#0F5132]/10">
            <h4 className="font-bold text-[#0F5132] mb-1">দ্রুত ডেলিভারি</h4>
            <p className="text-sm text-gray-600">দ্রুত ডেলিভারি সেবা</p>
          </div>

          <div className="bg-gradient-to-br from-[#0F5132]/5 to-[#D4A017]/5 rounded-2xl p-6 text-center border border-[#0F5132]/10">
            <h4 className="font-bold text-[#0F5132] mb-1">বিশ্বস্ত সেবা</h4>
            <p className="text-sm text-gray-600">বিশ্বস্ত ও নির্ভরযোগ্য</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
