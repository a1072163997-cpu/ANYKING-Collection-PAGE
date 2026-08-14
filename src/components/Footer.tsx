import React from 'react';
import { ShieldCheck, Truck, RotateCcw, Lock } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-[#C8CBCB] text-[#5E6265] text-xs pt-12 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Footer Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pb-12 border-b border-[#C8CBCB]/40">
          
          {/* Col 1: Brand & Philosophy */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center space-x-2.5 mb-3">
              <div className="w-7 h-7 rounded-lg bg-[#25282B] flex items-center justify-center text-white font-bold text-xs">
                AK
              </div>
              <span className="font-bold tracking-tight text-sm text-[#25282B] font-display">
                ANYKING
              </span>
            </div>
            <p className="text-xs text-[#5E6265] font-light leading-relaxed mb-4">
              Single-cable, driverless multi-screen architecture crafted for mobile professionals and engineers.
            </p>
            <div className="text-[11px] text-[#5E6265] font-mono">
              Designed in California · CNC Precision
            </div>
          </div>

          {/* Col 2: Single Screen Series */}
          <div>
            <h4 className="font-semibold text-[#25282B] text-xs uppercase tracking-wider mb-3">
              Single Screen Series
            </h4>
            <ul className="space-y-2 font-light">
              <li><a href="#collection" className="hover:text-[#25282B] transition-colors">Solo 14" 2.8K OLED</a></li>
              <li><a href="#collection" className="hover:text-[#25282B] transition-colors">Pro 16" Studio UHD+</a></li>
              <li><a href="#collection" className="hover:text-[#25282B] transition-colors">Air 13.3" Featherlight</a></li>
              <li><a href="#collection" className="hover:text-[#25282B] transition-colors">Flex 15.6" Fast-IPS 165Hz</a></li>
              <li><a href="#benefits" className="hover:text-[#25282B] transition-colors">Cantilever Kickstand Tech</a></li>
            </ul>
          </div>

          {/* Col 3: Support & Compatibility */}
          <div>
            <h4 className="font-semibold text-[#25282B] text-xs uppercase tracking-wider mb-3">
              Compatibility & Care
            </h4>
            <ul className="space-y-2 font-light">
              <li><a href="#compatibility" className="hover:text-[#25282B] transition-colors">MacBook M1/M2/M3/M4 Guide</a></li>
              <li><a href="#compatibility" className="hover:text-[#25282B] transition-colors">Windows 11 HDR Setup</a></li>
              <li><a href="#compatibility" className="hover:text-[#25282B] transition-colors">USB-C DP Alt Mode Check</a></li>
              <li><a href="#reviews" className="hover:text-[#25282B] transition-colors">14-Day Desk Trial Terms</a></li>
              <li><a href="#reviews" className="hover:text-[#25282B] transition-colors">3-Year Warranty Claims</a></li>
            </ul>
          </div>

          {/* Col 4: Trust & Guarantee */}
          <div>
            <h4 className="font-semibold text-[#25282B] text-xs uppercase tracking-wider mb-3">
              ANYKING Promise
            </h4>
            <div className="space-y-2.5 text-[11px] text-[#5E6265]">
              <div className="flex items-center space-x-2">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
                <span>Zero-Hinge-Damage Guarantee</span>
              </div>
              <div className="flex items-center space-x-2">
                <Truck className="w-3.5 h-3.5 text-[#25282B] shrink-0" />
                <span>Free Insured Express Courier</span>
              </div>
              <div className="flex items-center space-x-2">
                <RotateCcw className="w-3.5 h-3.5 text-[#25282B] shrink-0" />
                <span>Hassle-Free Returns within 14 Days</span>
              </div>
              <div className="flex items-center space-x-2">
                <Lock className="w-3.5 h-3.5 text-[#25282B] shrink-0" />
                <span>256-Bit Encrypted Secure Checkout</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#5E6265] font-light gap-3">
          <div>
            © {new Date().getFullYear()} ANYKING Inc. All rights reserved. Crafted for zero compromise.
          </div>
          <div className="flex space-x-4">
            <span className="hover:text-[#25282B] cursor-pointer">Privacy Policy</span>
            <span>·</span>
            <span className="hover:text-[#25282B] cursor-pointer">Terms of Service</span>
            <span>·</span>
            <span className="hover:text-[#25282B] cursor-pointer">Patents & IP</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
