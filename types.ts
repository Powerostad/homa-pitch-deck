import { ReactNode } from 'react';

export interface SlideProps {
  isActive: boolean;
  internalStep?: number;
}

export interface DeckContextType {
  currentSlide: number;
  totalSlides: number;
  nextSlide: () => void;
  prevSlide: () => void;
  goToSlide: (index: number) => void;
}

export interface TeamMember {
  name: string;
  role: string;
  image: string;
  bg: string; // Background/University logo placeholder
}