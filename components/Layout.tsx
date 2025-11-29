import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
  currentSlide: number;
  totalSlides: number;
}

export const Layout: React.FC<LayoutProps> = ({ children, currentSlide, totalSlides }) => {
  const progress = ((currentSlide + 1) / totalSlides) * 100;

  return (
    <div className="h-full w-full flex flex-col relative bg-black text-white">
      {/* Top Bar */}
      <header className="absolute top-0 left-0 right-0 p-8 flex justify-between items-center z-40">
        <div className="flex items-center gap-3">
          <div className="w-4 h-4 bg-white"></div>
          <span className="font-bold text-2xl tracking-tighter text-white">HOMA</span>
        </div>
        <div className="text-sm text-zinc-500 font-mono tracking-widest">
          SLIDE {currentSlide + 1} / {totalSlides}
        </div>
      </header>

      {/* Content Area */}
      <main className="flex-grow h-full w-full relative">
        {children}
      </main>

      {/* Progress Bar - Stark Line */}
      <div className="fixed bottom-0 left-0 h-[2px] bg-zinc-900 w-full z-50">
        <div 
          className="h-full bg-white transition-all duration-500 ease-linear"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
};