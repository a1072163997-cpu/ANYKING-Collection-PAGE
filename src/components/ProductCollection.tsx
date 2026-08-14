import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Gift,
  Plane,
  PackageCheck,
  CreditCard,
  SlidersHorizontal,
  ChevronDown,
  ChevronUp,
  Star,
  Cable,
  Monitor,
  Sparkles,
  Laptop,
  Download,
  Layers,
  ArrowRight,
  Eye,
  Check
} from 'lucide-react';
import { TRIPLE_MONITOR_PRODUCTS, DUAL_MONITOR_PRODUCTS, SINGLE_SCREEN_COLLECTION_PRODUCTS } from '../data/products';
import { ProductModel } from '../types';
import { sound } from '../utils/audio';
import promoBannerImg from '../assets/images/triple_aero_promo_1786691716763.jpg';

interface ProductCollectionProps {
  currentCategory?: string;
  onSelectCategory?: (category: 'single' | 'dual' | 'triple') => void;
  onSelectProduct: (product: ProductModel) => void;
  onOpenAdvisor: () => void;
}

type SortOption = 'best-selling' | 'price-asc' | 'price-desc' | 'alphabetical-az' | 'alphabetical-za' | 'rating';

export const ProductCollection: React.FC<ProductCollectionProps> = ({
  currentCategory = 'triple',
  onSelectCategory,
  onSelectProduct,
  onOpenAdvisor
}) => {
  // Sidebar visibility
  const [showFilters, setShowFilters] = useState<boolean>(true);
  
  // Sort State
  const [sortBy, setSortBy] = useState<SortOption>('best-selling');
  const [isSortDropdownOpen, setIsSortDropdownOpen] = useState<boolean>(false);

  // Filter States
  const [priceRange, setPriceRange] = useState<string>('all');
  const [cableFilter, setCableFilter] = useState<string>('all');
  const [sizeFilter, setSizeFilter] = useState<string>('all');
  const [aspectRatioFilter, setAspectRatioFilter] = useState<string>('all');
  const [osFilter, setOsFilter] = useState<string>('all');
  const [resolutionFilter, setResolutionFilter] = useState<string>('all');
  const [softwareFilter, setSoftwareFilter] = useState<string>('all');
  const [brightnessFilter, setBrightnessFilter] = useState<string>('all');
  const [materialFilter, setMaterialFilter] = useState<string>('all');
  const [inputFilter, setInputFilter] = useState<string>('all');
  const [availableOnAmazon, setAvailableOnAmazon] = useState<boolean>(false);

  // Accordion open/collapse states
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({
    price: true,
    cables: false,
    size: false,
    aspect: false,
    os: false,
    resolution: false,
    software: false,
    brightness: false,
    materials: false,
    inputs: false
  });

  const toggleAccordion = (key: string) => {
    sound.playClick();
    setOpenSections(prev => ({ ...prev, [key]: !prev[key] }));
  };

  // Color selection per card
  const [selectedColors, setSelectedColors] = useState<Record<string, string>>({
    'triple-aero-pro-max-gen2': '#18181B',
    'triple-boost-pro-gen2': '#18181B',
    'triple-screen-pro-fold': '#18181B'
  });

  const handleColorSelect = (productId: string, hex: string) => {
    sound.playClick();
    setSelectedColors(prev => ({ ...prev, [productId]: hex }));
  };

  // Filter & Sort Logic based on selected Category
  const filteredProducts = useMemo(() => {
    let sourceList = TRIPLE_MONITOR_PRODUCTS;
    if (currentCategory === 'single') {
      sourceList = SINGLE_SCREEN_COLLECTION_PRODUCTS;
    } else if (currentCategory === 'dual') {
      sourceList = DUAL_MONITOR_PRODUCTS;
    }

    let list = [...sourceList];

    if (availableOnAmazon) {
      list = list.filter(p => p.availableOnAmazon);
    }

    if (priceRange === 'under-500') {
      list = list.filter(p => p.price < 500);
    } else if (priceRange === '500-600') {
      list = list.filter(p => p.price >= 500 && p.price <= 600);
    }

    if (sizeFilter !== 'all') {
      list = list.filter(p => p.screenSize.toLowerCase().includes(sizeFilter.toLowerCase()));
    }

    if (sortBy === 'price-asc') {
      list.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-desc') {
      list.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'alphabetical-az') {
      list.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === 'alphabetical-za') {
      list.sort((a, b) => b.name.localeCompare(a.name));
    } else if (sortBy === 'rating') {
      list.sort((a, b) => b.rating - a.rating);
    } else {
      // Best selling default
      list.sort((a, b) => (b.isBestSeller ? 1 : 0) - (a.isBestSeller ? 1 : 0));
    }

    return list;
  }, [currentCategory, availableOnAmazon, priceRange, sizeFilter, sortBy]);

  const sortLabels: Record<SortOption, string> = {
    'best-selling': 'Best selling',
    'price-asc': 'Price, low to high',
    'price-desc': 'Price, high to low',
    'alphabetical-az': 'Alphabetically, A-Z',
    'alphabetical-za': 'Alphabetically, Z-A',
    'rating': 'Highest Rated'
  };

  return (
    <section id="collection" className="w-full bg-[#F6F4EF] text-[#1D1F22] pt-4 pb-24">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">

        {/* ======================================================== */}
        {/* 1. TOP 4-PILLARS STRIP (Exact 1:1 Match to Image 2)      */}
        {/* ======================================================== */}
        <div className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-7 border border-[#E3E1DC] shadow-xs mb-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-6 divide-y sm:divide-y-0 sm:divide-x divide-[#E8E6E0]">
            
            {/* Pillar 1: Back to School Sales */}
            <div className="flex items-start space-x-3.5 pt-3 sm:pt-0 sm:px-3">
              <div className="w-9 h-9 rounded-full bg-[#F6F4EF] flex items-center justify-center text-[#1D1F22] shrink-0 border border-[#E3E1DC]/80 mt-0.5">
                <Gift className="w-4.5 h-4.5 stroke-[1.8] text-[#1D1F22]" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-[#1D1F22] tracking-tight relative inline-block">
                  Back to School Sales
                  <span className="absolute -bottom-1 left-0 right-0 h-1 bg-[radial-gradient(circle_at_center,#D7B78F_2px,transparent_0)] bg-[length:6px_4px] opacity-70" />
                </h3>
                <p className="text-xs text-[#5E6265] leading-relaxed mt-1">
                  One screen is not a workspace
                </p>
              </div>
            </div>

            {/* Pillar 2: Fast Free Shipping */}
            <div className="flex items-start space-x-3.5 pt-3 sm:pt-0 sm:px-3">
              <div className="w-9 h-9 rounded-full bg-[#F6F4EF] flex items-center justify-center text-[#1D1F22] shrink-0 border border-[#E3E1DC]/80 mt-0.5">
                <Plane className="w-4.5 h-4.5 stroke-[1.8] text-[#1D1F22] -rotate-45" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-[#1D1F22] tracking-tight">
                  Fast Free Shipping
                </h3>
                <p className="text-xs text-[#5E6265] leading-relaxed mt-1">
                  On orders over $100.
                </p>
              </div>
            </div>

            {/* Pillar 3: 14-Day Free Return */}
            <div className="flex items-start space-x-3.5 pt-3 sm:pt-0 sm:px-3">
              <div className="w-9 h-9 rounded-full bg-[#F6F4EF] flex items-center justify-center text-[#1D1F22] shrink-0 border border-[#E3E1DC]/80 mt-0.5">
                <PackageCheck className="w-4.5 h-4.5 stroke-[1.8] text-[#1D1F22]" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-[#1D1F22] tracking-tight flex items-center gap-1.5">
                  <span>14-Day Free Return</span>
                </h3>
                <p className="text-xs text-[#5E6265] leading-relaxed mt-1">
                  Returns within 14 days.
                </p>
              </div>
            </div>

            {/* Pillar 4: Buy Now, Pay Later. */}
            <div className="flex items-start space-x-3.5 pt-3 sm:pt-0 sm:px-3">
              <div className="w-9 h-9 rounded-full bg-[#F6F4EF] flex items-center justify-center text-[#1D1F22] shrink-0 border border-[#E3E1DC]/80 mt-0.5">
                <CreditCard className="w-4.5 h-4.5 stroke-[1.8] text-[#1D1F22]" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-[#1D1F22] tracking-tight">
                  Buy Now, Pay Later.
                </h3>
                <p className="text-xs text-[#5E6265] leading-relaxed mt-1">
                  For US residents.
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* ======================================================== */}
        {/* 2. FILTER TOGGLE & SORT HEADER (Exact match to Image 2)  */}
        {/* ======================================================== */}
        <div className="flex items-center justify-between py-4 border-b border-[#E8E6E0] mb-8">
          
          {/* Left: Hide/Show Filters Button + Product Count */}
          <div className="flex items-center space-x-5">
            <button
              onClick={() => {
                sound.playClick();
                setShowFilters(!showFilters);
              }}
              className="inline-flex items-center space-x-2 px-4 py-2 rounded-full border border-[#D5D2CA] bg-white hover:bg-[#F2EFE9] text-xs font-semibold text-[#1D1F22] transition-colors shadow-2xs cursor-pointer"
            >
              <SlidersHorizontal className="w-3.5 h-3.5" />
              <span>{showFilters ? 'Hide filters' : 'Show filters'}</span>
            </button>

            <span className="text-sm font-medium text-[#5E6265]">
              {filteredProducts.length} products
            </span>
          </div>

          {/* Right: Sort By Dropdown */}
          <div className="relative flex items-center space-x-2">
            <span className="text-sm text-[#5E6265] font-medium hidden sm:inline">Sort by:</span>
            
            <div className="relative">
              <button
                onClick={() => setIsSortDropdownOpen(!isSortDropdownOpen)}
                className="inline-flex items-center justify-between space-x-3 px-4 py-2 rounded-full border border-[#D5D2CA] bg-white hover:bg-[#F2EFE9] text-xs font-semibold text-[#1D1F22] min-w-[140px] shadow-2xs cursor-pointer"
              >
                <span>{sortLabels[sortBy]}</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${isSortDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {isSortDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -4 }}
                    className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-xl border border-[#E3E1DC] py-1.5 z-40"
                  >
                    {(Object.keys(sortLabels) as SortOption[]).map((option) => (
                      <button
                        key={option}
                        onClick={() => {
                          sound.playClick();
                          setSortBy(option);
                          setIsSortDropdownOpen(false);
                        }}
                        className={`w-full text-left px-4 py-2 text-xs flex items-center justify-between cursor-pointer ${
                          sortBy === option ? 'bg-[#F6F4EF] font-bold text-[#1D1F22]' : 'text-[#5E6265] hover:bg-[#FAF8F5]'
                        }`}
                      >
                        <span>{sortLabels[option]}</span>
                        {sortBy === option && <Check className="w-3.5 h-3.5 text-[#1D1F22]" />}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

        </div>

        {/* ======================================================== */}
        {/* 3. TWO-COLUMN MAIN WORKSPACE (Filters Left, Grid Right)  */}
        {/* ======================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* ------------------------------------------------------- */}
          {/* LEFT SIDEBAR: FILTERS ACCORDIONS                        */}
          {/* ------------------------------------------------------- */}
          {showFilters && (
            <motion.aside
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -16 }}
              transition={{ duration: 0.2 }}
              className="lg:col-span-3 space-y-1 divide-y divide-[#E8E6E0] pr-2"
            >
              {/* 1. Price */}
              <div className="py-3">
                <button
                  onClick={() => toggleAccordion('price')}
                  className="w-full flex items-center justify-between text-sm font-semibold text-[#1D1F22] hover:opacity-80 py-1 cursor-pointer"
                >
                  <span>Price</span>
                  {openSections.price ? <ChevronUp className="w-4 h-4 text-zinc-500" /> : <ChevronDown className="w-4 h-4 text-zinc-500" />}
                </button>
                {openSections.price && (
                  <div className="mt-2.5 space-y-2 text-xs text-[#5E6265] pl-1">
                    <label className="flex items-center space-x-2 cursor-pointer">
                      <input 
                        type="radio" 
                        name="price" 
                        checked={priceRange === 'all'} 
                        onChange={() => setPriceRange('all')}
                        className="accent-[#1D1F22]"
                      />
                      <span>All Prices</span>
                    </label>
                    <label className="flex items-center space-x-2 cursor-pointer">
                      <input 
                        type="radio" 
                        name="price" 
                        checked={priceRange === 'under-500'} 
                        onChange={() => setPriceRange('under-500')}
                        className="accent-[#1D1F22]"
                      />
                      <span>Under $500 (1)</span>
                    </label>
                    <label className="flex items-center space-x-2 cursor-pointer">
                      <input 
                        type="radio" 
                        name="price" 
                        checked={priceRange === '500-600'} 
                        onChange={() => setPriceRange('500-600')}
                        className="accent-[#1D1F22]"
                      />
                      <span>$500 - $600 (2)</span>
                    </label>
                  </div>
                )}
              </div>

              {/* 2. Number of USB Cables */}
              <div className="py-3">
                <button
                  onClick={() => toggleAccordion('cables')}
                  className="w-full flex items-center justify-between text-sm font-semibold text-[#1D1F22] hover:opacity-80 py-1 cursor-pointer"
                >
                  <span>Number of USB Cables</span>
                  {openSections.cables ? <ChevronUp className="w-4 h-4 text-zinc-500" /> : <ChevronDown className="w-4 h-4 text-zinc-500" />}
                </button>
                {openSections.cables && (
                  <div className="mt-2.5 space-y-2 text-xs text-[#5E6265] pl-1">
                    <div className="flex items-center justify-between">
                      <span>1 USB-C Cable</span>
                      <span className="text-zinc-400 font-mono">(3)</span>
                    </div>
                  </div>
                )}
              </div>

              {/* 3. Display size */}
              <div className="py-3">
                <button
                  onClick={() => toggleAccordion('size')}
                  className="w-full flex items-center justify-between text-sm font-semibold text-[#1D1F22] hover:opacity-80 py-1 cursor-pointer"
                >
                  <span>Display size</span>
                  {openSections.size ? <ChevronUp className="w-4 h-4 text-zinc-500" /> : <ChevronDown className="w-4 h-4 text-zinc-500" />}
                </button>
                {openSections.size && (
                  <div className="mt-2.5 space-y-2 text-xs text-[#5E6265] pl-1">
                    <label className="flex items-center space-x-2 cursor-pointer">
                      <input 
                        type="radio" 
                        name="size" 
                        checked={sizeFilter === 'all'} 
                        onChange={() => setSizeFilter('all')}
                        className="accent-[#1D1F22]"
                      />
                      <span>All Sizes</span>
                    </label>
                    <label className="flex items-center space-x-2 cursor-pointer">
                      <input 
                        type="radio" 
                        name="size" 
                        checked={sizeFilter === '14'} 
                        onChange={() => setSizeFilter('14')}
                        className="accent-[#1D1F22]"
                      />
                      <span>14" Monitors (2)</span>
                    </label>
                    <label className="flex items-center space-x-2 cursor-pointer">
                      <input 
                        type="radio" 
                        name="size" 
                        checked={sizeFilter === '15.6'} 
                        onChange={() => setSizeFilter('15.6')}
                        className="accent-[#1D1F22]"
                      />
                      <span>15.6" Monitors (1)</span>
                    </label>
                  </div>
                )}
              </div>

              {/* 4. Aspect ratio */}
              <div className="py-3">
                <button
                  onClick={() => toggleAccordion('aspect')}
                  className="w-full flex items-center justify-between text-sm font-semibold text-[#1D1F22] hover:opacity-80 py-1 cursor-pointer"
                >
                  <span>Aspect ratio</span>
                  {openSections.aspect ? <ChevronUp className="w-4 h-4 text-zinc-500" /> : <ChevronDown className="w-4 h-4 text-zinc-500" />}
                </button>
                {openSections.aspect && (
                  <div className="mt-2.5 space-y-2 text-xs text-[#5E6265] pl-1">
                    <div className="flex items-center justify-between">
                      <span>16:9 Landscape Standard</span>
                      <span className="text-zinc-400 font-mono">(2)</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>16:10 Productivity Aspect</span>
                      <span className="text-zinc-400 font-mono">(1)</span>
                    </div>
                  </div>
                )}
              </div>

              {/* 5. Operating systems */}
              <div className="py-3">
                <button
                  onClick={() => toggleAccordion('os')}
                  className="w-full flex items-center justify-between text-sm font-semibold text-[#1D1F22] hover:opacity-80 py-1 cursor-pointer"
                >
                  <span>Operating systems</span>
                  {openSections.os ? <ChevronUp className="w-4 h-4 text-zinc-500" /> : <ChevronDown className="w-4 h-4 text-zinc-500" />}
                </button>
                {openSections.os && (
                  <div className="mt-2.5 space-y-2 text-xs text-[#5E6265] pl-1">
                    <div className="flex items-center justify-between">
                      <span>MacOS Support</span>
                      <span className="text-zinc-400 font-mono">(3)</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Windows 10/11</span>
                      <span className="text-zinc-400 font-mono">(3)</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Android / Ubuntu</span>
                      <span className="text-zinc-400 font-mono">(2)</span>
                    </div>
                  </div>
                )}
              </div>

              {/* 6. Resolution */}
              <div className="py-3">
                <button
                  onClick={() => toggleAccordion('resolution')}
                  className="w-full flex items-center justify-between text-sm font-semibold text-[#1D1F22] hover:opacity-80 py-1 cursor-pointer"
                >
                  <span>Resolution</span>
                  {openSections.resolution ? <ChevronUp className="w-4 h-4 text-zinc-500" /> : <ChevronDown className="w-4 h-4 text-zinc-500" />}
                </button>
                {openSections.resolution && (
                  <div className="mt-2.5 space-y-2 text-xs text-[#5E6265] pl-1">
                    <div className="flex items-center justify-between">
                      <span>Full HD 1080p</span>
                      <span className="text-zinc-400 font-mono">(2)</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>2.5K Quad HD</span>
                      <span className="text-zinc-400 font-mono">(1)</span>
                    </div>
                  </div>
                )}
              </div>

              {/* 7. Software required? */}
              <div className="py-3">
                <button
                  onClick={() => toggleAccordion('software')}
                  className="w-full flex items-center justify-between text-sm font-semibold text-[#1D1F22] hover:opacity-80 py-1 cursor-pointer"
                >
                  <span>Software required?</span>
                  {openSections.software ? <ChevronUp className="w-4 h-4 text-zinc-500" /> : <ChevronDown className="w-4 h-4 text-zinc-500" />}
                </button>
                {openSections.software && (
                  <div className="mt-2.5 space-y-2 text-xs text-[#5E6265] pl-1">
                    <div className="flex items-center justify-between">
                      <span>Driver Installed (1-Cable Link)</span>
                      <span className="text-zinc-400 font-mono">(3)</span>
                    </div>
                  </div>
                )}
              </div>

              {/* 8. Brightness */}
              <div className="py-3">
                <button
                  onClick={() => toggleAccordion('brightness')}
                  className="w-full flex items-center justify-between text-sm font-semibold text-[#1D1F22] hover:opacity-80 py-1 cursor-pointer"
                >
                  <span>Brightness</span>
                  {openSections.brightness ? <ChevronUp className="w-4 h-4 text-zinc-500" /> : <ChevronDown className="w-4 h-4 text-zinc-500" />}
                </button>
                {openSections.brightness && (
                  <div className="mt-2.5 space-y-2 text-xs text-[#5E6265] pl-1">
                    <div className="flex items-center justify-between">
                      <span>400 - 500 nits</span>
                      <span className="text-zinc-400 font-mono">(3)</span>
                    </div>
                  </div>
                )}
              </div>

              {/* 9. Materials */}
              <div className="py-3">
                <button
                  onClick={() => toggleAccordion('materials')}
                  className="w-full flex items-center justify-between text-sm font-semibold text-[#1D1F22] hover:opacity-80 py-1 cursor-pointer"
                >
                  <span>Materials</span>
                  {openSections.materials ? <ChevronUp className="w-4 h-4 text-zinc-500" /> : <ChevronDown className="w-4 h-4 text-zinc-500" />}
                </button>
                {openSections.materials && (
                  <div className="mt-2.5 space-y-2 text-xs text-[#5E6265] pl-1">
                    <div className="flex items-center justify-between">
                      <span>Full Aluminum Chassis</span>
                      <span className="text-zinc-400 font-mono">(3)</span>
                    </div>
                  </div>
                )}
              </div>

              {/* 10. Inputs */}
              <div className="py-3">
                <button
                  onClick={() => toggleAccordion('inputs')}
                  className="w-full flex items-center justify-between text-sm font-semibold text-[#1D1F22] hover:opacity-80 py-1 cursor-pointer"
                >
                  <span>Inputs</span>
                  {openSections.inputs ? <ChevronUp className="w-4 h-4 text-zinc-500" /> : <ChevronDown className="w-4 h-4 text-zinc-500" />}
                </button>
                {openSections.inputs && (
                  <div className="mt-2.5 space-y-2 text-xs text-[#5E6265] pl-1">
                    <div className="flex items-center justify-between">
                      <span>USB-C Type-C</span>
                      <span className="text-zinc-400 font-mono">(3)</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Mini HDMI</span>
                      <span className="text-zinc-400 font-mono">(2)</span>
                    </div>
                  </div>
                )}
              </div>

              {/* 11. Available on Amazon Toggle */}
              <div className="py-4 flex items-center justify-between">
                <span className="text-sm font-semibold text-[#1D1F22]">Available on Amazon</span>
                <button
                  type="button"
                  role="switch"
                  aria-checked={availableOnAmazon}
                  onClick={() => {
                    sound.playClick();
                    setAvailableOnAmazon(!availableOnAmazon);
                  }}
                  className={`relative inline-flex h-5 w-9 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-hidden ${
                    availableOnAmazon ? 'bg-[#1D1F22]' : 'bg-[#D5D2CA]'
                  }`}
                >
                  <span
                    className={`pointer-events-none inline-block h-4 w-4 transform rounded-full bg-white shadow-sm ring-0 transition duration-200 ease-in-out ${
                      availableOnAmazon ? 'translate-x-4' : 'translate-x-0'
                    }`}
                  />
                </button>
              </div>

            </motion.aside>
          )}

          {/* ------------------------------------------------------- */}
          {/* RIGHT PRODUCT GRID (Exact 3-Card layout from Image 2)   */}
          {/* ------------------------------------------------------- */}
          <div className={`${showFilters ? 'lg:col-span-9' : 'lg:col-span-12'}`}>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              
              {/* ==================================================== */}
              {/* CARD 1: DARK CINEMATIC PROMO BANNER (Triple Aero)   */}
              {/* ==================================================== */}
              <div className="relative rounded-2xl overflow-hidden shadow-sm border border-[#2A2D32] bg-[#141618] flex flex-col justify-end min-h-[580px] p-6 text-white group">
                
                {/* Real Photographic Background */}
                <img
                  src={promoBannerImg}
                  alt="Triple Aero Pro Max Hardware Angle"
                  className="absolute inset-0 w-full h-full object-cover object-center filter brightness-[0.75] contrast-[1.1] transition-transform duration-700 group-hover:scale-105"
                />

                {/* Ambient Atmospheric Dark Gradients */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/80" />

                {/* Banner Text Overlay (Exact match to Image 2) */}
                <div className="relative z-10 space-y-3 text-center flex flex-col items-center">
                  
                  {/* Badge */}
                  <div className="flex items-center space-x-1.5 text-xs text-amber-300 font-medium">
                    <span>✦</span>
                    <span className="tracking-wide">Best Seller</span>
                  </div>

                  {/* Headline */}
                  <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight leading-tight">
                    Triple Aero Pro Max
                  </h3>

                  {/* Subtitle */}
                  <p className="text-xs text-zinc-300 font-normal leading-relaxed max-w-[240px]">
                    The most immersive triple portable monitor ever built.
                  </p>

                  {/* CTA Button */}
                  <button
                    onClick={() => {
                      sound.playClick();
                      const target = TRIPLE_MONITOR_PRODUCTS[0];
                      if (target) onSelectProduct(target);
                    }}
                    className="mt-2 inline-flex items-center space-x-2 px-6 py-2.5 rounded-full border border-white/70 bg-white/10 hover:bg-white text-white hover:text-[#1D1F22] text-xs font-semibold backdrop-blur-xs transition-all duration-300 shadow-md cursor-pointer"
                  >
                    <span>Order now</span>
                    <span>→</span>
                  </button>
                </div>
              </div>

              {/* ==================================================== */}
              {/* CARD 2: TRIPLE AERO PRO MAX (GEN 2)                 */}
              {/* ==================================================== */}
              {TRIPLE_MONITOR_PRODUCTS[0] && (
                <div className="rounded-2xl bg-[#EDE7DF] p-3.5 sm:p-4 border border-[#DDD6CC] shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow">
                  
                  {/* Top Badges Row */}
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-1.5">
                      <span className="px-2 py-0.5 rounded-full bg-[#00B4D8] text-white text-[10px] font-bold tracking-tight">
                        Best Seller
                      </span>
                      <span className="px-2 py-0.5 rounded-full bg-[#E63946] text-white text-[10px] font-bold tracking-tight">
                        Save 21%
                      </span>
                    </div>

                    <div className="px-2 py-0.5 rounded-full bg-[#FAF8F5] border border-[#E3E1DC] text-[10px] font-medium text-[#1D1F22] flex items-center space-x-1">
                      <Star className="w-2.5 h-2.5 fill-[#F59E0B] text-[#F59E0B]" />
                      <span>4.4 • 350 reviews</span>
                    </div>
                  </div>

                  {/* Main Product Image Container */}
                  <div 
                    onClick={() => {
                      sound.playClick();
                      onSelectProduct(TRIPLE_MONITOR_PRODUCTS[0]);
                    }}
                    className="relative w-full aspect-[4/3] rounded-xl overflow-hidden bg-[#E2DBD1] flex items-center justify-center p-2 group cursor-pointer"
                  >
                    <img
                      src={TRIPLE_MONITOR_PRODUCTS[0].customImage}
                      alt={TRIPLE_MONITOR_PRODUCTS[0].name}
                      className="w-full h-full object-contain filter contrast-[1.03] group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  {/* Title & Price Header */}
                  <div className="mt-3 flex items-baseline justify-between">
                    <h4 className="text-sm font-bold text-[#1D1F22] tracking-tight truncate">
                      {TRIPLE_MONITOR_PRODUCTS[0].name}
                    </h4>
                    <div className="flex items-baseline space-x-1.5 shrink-0">
                      <span className="text-[11px] text-[#E63946] font-bold">From $549.00</span>
                      <span className="text-[10px] text-zinc-500 line-through">$699.00</span>
                    </div>
                  </div>

                  {/* Colors Selector */}
                  <div className="flex items-center space-x-2 my-2.5 text-xs text-[#5E6265]">
                    <span>Colors</span>
                    <button
                      onClick={() => handleColorSelect('triple-aero-pro-max-gen2', '#18181B')}
                      className="w-3.5 h-3.5 rounded-full bg-[#18181B] ring-2 ring-offset-1 ring-[#18181B] cursor-pointer"
                    />
                  </div>

                  {/* 2x3 Spec Matrix (Exact Match to Image 2) */}
                  <div className="grid grid-cols-2 gap-x-3 gap-y-2.5 pt-2.5 border-t border-[#DDD6CC] text-[10.5px]">
                    
                    {/* Spec 1: Cable */}
                    <div className="flex items-start space-x-2">
                      <Cable className="w-3.5 h-3.5 text-[#1D1F22] shrink-0 mt-0.5" />
                      <div>
                        <div className="font-bold text-[#1D1F22] leading-tight">1 USB-C cable required</div>
                        <div className="text-[9.5px] text-[#6E7275]">Connected to your laptop</div>
                      </div>
                    </div>

                    {/* Spec 2: Display Size */}
                    <div className="flex items-start space-x-2">
                      <Monitor className="w-3.5 h-3.5 text-[#1D1F22] shrink-0 mt-0.5" />
                      <div>
                        <div className="font-bold text-[#1D1F22] leading-tight">From 14" to 18.5"</div>
                        <div className="text-[9.5px] text-[#6E7275]">Display Size</div>
                      </div>
                    </div>

                    {/* Spec 3: Resolution */}
                    <div className="flex items-start space-x-2">
                      <Sparkles className="w-3.5 h-3.5 text-[#1D1F22] shrink-0 mt-0.5" />
                      <div>
                        <div className="font-bold text-[#1D1F22] leading-tight">From Full HD to 2.5K</div>
                        <div className="text-[9.5px] text-[#6E7275]">Resolution</div>
                      </div>
                    </div>

                    {/* Spec 4: OS */}
                    <div className="flex items-start space-x-2">
                      <Laptop className="w-3.5 h-3.5 text-[#1D1F22] shrink-0 mt-0.5" />
                      <div>
                        <div className="font-bold text-[#1D1F22] leading-tight">MacOS, Windows</div>
                        <div className="text-[9.5px] text-[#6E7275]">+ Game consoles</div>
                      </div>
                    </div>

                    {/* Spec 5: Software */}
                    <div className="flex items-start space-x-2">
                      <Download className="w-3.5 h-3.5 text-[#1D1F22] shrink-0 mt-0.5" />
                      <div>
                        <div className="font-bold text-[#1D1F22] leading-tight">Software required</div>
                        <div className="text-[9.5px] text-[#6E7275]">Quick and easy installation</div>
                      </div>
                    </div>

                    {/* Spec 6: Materials */}
                    <div className="flex items-start space-x-2">
                      <Layers className="w-3.5 h-3.5 text-[#1D1F22] shrink-0 mt-0.5" />
                      <div>
                        <div className="font-bold text-[#1D1F22] leading-tight">Full Aluminum</div>
                        <div className="text-[9.5px] text-[#6E7275]">Materials</div>
                      </div>
                    </div>

                  </div>

                </div>
              )}

              {/* ==================================================== */}
              {/* CARD 3: TRIPLE BOOST PRO (GEN 2)                    */}
              {/* ==================================================== */}
              {TRIPLE_MONITOR_PRODUCTS[1] && (
                <div className="rounded-2xl bg-[#EDE7DF] p-3.5 sm:p-4 border border-[#DDD6CC] shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow">
                  
                  {/* Top Badges Row */}
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-1.5">
                      <span className="px-2 py-0.5 rounded-full bg-[#E63946] text-white text-[10px] font-bold tracking-tight">
                        Save 22%
                      </span>
                    </div>

                    <div className="px-2 py-0.5 rounded-full bg-[#FAF8F5] border border-[#E3E1DC] text-[10px] font-medium text-[#1D1F22] flex items-center space-x-1">
                      <Star className="w-2.5 h-2.5 fill-[#F59E0B] text-[#F59E0B]" />
                      <span>4.5 • 263 reviews</span>
                    </div>
                  </div>

                  {/* Main Product Image Container */}
                  <div 
                    onClick={() => {
                      sound.playClick();
                      onSelectProduct(TRIPLE_MONITOR_PRODUCTS[1]);
                    }}
                    className="relative w-full aspect-[4/3] rounded-xl overflow-hidden bg-[#E2DBD1] flex items-center justify-center p-2 group cursor-pointer"
                  >
                    <img
                      src={TRIPLE_MONITOR_PRODUCTS[1].customImage}
                      alt={TRIPLE_MONITOR_PRODUCTS[1].name}
                      className="w-full h-full object-contain filter contrast-[1.03] group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  {/* Title & Price Header */}
                  <div className="mt-3 flex items-baseline justify-between">
                    <h4 className="text-sm font-bold text-[#1D1F22] tracking-tight truncate">
                      {TRIPLE_MONITOR_PRODUCTS[1].name}
                    </h4>
                    <div className="flex items-baseline space-x-1.5 shrink-0">
                      <span className="text-[11px] text-[#E63946] font-bold">From $499.00</span>
                      <span className="text-[10px] text-zinc-500 line-through">$639.00</span>
                    </div>
                  </div>

                  {/* Colors Selector */}
                  <div className="flex items-center space-x-2 my-2.5 text-xs text-[#5E6265]">
                    <span>Colors</span>
                    <button
                      onClick={() => handleColorSelect('triple-boost-pro-gen2', '#52555A')}
                      className={`w-3.5 h-3.5 rounded-full bg-[#52555A] cursor-pointer ${
                        selectedColors['triple-boost-pro-gen2'] === '#52555A' ? 'ring-2 ring-offset-1 ring-[#52555A]' : ''
                      }`}
                    />
                    <button
                      onClick={() => handleColorSelect('triple-boost-pro-gen2', '#18181B')}
                      className={`w-3.5 h-3.5 rounded-full bg-[#18181B] cursor-pointer ${
                        selectedColors['triple-boost-pro-gen2'] === '#18181B' ? 'ring-2 ring-offset-1 ring-[#18181B]' : ''
                      }`}
                    />
                  </div>

                  {/* 2x3 Spec Matrix (Exact Match to Image 2) */}
                  <div className="grid grid-cols-2 gap-x-3 gap-y-2.5 pt-2.5 border-t border-[#DDD6CC] text-[10.5px]">
                    
                    {/* Spec 1: Cable */}
                    <div className="flex items-start space-x-2">
                      <Cable className="w-3.5 h-3.5 text-[#1D1F22] shrink-0 mt-0.5" />
                      <div>
                        <div className="font-bold text-[#1D1F22] leading-tight">1 USB-C cable required</div>
                        <div className="text-[9.5px] text-[#6E7275]">Connected to your laptop</div>
                      </div>
                    </div>

                    {/* Spec 2: Display size */}
                    <div className="flex items-start space-x-2">
                      <Monitor className="w-3.5 h-3.5 text-[#1D1F22] shrink-0 mt-0.5" />
                      <div>
                        <div className="font-bold text-[#1D1F22] leading-tight">3x 14" or 3x 15.6"</div>
                        <div className="text-[9.5px] text-[#6E7275]">Display size</div>
                      </div>
                    </div>

                    {/* Spec 3: Resolution */}
                    <div className="flex items-start space-x-2">
                      <Sparkles className="w-3.5 h-3.5 text-[#1D1F22] shrink-0 mt-0.5" />
                      <div>
                        <div className="font-bold text-[#1D1F22] leading-tight">Full HD</div>
                        <div className="text-[9.5px] text-[#6E7275]">Resolution</div>
                      </div>
                    </div>

                    {/* Spec 4: OS */}
                    <div className="flex items-start space-x-2">
                      <Laptop className="w-3.5 h-3.5 text-[#1D1F22] shrink-0 mt-0.5" />
                      <div>
                        <div className="font-bold text-[#1D1F22] leading-tight">MacOS & Windows</div>
                        <div className="text-[9.5px] text-[#6E7275]">+ Android, Ubuntu</div>
                      </div>
                    </div>

                    {/* Spec 5: Software */}
                    <div className="flex items-start space-x-2">
                      <Download className="w-3.5 h-3.5 text-[#1D1F22] shrink-0 mt-0.5" />
                      <div>
                        <div className="font-bold text-[#1D1F22] leading-tight">Software required</div>
                        <div className="text-[9.5px] text-[#6E7275]">Quick and easy installation</div>
                      </div>
                    </div>

                    {/* Spec 6: Materials */}
                    <div className="flex items-start space-x-2">
                      <Layers className="w-3.5 h-3.5 text-[#1D1F22] shrink-0 mt-0.5" />
                      <div>
                        <div className="font-bold text-[#1D1F22] leading-tight">Full Aluminum</div>
                        <div className="text-[9.5px] text-[#6E7275]">Materials</div>
                      </div>
                    </div>

                  </div>

                </div>
              )}

              {/* ==================================================== */}
              {/* CARD 4: TRIPLE SCREEN PRO FOLD (Bottom row item)     */}
              {/* ==================================================== */}
              {TRIPLE_MONITOR_PRODUCTS[2] && (
                <div className="rounded-2xl bg-[#EDE7DF] p-3.5 sm:p-4 border border-[#DDD6CC] shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow">
                  
                  {/* Top Badges Row */}
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-1.5">
                      <span className="px-2 py-0.5 rounded-full bg-[#E63946] text-white text-[10px] font-bold tracking-tight">
                        Save 27%
                      </span>
                    </div>

                    <div className="px-2 py-0.5 rounded-full bg-[#FAF8F5] border border-[#E3E1DC] text-[10px] font-medium text-[#1D1F22] flex items-center space-x-1">
                      <Star className="w-2.5 h-2.5 fill-[#F59E0B] text-[#F59E0B]" />
                      <span>4.5 • 271 reviews</span>
                    </div>
                  </div>

                  {/* Main Product Image Container */}
                  <div 
                    onClick={() => {
                      sound.playClick();
                      onSelectProduct(TRIPLE_MONITOR_PRODUCTS[2]);
                    }}
                    className="relative w-full aspect-[4/3] rounded-xl overflow-hidden bg-[#E2DBD1] flex items-center justify-center p-2 group cursor-pointer"
                  >
                    <img
                      src={TRIPLE_MONITOR_PRODUCTS[2].customImage}
                      alt={TRIPLE_MONITOR_PRODUCTS[2].name}
                      className="w-full h-full object-contain filter contrast-[1.03] group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  {/* Title & Price Header */}
                  <div className="mt-3 flex items-baseline justify-between">
                    <h4 className="text-sm font-bold text-[#1D1F22] tracking-tight truncate">
                      {TRIPLE_MONITOR_PRODUCTS[2].name}
                    </h4>
                    <div className="flex items-baseline space-x-1.5 shrink-0">
                      <span className="text-[11px] text-[#E63946] font-bold">From $429.00</span>
                      <span className="text-[10px] text-zinc-500 line-through">$589.00</span>
                    </div>
                  </div>

                  {/* Colors Selector */}
                  <div className="flex items-center space-x-2 my-2.5 text-xs text-[#5E6265]">
                    <span>Colors</span>
                    <button
                      onClick={() => handleColorSelect('triple-screen-pro-fold', '#18181B')}
                      className="w-3.5 h-3.5 rounded-full bg-[#18181B] ring-2 ring-offset-1 ring-[#18181B] cursor-pointer"
                    />
                  </div>

                  {/* 2x3 Spec Matrix */}
                  <div className="grid grid-cols-2 gap-x-3 gap-y-2.5 pt-2.5 border-t border-[#DDD6CC] text-[10.5px]">
                    <div className="flex items-start space-x-2">
                      <Cable className="w-3.5 h-3.5 text-[#1D1F22] shrink-0 mt-0.5" />
                      <div>
                        <div className="font-bold text-[#1D1F22] leading-tight">1 USB-C cable required</div>
                        <div className="text-[9.5px] text-[#6E7275]">Connected to your laptop</div>
                      </div>
                    </div>
                    <div className="flex items-start space-x-2">
                      <Monitor className="w-3.5 h-3.5 text-[#1D1F22] shrink-0 mt-0.5" />
                      <div>
                        <div className="font-bold text-[#1D1F22] leading-tight">3x 14" Display</div>
                        <div className="text-[9.5px] text-[#6E7275]">Display Size</div>
                      </div>
                    </div>
                    <div className="flex items-start space-x-2">
                      <Sparkles className="w-3.5 h-3.5 text-[#1D1F22] shrink-0 mt-0.5" />
                      <div>
                        <div className="font-bold text-[#1D1F22] leading-tight">Full HD 1080p</div>
                        <div className="text-[9.5px] text-[#6E7275]">Resolution</div>
                      </div>
                    </div>
                    <div className="flex items-start space-x-2">
                      <Laptop className="w-3.5 h-3.5 text-[#1D1F22] shrink-0 mt-0.5" />
                      <div>
                        <div className="font-bold text-[#1D1F22] leading-tight">MacOS, Windows</div>
                        <div className="text-[9.5px] text-[#6E7275]">+ Android</div>
                      </div>
                    </div>
                    <div className="flex items-start space-x-2">
                      <Download className="w-3.5 h-3.5 text-[#1D1F22] shrink-0 mt-0.5" />
                      <div>
                        <div className="font-bold text-[#1D1F22] leading-tight">Software required</div>
                        <div className="text-[9.5px] text-[#6E7275]">Quick and easy installation</div>
                      </div>
                    </div>
                    <div className="flex items-start space-x-2">
                      <Layers className="w-3.5 h-3.5 text-[#1D1F22] shrink-0 mt-0.5" />
                      <div>
                        <div className="font-bold text-[#1D1F22] leading-tight">Full Aluminum</div>
                        <div className="text-[9.5px] text-[#6E7275]">Materials</div>
                      </div>
                    </div>
                  </div>

                </div>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
