import React, { useState, useEffect, useCallback } from 'react';
import { 
  IntroSlide, ProblemSlide, SolutionSlide, WhyNowSlide, 
  ProductDemoSlide, MarketSizeSlide, BusinessModelSlide, 
  CompetitionSlide, GTMSlide, RoadmapSlide, TractionSlide, 
  TeamSlide, VisionSlide 
} from './components/Slides';
import { Layout } from './components/Layout';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [internalStep, setInternalStep] = useState(0);
  
  const slides = [
    IntroSlide,
    ProblemSlide,
    SolutionSlide,
    WhyNowSlide,
    ProductDemoSlide,
    MarketSizeSlide,
    BusinessModelSlide,
    CompetitionSlide,
    GTMSlide,
    RoadmapSlide,
    TractionSlide,
    TeamSlide,
    VisionSlide
  ];

  const nextSlide = useCallback(() => {
    // Special handling for ProductDemoSlide (Index 4)
    // It has 5 steps: 0, 1, 2, 3, 4.
    if (currentSlide === 4) {
      if (internalStep < 4) {
        setInternalStep(prev => prev + 1);
        return;
      }
    }

    // Normal Navigation
    if (currentSlide < slides.length - 1) {
      setCurrentSlide((prev) => prev + 1);
      setInternalStep(0); // Reset for new slide
    }
  }, [currentSlide, internalStep, slides.length]);

  const prevSlide = useCallback(() => {
    // Special handling for ProductDemoSlide (Index 4)
    if (currentSlide === 4) {
      if (internalStep > 0) {
        setInternalStep(prev => prev - 1);
        return;
      }
    }

    // Normal Navigation
    if (currentSlide > 0) {
      setCurrentSlide((prev) => prev - 1);
      setInternalStep(0); // Reset when going back to previous slide
    }
  }, [currentSlide, internalStep]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') nextSlide(); // RTL: Left arrow goes "forward" in reading flow or visually next
      if (e.key === 'ArrowRight') prevSlide(); // RTL: Right arrow goes "back"
      if (e.key === ' ') nextSlide();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  const CurrentSlideComponent = slides[currentSlide];

  return (
    <div className="relative h-screen w-screen overflow-hidden bg-black flex flex-col">
      {/* Main Slide Content */}
      <Layout 
        currentSlide={currentSlide} 
        totalSlides={slides.length}
      >
        <div key={currentSlide} className="animate-in fade-in slide-in-from-bottom-4 duration-700 h-full w-full">
           <CurrentSlideComponent isActive={true} internalStep={internalStep} />
        </div>
      </Layout>

      {/* Navigation Controls (Floating) */}
      <div className="fixed bottom-8 left-8 flex gap-4 z-50">
        <button 
          onClick={prevSlide}
          disabled={currentSlide === 0 && internalStep === 0}
          className="p-4 rounded-none bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 text-white disabled:opacity-30 transition-all"
        >
          <ChevronRight size={20} />
        </button>
        <button 
          onClick={nextSlide}
          disabled={currentSlide === slides.length - 1}
          className="p-4 rounded-none bg-white text-black hover:bg-zinc-200 disabled:opacity-50 transition-all"
        >
          <ChevronLeft size={20} />
        </button>
      </div>
    </div>
  );
}