import React, { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ChevronLeft, 
  ChevronRight, 
  ArrowRight, 
  ArrowDownRight, 
  Sparkles, 
  MousePointer,
  Play,
  Pause,
  Volume2,
  VolumeX,
  Film
} from 'lucide-react';
import { sound } from '../utils/audio';

import btsImg from '../assets/images/bts_sales_card_1786693549501.jpg';
import tripleImg from '../assets/images/triple_aero_pro_1786691727339.jpg';
import dualImg from '../assets/images/dual_monitors_card_1786693511238.jpg';
import singleImg from '../assets/images/single_monitors_card_1786693531829.jpg';
import smartImg from '../assets/images/smart_monitors_card_1786693566828.jpg';

interface CategoryCard {
  id: string;
  category: 'single' | 'dual' | 'triple' | 'sales' | 'smart';
  title: string;
  count: number;
  subtitle: string;
  image: string;
  videoUrl?: string;
  isDark?: boolean;
  isCurrent?: boolean;
}

interface CategoryNavigationProps {
  currentCategory?: string;
  onSelectCategory: (category: 'single' | 'dual' | 'triple' | string) => void;
}

export const CategoryNavigation: React.FC<CategoryNavigationProps> = ({
  currentCategory = 'triple',
  onSelectCategory
}) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  
  // Track which card is hovered/focused
  const [hoveredCardId, setHoveredCardId] = useState<string | null>(null);
  const [isVideoPlaying, setIsVideoPlaying] = useState<boolean>(true);
  const [isVideoMuted, setIsVideoMuted] = useState<boolean>(true);

  const toggleVideoPlay = (e: React.MouseEvent) => {
    e.stopPropagation();
    sound.playClick();
    if (videoRef.current) {
      if (isVideoPlaying) {
        videoRef.current.pause();
        setIsVideoPlaying(false);
      } else {
        videoRef.current.play();
        setIsVideoPlaying(true);
      }
    }
  };

  const toggleVideoMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    sound.playClick();
    if (videoRef.current) {
      videoRef.current.muted = !isVideoMuted;
      setIsVideoMuted(!isVideoMuted);
    }
  };

  const categories: CategoryCard[] = [
    {
      id: 'bts-sales',
      category: 'sales',
      title: 'Back to School Sales',
      count: 17,
      subtitle: 'Save up to 20% on our portable monitors and accessories. Enjoy free worldwide shipping and 10% purchase credit.',
      image: btsImg,
      videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-working-on-a-laptop-in-a-cozy-office-42778-large.mp4',
      isDark: true
    },
    {
      id: 'triple-monitors',
      category: 'triple',
      title: 'Triple Monitors',
      count: 3,
      subtitle: 'Boost your productivity by 52%.',
      image: tripleImg,
      isCurrent: true
    },
    {
      id: 'dual-monitors',
      category: 'dual',
      title: 'Dual Monitors',
      count: 8,
      subtitle: 'Expand your view, elevate your flow.',
      image: dualImg
    },
    {
      id: 'single-monitors',
      category: 'single',
      title: 'Single Monitors',
      count: 6,
      subtitle: 'One screen, endless possibilities.',
      image: singleImg
    },
    {
      id: 'smart-monitors',
      category: 'smart',
      title: 'Smart Monitors',
      count: 4,
      subtitle: 'Your all-in-one smart display.',
      image: smartImg
    }
  ];

  const handleScroll = (direction: 'left' | 'right') => {
    sound.playClick();
    if (scrollContainerRef.current) {
      const scrollAmount = 360;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section 
      id="category-showcase" 
      className="w-full bg-[#F6F4EF] py-16 sm:py-20 border-t border-[#E3E1DC] overflow-hidden"
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
        
        {/* Section Header with exact Image Typography & Navigation Arrows */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <div className="flex items-center space-x-2 mb-1">
              <span className="text-xs sm:text-sm font-medium text-[#5E6265] tracking-tight">
                Discover our collections
              </span>
              <span className="inline-flex items-center text-[10.5px] font-semibold bg-white border border-[#D5D2CA] text-[#1D1F22] px-2.5 py-0.5 rounded-full shadow-2xs">
                <MousePointer className="w-3 h-3 mr-1 text-[#5E6265]" />
                鼠标悬停展开屏幕
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1D1F22] tracking-tight flex items-center flex-wrap gap-x-2">
              <span>Boost your</span>
              <span className="relative inline-block px-1">
                productivity
                {/* Hand-drawn style highlight oval ring around 'productivity' */}
                <svg
                  className="absolute -inset-x-2 -inset-y-1 w-[calc(100%+16px)] h-[calc(100%+8px)] pointer-events-none text-[#C89B66] opacity-80"
                  viewBox="0 0 160 50"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M10,25 C10,12 35,5 80,5 C125,5 150,12 150,25 C150,38 125,45 80,45 C35,45 10,38 10,25 Z"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeDasharray="180 8"
                  />
                </svg>
              </span>
              <span>with ANYKING Displays</span>
            </h2>
          </div>

          {/* Left / Right Carousel Controls */}
          <div className="flex items-center space-x-2 shrink-0">
            <button
              onClick={() => handleScroll('left')}
              aria-label="Scroll left"
              className="w-10 h-10 rounded-full border border-[#D5D2CA] bg-white hover:bg-[#F2EFE9] text-[#1D1F22] flex items-center justify-center transition-colors shadow-2xs cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => handleScroll('right')}
              aria-label="Scroll right"
              className="w-10 h-10 rounded-full border border-[#D5D2CA] bg-white hover:bg-[#F2EFE9] text-[#1D1F22] flex items-center justify-center transition-colors shadow-2xs cursor-pointer"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Horizontal Scrolling Card Track */}
        <div
          ref={scrollContainerRef}
          className="flex space-x-5 overflow-x-auto scrollbar-none pb-4 pt-1 snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {categories.map((cat) => {
            const isCategoryNavTarget = ['single', 'dual', 'triple'].includes(cat.category);
            const isHovered = hoveredCardId === cat.id;

            return (
              <div
                key={cat.id}
                onMouseEnter={() => {
                  setHoveredCardId(cat.id);
                  if (isCategoryNavTarget) sound.playExtend();
                }}
                onMouseLeave={() => {
                  if (isCategoryNavTarget && hoveredCardId === cat.id) sound.playFold();
                  setHoveredCardId(null);
                }}
                onClick={() => {
                  sound.playClick();
                  onSelectCategory(cat.category);
                }}
                className={`snap-start shrink-0 w-[280px] sm:w-[320px] rounded-3xl overflow-hidden cursor-pointer transition-all duration-300 relative group flex flex-col justify-between ${
                  cat.isDark 
                    ? 'bg-[#18191B] text-white border border-[#2F3238] shadow-md min-h-[450px]' 
                    : 'bg-[#EDE7DF] text-[#1D1F22] border border-[#DDD6CC] shadow-xs hover:shadow-lg min-h-[450px]'
                }`}
              >
                {/* Visual Image / Video & Interactive Unfold Stage */}
                {cat.isDark ? (
                  <div className="absolute inset-0 w-full h-full overflow-hidden">
                    {/* Background Video Player */}
                    {cat.videoUrl ? (
                      <video
                        ref={videoRef}
                        src={cat.videoUrl}
                        poster={cat.image}
                        autoPlay
                        loop
                        muted={isVideoMuted}
                        playsInline
                        className="w-full h-full object-cover filter brightness-[0.72] group-hover:scale-105 transition-transform duration-700"
                      />
                    ) : (
                      <img
                        src={cat.image}
                        alt={cat.title}
                        className="w-full h-full object-cover filter brightness-[0.75] group-hover:scale-105 transition-transform duration-700"
                      />
                    )}
                    
                    {/* Dark gradient for text readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/35 to-black/20" />

                    {/* Video Top Bar Overlay (Badges + Interactive Controls) */}
                    <div className="absolute top-3 inset-x-3 flex items-center justify-between z-20">
                      <div className="flex items-center space-x-1.5 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-[10px] font-semibold text-amber-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                        <Film className="w-3 h-3" />
                        <span>VIDEO WORKSPACE</span>
                      </div>

                      {/* Video Quick Controls */}
                      <div className="flex items-center space-x-1">
                        <button
                          type="button"
                          onClick={toggleVideoMute}
                          className="w-7 h-7 rounded-full bg-black/60 hover:bg-black/80 backdrop-blur-md border border-white/15 flex items-center justify-center text-white/90 hover:text-white transition-colors cursor-pointer"
                          title={isVideoMuted ? "开启声音" : "静音"}
                        >
                          {isVideoMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5 text-amber-300" />}
                        </button>
                        <button
                          type="button"
                          onClick={toggleVideoPlay}
                          className="w-7 h-7 rounded-full bg-black/60 hover:bg-black/80 backdrop-blur-md border border-white/15 flex items-center justify-center text-white/90 hover:text-white transition-colors cursor-pointer"
                          title={isVideoPlaying ? "暂停视频" : "播放视频"}
                        >
                          {isVideoPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 text-amber-300 fill-amber-300" />}
                        </button>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="w-full aspect-[4/3] p-4 flex items-center justify-center relative overflow-hidden bg-[#E8E2D8]">
                    {/* Hover state badge in top right */}
                    {isCategoryNavTarget && (
                      <div className={`absolute top-3 right-3 px-2 py-0.5 rounded-full text-[9.5px] font-semibold transition-all duration-300 z-30 ${
                        isHovered 
                          ? 'bg-[#1D1F22] text-white shadow-xs' 
                          : 'bg-black/10 text-[#5E6265]'
                      }`}>
                        {isHovered ? '已展开' : '闭合状态'}
                      </div>
                    )}

                    {/* Interactive Animated Unfold Visualization for Single, Dual, and Triple monitors */}
                    <div className="w-full h-full flex items-center justify-center relative select-none">
                      
                      {/* TRIPLE MONITORS CARD - Default closed, unfolds 3 distinct panels on hover */}
                      {cat.category === 'triple' && (
                        <div className="relative w-full h-full flex items-center justify-center">
                          {/* Main Laptop Center Screen */}
                          <motion.div
                            animate={{ scale: isHovered ? 1 : 0.96 }}
                            transition={{ duration: 0.4 }}
                            className="w-24 h-16 bg-[#25282B] rounded-t-md border border-neutral-700 shadow-md relative z-10 flex items-center justify-center overflow-hidden"
                          >
                            <img src={tripleImg} alt="Center Display" className="w-full h-full object-cover opacity-90" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                            <span className="text-[7.5px] font-bold text-white z-10">Main Core</span>
                          </motion.div>

                          {/* Left Wing Unfold (Hidden/Folded behind center screen when closed, unfolds to the left when hovered) */}
                          <motion.div
                            animate={{
                              x: isHovered ? -48 : 0,
                              scale: isHovered ? 1 : 0.75,
                              rotateY: isHovered ? 0 : 85,
                              opacity: isHovered ? 1 : 0,
                              zIndex: isHovered ? 15 : 5
                            }}
                            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                            className="absolute w-18 h-15 bg-[#18191B] rounded-sm border border-neutral-600 shadow-lg origin-right overflow-hidden flex items-center justify-center pointer-events-none"
                          >
                            <img src={tripleImg} alt="Left Wing" className="w-full h-full object-cover filter contrast-125" />
                            <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/40 to-transparent" />
                            <div className="absolute bottom-1 left-1 text-[6.5px] font-mono text-cyan-300 font-bold">Left +1</div>
                          </motion.div>

                          {/* Right Wing Unfold (Hidden/Folded behind center screen when closed, unfolds to the right when hovered) */}
                          <motion.div
                            animate={{
                              x: isHovered ? 48 : 0,
                              scale: isHovered ? 1 : 0.75,
                              rotateY: isHovered ? 0 : -85,
                              opacity: isHovered ? 1 : 0,
                              zIndex: isHovered ? 15 : 5
                            }}
                            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                            className="absolute w-18 h-15 bg-[#18191B] rounded-sm border border-neutral-600 shadow-lg origin-left overflow-hidden flex items-center justify-center pointer-events-none"
                          >
                            <img src={tripleImg} alt="Right Wing" className="w-full h-full object-cover filter contrast-125" />
                            <div className="absolute inset-0 bg-gradient-to-l from-cyan-900/40 to-transparent" />
                            <div className="absolute bottom-1 right-1 text-[6.5px] font-mono text-cyan-300 font-bold">Right +2</div>
                          </motion.div>

                          {/* Top Overhead Panel Unfold / Pop-up (Slides up smoothly when hovered) */}
                          <motion.div
                            animate={{
                              y: isHovered ? -42 : 0,
                              scaleY: isHovered ? 1 : 0,
                              opacity: isHovered ? 1 : 0,
                              zIndex: isHovered ? 20 : 0
                            }}
                            transition={{ duration: 0.4, delay: isHovered ? 0.08 : 0, ease: [0.16, 1, 0.3, 1] }}
                            className="absolute w-22 h-14 bg-[#18191B] rounded-sm border border-neutral-600 shadow-xl origin-bottom overflow-hidden flex items-center justify-center pointer-events-none"
                          >
                            <img src={tripleImg} alt="Top Screen" className="w-full h-full object-cover" />
                            <div className="absolute inset-0 bg-amber-500/20" />
                            <div className="absolute top-1 right-1 px-1 rounded bg-black/60 text-[6px] font-mono text-amber-300 font-bold">Top +3</div>
                          </motion.div>

                          {/* Laptop Keyboard Base */}
                          <div className="absolute -bottom-1 w-28 h-2 bg-[#A3A8AE] rounded-b-md shadow-xs z-20" />
                        </div>
                      )}

                      {/* DUAL MONITORS CARD - Default closed, unfolds left and right wings on hover */}
                      {cat.category === 'dual' && (
                        <div className="relative w-full h-full flex items-center justify-center">
                          {/* Center Laptop Screen */}
                          <motion.div
                            animate={{ scale: isHovered ? 1 : 0.96 }}
                            transition={{ duration: 0.4 }}
                            className="w-24 h-16 bg-[#25282B] rounded-t-md border border-neutral-700 shadow-md relative z-10 flex items-center justify-center overflow-hidden"
                          >
                            <img src={dualImg} alt="Dual Center" className="w-full h-full object-cover" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                            <span className="text-[7.5px] font-bold text-white z-10">MacBook</span>
                          </motion.div>

                          {/* Dual Left Screen Slide & Unfold on hover */}
                          <motion.div
                            animate={{
                              x: isHovered ? -46 : 0,
                              opacity: isHovered ? 1 : 0,
                              scale: isHovered ? 1 : 0.8,
                              rotateY: isHovered ? -12 : 75,
                              zIndex: isHovered ? 15 : 5
                            }}
                            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                            className="absolute w-20 h-15 bg-[#1F2226] rounded-sm border border-neutral-600 shadow-md origin-right overflow-hidden flex items-center justify-center pointer-events-none"
                          >
                            <img src={dualImg} alt="Dual Left Panel" className="w-full h-full object-cover filter saturate-150" />
                            <div className="absolute top-1 left-1 px-1 rounded bg-black/60 text-[6.5px] font-mono text-emerald-300 font-bold">Dual L</div>
                          </motion.div>

                          {/* Dual Right Screen Slide & Unfold on hover */}
                          <motion.div
                            animate={{
                              x: isHovered ? 46 : 0,
                              opacity: isHovered ? 1 : 0,
                              scale: isHovered ? 1 : 0.8,
                              rotateY: isHovered ? 12 : -75,
                              zIndex: isHovered ? 15 : 5
                            }}
                            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                            className="absolute w-20 h-15 bg-[#1F2226] rounded-sm border border-neutral-600 shadow-md origin-left overflow-hidden flex items-center justify-center pointer-events-none"
                          >
                            <img src={dualImg} alt="Dual Right Panel" className="w-full h-full object-cover filter saturate-150" />
                            <div className="absolute top-1 right-1 px-1 rounded bg-black/60 text-[6.5px] font-mono text-emerald-300 font-bold">Dual R</div>
                          </motion.div>

                          {/* Laptop Keyboard Base */}
                          <div className="absolute -bottom-1 w-28 h-2 bg-[#A3A8AE] rounded-b-md shadow-xs z-20" />
                        </div>
                      )}

                      {/* SINGLE MONITORS CARD - Default closed behind/beside, pops out standalone kickstand screen on hover */}
                      {cat.category === 'single' && (
                        <div className="relative w-full h-full flex items-center justify-center">
                          {/* Laptop Main Display */}
                          <motion.div
                            animate={{ 
                              scale: isHovered ? 1 : 0.96,
                              x: isHovered ? 10 : 0
                            }}
                            transition={{ duration: 0.4 }}
                            className="w-26 h-17 bg-[#25282B] rounded-t-md border border-neutral-700 shadow-md relative z-10 flex items-center justify-center overflow-hidden"
                          >
                            <img src={singleImg} alt="Single Host Laptop" className="w-full h-full object-cover" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                            <span className="text-[7.5px] font-bold text-white z-10">Laptop Core</span>
                          </motion.div>

                          {/* Standalone Single Kickstand Screen - Tucked in when idle, slides out to the left when hovered */}
                          <motion.div
                            animate={{
                              x: isHovered ? -52 : 0,
                              y: isHovered ? -2 : 4,
                              scale: isHovered ? 1 : 0.7,
                              rotate: isHovered ? -5 : 0,
                              opacity: isHovered ? 1 : 0,
                              zIndex: isHovered ? 20 : 5
                            }}
                            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                            className="absolute w-22 h-16 bg-[#18191B] rounded-sm border-2 border-neutral-500 shadow-xl overflow-hidden flex items-center justify-center pointer-events-none"
                          >
                            <img src={singleImg} alt="Single Extended Monitor" className="w-full h-full object-cover filter contrast-110" />
                            <div className="absolute inset-0 bg-gradient-to-t from-amber-900/30 to-transparent" />
                            <div className="absolute bottom-1 left-1 px-1 rounded bg-black/70 text-[6.5px] font-mono text-amber-300 font-bold">16" 2.5K Single</div>
                            {/* Stand indicator */}
                            <div className="absolute bottom-0 right-1 w-2 h-0.5 bg-neutral-300" />
                          </motion.div>

                          {/* Single Cable Glow animation on hover */}
                          {isHovered && (
                            <motion.div
                              initial={{ opacity: 0, scaleX: 0 }}
                              animate={{ opacity: 1, scaleX: 1 }}
                              transition={{ duration: 0.3 }}
                              className="absolute bottom-0 left-1/2 -translate-x-12 w-10 h-0.5 bg-gradient-to-r from-amber-400 to-cyan-400 z-30"
                            />
                          )}

                          {/* Laptop Keyboard Base */}
                          <motion.div 
                            animate={{ x: isHovered ? 10 : 0 }}
                            transition={{ duration: 0.4 }}
                            className="absolute -bottom-1 w-30 h-2 bg-[#A3A8AE] rounded-b-md shadow-xs z-10" 
                          />
                        </div>
                      )}

                      {/* Fallback for smart or sales */}
                      {['sales', 'smart'].includes(cat.category) && (
                        <img
                          src={cat.image}
                          alt={cat.title}
                          className="w-full h-full object-contain filter contrast-[1.02] group-hover:scale-105 transition-transform duration-300"
                        />
                      )}

                    </div>
                  </div>
                )}

                {/* Content Details Area */}
                <div className={`p-5 relative z-10 ${cat.isDark ? 'mt-auto' : ''}`}>
                  
                  {/* Title with Superscript Count */}
                  <div className="flex items-baseline justify-between mb-1.5">
                    <h3 className={`text-lg sm:text-xl font-bold tracking-tight relative inline-block ${
                      cat.isDark ? 'text-white' : 'text-[#1D1F22]'
                    }`}>
                      {cat.title}
                      <sup className="text-[11px] font-normal ml-1 opacity-70">
                        {cat.count}
                      </sup>
                      
                      {/* Underline bar for current active tab */}
                      {cat.isCurrent && (
                        <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#1D1F22]" />
                      )}
                    </h3>

                    {/* Corner Arrow Indicator */}
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center transition-all ${
                      isHovered ? 'scale-110' : ''
                    } ${
                      cat.isDark ? 'text-white/80 group-hover:text-white' : 'text-[#1D1F22]/70 group-hover:text-[#1D1F22]'
                    }`}>
                      {cat.isCurrent ? (
                        <ArrowDownRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-transform" />
                      ) : (
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      )}
                    </div>
                  </div>

                  {/* Subtitle / Description */}
                  <p className={`text-xs leading-relaxed ${
                    cat.isDark ? 'text-zinc-300' : 'text-[#5E6265]'
                  }`}>
                    {cat.subtitle}
                  </p>

                  {/* Quick Jump Action Tag */}
                  {isCategoryNavTarget && (
                    <div className={`mt-3 pt-2.5 border-t border-black/10 flex items-center justify-between text-[11px] font-semibold transition-colors ${
                      isHovered ? 'text-[#00B4D8]' : ''
                    }`}>
                      <span className={cat.isDark ? 'text-amber-300' : isHovered ? 'text-[#00B4D8]' : 'text-[#1D1F22]'}>
                        切换至 {cat.category === 'single' ? '单屏' : cat.category === 'dual' ? '双屏' : '三屏'} 系列
                      </span>
                      <span className="transition-transform group-hover:translate-x-1">→</span>
                    </div>
                  )}

                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
