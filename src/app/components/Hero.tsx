import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative pt-24 sm:pt-32 pb-24 sm:pb-32 overflow-hidden flex items-center min-h-[85vh]"
    >
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0F5132] via-[#16613f] to-[#0F5132]">
        {/* Islamic pattern overlay */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Decorative Blur Background Circles - Moved to global scope so they float behind everything */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute top-10 right-10 w-96 h-96 bg-[#D4A017]/15 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute bottom-10 left-10 w-96 h-96 bg-white/5 rounded-full blur-3xl"
        />
      </div>

      {/* REMOVED max-w-7xl and grid-cols-2 to let text spread out and center */}
      <div className="relative w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        {/* Left Content - Now Centered & Wider */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center flex flex-col items-center"
        >
          {/* Eid Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-5 py-2 bg-[#D4A017] text-white rounded-full mb-6 shadow-md"
          >
            <span className="text-sm font-semibold tracking-wide">কুরবানি ঈদ বিশেষ</span>
          </motion.div>

          {/* Scaled up the font sizing for wider desktop displays */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight max-w-4xl">
            কুরবানির প্রস্তুতি{' '}
            <span className="text-[#D4A017]">এবার স্টাইলে</span>
          </h1>

          <div className="inline-block px-8 py-3 bg-[#D4A017]/20 backdrop-blur-sm rounded-2xl border-2 border-[#D4A017] mb-8">
            <p className="text-2xl sm:text-4xl font-bold text-white tracking-wide">
              ঈদ মুবারক
            </p>
          </div>

          <p className="text-lg sm:text-2xl text-white/90 mb-10 max-w-2xl font-light">
            পশুর খাবার, সাজসজ্জা ও প্রয়োজনীয় সবকিছু এক জায়গায়
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 w-full sm:w-auto">
            <a
              href="#products"
              className="px-10 py-4 bg-[#D4A017] text-white rounded-full font-bold text-lg hover:bg-[#b8890e] transition-all hover:shadow-[0_0_30px_rgba(212,160,23,0.3)] hover:scale-105 text-center"
            >
              এখনই অর্ডার করুন
            </a>
            <a
              href="#products"
              className="px-10 py-4 bg-white text-[#0F5132] rounded-full font-bold text-lg hover:bg-gray-100 transition-all hover:shadow-xl hover:scale-105 text-center"
            >
              পণ্য দেখুন
            </a>
          </div>

          {/* Notice Cards - Spread cleanly at the bottom */}
          <div className="grid sm:grid-cols-2 gap-4 w-full max-w-xl mx-auto">
            <div className="p-5 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 hover:bg-white/15 transition-colors">
              <p className="text-xs sm:text-sm text-white/70 mb-1 tracking-wider uppercase">ডেলিভারি এরিয়া</p>
              <p className="text-lg sm:text-xl font-bold text-white">শুধুমাত্র ঢাকায়</p>
            </div>

            <div className="p-5 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 hover:bg-white/15 transition-colors">
              <p className="text-xs sm:text-sm text-white/70 mb-1 tracking-wider uppercase">ডেলিভারি চার্জ</p>
              <p className="text-lg sm:text-xl font-bold text-white">মাত্র ৮০ টাকা</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0 line-height-[0] pointer-events-none">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
          preserveAspectRatio="none"
        >
          <path
            d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="#FFF8E7"
          />
        </svg>
      </div>
    </section>
  );
}