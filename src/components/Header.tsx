import React, { useState } from 'react';
import { 
  Search, 
  User, 
  ShoppingBag, 
  ChevronDown, 
  Volume2, 
  VolumeX,
  Menu,
  X
} from 'lucide-react';
import { sound } from '../utils/audio';

interface NavigationProps {
  soundEnabled: boolean;
  onToggleSound: () => void;
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  onOpenAdvisor: () => void;
}

export const Header: React.FC<NavigationProps> = ({
  soundEnabled,
  onToggleSound,
  activeSection,
  onNavigate,
  onOpenAdvisor,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [collectionsOpen, setCollectionsOpen] = useState<boolean>(false);
  const [useCasesOpen, setUseCasesOpen] = useState<boolean>(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-[#F6F4EF]/95 backdrop-blur-md border-b border-[#E7E4DC] transition-all">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 h-16 sm:h-18 flex items-center justify-between">
        
        {/* Left: ANYKING Brand Wordmark (Exact match to screenshot) */}
        <div className="flex items-center space-x-8">
          <button 
            id="brand-logo-btn"
            onClick={() => onNavigate('hero')}
            className="text-left focus:outline-none cursor-pointer group"
          >
            <span className="font-display font-extrabold tracking-[0.14em] text-lg sm:text-[22px] text-[#1D1F22] uppercase">
              ANYKING
            </span>
          </button>
        </div>

        {/* Center: Clean Minimalist Nav Links (Exact match to screenshot) */}
        <nav className="hidden md:flex items-center space-x-7 lg:space-x-9 text-sm font-medium text-[#414448]">
          
          {/* Collections Dropdown */}
          <div className="relative">
            <button 
              onClick={() => onNavigate('collection')}
              className="flex items-center space-x-1.5 hover:text-[#1D1F22] py-2 transition-colors cursor-pointer"
            >
              <span>Collections</span>
              <ChevronDown className="w-3.5 h-3.5 opacity-65 group-hover:opacity-100 transition-opacity" />
            </button>
          </div>

          {/* Use Cases Dropdown */}
          <div className="relative">
            <button 
              onClick={() => onNavigate('use-cases')}
              className="flex items-center space-x-1.5 hover:text-[#1D1F22] py-2 transition-colors cursor-pointer"
            >
              <span>Use Cases</span>
              <ChevronDown className="w-3.5 h-3.5 opacity-65 group-hover:opacity-100 transition-opacity" />
            </button>
          </div>

          <button 
            onClick={() => onNavigate('hero')}
            className="hover:text-[#1D1F22] transition-colors cursor-pointer"
          >
            Overview
          </button>

          <button 
            onClick={onOpenAdvisor}
            className="hover:text-[#1D1F22] transition-colors cursor-pointer"
          >
            Model Matcher
          </button>
        </nav>

        {/* Right: Search, User, Cart (with badge 0), Audio */}
        <div className="flex items-center space-x-4 sm:space-x-6 text-[#2D3034]">
          
          {/* Search Icon */}
          <button 
            onClick={onOpenAdvisor}
            className="p-1.5 hover:text-[#1D1F22] hover:bg-black/5 rounded-full transition-colors cursor-pointer"
            title="Search models & setups"
          >
            <Search className="w-4 h-4 sm:w-4.5 sm:h-4.5 stroke-[1.8]" />
          </button>

          {/* User Account Icon */}
          <button 
            onClick={onOpenAdvisor}
            className="p-1.5 hover:text-[#1D1F22] hover:bg-black/5 rounded-full transition-colors cursor-pointer"
            title="Account"
          >
            <User className="w-4 h-4 sm:w-4.5 sm:h-4.5 stroke-[1.8]" />
          </button>

          {/* Shopping Bag Icon with 0 count badge */}
          <button 
            onClick={() => onNavigate('collection')}
            className="relative p-1.5 hover:text-[#1D1F22] hover:bg-black/5 rounded-full transition-colors cursor-pointer"
            title="Shopping Cart"
          >
            <ShoppingBag className="w-4 h-4 sm:w-4.5 sm:h-4.5 stroke-[1.8]" />
            <span className="absolute top-1.5 right-1.5 translate-x-1/2 -translate-y-1/2 text-[9px] font-bold text-[#1D1F22]">
              0
            </span>
          </button>

          {/* Subtle Sound FX Toggle */}
          <button
            onClick={() => {
              onToggleSound();
              if (!soundEnabled) sound.playSnap();
            }}
            title={soundEnabled ? 'Mechanical haptics sound enabled' : 'Sound muted'}
            className="p-1.5 text-zinc-400 hover:text-zinc-700 transition-colors cursor-pointer"
          >
            {soundEnabled ? (
              <Volume2 className="w-3.5 h-3.5" />
            ) : (
              <VolumeX className="w-3.5 h-3.5 text-zinc-400" />
            )}
          </button>

          {/* Mobile Menu Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-1.5 text-zinc-700 hover:text-black cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

        </div>

      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[#E7E4DC] bg-[#F6F4EF] px-6 py-4 space-y-3">
          <button 
            onClick={() => { onNavigate('collection'); setMobileMenuOpen(false); }}
            className="block w-full text-left py-2 font-medium text-[#1D1F22]"
          >
            Collections
          </button>
          <button 
            onClick={() => { onNavigate('use-cases'); setMobileMenuOpen(false); }}
            className="block w-full text-left py-2 font-medium text-[#1D1F22]"
          >
            Use Cases
          </button>
          <button 
            onClick={() => { onNavigate('hero'); setMobileMenuOpen(false); }}
            className="block w-full text-left py-2 font-medium text-[#1D1F22]"
          >
            Overview
          </button>
          <button 
            onClick={() => { onOpenAdvisor(); setMobileMenuOpen(false); }}
            className="block w-full text-left py-2 font-medium text-[#1D1F22]"
          >
            Model Matcher
          </button>
        </div>
      )}
    </header>
  );
};
