import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  ShieldCheck, 
  Cpu, 
  RotateCw, 
  Layers, 
  Zap, 
  Feather, 
  Magnet, 
  Maximize2,
  CheckCircle2,
  ArrowUpRight
} from 'lucide-react';
import { sound } from '../utils/audio';

export const HardwareBreakdown: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'hinge' | 'panel' | 'clamp' | 'cable'>('hinge');
  const [activeAngleMode, setActiveAngleMode] = useState<number>(0); // 0: Dual Landscape, 1: Portrait Code, 2: 360 Presentation, 3: Freestanding

  const angleModes = [
    {
      title: 'Dual Landscape (180°)',
      desc: 'Expands your horizontal workspace seamlessly. Ideal for split-window coding, timeline editing, and data comparison.',
      badge: 'Most Popular',
      rotY: 0,
      rotZ: 0,
    },
    {
      title: 'Vertical Portrait (90°)',
      desc: 'Rotates 90° vertically. Displays 140+ lines of uninterrupted code, long PDF whitepapers, and full chat feeds.',
      badge: 'Dev Favorite',
      rotY: 0,
      rotZ: 90,
    },
    {
      title: 'Presentation Share (360°)',
      desc: 'Flips all the way to face the colleague or client sitting opposite you while you keep your private notes intact.',
      badge: 'Face-to-Face',
      rotY: 180,
      rotZ: 0,
    },
    {
      title: 'Freestanding Stand',
      desc: 'Detaches in 0.5 seconds with built-in aerospace aluminum kickstand for standalone desk positioning.',
      badge: 'Versatile',
      rotY: 25,
      rotZ: 0,
    }
  ];

  return (
    <section id="hardware" className="py-20 sm:py-24 bg-[#FDFCFB] border-y border-zinc-200/80 relative overflow-hidden">
      
      {/* Background ambient lighting */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-zinc-100 text-zinc-500 text-[10px] font-semibold tracking-widest uppercase mb-3 border border-zinc-200/60">
            <Layers className="w-3 h-3 text-zinc-800" />
            <span>Industrial Engineering</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-zinc-900 tracking-tight">
            Crafted for Zero Compromise.
          </h2>
          
          <p className="mt-3 text-sm sm:text-base text-zinc-500 leading-relaxed font-light">
            Every millimeter of the ANYKING Single Screen Series is engineered from aerospace 6063-T6 aluminum, high-torque friction dampers, and optical glass.
          </p>
        </div>

        {/* Feature Grid & Interactive Exploded Hardware Model */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Interactive Hardware Tabs */}
          <div className="lg:col-span-5 space-y-3">
            
            <button
              id="tab-hinge-btn"
              onClick={() => {
                setActiveTab('hinge');
                sound.playClick();
              }}
              className={`w-full text-left p-4.5 rounded-xl border transition-all ${
                activeTab === 'hinge'
                  ? 'bg-white border-zinc-900 shadow-sm ring-1 ring-zinc-900'
                  : 'bg-white/60 border-zinc-200 hover:bg-white'
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className={`p-2 rounded-lg ${activeTab === 'hinge' ? 'bg-zinc-900 text-white' : 'bg-zinc-100 text-zinc-600'}`}>
                    <RotateCw className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm text-zinc-900">Aero-Torque Friction Hinge</h3>
                    <p className="text-xs text-zinc-500 mt-0.5">Tested for 25,000+ continuous fold cycles</p>
                  </div>
                </div>
                <span className="text-xs font-mono font-semibold text-zinc-700">0°–235°</span>
              </div>
              {activeTab === 'hinge' && (
                <p className="mt-3 text-xs text-zinc-600 leading-relaxed border-t border-zinc-100 pt-3">
                  Dual-axis continuous friction damping allows micro-angle adjustments that stay rigid under vigorous typing or train vibrations.
                </p>
              )}
            </button>

            <button
              id="tab-panel-btn"
              onClick={() => {
                setActiveTab('panel');
                sound.playClick();
              }}
              className={`w-full text-left p-4.5 rounded-xl border transition-all ${
                activeTab === 'panel'
                  ? 'bg-white border-zinc-900 shadow-sm ring-1 ring-zinc-900'
                  : 'bg-white/60 border-zinc-200 hover:bg-white'
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className={`p-2 rounded-lg ${activeTab === 'panel' ? 'bg-zinc-900 text-white' : 'bg-zinc-100 text-zinc-600'}`}>
                    <Cpu className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm text-zinc-900">4.2mm Ultra-Thin OLED Profile</h3>
                    <p className="text-xs text-zinc-500 mt-0.5">Zero-bezel edge-to-edge optical glass</p>
                  </div>
                </div>
                <span className="text-xs font-mono font-semibold text-zinc-700">4.2mm</span>
              </div>
              {activeTab === 'panel' && (
                <p className="mt-3 text-xs text-zinc-600 leading-relaxed border-t border-zinc-100 pt-3">
                  Custom micro-machined CNC housing houses a 2.8K 120Hz E6 OLED panel with infinite 1,000,000:1 contrast and 0.1ms pixel response time.
                </p>
              )}
            </button>

            <button
              id="tab-clamp-btn"
              onClick={() => {
                setActiveTab('clamp');
                sound.playClick();
              }}
              className={`w-full text-left p-4.5 rounded-xl border transition-all ${
                activeTab === 'clamp'
                  ? 'bg-white border-zinc-900 shadow-sm ring-1 ring-zinc-900'
                  : 'bg-white/60 border-zinc-200 hover:bg-white'
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className={`p-2 rounded-lg ${activeTab === 'clamp' ? 'bg-zinc-900 text-white' : 'bg-zinc-100 text-zinc-600'}`}>
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm text-zinc-900">Zero Screen-Stress Cantilever</h3>
                    <p className="text-xs text-zinc-500 mt-0.5">Counterbalanced silicone desk contact</p>
                  </div>
                </div>
                <span className="text-xs font-mono font-semibold text-zinc-700">0g Load</span>
              </div>
              {activeTab === 'clamp' && (
                <p className="mt-3 text-xs text-zinc-600 leading-relaxed border-t border-zinc-100 pt-3">
                  The patented cantilever foot transfers weight directly onto the tabletop rather than pulling on your laptop display lid.
                </p>
              )}
            </button>

            <button
              id="tab-cable-btn"
              onClick={() => {
                setActiveTab('cable');
                sound.playClick();
              }}
              className={`w-full text-left p-4.5 rounded-xl border transition-all ${
                activeTab === 'cable'
                  ? 'bg-white border-zinc-900 shadow-sm ring-1 ring-zinc-900'
                  : 'bg-white/60 border-zinc-200 hover:bg-white'
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className={`p-2 rounded-lg ${activeTab === 'cable' ? 'bg-zinc-900 text-white' : 'bg-zinc-100 text-zinc-600'}`}>
                    <Zap className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm text-zinc-900">Single Braided Cable Link</h3>
                    <p className="text-xs text-zinc-500 mt-0.5">DP 1.4 + 100W PD Pass-through</p>
                  </div>
                </div>
                <span className="text-xs font-mono font-semibold text-zinc-700">1 Cable</span>
              </div>
              {activeTab === 'cable' && (
                <p className="mt-3 text-xs text-zinc-600 leading-relaxed border-t border-zinc-100 pt-3">
                  No power brick required. Connect one 90-degree low-profile Type-C cable and power both displays directly from your laptop battery.
                </p>
              )}
            </button>

          </div>

          {/* Right Column: Interactive Multi-Angle Mode Switcher & Visualizer */}
          <div className="lg:col-span-7 bg-white rounded-2xl p-6 sm:p-7 border border-zinc-200/80 shadow-xs">
            
            <div className="flex items-center justify-between border-b border-zinc-100 pb-4 mb-5">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-400 font-semibold">
                  Versatile Form Factors
                </span>
                <h4 className="text-base sm:text-lg font-semibold text-zinc-900 mt-0.5">
                  {angleModes[activeAngleMode].title}
                </h4>
              </div>
              <span className="px-2.5 py-0.5 rounded-full bg-zinc-100 text-zinc-800 text-xs font-medium border border-zinc-200/50">
                {angleModes[activeAngleMode].badge}
              </span>
            </div>

            {/* Visual Screen Representation Box */}
            <div className="relative h-60 sm:h-64 bg-zinc-950 rounded-xl overflow-hidden flex items-center justify-center p-6 border border-zinc-800 shadow-inner">
              
              {/* Screen Glass Reflection */}
              <div className="screen-glass absolute inset-0 z-10 pointer-events-none" />

              {/* Laptop Core (Fixed Center) */}
              <div className="relative w-40 sm:w-48 h-28 bg-zinc-800 rounded-lg border border-zinc-700 p-2 shadow-xl flex flex-col justify-between z-20">
                <div className="flex items-center justify-between border-b border-zinc-700 pb-1 text-[8px] text-zinc-400">
                  <div className="flex space-x-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-400"></span>
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400"></span>
                  </div>
                  <span>Main Screen [1]</span>
                </div>
                <div className="flex-1 flex items-center justify-center font-mono text-[10px] text-zinc-300">
                  Host Laptop
                </div>
                <div className="text-[7.5px] text-zinc-500 text-right">0° Horizon</div>
              </div>

              {/* ANYKING Extended Screen (Morphs based on mode) */}
              <motion.div
                key={activeAngleMode}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.4 }}
                className={`relative bg-zinc-900 rounded-lg border border-zinc-700 p-2 shadow-xl flex flex-col justify-between z-30 transition-all duration-500 ${
                  activeAngleMode === 1 
                    ? 'w-24 sm:w-26 h-44 sm:h-48 -ml-2 -mt-4' 
                    : activeAngleMode === 2 
                    ? 'w-40 sm:w-48 h-28 ml-4 opacity-80 border-dashed border-zinc-500' 
                    : activeAngleMode === 3 
                    ? 'w-40 sm:w-48 h-28 ml-6 mt-2' 
                    : 'w-40 sm:w-48 h-28 -ml-1'
                }`}
              >
                <div className="flex items-center justify-between border-b border-zinc-800 pb-1 text-[7.5px] text-zinc-300">
                  <span className="font-bold font-mono">ANYKING [+1]</span>
                  <span className="bg-zinc-800 px-1 rounded text-zinc-300">
                    {activeAngleMode === 1 ? 'Vertical 90°' : activeAngleMode === 2 ? 'Flipped 360°' : 'Active 180°'}
                  </span>
                </div>

                <div className="flex-1 flex flex-col items-center justify-center text-center p-1">
                  <span className="text-xs font-bold text-white">
                    {activeAngleMode === 1 ? '140+ Lines Code' : activeAngleMode === 2 ? 'Client Presentation' : '+1 Expanded View'}
                  </span>
                  <span className="text-[8px] text-zinc-400 mt-0.5">
                    {activeAngleMode === 1 ? 'Infinite Vertical Flow' : activeAngleMode === 2 ? 'Direct Face-to-Face' : 'Continuous Dual Matrix'}
                  </span>
                </div>

                <div className="flex justify-between items-center text-[7px] text-zinc-500">
                  <span>Zero Latency</span>
                  <span className="font-mono text-zinc-400">GO. UNFOLD.</span>
                </div>
              </motion.div>

            </div>

            {/* Mode selection buttons */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mt-4">
              {angleModes.map((mode, idx) => (
                <button
                  key={mode.title}
                  id={`angle-mode-btn-${idx}`}
                  onClick={() => {
                    setActiveAngleMode(idx);
                    sound.playSlide();
                  }}
                  className={`p-2.5 rounded-lg text-left border text-xs font-medium transition-all ${
                    activeAngleMode === idx
                      ? 'bg-zinc-900 text-white border-zinc-900 shadow-xs'
                      : 'bg-zinc-50 text-zinc-600 border-zinc-200 hover:bg-zinc-100'
                  }`}
                >
                  <div className="font-semibold truncate">{mode.title.split(' ')[0]} {mode.title.split(' ')[1]}</div>
                  <div className={`text-[10px] mt-0.5 truncate ${activeAngleMode === idx ? 'text-zinc-400' : 'text-zinc-400'}`}>
                    {mode.badge}
                  </div>
                </button>
              ))}
            </div>

            {/* Description */}
            <p className="mt-4 text-xs text-zinc-500 leading-relaxed font-light">
              {angleModes[activeAngleMode].desc}
            </p>

          </div>

        </div>

      </div>
    </section>
  );
};
