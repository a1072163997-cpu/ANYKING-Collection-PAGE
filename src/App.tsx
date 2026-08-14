import React, { useState } from 'react';
import { Header } from './components/Header';
import { HeroStage } from './components/HeroStage';
import { CategoryNavigation } from './components/CategoryNavigation';
import { ProductCollection } from './components/ProductCollection';
import { UseCases } from './components/UseCases';
import { Footer } from './components/Footer';
import { FitAdvisorModal } from './components/FitAdvisorModal';
import { ProductDetailModal } from './components/ProductDetailModal';
import { ProductModel } from './types';
import { sound } from './utils/audio';

export function App() {
  const [soundEnabled, setSoundEnabled] = useState<boolean>(true);
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [selectedProduct, setSelectedProduct] = useState<ProductModel | null>(null);
  const [isAdvisorOpen, setIsAdvisorOpen] = useState<boolean>(false);
  const [currentCategory, setCurrentCategory] = useState<'single' | 'dual' | 'triple'>('triple');

  const toggleSound = () => {
    const newState = !soundEnabled;
    setSoundEnabled(newState);
    sound.enabled = newState;
  };

  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    sound.playClick();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleCategorySelect = (category: string) => {
    sound.playClick();
    if (category === 'single' || category === 'dual' || category === 'triple') {
      setCurrentCategory(category);
    }
    // Scroll directly to the collection section smoothly
    const collectionElement = document.getElementById('collection');
    if (collectionElement) {
      collectionElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F6F4EF] text-[#25282B] font-sans antialiased selection:bg-[#25282B] selection:text-white">
      
      {/* 1. Navigation */}
      <Header
        soundEnabled={soundEnabled}
        onToggleSound={toggleSound}
        activeSection={activeSection}
        onNavigate={handleNavigate}
        onOpenAdvisor={() => setIsAdvisorOpen(true)}
      />

      {/* Main Content Flow */}
      <main className="flex-1 w-full flex flex-col">
        
        {/* 2. Interactive Hero (Reveal / Add / Extend Lightly) - Image 1 */}
        <HeroStage
          onExploreCollection={() => handleNavigate('collection')}
          onOpenAdvisor={() => setIsAdvisorOpen(true)}
        />

        {/* 3. Filter + Sort & Product Grid - Image 2 */}
        <ProductCollection
          currentCategory={currentCategory}
          onSelectCategory={setCurrentCategory}
          onSelectProduct={(product) => setSelectedProduct(product)}
          onOpenAdvisor={() => setIsAdvisorOpen(true)}
        />

        {/* 4. Single Screen Practical Use Cases */}
        <UseCases />

        {/* 5. Category Navigation (Single, Dual, Triple, BTS, Smart) - Uploaded Reference Image */}
        <CategoryNavigation
          currentCategory={currentCategory}
          onSelectCategory={handleCategorySelect}
        />

      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Modals */}
      <FitAdvisorModal
        isOpen={isAdvisorOpen}
        onClose={() => setIsAdvisorOpen(false)}
        onSelectProduct={(product) => {
          setIsAdvisorOpen(false);
          setSelectedProduct(product);
        }}
      />

      <ProductDetailModal
        product={selectedProduct}
        isOpen={!!selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />

    </div>
  );
}

export default App;
