
import React, { useState, useEffect, useRef } from 'react';
import { SlideProps } from '../types';
import {
  Smartphone, Armchair, Move3d,
  Layers, DollarSign, Award, Store, Users,
  TrendingUp, CheckCircle2, Zap, Heart, HelpCircle,
  MousePointer2, Image as ImageIcon, Box, Sparkles,
  ChevronDown, Search, X, Upload, Info, Percent, Star,
  GripVertical, Palette, LayoutTemplate, ShoppingBag, Pin
} from 'lucide-react';

// --- HELPER: Hand Drawn SVG Components (Blueprint Style) ---
const MrBlue = ({ pose, className }: { pose: 'push' | 'think' | 'struggle' | 'confused', className?: string }) => {
  const strokeColor = "#ffffff"; // White chalk/blueprint style
  
  if (pose === 'push') {
    return (
      <svg viewBox="0 0 100 150" className={`w-32 h-48 overflow-visible ${className}`}>
        {/* Body Leaning Forward */}
        <path d="M30,120 Q10,80 40,50 T70,30" fill="none" stroke={strokeColor} strokeWidth="2" className="ink-stroke" />
        {/* Head */}
        <circle cx="75" cy="25" r="10" fill="black" stroke={strokeColor} strokeWidth="2" className="wobbly" />
        {/* Arms Pushing */}
        <path d="M40,50 L90,50" fill="none" stroke={strokeColor} strokeWidth="2" className="ink-stroke" style={{animationDelay: '0.5s'}} />
        {/* Legs */}
        <path d="M30,120 L10,140 M30,120 L50,140" fill="none" stroke={strokeColor} strokeWidth="2" className="ink-stroke" style={{animationDelay: '0.2s'}} />
      </svg>
    );
  }
  if (pose === 'think') {
    return (
      <svg viewBox="0 0 100 150" className={`w-32 h-48 overflow-visible ${className}`}>
        {/* Body Standing */}
        <path d="M30,130 Q20,80 50,60 Q80,80 70,130" fill="black" stroke={strokeColor} strokeWidth="2" className="wobbly" />
        {/* Head */}
        <circle cx="50" cy="40" r="12" fill="black" stroke={strokeColor} strokeWidth="2" className="wobbly" />
        {/* Arm on Chin */}
        <path d="M50,80 Q70,90 60,50" fill="none" stroke={strokeColor} strokeWidth="2" />
        {/* Legs */}
        <path d="M35,130 L35,150 M65,130 L65,150" fill="none" stroke={strokeColor} strokeWidth="2" />
      </svg>
    );
  }
  if (pose === 'struggle') {
    return (
      <svg viewBox="0 0 120 150" className={`w-40 h-48 overflow-visible ${className}`}>
        {/* Body Hunching */}
        <path d="M40,130 C20,100 20,60 60,60 C90,60 90,100 80,130" fill="none" stroke={strokeColor} strokeWidth="2" className="wobbly" />
        {/* Head Drooping */}
        <circle cx="60" cy="50" r="10" fill="black" stroke={strokeColor} strokeWidth="2" className="wobbly" />
        {/* Arms Carrying heavy thing */}
        <path d="M40,90 L20,70 M80,90 L100,70" fill="none" stroke={strokeColor} strokeWidth="2" />
        {/* Legs Buckling */}
        <path d="M45,130 L30,150 M75,130 L90,150" fill="none" stroke={strokeColor} strokeWidth="2" />
      </svg>
    );
  }
  return null;
};

// --- HELPER: Solution Sketches ---
const SolutionSketch = ({ type, className }: { type: 'concept' | 'efficiency' | 'tech' | 'experience', className?: string }) => {
  const strokeColor = "#ffffff";
  const accentColor = "#38bdf8";

  if (type === 'concept') {
    // House with Sofa & Refresh Arrow
    return (
      <svg viewBox="0 0 100 100" className={`w-full h-full overflow-visible ${className}`}>
        {/* House */}
        <path d="M20,40 L50,10 L80,40 L80,90 L20,90 Z" fill="none" stroke={strokeColor} strokeWidth="2" className="ink-stroke" />
        {/* Sofa Box */}
        <rect x="35" y="60" width="30" height="15" fill="none" stroke={strokeColor} strokeWidth="2" />
        <path d="M35,60 L35,50 L65,50 L65,60" fill="none" stroke={strokeColor} strokeWidth="2" />
        {/* Refresh Arrow */}
        <path d="M85,30 A 30 30 0 0 1 85 70" fill="none" stroke={accentColor} strokeWidth="2" strokeDasharray="4 4" className="wobbly" />
        <path d="M85,30 L90,35 M85,30 L80,35" fill="none" stroke={accentColor} strokeWidth="2" />
      </svg>
    );
  }
  if (type === 'efficiency') {
    // Wobbly Hourglass with Ticks
    return (
      <svg viewBox="0 0 100 100" className={`w-full h-full overflow-visible ${className}`}>
        {/* Hourglass */}
        <path d="M30,10 L70,10 L50,50 L70,90 L30,90 L50,50 Z" fill="none" stroke={strokeColor} strokeWidth="2" className="wobbly" />
        {/* Sand Top */}
        <path d="M45,20 L55,20" stroke={strokeColor} strokeWidth="4" strokeLinecap="round" />
        {/* Ticks Falling */}
        <path d="M45,70 L50,75 L60,65" fill="none" stroke={accentColor} strokeWidth="2" className="animate-bounce" style={{animationDuration: '2s'}} />
        <path d="M40,80 L45,85 L55,75" fill="none" stroke={accentColor} strokeWidth="2" className="animate-bounce" style={{animationDuration: '2.2s'}} />
      </svg>
    );
  }
  if (type === 'tech') {
    // Photo + Magic
    return (
      <svg viewBox="0 0 100 100" className={`w-full h-full overflow-visible ${className}`}>
        {/* Photo Frame */}
        <rect x="25" y="30" width="50" height="40" fill="none" stroke={strokeColor} strokeWidth="2" className="ink-stroke" />
        {/* Mountain/Sun */}
        <path d="M25,60 L40,40 L55,60" fill="none" stroke={strokeColor} strokeWidth="1" />
        <circle cx="60" cy="40" r="5" fill="none" stroke={strokeColor} strokeWidth="1" />
        {/* Magic Waves */}
        <path d="M75,50 Q90,40 95,50 T115,50" fill="none" stroke={accentColor} strokeWidth="2" className="wobbly" />
        <path d="M75,40 Q90,30 95,40 T115,40" fill="none" stroke={accentColor} strokeWidth="2" className="wobbly" style={{animationDelay: '0.1s'}} />
      </svg>
    );
  }
  if (type === 'experience') {
    // Artist Character
    return (
      <svg viewBox="0 0 100 100" className={`w-full h-full overflow-visible ${className}`}>
        {/* Head */}
        <circle cx="50" cy="40" r="15" fill="black" stroke={strokeColor} strokeWidth="2" />
        {/* Beret */}
        <path d="M35,30 Q50,10 75,30 L35,30" fill="none" stroke={strokeColor} strokeWidth="2" className="wobbly" />
        <path d="M50,10 L50,5" stroke={strokeColor} strokeWidth="2" />
        {/* Body */}
        <path d="M50,55 L50,90" stroke={strokeColor} strokeWidth="2" />
        {/* Arms holding Brush */}
        <path d="M50,65 L70,55" stroke={strokeColor} strokeWidth="2" />
        {/* Brush */}
        <path d="M70,55 L85,45" stroke={accentColor} strokeWidth="3" />
        <path d="M85,45 L90,40" stroke={accentColor} strokeWidth="5" opacity="0.5" />
      </svg>
    );
  }
  return null;
}

// --- SLIDE 1: INTRO ---
export const IntroSlide: React.FC<SlideProps> = () => (
  <div className="h-full flex flex-col justify-center items-center text-center px-6 relative overflow-hidden bg-black">
    <div className="relative z-10">
      <div className="w-20 h-20 border-4 border-white mx-auto mb-12 flex items-center justify-center">
        <span className="text-white font-bold text-4xl">H</span>
      </div>
      <h1 className="text-8xl font-black text-white mb-8 tracking-tighter">HOMA</h1>
      <p className="text-2xl font-light text-zinc-400 max-w-2xl mx-auto leading-relaxed uppercase tracking-widest">
        تصمیم‌گیریِ خرید: <span className="text-white font-bold border-b border-white pb-1">بصری</span>
      </p>
    </div>
  </div>
);

// --- SLIDE 2: PROBLEM (AIRBNB STYLE ADAPTATION) ---
export const ProblemSlide: React.FC<SlideProps> = ({ isActive }) => {
  return (
    <div className="h-full w-full relative flex flex-col justify-center px-24 bg-black overflow-hidden">
      {/* Background Image (Darkened) - Interior/Messy Room context */}
      <div className="absolute inset-0 z-0">
          <img 
              src="https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?q=80&w=2070&auto=format&fit=crop" 
              alt="Living Room" 
              className="w-full h-full object-cover grayscale opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent"></div>
      </div>
  
      <div className="relative z-10 max-w-4xl">
        {/* Title Tag - Replicating Airbnb's Box */}
        <div className={`inline-block bg-white text-black px-6 py-2 mb-16 shadow-lg ${isActive ? 'animate-in fade-in slide-in-from-bottom-4 duration-500' : 'opacity-0'}`}>
           <h2 className="text-xl font-bold font-mono tracking-widest uppercase">Problem</h2>
        </div>
  
        {/* Points */}
        <div className="space-y-12">
          {/* Point 1: Price / Buying Risk */}
          <div className={`${isActive ? 'animate-in slide-in-from-left duration-700 delay-100' : 'opacity-0'}`}>
             <p className="text-3xl text-white leading-relaxed font-light">
               <span className="font-bold text-white border-b-2 border-white pb-1">خرید مبلمان</span> یک «حدس پرریسک» است، چون برخلاف لباس، نمی‌توانید آن را قبل از خرید در خانه «پُرو» کنید.
             </p>
             <p className="text-zinc-500 font-mono text-sm mt-2 uppercase tracking-wide">High stakes guesswork. No "Try-on".</p>
          </div>
  
          {/* Point 2: Hotels / Current Tools */}
          <div className={`${isActive ? 'animate-in slide-in-from-left duration-700 delay-300' : 'opacity-0'}`}>
             <p className="text-3xl text-white leading-relaxed font-light">
               <span className="font-bold text-white border-b-2 border-white pb-1">ابزارهای فعلی</span> فقط الهام‌بخش هستند و شما را از واقعیتِ فضای خودتان دور نگه می‌دارند.
             </p>
             <p className="text-zinc-500 font-mono text-sm mt-2 uppercase tracking-wide">Disconnected Inspiration.</p>
          </div>
  
          {/* Point 3: No Easy Way */}
          <div className={`${isActive ? 'animate-in slide-in-from-left duration-700 delay-500' : 'opacity-0'}`}>
             <p className="text-3xl text-white leading-relaxed font-light">
               <span className="font-bold text-white border-b-2 border-white pb-1">هیچ راه آسانی</span> وجود ندارد که کاربر معمولی بتواند نتیجه نهایی را واقع‌گرایانه ببیند.
             </p>
             <p className="text-zinc-500 font-mono text-sm mt-2 uppercase tracking-wide">No easy way to visualize.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- SLIDE 3: SOLUTION (4 COLUMNS - PERSIAN) ---
export const SolutionSlide: React.FC<SlideProps> = ({ isActive }) => {
  return (
    <div className="h-full flex flex-col justify-center px-16 bg-black">
      <h2 className="text-5xl font-bold mb-20 text-white animate-in slide-in-from-top duration-700 text-right">راهکار (Solution)</h2>
      
      <div className="grid grid-cols-4 gap-8 w-full max-w-7xl mx-auto" dir="rtl">
        
        {/* Col 1: Concept */}
        <div className={`flex flex-col items-start border-t-2 border-white pt-8 ${isActive ? 'animate-in fade-in slide-in-from-bottom-8 duration-700 delay-100' : 'opacity-0'}`}>
          <div className="w-20 h-20 mb-8">
            <SolutionSketch type="concept" />
          </div>
          <h3 className="text-2xl font-bold text-white mb-4">اتاق پُرو مجازی</h3>
          <p className="text-zinc-400 text-sm leading-relaxed">
            دیجیتالی کردنِ تجربه طبیعیِ «جابه‌جا کردن، عقب رفتن و تماشا کردن» قبل از خرید.
          </p>
        </div>

        {/* Col 2: Efficiency */}
        <div className={`flex flex-col items-start border-t-2 border-zinc-700 pt-8 ${isActive ? 'animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300' : 'opacity-0'}`}>
          <div className="w-20 h-20 mb-8">
            <SolutionSketch type="efficiency" />
          </div>
          <h3 className="text-2xl font-bold text-white mb-4">حذف کامل حدس و گمان</h3>
          <p className="text-zinc-400 text-sm leading-relaxed">
            تبدیل تردید به اطمینان در <span className="text-white font-bold">۳۰ ثانیه</span>. یک تصمیم بصریِ مطمئن و آنی.
          </p>
        </div>

        {/* Col 3: Tech */}
        <div className={`flex flex-col items-start border-t-2 border-zinc-700 pt-8 ${isActive ? 'animate-in fade-in slide-in-from-bottom-8 duration-700 delay-500' : 'opacity-0'}`}>
          <div className="w-20 h-20 mb-8">
            <SolutionSketch type="tech" />
          </div>
          <h3 className="text-2xl font-bold text-white mb-4">قدرت گرفته از GenAI</h3>
          <p className="text-zinc-400 text-sm leading-relaxed">
             بر خلاف AR قدیمی، ما فقط به یک <span className="text-white font-bold">عکس ۲بعدی</span> نیاز داریم. بدون نیاز به مدل ۳بعدی.
          </p>
        </div>

        {/* Col 4: Experience */}
        <div className={`flex flex-col items-start border-t-2 border-zinc-700 pt-8 ${isActive ? 'animate-in fade-in slide-in-from-bottom-8 duration-700 delay-700' : 'opacity-0'}`}>
          <div className="w-20 h-20 mb-8">
            <SolutionSketch type="experience" />
          </div>
          <h3 className="text-2xl font-bold text-white mb-4">طراحی رئال بدون مهارت</h3>
          <p className="text-zinc-400 text-sm leading-relaxed">
            کاربر بدون دانش دیزاین، با عکس اتاق خودش، خروجیِ <span className="text-white font-bold">فوتو-رئالیستیک</span> می‌سازد.
          </p>
        </div>

      </div>
    </div>
  );
};

// --- SLIDE 4: WHY NOW (SIMPLIFIED - PERSIAN) ---
export const WhyNowSlide: React.FC<SlideProps> = ({ isActive }) => (
  <div className="h-full flex flex-col justify-center px-24 bg-black relative overflow-hidden">
    
    {/* Header Section */}
    <div className={`mb-20 z-10 max-w-5xl ${isActive ? 'animate-in slide-in-from-top duration-700' : 'opacity-0'}`}>
        <h2 className="text-6xl font-black text-white mb-6 leading-tight tracking-tight">
            برای اولین بار، هوش مصنوعی فضاهای واقعی را می‌فهمد.
        </h2>
        <p className="text-xl text-zinc-400 font-light border-r-4 border-[#3875FF] pr-4">
            این قابلیت تا ۱۲ ماه پیش حتی ممکن نبود.
        </p>
    </div>

    {/* Comparison Cards */}
    <div className="flex flex-row-reverse gap-12 items-stretch justify-start w-full max-w-6xl z-10">
      
      {/* GenAI Card (Hero) */}
      <div className={`flex-1 bg-zinc-900 border-2 border-[#3875FF] p-12 relative overflow-hidden group ${isActive ? 'animate-in slide-in-from-left duration-700 delay-200' : 'opacity-0'}`}>
         {/* Glow effect */}
         <div className="absolute top-0 right-0 w-64 h-64 bg-[#3875FF] blur-[120px] opacity-10 rounded-full pointer-events-none"></div>
         
         <div className="flex justify-between items-start mb-12">
            <h3 className="text-4xl font-black text-white">GenAI 2024</h3>
            <div className="px-4 py-1 bg-[#3875FF] text-white text-xs font-bold uppercase tracking-widest rounded-sm">اکنون</div>
         </div>
         
         <div className="space-y-6">
             <div className="text-2xl font-bold text-white">Photorealistic</div>
             <p className="text-zinc-400 text-lg leading-relaxed">
               درک نور، مقیاس و متریال <br/><span className="text-[#3875FF]">(به صورت خودکار)</span>
             </p>
         </div>
      </div>

      {/* AR Card (Old) */}
      <div className={`flex-1 bg-black border border-zinc-800 p-12 opacity-40 hover:opacity-100 transition-opacity duration-500 ${isActive ? 'animate-in slide-in-from-right duration-700 delay-400' : 'opacity-0'}`}>
         <div className="flex justify-between items-start mb-12">
            <h3 className="text-4xl font-black text-zinc-500">AR 2020</h3>
            <div className="px-4 py-1 bg-zinc-800 text-zinc-500 text-xs font-bold uppercase tracking-widest rounded-sm">قدیمی</div>
         </div>
         
         <div className="space-y-6">
             <div className="text-2xl font-bold text-zinc-600">غیرطبیعی (Unnatural)</div>
             <p className="text-zinc-600 text-lg leading-relaxed">
               مقیاس نادقیق، کارتونی
             </p>
         </div>
      </div>
      
    </div>
  </div>
);

// --- SLIDE 5: PRODUCT DEMO (INTERACTIVE SEQUENCE - FULL CANVAS SWAP) ---
export const ProductDemoSlide: React.FC<SlideProps> = ({ isActive, internalStep = 0 }) => {
  // Use prop for demoStep instead of local state
  const demoStep = internalStep;

  // Assets for each step - FULL CANVAS IMAGES
  const images = [
    "/pics/1.png", // 0: Empty Room
    "/pics/2.png", // 1: Moodboard/Abstract (Concept)
    "/pics/3.png", // 2: Chair in Room
    "/pics/4.png", // 3: Final Luxury Render
    "/pics/5.png", // 4: Additional Step
    "/pics/6.png", // 5: Additional Step
    "/pics/7.png", // 6: Final Step
  ];

  // Chair thumbnail for sidebar
  const chairImg = "/pics/3.png";
  // Moodboard thumbnail for sidebar
  const moodboardThumb = "/pics/2.png";

  return (
    <div className="h-full flex flex-col justify-center items-center px-8 bg-black relative">
      <h2 className="text-2xl font-bold mb-8 text-zinc-500 text-center tracking-widest uppercase">The Experience</h2>
      
      {/* App Window Frame */}
      <div 
        className="max-w-[1200px] w-full mx-auto h-[650px] bg-white rounded-xl overflow-hidden shadow-2xl relative flex group"
      >
        
        {/* LEFT COLUMN: Product Sidebar (Static UI) */}
        <div className="w-[360px] flex flex-col border-r border-gray-100 relative z-20 bg-white shadow-xl transition-all duration-500">
           
           {/* Top Nav */}
           <div className="h-16 flex items-center justify-center border-b border-gray-50">
             <span className="font-black text-2xl tracking-tighter text-black">HOMA</span>
           </div>

           {/* Content */}
           <div className="flex-1 overflow-y-auto custom-scrollbar p-6 flex flex-col">
              
              {/* Yellow Banner */}
              <div className="bg-[#FEF9C3] rounded-xl p-4 mb-6 flex items-start gap-3 flex-row-reverse shadow-sm border border-yellow-100" dir="rtl">
                 <div className="mt-0.5 text-yellow-700">
                   <Info size={18} />
                 </div>
                 <p className="text-yellow-800 text-xs font-medium leading-relaxed text-right flex-1">
                   با آپلود عکس فضای خودت، می‌تونی ببینی که این محصول تو خونه‌ات چطور به نظر میاد!
                 </p>
              </div>

              {/* Product Image Card (Updates based on step context) */}
              <div className="w-full aspect-square relative mb-6 rounded-2xl overflow-hidden border border-gray-100 shadow-sm">
                  <img
                    src="/pics/selected_sofa.jpg"
                    alt="Product"
                    className={`w-full h-full object-cover transition-opacity duration-500 ${demoStep === 0 ? 'opacity-50 grayscale' : 'opacity-100'}`}
                  />
                  {demoStep === 0 && (
                     <div className="absolute inset-0 flex items-center justify-center text-gray-400 text-xs font-mono uppercase tracking-widest">Select Item</div>
                  )}
              </div>

              {/* Product Info (RTL) */}
              <div className="w-full text-right transition-opacity duration-300" dir="rtl" style={{ opacity: demoStep >= 2 ? 1 : 0.5 }}>
                 <div className="text-gray-400 text-xs font-medium mb-1">محصول مدرن</div>
                 <h2 className="text-xl font-black text-gray-900 mb-2 leading-tight">صندلی راحتی مدرن</h2>
                 <div className="text-lg font-bold text-gray-900 mb-6">۱۲,۵۰۰,۰۰۰ تومان</div>
              </div>

              {/* Details Expander */}
              <div className="bg-gray-50 rounded-lg p-3 flex justify-between items-center mt-auto mb-2 border border-gray-100">
                 <span className="text-sm font-medium text-gray-600">جزئیات محصول</span>
                 <ChevronDown size={16} className="text-gray-400" />
              </div>

           </div>
        </div>

        {/* RIGHT COLUMN: Room Canvas (Swapping Full Images) */}
        <div className="flex-1 relative bg-gray-100 overflow-hidden">
           
           {/* Image Layers - Opacity Transition */}
           {images.map((img, index) => (
              <img 
                key={index}
                src={img} 
                alt={`Step ${index}`} 
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out ${demoStep === index || (index === 4 && demoStep === 4) ? 'opacity-100' : 'opacity-0'}`}
                style={{ zIndex: index }}
              />
           ))}
           
           {/* "My Room" Badge */}
           <div className="absolute top-8 left-8 bg-white/90 backdrop-blur-md text-black px-4 py-2 rounded-full shadow-lg flex items-center gap-2 z-30" dir="rtl">
             <ImageIcon size={16} className="text-gray-500" />
             <span className="text-xs font-bold">اتاق من</span>
           </div>


           {/* Interaction Prompt */}
           <div className={`absolute bottom-8 left-1/2 -translate-x-1/2 transition-opacity duration-300 z-30 ${demoStep >= 6 ? 'opacity-0' : 'opacity-100'}`}>
              <div className="bg-black/80 backdrop-blur text-white px-6 py-3 rounded-full flex items-center gap-3 animate-pulse">
                 <MousePointer2 size={16} />
                 <span className="font-bold text-xs uppercase tracking-widest">
                    {demoStep === 0 ? 'Next > Mood' : demoStep === 1 ? 'Next > Item' : demoStep === 2 ? 'Next > Render' : demoStep === 3 ? 'Next > Step 4' : demoStep === 4 ? 'Next > Step 5' : 'Next > Final'}
                 </span>
              </div>
           </div>

        </div>

      </div>
    </div>
  );
};

// --- SLIDE 6: MARKET SIZE (PERSIAN NUMBERS REVISION - MASSIVE SIZE) ---
export const MarketSizeSlide: React.FC<SlideProps> = ({ isActive }) => {
  return (
    <div className="h-full w-full bg-[#0D0D0D] relative overflow-hidden flex" dir="ltr">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-20" style={{
        backgroundImage: 'linear-gradient(#222 1px, transparent 1px), linear-gradient(90deg, #222 1px, transparent 1px)',
        backgroundSize: '40px 40px'
      }}></div>

      {/* Header (Top Right) */}
      <div className={`absolute top-16 right-16 text-right z-20 ${isActive ? 'animate-in slide-in-from-top duration-700' : 'opacity-0'}`}>
         <h2 className="text-6xl font-black text-white mb-4 font-['Vazirmatn'] tracking-tight drop-shadow-2xl">بازار هدف هما</h2>
      </div>

      {/* Left Column: Data Stack - MASSIVE TYPOGRAPHY */}
      <div className="w-1/2 h-full flex flex-col justify-center pl-24 pr-8 space-y-20 relative z-10">
        
        {/* Item 1: TAM */}
        <div className={`flex flex-col items-start relative group ${isActive ? 'animate-in slide-in-from-left duration-700 delay-100' : 'opacity-0'}`}>
          <div className="text-4xl font-black text-white mb-2 tracking-widest uppercase">TAM (کل بازار)</div>
          <div className="flex items-baseline gap-3 mb-2">
             <div className="text-[6.5rem] leading-none font-black text-white tracking-tighter">۴۹۵,۰۰۰</div>
          </div>
          <div className="text-3xl text-zinc-300 font-['Vazirmatn'] font-bold text-right w-full border-t-2 border-zinc-600 pt-4">میلیارد تومان</div>
          
          {/* Connector Line */}
          <div className="absolute top-[40%] left-full w-12 h-[2px] bg-zinc-600 flex items-center opacity-80">
             <div className="w-1.5 h-1.5 bg-zinc-400 rounded-full ml-auto"></div>
          </div>
        </div>

        {/* Item 2: SAM */}
        <div className={`flex flex-col items-start relative group ${isActive ? 'animate-in slide-in-from-left duration-700 delay-200' : 'opacity-0'}`}>
          <div className="text-3xl font-black text-zinc-300 mb-2 tracking-widest uppercase">SAM (بازار آنلاین)</div>
          <div className="flex items-baseline gap-3 mb-2">
            <div className="text-[5.5rem] leading-none font-black text-zinc-300 tracking-tighter">۴۲,۴۶۵</div>
          </div>
          <div className="text-3xl text-zinc-400 font-['Vazirmatn'] font-bold text-right w-full border-t-2 border-zinc-600 pt-4">میلیارد تومان</div>

           {/* Connector Line */}
           <div className="absolute top-[40%] left-full w-32 h-[2px] bg-zinc-600 flex items-center ml-4 opacity-80">
             <div className="w-1.5 h-1.5 bg-zinc-400 rounded-full ml-auto"></div>
          </div>
        </div>

        {/* Item 3: SOM */}
        <div className={`flex flex-col items-start relative group ${isActive ? 'animate-in slide-in-from-left duration-700 delay-300' : 'opacity-0'}`}>
          <div className="text-5xl font-black text-[#2D6BFF] mb-2 tracking-widest uppercase drop-shadow-md">SOM (سهم HOMA)</div>
          <div className="flex items-baseline gap-3 mb-2">
             <div className="text-[8rem] leading-none font-black text-[#2D6BFF] tracking-tighter drop-shadow-[0_0_40px_rgba(45,107,255,0.8)]">۱,۰۶۱</div>
          </div>
          <div className="text-4xl text-white font-['Vazirmatn'] font-black text-right w-full border-t-4 border-[#2D6BFF] pt-4">میلیارد تومان</div>

           {/* Connector Line */}
           <div className="absolute top-[45%] left-full w-48 h-[4px] bg-[#2D6BFF] flex items-center opacity-100 shadow-[0_0_20px_rgba(45,107,255,0.8)]">
             <div className="w-3 h-3 bg-[#2D6BFF] rounded-full ml-auto animate-pulse"></div>
          </div>
        </div>

      </div>

      {/* Right Column: Visual Diagram */}
      <div className="flex-1 h-full flex items-center justify-center relative pr-20">
         <div className={`relative w-[700px] h-[700px] flex items-center justify-center ${isActive ? 'animate-in zoom-in duration-1000 ease-out' : 'opacity-0'}`}>
            
            {/* TAM Circle (Outer) */}
            <div className="absolute w-full h-full rounded-full border-[4px] border-zinc-700 bg-gradient-to-br from-zinc-900/40 to-transparent flex items-start justify-center pt-8">
               <span className="text-zinc-400 text-xl tracking-[0.2em] font-bold uppercase mt-4 bg-[#0D0D0D] px-4 font-['Vazirmatn']">کل بازار (TAM)</span>
            </div>
            
            {/* SAM Circle (Middle) */}
            <div className="absolute w-[68%] h-[68%] rounded-full border-[2px] border-zinc-500 bg-zinc-900/70 shadow-2xl flex items-start justify-center pt-8">
                <span className="text-zinc-300 text-xl tracking-[0.2em] font-bold uppercase mt-4 bg-zinc-900 px-4 font-['Vazirmatn']">بازار آنلاین (SAM)</span>
            </div>

            {/* SOM Circle (Inner - Glowing) */}
            <div className="absolute w-[32%] h-[32%] rounded-full bg-[#2D6BFF] shadow-[0_0_120px_rgba(45,107,255,0.7)] flex flex-col items-center justify-center animate-pulse z-10">
               <span className="text-white font-black text-6xl tracking-tighter drop-shadow-md">۱,۰۶۱</span>
               <span className="text-white/90 font-bold text-xl uppercase tracking-wider mt-2 text-center leading-tight font-['Vazirmatn']">میلیارد تومان<br/>سهم هما</span>
            </div>

         </div>
      </div>

    </div>
  );
};

// --- SLIDE 7: BUSINESS MODEL ---
export const BusinessModelSlide: React.FC<SlideProps> = () => (
  <div className="h-full flex flex-col justify-center px-14 bg-black">
    <h2 className="text-5xl font-bold mb-20 text-white text-center">مدل درآمدی</h2>
    <div className="grid grid-cols-3 gap-0 max-w-7xl mx-auto w-full border border-zinc-800" dir="rtl">
      
      {/* Model 1: Pay-As-You-Go */}
      <div className="p-14 border-l border-zinc-800 bg-black hover:bg-zinc-900 transition-colors text-right group">
        <Zap size={40} className="text-zinc-500 mb-8 group-hover:text-white transition-colors" />
        <h3 className="text-2xl font-bold text-white mb-2">پرداخت به‌ازای مصرف</h3>
        <p className="text-zinc-500 font-mono text-xs mb-6 uppercase">Pay-As-You-Go</p>
        <p className="text-zinc-400 text-sm leading-relaxed">
          (برای فروشگاه‌ها و پیج‌های اینستاگرامی)<br/>
          فروشگاه‌ها فقط به اندازه استفاده‌شان هزینه می‌پردازند؛ بدون اشتراک ماهانه و بدون ریسک.
        </p>
      </div>

      {/* Model 2: Commission */}
      <div className="p-14 border-l border-zinc-800 bg-white text-black transform scale-105 z-10 shadow-2xl text-right">
        <Percent size={40} className="text-black mb-8" />
        <h3 className="text-2xl font-bold mb-2">کمیسیون از فروش</h3>
        <p className="text-zinc-500 font-mono text-xs mb-6 uppercase">Transaction Fee</p>
        <p className="text-zinc-800 text-sm leading-relaxed font-medium">
          درصدی از هر خرید موفق که بعد از تست در HOMA انجام می‌شود.
          <br/><br/>
          مدل اصلی رشد و مقیاس‌پذیری HOMA.
        </p>
      </div>

      {/* Model 3: Premium Placement */}
      <div className="p-14 bg-black hover:bg-zinc-900 transition-colors text-right group">
        <Star size={40} className="text-zinc-500 mb-8 group-hover:text-white transition-colors" />
        <h3 className="text-2xl font-bold text-white mb-2">جایگاه پریمیوم</h3>
        <p className="text-zinc-500 font-mono text-xs mb-6 uppercase">Premium Placement</p>
        <p className="text-zinc-400 text-sm leading-relaxed">
          (برای برندهای بزرگ)<br/>
          برندهایی که می‌خواهند در ست‌های طراحی‌شده HOMA به‌صورت ویژه دیده شوند، هزینه جایگاه می‌پردازند.
        </p>
      </div>
    </div>
  </div>
);

// --- SLIDE 8: COMPETITION ---
export const CompetitionSlide: React.FC<SlideProps> = ({ isActive }) => (
  <div className="h-full flex flex-col justify-center items-center bg-black relative">
    <h2 className="text-4xl font-bold mb-12 text-white">جایگاه رقابتی (Competitive Landscape)</h2>
    
    <div className="relative w-[900px] h-[600px] border border-zinc-800 bg-zinc-900/50 rounded-xl p-8 shadow-2xl">
      {/* Grid Lines */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

      {/* Axes */}
      <div className="absolute inset-0 flex items-center justify-center">
        {/* Y Axis */}
        <div className="h-full w-[2px] bg-zinc-500/30 absolute"></div>
        {/* X Axis */}
        <div className="w-full h-[2px] bg-zinc-500/30 absolute"></div>
      </div>

      {/* Axis Labels */}
      <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-black px-4 py-1 text-white text-base font-bold uppercase tracking-widest border border-zinc-700 rounded-full">Inspiration (الهام‌بخشی)</div>
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-zinc-500 text-xs font-mono">Low</div>
      <div className="absolute top-12 left-1/2 -translate-x-1/2 text-zinc-500 text-xs font-mono">High</div>

      <div className="absolute right-4 top-1/2 -translate-y-1/2 bg-black px-4 py-1 text-white text-base font-bold uppercase tracking-widest border border-zinc-700 rounded-full rotate-90 origin-right translate-x-12">Purchase Ability (امکان خرید)</div>
      <div className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500 text-xs font-mono">Low</div>
      <div className="absolute right-12 top-1/2 -translate-y-1/2 text-zinc-500 text-xs font-mono">High</div>

      {/* Competitors */}
      
      {/* Pinterest (Top Left) */}
      <div className="absolute top-[15%] left-[20%] flex flex-col items-center group">
        <div className="w-16 h-16 bg-black border-2 border-[#E60023] rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(230,0,35,0.2)]">
           <Pin className="text-[#E60023]" size={32} />
        </div>
        <span className="mt-3 text-white font-bold text-lg bg-black px-2">Pinterest</span>
        <span className="text-zinc-500 text-xs mt-1">High Inspiration, No Buy</span>
      </div>

      {/* Digikala (Bottom Right) */}
      <div className="absolute bottom-[20%] right-[20%] flex flex-col items-center group">
        <div className="w-16 h-16 bg-black border-2 border-[#EF394E] rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(239,57,78,0.2)]">
           <ShoppingBag className="text-[#EF394E]" size={32} />
        </div>
        <span className="mt-3 text-white font-bold text-lg bg-black px-2">Digikala</span>
        <span className="text-zinc-500 text-xs mt-1">High Buy, No Inspiration</span>
      </div>

      {/* Legacy AR (Bottom Left) */}
      <div className="absolute bottom-[20%] left-[20%] flex flex-col items-center opacity-60">
        <div className="w-12 h-12 bg-zinc-800 rounded-full flex items-center justify-center border border-zinc-600">
           <Move3d className="text-zinc-400" size={24} />
        </div>
        <span className="mt-3 text-zinc-400 font-bold text-base">Legacy AR</span>
        <span className="text-zinc-600 text-xs mt-1">Low Utility</span>
      </div>

      {/* HOMA (Top Right - Winner) */}
      <div className={`absolute top-[15%] right-[15%] flex flex-col items-center z-10 ${isActive ? 'scale-110 transition-transform duration-1000' : ''}`}>
        <div className="relative">
           <div className="w-24 h-24 bg-[#2D6BFF] rounded-full flex items-center justify-center shadow-[0_0_80px_rgba(45,107,255,0.8)] border-4 border-white animate-pulse">
              <span className="text-white font-black text-2xl">HOMA</span>
           </div>
           {/* Ripple Effect */}
           <div className="absolute inset-0 rounded-full border border-[#2D6BFF] animate-ping opacity-50"></div>
        </div>
        <div className="mt-4 bg-[#2D6BFF]/20 border border-[#2D6BFF] px-4 py-2 rounded-lg backdrop-blur-md text-center">
            <span className="text-[#2D6BFF] font-bold text-sm block">هم الهام، هم خرید</span>
            <span className="text-white text-xs block mt-1 opacity-80">تجربه کامل و یکپارچه</span>
        </div>
      </div>

    </div>
    
    {/* Narrative Text */}
    <div className={`mt-12 text-center max-w-3xl ${isActive ? 'animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-500' : 'opacity-0'}`}>
       <p className="text-xl text-zinc-300 font-light leading-relaxed">
          «بازیگران فعلی هرکدام فقط یک بخش از تجربه خرید را ارائه می‌دهند.<br/>
          اما هیچ‌کس الهام، دیدن در فضای واقعی و خرید را یکپارچه نکرده — <span className="text-[#2D6BFF] font-bold">تا امروز.</span>»
       </p>
    </div>
  </div>
);

// --- SLIDE 9: GTM (BEFORE/AFTER COMPARISON) ---
export const GTMSlide: React.FC<SlideProps> = ({ isActive }) => {
  const [showAfter, setShowAfter] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

  // Auto-slide between before and after
  useEffect(() => {
    if (!isActive) {
      setHasStarted(false);
      setShowAfter(false);
      return;
    }

    if (!hasStarted) {
      setHasStarted(true);
      setShowAfter(false); // Start with BEFORE
    }

    const interval = setInterval(() => {
      setShowAfter(prev => !prev);
    }, 4000); // Switch every 4 seconds

    return () => clearInterval(interval);
  }, [isActive, hasStarted]);

  return (
    <div className="h-full flex flex-col justify-center items-center bg-black px-8">
      <h2 className="text-4xl font-bold mb-12 text-white text-center">استراتژی ورود به بازار (Phase 1: Try-On)</h2>

      {/* Single Frame with Before/After Slider Animation */}
      <div className="relative w-[500px] h-[500px] rounded-xl overflow-hidden shadow-2xl border border-zinc-800">
        {/* Sliding Container */}
        <div
          className="relative w-full h-full transition-transform duration-1000 ease-in-out"
          style={{
            transform: showAfter ? 'translateX(-100%)' : 'translateX(0%)'
          }}
        >
          {/* BEFORE Image */}
          <div
            className="absolute inset-0 w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url('/pics/before01.jpg')` }}
          >
            <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
              <span className="text-white text-5xl font-black drop-shadow-xl tracking-tighter">BEFORE</span>
            </div>
          </div>

          {/* AFTER Image */}
          <div
            className="absolute inset-0 w-full h-full bg-cover bg-center"
            style={{
              left: '100%',
              backgroundImage: `url('/pics/after.png')`
            }}
          >
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <span className="text-white text-5xl font-black drop-shadow-xl tracking-tighter">AFTER</span>
            </div>
          </div>
        </div>

        {/* Transition Indicator */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          <div className={`w-2 h-2 rounded-full transition-colors duration-300 ${
            !showAfter ? 'bg-white' : 'bg-zinc-600'
          }`}></div>
          <div className={`w-2 h-2 rounded-full transition-colors duration-300 ${
            showAfter ? 'bg-white' : 'bg-zinc-600'
          }`}></div>
        </div>
      </div>

      <p className="mt-12 text-zinc-400 text-lg text-center max-w-2xl">
        تمرکز فعلی: <span className="text-white font-bold">حذف عدم قطعیت</span> برای خریداران آنلاین
      </p>
    </div>
  );
};

// --- SLIDE 10: ROADMAP (HORIZONTAL HIGH-CONTRAST TIMELINE) ---
export const RoadmapSlide: React.FC<SlideProps> = ({ isActive }) => (
  <div className="h-full flex flex-col justify-center items-center bg-black overflow-hidden relative" dir="rtl">
    {/* Title */}
    <div className={`absolute top-12 right-12 text-right ${isActive ? 'animate-in fade-in duration-700' : 'opacity-0'}`}>
        <h2 className="text-5xl font-black text-white mb-2">نقشه راه (Roadmap)</h2>
        <p className="text-zinc-500 font-mono text-xl tracking-widest uppercase">18 Month Vision</p>
    </div>

    {/* Horizontal Line */}
    <div className={`w-[90%] h-[4px] bg-zinc-800 relative mt-20 ${isActive ? 'animate-in zoom-in-x duration-1000' : 'scale-x-0'}`}>
       {/* Active Progress */}
       <div className="absolute top-0 right-0 h-full bg-[#2D6BFF] w-[30%] shadow-[0_0_20px_rgba(45,107,255,0.6)]"></div>
    </div>

    {/* Timeline Container */}
    <div className="w-[90%] flex justify-between relative h-[500px]">
       
       {/* Node 1: Q1-Q2 (Now) - TOP */}
       <div className={`absolute right-[5%] top-[10%] flex flex-col items-center w-[25%] ${isActive ? 'animate-in slide-in-from-bottom-8 duration-700 delay-200' : 'opacity-0'}`}>
          {/* Connector */}
          <div className="absolute bottom-[-110px] w-[2px] h-[100px] bg-[#2D6BFF]">
             <div className="absolute bottom-0 w-6 h-6 bg-[#2D6BFF] rounded-full -translate-x-1/2 translate-y-1/2 shadow-[0_0_20px_#2D6BFF]"></div>
          </div>
          
          <div className="text-center">
             <div className="text-[#2D6BFF] font-black text-4xl mb-2">Q1 – Q2</div>
             <div className="bg-white text-black px-4 py-1 text-sm font-bold uppercase tracking-widest inline-block mb-6 rounded-sm">اکنون (Validation)</div>
             <div className="text-white font-bold text-2xl mb-2">اعتبارسنجی بازار</div>
             <ul className="text-zinc-400 text-lg space-y-1 leading-relaxed">
               <li>MVP سرویس Try-On</li>
               <li>۲۰ فروشگاه فعال</li>
             </ul>
             <div className="mt-6 text-6xl font-black text-white">۵,۰۰۰</div>
             <div className="text-zinc-500 text-sm uppercase tracking-widest">تست موفق</div>
          </div>
       </div>

       {/* Node 2: Q3-Q4 - BOTTOM */}
       <div className={`absolute right-[40%] bottom-[10%] flex flex-col items-center w-[25%] ${isActive ? 'animate-in slide-in-from-top-8 duration-700 delay-400' : 'opacity-0'}`}>
           {/* Connector */}
           <div className="absolute top-[-110px] w-[2px] h-[100px] bg-zinc-700">
             <div className="absolute top-0 w-4 h-4 bg-zinc-500 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
          </div>

          <div className="text-center">
             <div className="mt-6 text-6xl font-black text-white">۲۰,۰۰۰</div>
             <div className="text-zinc-500 text-sm uppercase tracking-widest mb-6">تست محصول</div>
             
             <ul className="text-zinc-400 text-lg space-y-1 leading-relaxed mb-4">
               <li>چیدمان چندمحصولی</li>
               <li>همکاری با برندهای بزرگ</li>
             </ul>
             <div className="text-white font-bold text-2xl mb-2">توسعه و مقیاس‌پذیری</div>
             <div className="text-zinc-500 font-black text-4xl">Q3 – Q4</div>
          </div>
       </div>

       {/* Node 3: 2026 - TOP */}
       <div className={`absolute left-[5%] top-[10%] flex flex-col items-center w-[30%] ${isActive ? 'animate-in slide-in-from-bottom-8 duration-700 delay-600' : 'opacity-0'}`}>
          {/* Connector */}
          <div className="absolute bottom-[-110px] w-[2px] h-[100px] bg-zinc-800 border-l border-dashed border-zinc-600">
             <div className="absolute bottom-0 w-4 h-4 bg-zinc-700 rounded-full -translate-x-1/2 translate-y-1/2"></div>
          </div>

          <div className="text-center">
             <div className="text-zinc-400 font-black text-5xl mb-2">2026</div>
             <div className="bg-zinc-800 text-zinc-400 px-4 py-1 text-sm font-bold uppercase tracking-widest inline-block mb-6 rounded-sm border border-zinc-700">Future Vision</div>
             <div className="text-white font-bold text-2xl mb-2">مارکت‌پلیس بصری</div>
             <ul className="text-zinc-500 text-lg space-y-1 leading-relaxed">
               <li>خرید یکپارچه (In-App)</li>
               <li>طراحی کامل فضا</li>
             </ul>
             <div className="mt-6 text-7xl font-black text-white opacity-50">۱۰۰K+</div>
             <div className="text-zinc-600 text-sm uppercase tracking-widest">تست ماهانه</div>
          </div>
       </div>

    </div>
  </div>
);

// --- SLIDE 11: TRACTION (SPLIT VIEW) ---
export const TractionSlide: React.FC<SlideProps> = ({ isActive }) => (
  <div className="h-full w-full flex bg-black">
    {/* LEFT: White Data Card */}
    <div className={`w-[45%] h-full bg-white text-black p-20 flex flex-col justify-center relative ${isActive ? 'animate-in slide-in-from-right duration-700' : 'opacity-0'}`}>
       <div className="absolute top-0 right-0 w-4 h-full bg-[#2D6BFF]"></div>
       
       <h2 className="text-5xl font-black mb-12 text-right leading-tight">اعتبارسنجی<br/>چرخه کامل</h2>
       
       <div className="space-y-8 text-right" dir="rtl">
          <div className="flex items-start gap-4">
             <span className="text-8xl font-black text-[#2D6BFF] leading-none">۴</span>
             <div>
                <div className="text-2xl font-bold">فروشگاه منتخب</div>
                <div className="text-zinc-500 text-sm">پایلوت اولیه (در حال اجرا)</div>
             </div>
          </div>
          
          <div className="border-t border-gray-200 pt-8 mt-8">
             <h3 className="font-bold text-xl mb-4">نتیجه کلیدی (Insight):</h3>
             <ul className="space-y-4">
               <li className="flex items-center gap-3 text-lg font-medium text-gray-700">
                 <CheckCircle2 size={24} className="text-[#2D6BFF]" />
                 کاربر در ۳۰ ثانیه نتیجه گرفت
               </li>
               <li className="flex items-center gap-3 text-lg font-medium text-gray-700">
                 <CheckCircle2 size={24} className="text-[#2D6BFF]" />
                 پرزنت بهتر از عکس معمولی
               </li>
               <li className="flex items-center gap-3 text-lg font-medium text-gray-700">
                 <CheckCircle2 size={24} className="text-[#2D6BFF]" />
                 تصمیم خرید سریع‌تر
               </li>
             </ul>
          </div>
       </div>

       <div className="mt-auto pt-12 text-right text-gray-500 leading-relaxed text-sm">
         این داده‌ها مسیر نسخه بعدی محصول را مشخص کردند و پایه‌ی مقیاس‌پذیری (Scalability) ساخته شد.
       </div>
    </div>

    {/* RIGHT: Dark Partner List */}
    <div className="flex-1 h-full bg-[#0D0D0D] p-20 flex flex-col justify-center">
       <h3 className="text-2xl text-zinc-500 font-bold mb-12 text-right uppercase tracking-widest">همکاران پایلوت</h3>
       
       <div className="grid grid-cols-2 gap-6" dir="rtl">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className={`bg-zinc-900 border border-zinc-800 p-8 rounded-lg hover:border-[#2D6BFF] transition-colors group ${isActive ? `animate-in fade-in slide-in-from-bottom-4 duration-700 delay-${i*100}` : 'opacity-0'}`}>
               <Store size={32} className="text-zinc-600 mb-4 group-hover:text-white transition-colors" />
               <div className="text-xl font-bold text-white mb-1">فروشگاه پایلوت {i}</div>
               <div className="text-xs text-zinc-600">تهران - مبلمان مدرن</div>
            </div>
          ))}
       </div>
    </div>
  </div>
);

// --- SLIDE 12: TEAM ---
export const TeamSlide: React.FC<SlideProps> = ({ isActive }) => (
  <div className="h-full flex flex-col justify-center px-20 bg-black">
    <div className="text-center mb-20">
      <h2 className="text-5xl font-bold text-white mb-4">تیم (The Team)</h2>
      <p className="text-xl text-zinc-500">ترکیبی از تکنولوژی و هنر</p>
    </div>

    <div className="grid grid-cols-2 gap-12 max-w-4xl mx-auto w-full" dir="rtl">
      {/* Architect & Computational Designer */}
      <div className={`text-center ${isActive ? 'animate-in fade-in slide-in-from-bottom-8 duration-700 delay-100' : 'opacity-0'}`}>
         <div className="w-48 h-48 bg-zinc-800 rounded-full mx-auto mb-6 overflow-hidden border-2 border-zinc-700 grayscale hover:grayscale-0 transition-all">
            <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=400&h=400" className="w-full h-full object-cover" />
         </div>
         <h3 className="text-2xl font-bold text-white mb-1">فربد لطفی نژاد</h3>
         <div className="text-[#2D6BFF] text-sm font-bold uppercase tracking-widest mb-4">معمار و computational designer</div>
         <div className="inline-block bg-zinc-900 px-4 py-1 rounded-full text-xs text-zinc-400 border border-zinc-800">تخصص معماری و دیزاین محاسباتی</div>
      </div>

      {/* Software Engineer */}
      <div className={`text-center ${isActive ? 'animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200' : 'opacity-0'}`}>
         <div className="w-48 h-48 bg-zinc-800 rounded-full mx-auto mb-6 overflow-hidden border-2 border-zinc-700 grayscale hover:grayscale-0 transition-all">
            <img src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?fit=crop&w=400&h=400" className="w-full h-full object-cover" />
         </div>
         <h3 className="text-2xl font-bold text-white mb-1">امیرحسین شریفی نژاد</h3>
         <div className="text-[#2D6BFF] text-sm font-bold uppercase tracking-widest mb-4">software engineer</div>
         <div className="inline-block bg-zinc-900 px-4 py-1 rounded-full text-xs text-zinc-400 border border-zinc-800">تخصص توسعه نرم‌افزار و AI</div>
      </div>
    </div>
  </div>
);

// --- SLIDE 13: VISION ---
export const VisionSlide: React.FC<SlideProps> = ({ isActive }) => (
  <div className="h-full flex flex-col justify-center items-center text-center px-6 bg-black relative overflow-hidden">
    <div className={`z-10 relative max-w-4xl ${isActive ? 'animate-in zoom-in duration-1000' : 'opacity-0'}`}>
      <h2 className="text-7xl font-black text-white mb-12 tracking-tighter leading-tight">
        تبدیل <span className="text-zinc-600 line-through decoration-zinc-500">حدس</span> به <span className="text-[#2D6BFF]">اطمینان</span>.
      </h2>
      <p className="text-2xl text-zinc-400 font-light mb-20">
        آینده‌ای که در آن هیچ خرید دکوراسیونی با پشیمانی همراه نیست.
      </p>
      
      <div className="flex gap-8 justify-center items-center">
        <div className="text-left">
          <div className="text-sm text-zinc-500 uppercase tracking-widest mb-1">Contact</div>
          <div className="text-white font-bold text-xl">homadiginext@gmail.com</div>
        </div>
        <div className="w-[1px] h-12 bg-zinc-800"></div>
        <div className="text-left">
          <div className="text-sm text-zinc-500 uppercase tracking-widest mb-1">Website</div>
          <div className="text-white font-bold text-xl">myhoma.ir</div>
        </div>
      </div>
    </div>
    
    {/* Background Glow */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#2D6BFF] blur-[200px] opacity-10 pointer-events-none"></div>
  </div>
);
