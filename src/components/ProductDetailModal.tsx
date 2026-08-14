import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  X, 
  Check, 
  ShieldCheck, 
  RotateCw, 
  Cpu, 
  Zap, 
  Box, 
  Layers, 
  Maximize2,
  ChevronRight,
  Sparkles,
  ShoppingBag,
  Cable,
  CheckCircle2,
  Truck
} from 'lucide-react';
import { ProductModel } from '../types';
import { sound } from '../utils/audio';

interface ProductDetailModalProps {
  product: ProductModel | null;
  isOpen: boolean;
  onClose: () => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  isOpen,
  onClose,
}) => {
  const [selectedColor, setSelectedColor] = useState<string>('#25282B');
  const [addedToCart, setAddedToCart] = useState<boolean>(false);

  if (!isOpen || !product) return null;

  const handleOrder = () => {
    sound.playPowerOn();
    setAddedToCart(true);
    setTimeout(() => {
      setAddedToCart(false);
    }, 2800);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/50 backdrop-blur-xs overflow-y-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 12 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96, y: 12 }}
        transition={{ duration: 0.25 }}
        className="bg-white rounded-3xl max-w-4xl w-full border border-[#C8CBCB] shadow-2xl overflow-hidden my-auto max-h-[90vh] flex flex-col"
      >
        {/* Modal Top Bar */}
        <div className="p-4 sm:p-5 border-b border-[#C8CBCB]/40 flex items-center justify-between bg-[#F6F4EF]">
          <div className="flex items-center space-x-3">
            <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-[#25282B] text-white">
              {product.series}
            </span>
            <span className="text-xs font-mono text-[#5E6265]">
              SKU: AK-{product.id.substring(8, 14).toUpperCase()}
            </span>
          </div>

          <button
            id="close-product-detail-modal-btn"
            onClick={() => {
              sound.playClick();
              onClose();
            }}
            className="p-1.5 rounded-full hover:bg-[#C8CBCB]/30 text-[#5E6265] hover:text-[#25282B] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-8 overflow-y-auto flex-1 space-y-7">
          
          {/* Header section */}
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
            <div>
              <div className="flex items-center space-x-2 mb-1.5">
                {product.isBestSeller && (
                  <span className="px-2.5 py-0.5 rounded-full text-[10.5px] font-semibold bg-[#25282B] text-white shadow-2xs">
                    Best Seller
                  </span>
                )}
                {product.discountPercentage && (
                  <span className="px-2.5 py-0.5 rounded-full text-[10.5px] font-semibold bg-[#E6DDCE] text-[#25282B] border border-[#C8CBCB]">
                    Save {product.discountPercentage}%
                  </span>
                )}
                <span className="text-xs text-[#5E6265] font-medium">
                  ★ {product.rating} ({product.reviewCount} verified reviews)
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-semibold text-[#25282B] font-display">
                {product.name}
              </h2>
              <p className="mt-1.5 text-xs sm:text-sm text-[#5E6265] max-w-xl font-light">
                {product.tagline}
              </p>
            </div>

            {/* Price block */}
            <div className="text-left md:text-right bg-[#F6F4EF] md:bg-transparent p-4 md:p-0 rounded-xl border md:border-0 border-[#C8CBCB]/60">
              <div className="text-2xl sm:text-3xl font-bold text-[#25282B] font-mono">
                ${product.price}.00
              </div>
              {product.originalPrice && (
                <div className="text-xs text-[#5E6265] line-through">
                  ${product.originalPrice}.00
                </div>
              )}
              <div className="text-[11px] text-emerald-700 font-semibold mt-1">
                In Stock · Ready to Ship
              </div>
            </div>
          </div>

          {/* Interactive Hardware Visual */}
          <div className="bg-[#EDE7DF] rounded-2xl border border-[#DDD6CC] p-6 flex flex-col items-center justify-center relative overflow-hidden">
            {product.customImage ? (
              <div className="w-full max-w-lg aspect-[16/10] relative flex items-center justify-center">
                <img
                  src={product.customImage}
                  alt={product.name}
                  className="w-full h-full object-contain filter contrast-[1.02] drop-shadow-lg"
                />
              </div>
            ) : (
              <div className="w-full max-w-md flex items-center justify-center space-x-3 py-6 z-20">
                {/* Host Laptop */}
                <div className="w-32 sm:w-40 h-24 sm:h-28 bg-[#25282B] rounded-lg border border-[#5E6265] p-2 flex flex-col justify-between shadow-md">
                  <div className="flex justify-between text-[7px] text-[#C8CBCB]">
                    <span>Host</span>
                    <span>1</span>
                  </div>
                  <div className="text-center font-mono text-[8px] text-[#C8CBCB]">Primary Core</div>
                  <div className="h-0.5 bg-[#5E6265] rounded-full" />
                </div>

                {/* Hinge Link */}
                <div className="w-2 h-1 bg-[#C8CBCB] rounded-full" />

                {/* Extended Screen */}
                <div 
                  className="w-32 sm:w-40 h-24 sm:h-28 rounded-r-lg border border-[#5E6265] p-2 flex flex-col justify-between shadow-xl"
                  style={{ backgroundColor: selectedColor === '#C8CBCB' ? '#5E6265' : '#18181A' }}
                >
                  <div className="flex justify-between text-[7px] text-[#C8CBCB]">
                    <span className="font-bold text-white">ANYKING</span>
                    <span className="text-[#E6DDCE] font-bold">+1</span>
                  </div>
                  <div className="text-center text-[9px] font-semibold text-white">
                    {product.resolution}
                  </div>
                  <div className="text-right text-[7px] text-[#C8CBCB] font-mono">
                    {product.refreshRate}
                  </div>
                </div>
              </div>
            )}

            <div className="z-20 text-[11px] text-[#5E6265] font-mono mt-2">
              {product.screenSize} · {product.aspectRatio} · {product.panelType} · {product.materials}
            </div>
          </div>

          {/* Color Selection */}
          <div>
            <span className="text-xs font-semibold text-[#25282B] uppercase tracking-wider block mb-2">
              Select Finish:
            </span>
            <div className="flex items-center space-x-3">
              {product.availableColors?.map((color) => (
                <button
                  key={color.name}
                  onClick={() => {
                    setSelectedColor(color.hex);
                    sound.playClick();
                  }}
                  className={`flex items-center space-x-2 px-3.5 py-1.5 rounded-full border text-xs font-semibold transition-all ${
                    selectedColor === color.hex
                      ? 'bg-[#25282B] text-white border-[#25282B] shadow-xs'
                      : 'bg-white text-[#5E6265] border-[#C8CBCB] hover:border-[#5E6265]'
                  }`}
                >
                  <span className="w-3 h-3 rounded-full border border-white/20" style={{ backgroundColor: color.hex }} />
                  <span>{color.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Technical Specs Breakdown */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-[#F6F4EF] p-4 rounded-2xl border border-[#C8CBCB]/60 text-xs">
            <div>
              <span className="text-[#5E6265] text-[10px] block">Panel & Resolution</span>
              <span className="font-semibold text-[#25282B]">{product.resolution}</span>
            </div>
            <div>
              <span className="text-[#5E6265] text-[10px] block">Refresh & Color</span>
              <span className="font-semibold text-[#25282B]">{product.refreshRate} · {product.colorGamut}</span>
            </div>
            <div>
              <span className="text-[#5E6265] text-[10px] block">Weight & Chassis</span>
              <span className="font-semibold text-[#25282B]">{product.weight} · {product.materials}</span>
            </div>
            <div>
              <span className="text-[#5E6265] text-[10px] block">Cables & Setup</span>
              <span className="font-semibold text-[#25282B]">1 USB-C (Driverless)</span>
            </div>
          </div>

          {/* In The Box Included items */}
          {product.inTheBox && (
            <div>
              <span className="text-xs font-semibold text-[#25282B] uppercase tracking-wider block mb-2">
                What's in the Box:
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {product.inTheBox.map((item, idx) => (
                  <div key={idx} className="flex items-center space-x-2 text-xs text-[#5E6265] bg-white p-2.5 rounded-xl border border-[#C8CBCB]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span className="truncate">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

        {/* Modal Bottom CTA Footer */}
        <div className="p-4 sm:p-5 border-t border-[#C8CBCB]/40 bg-[#F6F4EF] flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center space-x-3 text-xs text-[#5E6265]">
            <div className="flex items-center space-x-1">
              <Truck className="w-4 h-4 text-[#25282B]" />
              <span>Free Express Shipping</span>
            </div>
            <span>·</span>
            <div className="flex items-center space-x-1">
              <ShieldCheck className="w-4 h-4 text-[#25282B]" />
              <span>3-Year Warranty</span>
            </div>
          </div>

          <div className="flex items-center space-x-3 w-full sm:w-auto">
            <button
              id="modal-add-to-cart-btn"
              onClick={handleOrder}
              disabled={addedToCart}
              className={`w-full sm:w-auto flex items-center justify-center space-x-2 px-6 py-2.5 rounded-full text-xs font-semibold transition-all shadow-md active:scale-98 ${
                addedToCart
                  ? 'bg-emerald-600 text-white'
                  : 'bg-[#25282B] text-white hover:bg-[#34383D]'
              }`}
            >
              {addedToCart ? (
                <>
                  <Check className="w-4 h-4" />
                  <span>Added to Order</span>
                </>
              ) : (
                <>
                  <ShoppingBag className="w-4 h-4 text-[#E6DDCE]" />
                  <span>Order Now · ${product.price}.00</span>
                </>
              )}
            </button>
          </div>
        </div>

      </motion.div>
    </div>
  );
};
