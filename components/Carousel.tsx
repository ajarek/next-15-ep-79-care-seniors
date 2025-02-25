'use client';

import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';

// Definicje typów
interface Image {
  src: string;
  alt?: string;
  caption?: string;
}

interface CarouselProps {
  images: Image[];
  autoPlayInterval?: number;
  family:string
}

export default function Carousel({ images, autoPlayInterval = 5000, family }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const autoPlayRef = useRef<() => void | null>(null);

  // Obsługa automatycznego przewijania
  useEffect(() => {
    const autoPlay = () => {
      setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    autoPlayRef.current = autoPlay;
  }, [images.length]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (autoPlayRef.current) {
        autoPlayRef.current();
      }
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [autoPlayInterval]);

  // Funkcje do nawigacji
  const nextSlide = (): void => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const prevSlide = (): void => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const goToSlide = (index: number): void => {
    setCurrentIndex(index);
  };

  // Obsługa gestów dotykowych
  const handleTouchStart = (e: React.TouchEvent): void => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent): void => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = (): void => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }
    
    setTouchStart(null);
    setTouchEnd(null);
  };

  return (
    <div className="relative w-full overflow-hidden rounded-lg">
      {/* Główny kontener karuzeli */}
      <div 
        className="flex transition-transform duration-500 ease-in-out h-64 md:h-96 lg:h-128 "
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {images.map((image, index) => (
          <div 
            key={index} 
            className="min-w-full flex-shrink-0 relative"
          >
            <Image 
              src={image.src} 
              alt={image.alt || 'Carousel image'} 
              width={800} 
              height={450} 
              className="w-full h-full object-cover"
            />
            {image.caption && (
              <div className="absolute top-0 bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2 md:p-4">
                <p className={`${family} text-2xl max-sm:text-xl `} >{image.caption}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Kontrolki nawigacji */}
      <button 
        onClick={prevSlide} 
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75 rounded-full p-2 focus:outline-none"
        aria-label="Previous slide"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      
      <button 
        onClick={nextSlide} 
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75 rounded-full p-2 focus:outline-none"
        aria-label="Next slide"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Wskaźniki slajdów */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? 'bg-white' : 'bg-white bg-opacity-50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}