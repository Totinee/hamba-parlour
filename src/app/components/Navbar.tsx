import { ShoppingCart, Facebook } from 'lucide-react';
import { useState, useEffect } from 'react';

interface NavbarProps {
  cartCount: number;
  onCartClick: () => void;
}

export default function Navbar({ cartCount, onCartClick }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-lg shadow-lg'
          : 'bg-white/80 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-xl sm:text-2xl font-bold text-[#0F5132]">
              হাম্বা পার্লার
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#home" className="text-gray-700 hover:text-[#0F5132] transition-colors">
              হোম
            </a>
            <a href="#products" className="text-gray-700 hover:text-[#0F5132] transition-colors">
              পণ্য
            </a>
            <a href="#features" className="text-gray-700 hover:text-[#0F5132] transition-colors">
              বৈশিষ্ট্য
            </a>
            <a href="#faq" className="text-gray-700 hover:text-[#0F5132] transition-colors">
              FAQ
            </a>
          </div>

          {/* Right Side Icons */}
          <div className="flex items-center gap-3 sm:gap-4">
            {/* Facebook Button */}
            <a
              href="https://www.facebook.com/share/1Ga2Vkhp3p/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 sm:px-4 py-2 bg-[#1877F2] text-white rounded-full hover:bg-[#0c63d4] transition-all hover:shadow-lg hover:shadow-blue-300/50"
            >
              <Facebook className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="hidden sm:inline text-sm">Facebook</span>
            </a>

            {/* Cart Button */}
            <button
              onClick={onCartClick}
              className="relative flex items-center gap-2 px-3 sm:px-4 py-2 bg-[#0F5132] text-white rounded-full hover:bg-[#0a3821] transition-all hover:shadow-lg"
            >
              <ShoppingCart className="w-4 h-4 sm:w-5 sm:h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-[#C0392B] text-white text-xs w-6 h-6 rounded-full flex items-center justify-center font-bold">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
