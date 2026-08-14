import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowRight, 
  RotateCcw,
  Sparkles,
  Maximize2,
  CheckCircle2,
  Calendar as CalendarIcon,
  FileText,
  MessageSquare,
  Hash,
  Compass,
  ShoppingBag,
  Link as LinkIcon,
  ShieldCheck,
  Mic,
  Video,
  Share2,
  PhoneOff,
  Smile,
  MoreVertical,
  Check,
  ChevronRight,
  TrendingUp,
  Code2,
  Layers,
  Gift,
  Plane,
  CreditCard,
  PackageCheck
} from 'lucide-react';
import { sound } from '../utils/audio';
import videoGridImage from '../assets/images/videocall_grid_faces_1786690969056.jpg';

interface HeroStageProps {
  onExploreCollection: () => void;
  onOpenAdvisor: () => void;
}

type WorkflowMode = 'FOCUS' | 'COMPARE' | 'CREATE';

export const HeroStage: React.FC<HeroStageProps> = ({
  onExploreCollection,
  onOpenAdvisor,
}) => {
  // Extension State (0 = fully folded behind laptop, 1 = fully extended)
  const [extensionProgress, setExtensionProgress] = useState<number>(0);
  const [activeWorkflow, setActiveWorkflow] = useState<WorkflowMode>('FOCUS');
  const [isAutoExtending, setIsAutoExtending] = useState<boolean>(true);
  const [hasInteracted, setHasInteracted] = useState<boolean>(false);
  const animationTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Auto-unfold sequence on page load
  useEffect(() => {
    // Stage 1: Brief pause (500ms) with portable screen closed behind laptop
    const timer1 = setTimeout(() => {
      sound.playExtend();
      // Animate smoothly to 100% unfold
      let current = 0;
      const stepInterval = setInterval(() => {
        current += 0.04;
        if (current >= 1) {
          current = 1;
          clearInterval(stepInterval);
          setIsAutoExtending(false);
          sound.playSnap();
        }
        setExtensionProgress(current);
      }, 30);

      animationTimerRef.current = stepInterval as unknown as NodeJS.Timeout;
    }, 400);

    return () => {
      clearTimeout(timer1);
      if (animationTimerRef.current) clearInterval(animationTimerRef.current);
    };
  }, []);

  // Handle manual replay of unfolding
  const handleReplayUnfold = () => {
    setHasInteracted(true);
    sound.playClick();
    setExtensionProgress(0);
    setIsAutoExtending(true);

    setTimeout(() => {
      sound.playExtend();
      let current = 0;
      const stepInterval = setInterval(() => {
        current += 0.05;
        if (current >= 1) {
          current = 1;
          clearInterval(stepInterval);
          setIsAutoExtending(false);
          sound.playSnap();
        }
        setExtensionProgress(current);
      }, 25);
    }, 200);
  };

  // Toggle fold / unfold
  const handleToggleFold = () => {
    setHasInteracted(true);
    if (extensionProgress >= 0.5) {
      sound.playFold();
      setExtensionProgress(0);
    } else {
      sound.playExtend();
      setExtensionProgress(1);
    }
  };

  // Wheel event listener for switching workflows (FOCUS -> COMPARE -> CREATE)
  const heroRef = useRef<HTMLElement>(null);
  const lastWheelTime = useRef<number>(0);

  const workflows: WorkflowMode[] = ['FOCUS', 'COMPARE', 'CREATE'];

  const handleWheel = (e: React.WheelEvent<HTMLElement>) => {
    // Only intercept if we have significant delta and not too frequent
    const now = Date.now();
    if (now - lastWheelTime.current < 450) {
      return;
    }

    if (Math.abs(e.deltaY) > 25) {
      const currentIndex = workflows.indexOf(activeWorkflow);
      if (e.deltaY > 0) {
        // Scrolling down -> Next workflow
        if (currentIndex < workflows.length - 1) {
          lastWheelTime.current = now;
          const nextWorkflow = workflows[currentIndex + 1];
          setActiveWorkflow(nextWorkflow);
          sound.playClick();
        }
      } else {
        // Scrolling up -> Previous workflow
        if (currentIndex > 0) {
          lastWheelTime.current = now;
          const prevWorkflow = workflows[currentIndex - 1];
          setActiveWorkflow(prevWorkflow);
          sound.playClick();
        }
      }
    }
  };

  return (
    <section 
      id="hero" 
      ref={heroRef}
      onWheel={handleWheel}
      className="w-full bg-[#F6F4EF] text-[#1D1F22] pt-5 pb-8 relative overflow-hidden select-none"
    >
      
      {/* ------------------------------------------------------------- */}
      {/* BREADCRUMB NAVIGATION (Exact match to screenshot)             */}
      {/* ------------------------------------------------------------- */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 mb-6 sm:mb-8">
        <div className="flex items-center space-x-2 text-xs sm:text-sm text-[#5E6265]">
          <button 
            onClick={() => onExploreCollection()}
            className="hover:text-[#1D1F22] transition-colors cursor-pointer"
          >
            Home
          </button>
          <span className="text-[#C8CBCB]">/</span>
          <button 
            onClick={() => onExploreCollection()}
            className="hover:text-[#1D1F22] transition-colors cursor-pointer"
          >
            Collections
          </button>
          <span className="text-[#C8CBCB]">/</span>
          <span className="font-semibold text-[#1D1F22]">
            Single Screen Monitors
          </span>
        </div>
      </div>

      {/* ------------------------------------------------------------- */}
      {/* HERO MAIN STAGE: LEFT TYPOGRAPHY & RIGHT WORKSPACE ISOMETRIC  */}
      {/* ------------------------------------------------------------- */}
      <div className="max-w-[1520px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
          
          {/* ========================================================= */}
          {/* LEFT COLUMN: HERO COPY, CTA, SUBTITLE                     */}
          {/* ========================================================= */}
          <div className="lg:col-span-4 xl:col-span-3 flex flex-col justify-between pt-2 lg:pt-4 z-20">
            
            <div>
              {/* Golden Category Label */}
              <div className="text-[13px] sm:text-sm font-bold font-mono tracking-[0.16em] uppercase text-[#B6844D] mb-2">
                单屏
              </div>

              {/* Huge Bold Impact Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-[56px] xl:text-[62px] font-extrabold tracking-tight text-[#1D1F22] font-display leading-[1.04] mb-4">
                MORE ROOM<br />
                TO WORK.
              </h1>

              {/* Subtitle */}
              <p className="text-base sm:text-lg text-[#5E6265] font-normal leading-snug">
                One extra screen.<br />
                A whole lot more room.
              </p>
            </div>

          </div>

          {/* ========================================================= */}
          {/* RIGHT COLUMN: ENLARGED LAPTOP + EXTENDED MONITOR WORKSPACE */}
          {/* ========================================================= */}
          <div className="lg:col-span-8 xl:col-span-9 relative flex flex-col justify-center min-h-[520px] sm:min-h-[600px] lg:min-h-[660px]">
            
            {/* Ambient Warm Daylight Desk Lighting & Plant Bokeh */}
            <div className="absolute top-0 right-0 w-[560px] h-[440px] bg-gradient-to-bl from-amber-200/20 via-emerald-100/10 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

            {/* ------------------------------------------------------- */}
            {/* REALISTIC ENLARGED LAPTOP + EXTENDING SINGLE SCREEN     */}
            {/* ------------------------------------------------------- */}
            <div className="relative w-full flex items-center justify-center pt-2 sm:pt-4">
              
              {/* Perspective Workstation Container */}
              <div 
                className="relative flex items-center justify-center transition-transform duration-500 ease-out"
                style={{
                  perspective: '1200px',
                  transform: 'scale(1)',
                }}
              >
                
                {/* --------------------------------------------------- */}
                {/* 1. CENTRAL LAPTOP (Space Gray Chassis + Video Call) */}
                {/* --------------------------------------------------- */}
                <div 
                  className="relative z-30 flex flex-col items-center shrink-0 w-[320px] sm:w-[460px] md:w-[520px] lg:w-[570px] xl:w-[620px] transition-transform duration-700"
                  style={{
                    transform: `rotateY(-6deg) rotateX(4deg) translateZ(10px)`,
                    transformOrigin: 'right center',
                  }}
                >
                  
                  {/* Laptop Screen Bezel */}
                  <div className="w-full aspect-[16/10] bg-[#1A1C1E] rounded-t-xl p-2.5 sm:p-3.5 border-[3px] border-[#383B40] shadow-2xl relative overflow-hidden flex flex-col justify-between">
                    
                    {/* Top Webcam Notch */}
                    <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-10 h-2 bg-[#121315] rounded-full flex items-center justify-center space-x-1 z-30">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-700" />
                      <div className="w-1 h-1 rounded-full bg-emerald-400" />
                    </div>

                    {/* SCREEN CONTENT: DYNAMIC ACCORDING TO WORKFLOW MODE WITH ANIMATIONS */}
                    <div className="relative w-full h-full rounded-lg overflow-hidden bg-[#151719] flex flex-col justify-between">
                      <AnimatePresence mode="wait">
                        {/* FOCUS MODE: 4-PERSON VIDEO CONFERENCE CALL */}
                        {activeWorkflow === 'FOCUS' && (
                          <motion.div 
                            key="laptop-focus"
                            initial={{ opacity: 0, scale: 0.98 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.98 }}
                            transition={{ duration: 0.28, ease: 'easeOut' }}
                            className="relative w-full h-full flex flex-col justify-between bg-[#111214]"
                          >
                            {/* 4-Person Video Grid */}
                            <div className="relative flex-1 w-full h-full overflow-hidden">
                              <img
                                src={videoGridImage}
                                alt="Video Conference Meeting"
                                className="w-full h-full object-cover filter contrast-[1.03] brightness-[0.95]"
                              />

                              {/* Participant Name Badges */}
                              <div className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded bg-black/65 backdrop-blur-xs text-[9px] sm:text-[10px] font-medium text-white flex items-center space-x-1">
                                <span>Marcus Vance</span>
                              </div>
                              <div className="absolute top-2.5 right-2.5 px-2 py-0.5 rounded bg-black/65 backdrop-blur-xs text-[9px] sm:text-[10px] font-medium text-white flex items-center space-x-1">
                                <span>Elena Rostova</span>
                              </div>
                              <div className="absolute bottom-11 left-2.5 px-2 py-0.5 rounded bg-black/65 backdrop-blur-xs text-[9px] sm:text-[10px] font-medium text-white flex items-center space-x-1">
                                <span>Maya Lin (You)</span>
                              </div>
                              <div className="absolute bottom-11 right-2.5 px-2 py-0.5 rounded bg-black/65 backdrop-blur-xs text-[9px] sm:text-[10px] font-medium text-white flex items-center space-x-1">
                                <span>David Okafor</span>
                              </div>
                            </div>

                            {/* Video Call Bottom Control Bar */}
                            <div className="h-8 sm:h-9 bg-black/85 backdrop-blur-md border-t border-white/10 flex items-center justify-center space-x-2.5 sm:space-x-4 px-3">
                              <div className="w-5 sm:w-6 h-5 sm:h-6 rounded-full bg-white/15 flex items-center justify-center text-white">
                                <Mic className="w-3 sm:w-3.5 h-3 sm:h-3.5" />
                              </div>
                              <div className="w-5 sm:w-6 h-5 sm:h-6 rounded-full bg-white/15 flex items-center justify-center text-white">
                                <Video className="w-3 sm:w-3.5 h-3 sm:h-3.5" />
                              </div>
                              <div className="w-5 sm:w-6 h-5 sm:h-6 rounded-full bg-white/15 flex items-center justify-center text-white">
                                <Share2 className="w-3 sm:w-3.5 h-3 sm:h-3.5" />
                              </div>
                              <div className="w-5 sm:w-6 h-5 sm:h-6 rounded-full bg-white/15 flex items-center justify-center text-white">
                                <Smile className="w-3 sm:w-3.5 h-3 sm:h-3.5" />
                              </div>
                              <div className="w-5 sm:w-6 h-5 sm:h-6 rounded-full bg-[#EA4335] flex items-center justify-center text-white">
                                <PhoneOff className="w-3 sm:w-3.5 h-3 sm:h-3.5" />
                              </div>
                            </div>
                          </motion.div>
                        )}

                        {/* COMPARE MODE: QUARTERLY FINANCIAL FORECAST */}
                        {activeWorkflow === 'COMPARE' && (
                          <motion.div 
                            key="laptop-compare"
                            initial={{ opacity: 0, scale: 0.98 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.98 }}
                            transition={{ duration: 0.28, ease: 'easeOut' }}
                            className="w-full h-full bg-[#1E2024] p-3 text-white flex flex-col justify-between"
                          >
                            <div className="flex items-center justify-between border-b border-white/10 pb-1.5 text-[10px] font-mono text-zinc-400">
                              <span className="text-emerald-400 font-bold">Q3_Financial_Model_v4.xlsx</span>
                              <span>Auto-Saved</span>
                            </div>
                            <div className="grid grid-cols-4 gap-2 text-[9px] font-mono my-auto">
                              <div className="bg-black/30 p-2 rounded border border-white/5">
                                <div className="text-zinc-400">ARR Growth</div>
                                <div className="text-sm font-bold text-emerald-400">+142%</div>
                              </div>
                              <div className="bg-black/30 p-2 rounded border border-white/5">
                                <div className="text-zinc-400">Gross Margin</div>
                                <div className="text-sm font-bold text-white">74.8%</div>
                              </div>
                              <div className="bg-black/30 p-2 rounded border border-white/5">
                                <div className="text-zinc-400">Net Retention</div>
                                <div className="text-sm font-bold text-white">128%</div>
                              </div>
                              <div className="bg-black/30 p-2 rounded border border-white/5">
                                <div className="text-zinc-400">Runway</div>
                                <div className="text-sm font-bold text-amber-400">34 Mo</div>
                              </div>
                            </div>
                            <div className="h-14 bg-emerald-950/40 rounded border border-emerald-500/20 p-2 flex items-end justify-between">
                              {[40, 55, 65, 80, 95, 120, 140, 165].map((val, idx) => (
                                <div key={idx} className="w-4 bg-emerald-400 rounded-t-xs" style={{ height: `${(val / 165) * 100}%` }} />
                              ))}
                            </div>
                          </motion.div>
                        )}

                        {/* CREATE MODE: 4K CODE ARCHITECTURE */}
                        {activeWorkflow === 'CREATE' && (
                          <motion.div 
                            key="laptop-create"
                            initial={{ opacity: 0, scale: 0.98 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.98 }}
                            transition={{ duration: 0.28, ease: 'easeOut' }}
                            className="w-full h-full bg-[#18191B] p-3 text-white flex flex-col justify-between"
                          >
                            <div className="flex items-center justify-between border-b border-white/10 pb-1.5 text-[10px] font-mono text-zinc-400">
                              <span className="text-amber-400 font-bold">AppArchitecture.tsx</span>
                              <span className="text-emerald-400">● Compiled</span>
                            </div>
                            <div className="font-mono text-[9px] text-zinc-300 space-y-1 my-auto">
                              <div className="text-purple-400">export const WorkspaceLayout = () =&gt; &#123;</div>
                              <div className="pl-3 text-blue-300">const &#123; dualScreen, frameRate &#125; = useHardware();</div>
                              <div className="pl-3 text-amber-300">return &lt;RetinaCanvas resolution="2.8K" refresh=&#123;120&#125; /&gt;;</div>
                              <div className="text-purple-400">&#125;;</div>
                            </div>
                            <div className="flex space-x-2 pt-1 border-t border-white/10 text-[9px] text-zinc-400">
                              <span>Ln 42, Col 18</span>
                              <span>UTF-8</span>
                              <span>TypeScript React</span>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    {/* Bottom Laptop Chassis Rim */}
                    <div className="h-3 bg-[#202226] border-t border-white/10 flex items-center justify-center mt-1">
                      <span className="text-[8px] font-extrabold tracking-widest text-[#8E9296] uppercase font-display">
                        ANYKING
                      </span>
                    </div>

                  </div>

                  {/* Laptop Base & Keyboard Lower Half */}
                  <div 
                    className="w-[110%] h-[40px] sm:h-[50px] bg-[#25282B] rounded-b-xl border-t border-[#4B4F54] border-b-2 border-b-[#141618] shadow-2xl flex flex-col justify-between px-4 py-1.5"
                    style={{
                      transform: 'perspective(600px) rotateX(24deg)',
                      transformOrigin: 'top center',
                    }}
                  >
                    {/* Keyboard Lines */}
                    <div className="w-full flex flex-col space-y-0.5 opacity-80">
                      <div className="flex justify-between w-full h-[2.5px] gap-0.5">
                        {Array.from({ length: 14 }).map((_, i) => (
                          <div key={i} className="flex-1 bg-[#16181A] rounded-[0.5px] border border-white/5" />
                        ))}
                      </div>
                      <div className="flex justify-between w-full h-[3.5px] gap-0.5">
                        {Array.from({ length: 14 }).map((_, i) => (
                          <div key={i} className="flex-1 bg-[#16181A] rounded-[0.5px] border border-white/5" />
                        ))}
                      </div>
                      <div className="flex justify-center w-full h-[4.5px] gap-0.5">
                        <div className="w-8 bg-[#16181A] rounded-[0.5px]" />
                        <div className="w-20 bg-[#16181A] rounded-[0.5px] border border-white/10" />
                        <div className="w-8 bg-[#16181A] rounded-[0.5px]" />
                      </div>
                    </div>
                    {/* Trackpad */}
                    <div className="w-20 h-3 mx-auto bg-[#1A1C1E] rounded-[1px] border border-white/10" />
                  </div>

                </div>

                {/* --------------------------------------------------- */}
                {/* 2. PATENTED CNC ALUMINUM CANTILEVER HINGE           */}
                {/* --------------------------------------------------- */}
                <div 
                  className="relative z-20 transition-all duration-700 ease-out"
                  style={{
                    width: `${Math.max(10, extensionProgress * 26)}px`,
                    opacity: extensionProgress > 0.05 ? 1 : 0,
                  }}
                >
                  {/* Metal Dual Hinge Rods & Desk Kickstand */}
                  <div className="h-48 sm:h-64 w-3.5 sm:w-4.5 bg-gradient-to-r from-[#5E6265] via-[#8E9296] to-[#484C4F] rounded-md shadow-lg border border-[#383B40] flex flex-col justify-between py-2">
                    <div className="w-1.5 h-1.5 bg-[#C8CBCB] rounded-full mx-auto shadow-inner" />
                    <div className="w-1 h-10 bg-[#25282B] rounded-full mx-auto" />
                    <div className="w-1.5 h-1.5 bg-[#C8CBCB] rounded-full mx-auto shadow-inner" />
                  </div>

                  {/* Desk Kickstand Leg Angled to Table Surface */}
                  <div 
                    className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-2 h-14 bg-gradient-to-b from-[#7A7E82] to-[#484C4F] rounded-full shadow-md border border-[#383B40]"
                    style={{
                      transform: 'rotate(20deg)',
                      transformOrigin: 'top center',
                    }}
                  >
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3.5 h-1.5 bg-[#25282B] rounded-full" />
                  </div>
                </div>

                {/* --------------------------------------------------- */}
                {/* 3. RIGHT PORTABLE SCREEN: ANYKING SINGLE SCREEN     */}
                {/* Smooth mechanical self-unfolding kinematics         */}
                {/* Adjusted angle: Tilted inward naturally facing user */}
                {/* --------------------------------------------------- */}
                <div 
                  className="relative z-20 shrink-0 w-[300px] sm:w-[440px] md:w-[490px] lg:w-[540px] xl:w-[590px] transition-all duration-700 ease-out"
                  style={{
                    transform: `translateX(${(1 - extensionProgress) * -105}%) rotateY(${-8 - (1 - extensionProgress) * 38}deg) rotateX(4deg) translateY(0px) scale(${0.96 + extensionProgress * 0.04})`,
                    opacity: Math.max(0.15, extensionProgress),
                    transformOrigin: 'left center',
                    filter: extensionProgress < 0.3 ? 'blur(1px)' : 'none',
                  }}
                >
                  
                  {/* Portable Screen Aluminum Bezel & Screen Frame */}
                  <div className="w-full aspect-[16/10] bg-[#181A1D] rounded-t-xl rounded-b-lg p-2.5 sm:p-3.5 border-[3px] border-[#383B40] shadow-2xl relative overflow-hidden flex flex-col justify-between">
                    
                    {/* Top Screen Status Rim */}
                    <div className="flex items-center justify-between px-1.5 pb-1 border-b border-white/10 text-[9.5px] font-mono text-zinc-400">
                      <div className="flex items-center space-x-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
                        <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
                        <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
                      </div>
                      <span className="text-zinc-300 font-semibold">ANYKING 15.6" • 2.8K 120Hz</span>
                      <span className="text-emerald-400 font-bold">1-Cable PD</span>
                    </div>

                    {/* SCREEN CONTENT: ACCORDING TO WORKFLOW WITH ANIMATIONS */}
                    <div className="relative w-full h-full rounded-lg overflow-hidden bg-[#1E2023] my-1 p-2 flex gap-2">
                      <AnimatePresence mode="wait">
                        {/* FOCUS MODE (Slack on left, Calendar & Notes on right) */}
                        {activeWorkflow === 'FOCUS' && (
                          <motion.div 
                            key="screen-focus"
                            initial={{ opacity: 0, scale: 0.98 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.98 }}
                            transition={{ duration: 0.28, ease: 'easeOut' }}
                            className="w-full h-full grid grid-cols-12 gap-2 text-white"
                          >
                            {/* Left Panel: Slack Style Team Channels */}
                            <div className="col-span-5 bg-[#17191C] rounded-lg p-2.5 flex flex-col justify-between border border-white/5 text-[9.5px]">
                              <div>
                                {/* Header */}
                                <div className="font-bold text-white flex items-center space-x-1 pb-1.5 border-b border-white/10">
                                  <Hash className="w-3.5 h-3.5 text-[#B6844D]" />
                                  <span className="truncate">project-alpha</span>
                                </div>

                                {/* Navigation Items */}
                                <div className="space-y-1.5 mt-2 text-zinc-400">
                                  <div className="hover:text-white cursor-pointer">Threads</div>
                                  <div className="hover:text-white cursor-pointer">Mentions & reactions</div>
                                  <div className="hover:text-white cursor-pointer">Drafts</div>
                                </div>

                                {/* Channels */}
                                <div className="mt-2.5 pt-1.5 border-t border-white/10">
                                  <div className="text-[8.5px] font-mono uppercase text-zinc-500 font-semibold mb-1">Channels</div>
                                  <div className="space-y-1">
                                    <div className="px-2 py-0.5 rounded bg-white/15 text-white font-medium flex items-center space-x-1">
                                      <span>#</span>
                                      <span>project-alpha</span>
                                    </div>
                                    <div className="px-2 py-0.5 text-zinc-400 hover:text-white"># design</div>
                                    <div className="px-2 py-0.5 text-zinc-400 hover:text-white"># development</div>
                                    <div className="px-2 py-0.5 text-zinc-400 hover:text-white"># marketing</div>
                                  </div>
                                </div>
                              </div>

                              {/* Direct Messages */}
                              <div className="pt-1.5 border-t border-white/10">
                                <div className="text-[8.5px] font-mono uppercase text-zinc-500 font-semibold mb-1">Direct messages</div>
                                <div className="space-y-1 text-[9px]">
                                  <div className="flex items-center space-x-1.5 text-zinc-300">
                                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                                    <span>Liam</span>
                                  </div>
                                  <div className="flex items-center space-x-1.5 text-zinc-300">
                                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                                    <span>Emma</span>
                                  </div>
                                  <div className="flex items-center space-x-1.5 text-zinc-300">
                                    <span className="w-1.5 h-1.5 rounded-full bg-zinc-500" />
                                    <span>Noah</span>
                                  </div>
                                </div>
                              </div>
                            </div>

                            {/* Right Panel: Calendar Card on top, Notes Checklist on bottom */}
                            <div className="col-span-7 flex flex-col gap-2">
                              {/* Top Card: Calendar */}
                              <div className="flex-1 bg-[#23262A] rounded-lg p-2.5 border border-white/10 flex flex-col justify-between">
                                <div className="flex items-center justify-between border-b border-white/10 pb-1">
                                  <span className="text-[10px] font-bold text-white">Calendar</span>
                                  <span className="text-[8.5px] text-zinc-400">May 7, Wednesday</span>
                                </div>
                                <div className="space-y-1.5 my-auto text-[9px]">
                                  <div className="flex items-center space-x-2 bg-blue-500/20 px-2 py-1 rounded border-l-2 border-blue-400 text-zinc-200">
                                    <span className="font-mono text-[8.5px] text-blue-300">10:00</span>
                                    <span className="font-medium text-white truncate">Project Review</span>
                                  </div>
                                  <div className="flex items-center space-x-2 bg-purple-500/20 px-2 py-1 rounded border-l-2 border-purple-400 text-zinc-200">
                                    <span className="font-mono text-[8.5px] text-purple-300">11:30</span>
                                    <span className="font-medium text-white truncate">Design Sync</span>
                                  </div>
                                  <div className="flex items-center space-x-2 bg-emerald-500/20 px-2 py-1 rounded border-l-2 border-emerald-400 text-zinc-200">
                                    <span className="font-mono text-[8.5px] text-emerald-300">14:00</span>
                                    <span className="font-medium text-white truncate">Client Meeting</span>
                                  </div>
                                  <div className="flex items-center space-x-2 bg-amber-500/20 px-2 py-1 rounded border-l-2 border-amber-400 text-zinc-200">
                                    <span className="font-mono text-[8.5px] text-amber-300">15:30</span>
                                    <span className="font-medium text-white truncate">Focus Time</span>
                                  </div>
                                </div>
                              </div>

                              {/* Bottom Card: Notes & Tasks */}
                              <div className="flex-1 bg-[#23262A] rounded-lg p-2.5 border border-white/10 flex flex-col justify-between">
                                <div className="flex items-center justify-between border-b border-white/10 pb-1">
                                  <span className="text-[10px] font-bold text-white">Notes</span>
                                  <span className="text-[8.5px] text-[#B6844D] font-mono">Project Alpha</span>
                                </div>
                                <div className="space-y-1.5 my-auto text-[9px] text-zinc-300">
                                  <div className="flex items-center space-x-2">
                                    <Check className="w-3 h-3 text-emerald-400 shrink-0" />
                                    <span className="line-through text-zinc-500">User research</span>
                                  </div>
                                  <div className="flex items-center space-x-2">
                                    <Check className="w-3 h-3 text-emerald-400 shrink-0" />
                                    <span className="line-through text-zinc-500">Wireframes</span>
                                  </div>
                                  <div className="flex items-center space-x-2">
                                    <span className="w-3 h-3 rounded-full border border-amber-400 flex items-center justify-center shrink-0">
                                      <span className="w-1.5 h-1.5 bg-amber-400 rounded-full" />
                                    </span>
                                    <span className="text-white font-medium">Design review</span>
                                  </div>
                                  <div className="flex items-center space-x-2">
                                    <span className="w-3 h-3 rounded-full border border-zinc-600 shrink-0" />
                                    <span className="text-zinc-400">Prototype testing</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </motion.div>
                        )}

                        {/* COMPARE MODE: SEC 10-K & RESEARCH DOCUMENT */}
                        {activeWorkflow === 'COMPARE' && (
                          <motion.div 
                            key="screen-compare"
                            initial={{ opacity: 0, scale: 0.98 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.98 }}
                            transition={{ duration: 0.28, ease: 'easeOut' }}
                            className="w-full h-full bg-[#191B1E] rounded-lg p-3 text-white flex flex-col justify-between"
                          >
                            <div className="flex items-center justify-between border-b border-white/10 pb-1 text-[10px] font-mono text-zinc-400">
                              <span className="text-blue-400 font-bold">SEC_Form_10K_Report.pdf</span>
                              <span>Page 14 of 98</span>
                            </div>
                            <div className="text-[8.5px] text-zinc-300 space-y-1.5 my-auto leading-relaxed">
                              <p className="font-medium text-white">Segment Revenue Breakdown:</p>
                              <p className="text-zinc-400">Hardware division revenue increased by 38.4% YoY, driven by enterprise mobile workstation adoption.</p>
                              <div className="bg-black/30 p-1.5 rounded border border-white/5 text-[8px] font-mono">
                                <div>Enterprise: $84.2M (+41%)</div>
                                <div>Consumer Pro: $52.8M (+34%)</div>
                              </div>
                            </div>
                            <div className="text-[8px] font-mono text-emerald-400 pt-1 border-t border-white/10">
                              Reference verified with live forecast
                            </div>
                          </motion.div>
                        )}

                        {/* CREATE MODE: DESIGN SYSTEM COLOR TOKENS & INSPECTION */}
                        {activeWorkflow === 'CREATE' && (
                          <motion.div 
                            key="screen-create"
                            initial={{ opacity: 0, scale: 0.98 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.98 }}
                            transition={{ duration: 0.28, ease: 'easeOut' }}
                            className="w-full h-full bg-[#191B1E] rounded-lg p-3 text-white flex flex-col justify-between"
                          >
                            <div className="flex items-center justify-between border-b border-white/10 pb-1 text-[10px] font-mono text-zinc-400">
                              <span className="text-purple-400 font-bold">DesignSystem_Tokens.json</span>
                              <span>Figma Sync</span>
                            </div>
                            <div className="grid grid-cols-3 gap-1.5 my-auto text-[8.5px]">
                              <div className="p-1.5 rounded bg-[#B6844D] text-black font-bold">#B6844D Warm Gold</div>
                              <div className="p-1.5 rounded bg-[#1D1F22] text-white border border-white/20">#1D1F22 Graphite</div>
                              <div className="p-1.5 rounded bg-[#F6F4EF] text-black font-bold">#F6F4EF Warm White</div>
                            </div>
                            <div className="text-[8px] font-mono text-zinc-400 pt-1 border-t border-white/10">
                              Live DPI Scaling 200% • 100% DCI-P3
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    {/* Bottom Screen Label */}
                    <div className="h-2.5 bg-[#202226] border-t border-white/10 flex items-center justify-center">
                      <span className="text-[7.5px] font-extrabold tracking-widest text-[#8E9296] uppercase font-display">
                        ANYKING
                      </span>
                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>
      </div>

    </section>
  );
};
