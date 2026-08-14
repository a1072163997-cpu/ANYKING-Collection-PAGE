import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Code2, 
  Palette, 
  TrendingUp, 
  FileText, 
  Sparkles, 
  Plus, 
  Maximize2, 
  Check,
  Zap,
  Clock,
  LayoutGrid
} from 'lucide-react';
import { WORKSPACE_SCENARIOS } from '../data/products';
import { WorkspaceApp } from '../types';
import { sound } from '../utils/audio';

export const WorkspaceSimulator: React.FC = () => {
  const [selectedScenario, setSelectedScenario] = useState<WorkspaceApp>(WORKSPACE_SCENARIOS[0]);
  const [splitRatio, setSplitRatio] = useState<number>(50); // 50-50 screen balance

  return (
    <section id="simulator" className="py-20 sm:py-28 bg-[#F4F3EE] border-t border-[#E5E3DC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#EAE8E2] text-[#52525B] text-xs font-semibold tracking-wider uppercase mb-3 border border-[#DDDCD5]">
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            <span>Productivity Simulator</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1D1D1F] uppercase tracking-tight">
            THE POWER OF 1 + 1.
          </h2>

          <p className="mt-3 text-base text-[#6E6E73] leading-relaxed">
            Eliminate Alt-Tab tab switching forever. See how a dedicated second screen transforms your daily workflow.
          </p>
        </div>

        {/* Workflow Category Tabs */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex flex-wrap items-center bg-[#E8E6DF] p-1.5 rounded-2xl border border-[#DCDAD2] gap-1">
            {WORKSPACE_SCENARIOS.map((scenario) => {
              const isActive = selectedScenario.id === scenario.id;
              return (
                <button
                  key={scenario.id}
                  id={`scenario-btn-${scenario.id}`}
                  onClick={() => {
                    setSelectedScenario(scenario);
                    sound.playClick();
                  }}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                    isActive
                      ? 'bg-white text-[#1D1D1F] shadow-sm'
                      : 'text-[#71717A] hover:text-[#1D1D1F] hover:bg-[#F2F1ED]'
                  }`}
                >
                  {scenario.id === 'code' && <Code2 className="w-4 h-4" />}
                  {scenario.id === 'creative' && <Palette className="w-4 h-4" />}
                  {scenario.id === 'finance' && <TrendingUp className="w-4 h-4" />}
                  {scenario.id === 'doc' && <FileText className="w-4 h-4" />}
                  <span>{scenario.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Dual Screen Live Workspace Stage */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 lg:p-10 border border-[#E5E3DC] shadow-xl shadow-stone-200/50">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            
            {/* Screen 1: Laptop Main */}
            <div className="lg:col-span-6 bg-[#18181B] rounded-2xl p-5 border border-zinc-800 text-white flex flex-col justify-between shadow-md relative overflow-hidden">
              <div className="absolute top-0 right-0 px-3 py-1 bg-white/10 rounded-bl-xl text-[10px] font-mono text-zinc-300 font-semibold border-b border-l border-white/10">
                SCREEN 1 · LAPTOP
              </div>

              <div>
                <div className="flex items-center space-x-2 text-xs text-zinc-400 mb-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                  <span className="font-mono">Primary Focus Space</span>
                </div>
                <h3 className="font-display text-xl font-bold text-white">
                  {selectedScenario.laptopContent.title}
                </h3>
                <p className="text-xs text-zinc-400 mt-2 leading-relaxed">
                  {selectedScenario.laptopContent.description}
                </p>
              </div>

              {/* Tag Pills */}
              <div className="mt-6 pt-4 border-t border-zinc-800 flex flex-wrap gap-1.5">
                {selectedScenario.laptopContent.tags.map((tag, i) => (
                  <span key={i} className="px-2.5 py-1 rounded-md bg-zinc-800/80 text-zinc-300 text-[11px] font-mono">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Middle Indicator: + */}
            <div className="hidden lg:flex items-center justify-center -mx-3 z-10">
              <div className="w-8 h-8 rounded-full bg-[#1D1D1F] text-white flex items-center justify-center font-bold text-sm shadow-md border border-white/20">
                +
              </div>
            </div>

            {/* Screen 2: ANYKING Extended Screen (+1) */}
            <div className="lg:col-span-6 bg-gradient-to-br from-blue-950/80 via-slate-900 to-indigo-950/90 rounded-2xl p-5 border-2 border-blue-500/50 text-white flex flex-col justify-between shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 px-3 py-1 bg-blue-600 text-white rounded-bl-xl text-[10px] font-mono font-bold">
                SCREEN +1 · ANYKING
              </div>

              <div>
                <div className="flex items-center space-x-2 text-xs text-blue-300 mb-2">
                  <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
                  <span className="font-mono">Expansion Context Canvas</span>
                </div>
                <h3 className="font-display text-xl font-bold text-white">
                  {selectedScenario.anykingContent.title}
                </h3>
                <p className="text-xs text-blue-200/80 mt-2 leading-relaxed">
                  {selectedScenario.anykingContent.description}
                </p>
              </div>

              {/* Tag Pills */}
              <div className="mt-6 pt-4 border-t border-blue-500/20 flex flex-wrap gap-1.5">
                {selectedScenario.anykingContent.tags.map((tag, i) => (
                  <span key={i} className="px-2.5 py-1 rounded-md bg-blue-900/60 border border-blue-400/30 text-blue-200 text-[11px] font-mono">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* Productivity Metrics Banner */}
          <div className="mt-8 pt-6 border-t border-[#EFECE6] grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
            <div className="p-4 rounded-2xl bg-[#F8F7F4] border border-[#EBE9E2]">
              <div className="font-display text-2xl sm:text-3xl font-extrabold text-[#1D1D1F]">
                +42%
              </div>
              <div className="text-xs font-semibold text-[#71717A] mt-1">
                Faster Multi-Task Completion
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-[#F8F7F4] border border-[#EBE9E2]">
              <div className="font-display text-2xl sm:text-3xl font-extrabold text-emerald-600">
                0 Sec
              </div>
              <div className="text-xs font-semibold text-[#71717A] mt-1">
                Alt+Tab Window Switching Friction
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-[#F8F7F4] border border-[#EBE9E2]">
              <div className="font-display text-2xl sm:text-3xl font-extrabold text-blue-600">
                100%
              </div>
              <div className="text-xs font-semibold text-[#71717A] mt-1">
                Single-Cable Plug & Play Simplicity
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
