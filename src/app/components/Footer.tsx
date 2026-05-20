import { Facebook, Phone, MapPin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-[#0F5132] to-[#16613f] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center mb-4">
              <h3 className="text-2xl font-bold">হাম্বা পার্লার</h3>
            </div>
            <p className="text-white/80 mb-4">
              কুরবানির জন্য প্রয়োজনীয় সব পণ্য এক জায়গায়। মান ও বিশ্বস্ততার
              সাথে সেবা প্রদান করছি।
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/share/1Ga2Vkhp3p/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">দ্রুত লিংক</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#home"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  হোম
                </a>
              </li>
              <li>
                <a
                  href="#products"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  পণ্য সমূহ
                </a>
              </li>
              <li>
                <a
                  href="#features"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  বৈশিষ্ট্য
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-4">যোগাযোগ</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 mt-1 shrink-0" />
                <div>
                  <p className="text-white/80">01611-820643</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-1 shrink-0" />
                <div>
                  <p className="text-white/80">ঢাকা, বাংলাদেশ</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 mt-1 shrink-0" />
                <div>
                  <p className="text-white/80">hambaparlour@gmail.com</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Delivery Info */}
          <div>
            <h4 className="text-lg font-bold mb-4">ডেলিভারি তথ্য</h4>
            <div className="space-y-3">
              <div className="p-3 bg-white/10 rounded-xl">
                <p className="text-sm text-white/80 mb-1">ডেলিভারি এরিয়া</p>
                <p className="font-medium">শুধুমাত্র ঢাকায়</p>
              </div>
              <div className="p-3 bg-white/10 rounded-xl">
                <p className="text-sm text-white/80 mb-1">ডেলিভারি চার্জ</p>
                <p className="font-medium">৮০ টাকা (সব এলাকায়)</p>
              </div>
              <div className="p-3 bg-white/10 rounded-xl">
                <p className="text-sm text-white/80 mb-1">ডেলিভারি সময়</p>
                <p className="font-medium">২৪-৪৮ ঘণ্টা</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-8 text-center">
          <p className="text-white/70 text-sm">
            © {new Date().getFullYear()} হাম্বা পার্লার। সর্বস্বত্ব সংরক্ষিত।
          </p>
          <p className="text-white/50 text-xs mt-2">
            কুরবানি ঈদের জন্য তৈরি
          </p>
        </div>
      </div>
    </footer>
  );
}
