import { motion } from 'motion/react';
import { Facebook, MessageCircle } from 'lucide-react';

export default function FloatingSocial() {
  return (
    <>
      {/* Floating Facebook Button - Bottom Left */}
      <motion.a
        href="https://www.facebook.com/share/1Ga2Vkhp3p/"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: 'spring', stiffness: 200 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-6 left-6 z-40 group"
      >
        <div className="relative">
          {/* Glow effect */}
          <div className="absolute inset-0 bg-[#1877F2] rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-opacity" />

          {/* Button */}
          <div className="relative w-14 h-14 bg-[#1877F2] rounded-full flex items-center justify-center shadow-2xl group-hover:shadow-blue-400/50 transition-all">
            <Facebook className="w-7 h-7 text-white" />
          </div>

        </div>
      </motion.a>

      {/* Floating WhatsApp Button - Bottom Right */}
      <motion.a
        href="https://wa.me/8801611820643"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1.2, type: 'spring', stiffness: 200 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-6 right-6 z-40 group"
      >
        <div className="relative">
          {/* Glow effect */}
          <div className="absolute inset-0 bg-[#25D366] rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-opacity animate-pulse" />

          {/* Button */}
          <div className="relative w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-2xl group-hover:shadow-green-400/50 transition-all">
            <MessageCircle className="w-7 h-7 text-white" />
          </div>

          {/* Pulse rings */}
          <motion.div
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.5, 0, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="absolute inset-0 border-2 border-[#25D366] rounded-full"
          />

        </div>
      </motion.a>
    </>
  );
}
