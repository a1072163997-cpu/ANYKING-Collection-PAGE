import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Play, 
  Pause, 
  Volume2, 
  VolumeX, 
  Maximize2, 
  Sparkles, 
  ArrowUpRight,
  Shield,
  Zap,
  Feather,
  Monitor,
  CheckCircle2
} from 'lucide-react';
import { sound } from '../utils/audio';
import bannerImage from '../assets/images/cinematic_lifestyle_banner_1786690501181.jpg';

export const CategoryPromise: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [isMuted, setIsMuted] = useState<boolean>(true);
  const [videoProgress, setVideoProgress] = useState<number>(35); // simulated timeline %
  const [isFullscreenPreview, setIsFullscreenPreview] = useState<boolean>(false);
  const progressTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Simulated smooth video timeline playback
  useEffect(() => {
    if (isPlaying) {
      progressTimerRef.current = setInterval(() => {
        setVideoProgress((prev) => (prev >= 100 ? 0 : prev + 0.4));
      }, 100);
    } else if (progressTimerRef.current) {
      clearInterval(progressTimerRef.current);
    }
    return () => {
      if (progressTimerRef.current) clearInterval(progressTimerRef.current);
    };
  }, [isPlaying]);

  const togglePlay = () => {
    sound.playClick();
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    sound.playClick();
    setIsMuted(!isMuted);
  };

  const formatTime = (percent: number) => {
    const totalSec = 30; // 30s film
    const currentSec = Math.floor((percent / 100) * totalSec);
    const mm = String(Math.floor(currentSec / 60)).padStart(2, '0');
    const ss = String(currentSec % 60).padStart(2, '0');
    return `${mm}:${ss}`;
  };

  return (
    <section id="lifestyle-film" className="w-full bg-[#F6F4EF] py-8 sm:py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ======================================================== */}
        {/* LUXURY WIDESCREEN FILM / IMAGE BANNER CONTAINER          */}
        {/* ======================================================== */}
        <div className="relative w-full rounded-3xl overflow-hidden shadow-2xl border border-[#C8CBCB]/80 bg-[#1A1C1E] group">
          
          {/* Aspect Ratio Box: 21:9 on desktop, 16:9 on mobile/tablet */}
          <div className="relative w-full aspect-[16/9] sm:aspect-[2/1] lg:aspect-[21/9] overflow-hidden">
            
            {/* Cinematic Image / Video Frame with smooth ambient Ken Burns motion */}
            <motion.div
              className="absolute inset-0 w-full h-full"
              animate={isPlaying ? {
                scale: [1, 1.04, 1.02, 1.05],
                x: [0, -6, 4, 0],
                y: [0, -4, 2, 0]
              } : { scale: 1, x: 0, y: 0 }}
              transition={{
                duration: 24,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              <img
                src={bannerImage}
                alt="ANYKING Single Screen Lifestyle Cinematic Film"
                className="w-full h-full object-cover object-center filter saturate-[0.95] contrast-[1.05] brightness-[0.88]"
                referrerPolicy="no-referrer"
              />
            </motion.div>

            {/* High-End Architectural Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#121315]/90 via-[#181A1D]/40 to-transparent pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#121315]/80 via-transparent to-[#121315]/40 pointer-events-none" />
            <div className="absolute inset-0 bg-radial-at-c from-transparent via-[#181A1D]/20 to-[#121315]/70 pointer-events-none" />

            {/* Top Brand Badges & Video Meta */}
            <div className="absolute top-4 sm:top-6 left-4 sm:left-8 right-4 sm:right-8 flex items-center justify-between z-20 pointer-events-none">
              
              <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-black/50 backdrop-blur-md border border-white/15 text-[#E6DDCE] text-[11px] font-mono tracking-wider shadow-sm">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="font-semibold uppercase">ANYKING FILM • 4K MASTER</span>
              </div>

              <div className="flex items-center space-x-2 pointer-events-auto">
                <button
                  onClick={toggleMute}
                  title={isMuted ? 'Unmute Audio' : 'Mute Audio'}
                  className="w-8 h-8 rounded-full bg-black/40 hover:bg-black/70 backdrop-blur-md border border-white/15 text-white flex items-center justify-center transition-all cursor-pointer shadow-sm"
                >
                  {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
                </button>
              </div>
            </div>

            {/* Center Floating Play/Pause State (Appears on Hover or Pause) */}
            <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
              <button
                onClick={togglePlay}
                className={`w-14 sm:w-16 h-14 sm:h-16 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-md border border-white/30 text-white flex items-center justify-center transition-all transform cursor-pointer pointer-events-auto shadow-2xl ${
                  isPlaying ? 'opacity-0 group-hover:opacity-100 scale-95 group-hover:scale-100' : 'opacity-100 scale-100'
                }`}
              >
                {isPlaying ? (
                  <Pause className="w-6 h-6 fill-white text-white" />
                ) : (
                  <Play className="w-6 h-6 fill-white text-white translate-x-0.5" />
                )}
              </button>
            </div>

            {/* Bottom Content & Video Scrubber HUD */}
            <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-8 lg:p-10 z-20 flex flex-col justify-end text-white">
              
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-end mb-4">
                
                {/* Left Typography Statement */}
                <div className="md:col-span-8 text-left">
                  <div className="text-[11px] sm:text-xs font-mono uppercase tracking-[0.25em] text-[#E6DDCE] font-semibold mb-1.5 drop-shadow-sm">
                    SINGLE SCREEN ARCHITECTURE
                  </div>
                  <h2 className="text-xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white leading-tight font-display drop-shadow-md">
                    Engineered to Travel. Built to Flow.
                  </h2>
                  <p className="mt-1.5 text-xs sm:text-sm text-zinc-300 font-normal max-w-xl leading-relaxed drop-shadow-xs">
                    Zero hinge stress. One braided cable. Patented aerospace micro-cantilever slips seamlessly into your everyday rhythm.
                  </p>
                </div>

                {/* Right Quick Pillar Highlights */}
                <div className="md:col-span-4 flex md:justify-end items-center space-x-3 text-xs font-mono text-zinc-300">
                  <div className="px-3 py-1.5 rounded-lg bg-black/40 backdrop-blur-md border border-white/10 flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E6DDCE]" />
                    <span>580g CNC Alloy</span>
                  </div>
                  <div className="px-3 py-1.5 rounded-lg bg-black/40 backdrop-blur-md border border-white/10 flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    <span>Single USB-C</span>
                  </div>
                </div>

              </div>

              {/* Video Timeline Scrubber Bar */}
              <div className="w-full pt-3 border-t border-white/15 flex items-center space-x-3 text-[11px] font-mono text-zinc-400">
                <button
                  onClick={togglePlay}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  {isPlaying ? 'PAUSE' : 'PLAY'}
                </button>

                {/* Progress Bar Line */}
                <div 
                  className="flex-1 h-1 bg-white/20 rounded-full overflow-hidden relative cursor-pointer group/bar"
                  onClick={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect();
                    const clickX = e.clientX - rect.left;
                    const newProgress = Math.max(0, Math.min(100, (clickX / rect.width) * 100));
                    setVideoProgress(newProgress);
                    sound.playClick();
                  }}
                >
                  <div 
                    className="h-full bg-gradient-to-r from-[#E6DDCE] to-white transition-all duration-100 relative rounded-full"
                    style={{ width: `${videoProgress}%` }}
                  >
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2.5 h-2.5 bg-white rounded-full shadow-md opacity-0 group-hover/bar:opacity-100 transition-opacity" />
                  </div>
                </div>

                {/* Timestamp */}
                <span className="shrink-0 text-white font-medium">
                  {formatTime(videoProgress)} / 00:30
                </span>
                <span className="hidden sm:inline text-zinc-500">• 4K HDR 60fps</span>
              </div>

            </div>

          </div>

        </div>

        {/* 4 Bottom Micro-Metrics Strip under Video Banner */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          <div className="bg-white rounded-2xl p-4 sm:p-5 border border-[#C8CBCB]/70 shadow-2xs flex items-center space-x-3.5">
            <div className="w-9 h-9 rounded-xl bg-[#F6F4EF] border border-[#C8CBCB] flex items-center justify-center text-[#25282B] shrink-0">
              <Zap className="w-4 h-4 text-[#25282B]" />
            </div>
            <div>
              <div className="text-xs font-bold text-[#25282B]">100W PD Pass-through</div>
              <div className="text-[11px] text-[#5E6265] font-light">Single braided USB-C cable</div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-4 sm:p-5 border border-[#C8CBCB]/70 shadow-2xs flex items-center space-x-3.5">
            <div className="w-9 h-9 rounded-xl bg-[#F6F4EF] border border-[#C8CBCB] flex items-center justify-center text-[#25282B] shrink-0">
              <Shield className="w-4 h-4 text-[#25282B]" />
            </div>
            <div>
              <div className="text-xs font-bold text-[#25282B]">0.0g Hinge Stress</div>
              <div className="text-[11px] text-[#5E6265] font-light">Patented desk cantilever</div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-4 sm:p-5 border border-[#C8CBCB]/70 shadow-2xs flex items-center space-x-3.5">
            <div className="w-9 h-9 rounded-xl bg-[#F6F4EF] border border-[#C8CBCB] flex items-center justify-center text-[#25282B] shrink-0">
              <Feather className="w-4 h-4 text-[#25282B]" />
            </div>
            <div>
              <div className="text-xs font-bold text-[#25282B]">From 580g Ultralight</div>
              <div className="text-[11px] text-[#5E6265] font-light">Aerospace CNC 6063 alloy</div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-4 sm:p-5 border border-[#C8CBCB]/70 shadow-2xs flex items-center space-x-3.5">
            <div className="w-9 h-9 rounded-xl bg-[#F6F4EF] border border-[#C8CBCB] flex items-center justify-center text-[#25282B] shrink-0">
              <Monitor className="w-4 h-4 text-[#25282B]" />
            </div>
            <div>
              <div className="text-xs font-bold text-[#25282B]">120Hz 2.8K Retina</div>
              <div className="text-[11px] text-[#5E6265] font-light">100% DCI-P3 calibrated</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
