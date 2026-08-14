import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  X, 
  Sparkles, 
  Laptop, 
  Briefcase, 
  Code, 
  Palette, 
  TrendingUp, 
  Plane, 
  ArrowRight, 
  CheckCircle2 
} from 'lucide-react';
import { SINGLE_SCREEN_PRODUCTS } from '../data/products';
import { ProductModel } from '../types';
import { sound } from '../utils/audio';

interface FitAdvisorModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectProduct: (product: ProductModel) => void;
}

export const FitAdvisorModal: React.FC<FitAdvisorModalProps> = ({
  isOpen,
  onClose,
  onSelectProduct,
}) => {
  const [laptopSize, setLaptopSize] = useState<'13-14' | '15-16'>('13-14');
  const [primaryFocus, setPrimaryFocus] = useState<'code' | 'creative' | 'travel' | 'finance'>('code');

  if (!isOpen) return null;

  // Calculate matching product
  const getRecommendation = (): ProductModel => {
    if (primaryFocus === 'travel') {
      return SINGLE_SCREEN_PRODUCTS.find((p) => p.id === 'anyking-air-13-touch') || SINGLE_SCREEN_PRODUCTS[0];
    }
    if (primaryFocus === 'creative') {
      return SINGLE_SCREEN_PRODUCTS.find((p) => p.id === 'anyking-pro-16-creator') || SINGLE_SCREEN_PRODUCTS[0];
    }
    if (primaryFocus === 'finance') {
      return SINGLE_SCREEN_PRODUCTS.find((p) => p.id === 'anyking-flex-156-hz') || SINGLE_SCREEN_PRODUCTS[0];
    }
    // Default coding / mobile pro
    return SINGLE_SCREEN_PRODUCTS.find((p) => p.id === 'anyking-solo-14-oled') || SINGLE_SCREEN_PRODUCTS[0];
  };

  const matchedProduct = getRecommendation();

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs">
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.96 }}
        className="bg-white rounded-3xl p-6 sm:p-7 max-w-lg w-full border border-[#C8CBCB] shadow-xl space-y-6"
      >
        <div className="flex justify-between items-center border-b border-[#C8CBCB]/40 pb-4">
          <div className="flex items-center space-x-2.5">
            <div className="p-1.5 rounded-lg bg-[#25282B] text-white">
              <Sparkles className="w-4 h-4 text-[#E6DDCE]" />
            </div>
            <div>
              <h3 className="text-base font-semibold text-[#25282B]">
                Single Screen Fit Advisor
              </h3>
              <p className="text-xs text-[#5E6265] font-light">
                Find the ideal expansion display for your laptop setup.
              </p>
            </div>
          </div>

          <button
            id="close-fit-advisor-btn"
            onClick={() => {
              sound.playClick();
              onClose();
            }}
            className="p-1.5 rounded-full hover:bg-[#F6F4EF] text-[#5E6265] hover:text-[#25282B] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Step 1: Laptop Size */}
        <div className="space-y-2">
          <label className="text-xs font-semibold text-[#25282B] uppercase tracking-wider block">
            1. What is your laptop display size?
          </label>
          <div className="grid grid-cols-2 gap-3">
            {[
              { id: '13-14', label: '13" – 14" Laptop', sub: 'MacBook Air / 14" Pro' },
              { id: '15-16', label: '15" – 16" Laptop', sub: '16" Pro / XPS 15/16' },
            ].map((s) => (
              <button
                key={s.id}
                id={`fit-size-${s.id}-btn`}
                onClick={() => {
                  setLaptopSize(s.id as '13-14' | '15-16');
                  sound.playClick();
                }}
                className={`p-3 rounded-xl border text-left transition-all ${
                  laptopSize === s.id
                    ? 'border-[#25282B] bg-[#F6F4EF] shadow-2xs'
                    : 'border-[#C8CBCB] hover:border-[#5E6265]'
                }`}
              >
                <div className="text-xs font-semibold text-[#25282B]">{s.label}</div>
                <div className="text-[10px] text-[#5E6265] mt-0.5">{s.sub}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Step 2: Primary Work Focus */}
        <div className="space-y-2">
          <label className="text-xs font-semibold text-[#25282B] uppercase tracking-wider block">
            2. What is your primary work type?
          </label>
          <div className="grid grid-cols-2 gap-2.5">
            {[
              { id: 'code', label: 'Software & Code', icon: Code },
              { id: 'creative', label: 'Color & Video Studio', icon: Palette },
              { id: 'finance', label: 'Trading & Charts', icon: TrendingUp },
              { id: 'travel', label: 'Frequent Flying / Nomad', icon: Plane },
            ].map((f) => {
              const IconComp = f.icon;
              return (
                <button
                  key={f.id}
                  id={`fit-focus-${f.id}-btn`}
                  onClick={() => {
                    setPrimaryFocus(f.id as any);
                    sound.playClick();
                  }}
                  className={`p-2.5 rounded-xl border text-left flex items-center space-x-2 transition-all ${
                    primaryFocus === f.id
                      ? 'border-[#25282B] bg-[#F6F4EF] shadow-2xs'
                      : 'border-[#C8CBCB] hover:border-[#5E6265]'
                  }`}
                >
                  <IconComp className="w-3.5 h-3.5 text-[#5E6265]" />
                  <span className="text-xs font-medium text-[#25282B]">{f.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Dynamic Match Card */}
        <div className="bg-[#25282B] text-white rounded-2xl p-4 sm:p-5 border border-[#5E6265] space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-[10.5px] font-semibold uppercase tracking-wider text-[#E6DDCE]">
              Recommended Match
            </span>
            <span className="text-xs font-mono font-bold text-white">
              ${matchedProduct.price}.00
            </span>
          </div>

          <div className="flex items-start justify-between">
            <div>
              <h4 className="text-base font-semibold text-white">
                {matchedProduct.name}
              </h4>
              <p className="text-xs text-[#C8CBCB] font-light mt-0.5">
                {matchedProduct.tagline}
              </p>
            </div>
          </div>

          <div className="pt-2 border-t border-[#5E6265]/50 flex items-center justify-between">
            <div className="text-[11px] text-[#C8CBCB]">
              {matchedProduct.screenSize} · {matchedProduct.resolution} · {matchedProduct.weight}
            </div>

            <button
              id="advisor-select-product-btn"
              onClick={() => {
                sound.playSnap();
                onSelectProduct(matchedProduct);
              }}
              className="flex items-center space-x-1.5 px-3 py-1.5 rounded-full bg-white text-[#25282B] text-xs font-semibold hover:bg-[#F6F4EF] transition-colors"
            >
              <span>View Specs</span>
              <ArrowRight className="w-3 h-3" />
            </button>
          </div>
        </div>

      </motion.div>
    </div>
  );
};
