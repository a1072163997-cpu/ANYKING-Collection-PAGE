import React from 'react';
import { ArrowRight, Sparkles, ShieldCheck, Truck, RotateCcw } from 'lucide-react';
import { sound } from '../utils/audio';

interface FinalCTAProps {
  onExploreCollection: () => void;
  onOpenAdvisor: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({
  onExploreCollection,
  onOpenAdvisor,
}) => {
  return (
    <section className="py-16 sm:py-24 bg-[#F6F4EF] border-t border-[#C8CBCB]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Large Graphite CTA Banner */}
        <div className="relative rounded-3xl bg-[#25282B] text-white p-8 sm:p-12 lg:p-16 overflow-hidden shadow-xl border border-[#5E6265]/50 text-center">
          
          {/* Subtle Starlight and Radial Glow */}
          <div className="absolute inset-0 pointer-events-none opacity-20">
            <div className="w-full h-full bg-[radial-gradient(#E6DDCE_1px,transparent_1px)] [background-size:24px_24px]" />
          </div>

          <div className="relative z-10 max-w-2xl mx-auto">
            
            {/* Starlight badge */}
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#E6DDCE]/20 border border-[#E6DDCE]/50 text-[#E6DDCE] text-xs font-semibold mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Zero-Hinge-Load Precision</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white leading-tight font-display">
              From One Screen to Two. <br />
              <span className="text-[#C8CBCB] font-light">Extend Your Horizon Today.</span>
            </h2>

            <p className="mt-4 text-sm sm:text-base text-[#C8CBCB] font-light leading-relaxed max-w-xl mx-auto">
              Test ANYKING on your own desk with our 14-day risk-free trial. One cable. Instant driverless setup.
            </p>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
              <button
                id="final-cta-find-fit-btn"
                onClick={() => {
                  onOpenAdvisor();
                  sound.playClick();
                }}
                className="w-full sm:w-auto flex items-center justify-center space-x-2 px-6 py-3.5 rounded-full bg-white text-[#25282B] text-xs font-semibold hover:bg-[#F6F4EF] transition-all shadow-md active:scale-98"
              >
                <Sparkles className="w-4 h-4 text-[#25282B]" />
                <span>Find My Perfect Screen Fit</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <button
                id="final-cta-catalog-btn"
                onClick={() => {
                  onExploreCollection();
                  sound.playClick();
                }}
                className="w-full sm:w-auto flex items-center justify-center space-x-2 px-6 py-3.5 rounded-full bg-[#34383D] text-white border border-[#5E6265] text-xs font-semibold hover:bg-[#3D4247] transition-all"
              >
                <span>Browse Single Screen Lineup</span>
              </button>
            </div>

            {/* 3 Guarantees */}
            <div className="mt-10 pt-8 border-t border-[#5E6265]/40 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-[#C8CBCB]">
              <div className="flex items-center justify-center space-x-2">
                <Truck className="w-4 h-4 text-[#E6DDCE]" />
                <span>Free Express Shipping</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <RotateCcw className="w-4 h-4 text-[#E6DDCE]" />
                <span>14-Day Desk Trial</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <ShieldCheck className="w-4 h-4 text-[#E6DDCE]" />
                <span>3-Year Hardware Warranty</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
