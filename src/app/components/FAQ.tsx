import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: 'আপনারা কোথায় কোথায় ডেলিভারি দেন?',
    answer:
      'আমরা বর্তমানে শুধুমাত্র ঢাকা শহরের ভিতরে ডেলিভারি সেবা প্রদান করছি। ডেলিভারি চার্জ মাত্র ৮০ টাকা।',
  },
  {
    question: 'ডেলিভারি পেতে কতদিন সময় লাগে?',
    answer:
      'অর্ডার কনফার্ম হওয়ার পর ২৪-৪৮ ঘণ্টার মধ্যে আমরা পণ্য ডেলিভারি করে থাকি। জরুরী ক্ষেত্রে একই দিনে ডেলিভারির ব্যবস্থাও আছে।',
  },
  {
    question: 'পেমেন্ট পদ্ধতি কী?',
    answer:
      'আমরা ক্যাশ অন ডেলিভারি (COD) পদ্ধতি গ্রহণ করি। পণ্য হাতে পাওয়ার পর পেমেন্ট করতে পারবেন। এছাড়া bKash ও Nagad এর মাধ্যমেও পেমেন্ট করতে পারবেন।',
  },
  {
    question: 'পণ্যের মান নিয়ে নিশ্চিত থাকতে পারি?',
    answer:
      'অবশ্যই! আমরা শুধুমাত্র উচ্চ মানের এবং তাজা পণ্য সরবরাহ করি। পণ্যের মান নিয়ে যদি কোনো সমস্যা থাকে, তাহলে রিপ্লেসমেন্ট অথবা রিফান্ডের ব্যবস্থা আছে।',
  },
  {
    question: 'অর্ডার ক্যান্সেল করতে পারি?',
    answer:
      'হ্যাঁ, ডেলিভারির আগে যেকোনো সময় অর্ডার ক্যান্সেল করতে পারবেন। আমাদের হোয়াটসঅ্যাপ বা ফেসবুক পেজে মেসেজ করুন।',
  },
  {
    question: 'কুরবানির ঈদের আগে অর্ডার করলে কি সময়মত পাবো?',
    answer:
      'ঈদের আগে অর্ডার বৃদ্ধি পায়, তাই যত তাড়াতাড়ি সম্ভব অর্ডার করুন। আমরা সব অর্ডার ঈদের আগে ডেলিভারি করার চেষ্টা করি।',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-16 sm:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0F5132] mb-4">
            প্রায়শই জিজ্ঞাসিত প্রশ্ন
          </h2>
          <p className="text-lg text-gray-600">
            আপনার সব প্রশ্নের উত্তর এখানে
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="bg-gradient-to-br from-[#FFF8E7] to-white rounded-2xl shadow-md hover:shadow-lg transition-all overflow-hidden border border-gray-100"
            >
              {/* Question */}
              <button
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <h3 className="font-bold text-lg text-gray-800 pr-4">
                  {faq.question}
                </h3>
                <div
                  className={`shrink-0 w-8 h-8 rounded-full bg-[#0F5132] flex items-center justify-center transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                >
                  {openIndex === index ? (
                    <Minus className="w-5 h-5 text-white" />
                  ) : (
                    <Plus className="w-5 h-5 text-white" />
                  )}
                </div>
              </button>

              {/* Answer */}
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6">
                      <p className="text-gray-700 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center p-8 bg-gradient-to-br from-[#0F5132] to-[#16613f] rounded-3xl shadow-xl"
        >
          <h3 className="text-2xl font-bold text-white mb-3">
            আরও প্রশ্ন আছে?
          </h3>
          <p className="text-white/90 mb-6">
            আমাদের সাথে যোগাযোগ করতে নিচের বাটনে ক্লিক করুন
          </p>
          <a
            href="https://wa.me/8801611820643"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#25D366] text-white rounded-full font-medium hover:bg-[#1da851] transition-all hover:shadow-lg"
          >
            WhatsApp এ মেসেজ করুন
          </a>
        </motion.div>
      </div>
    </section>
  );
}
