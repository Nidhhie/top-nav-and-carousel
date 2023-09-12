import React, { createContext, useContext, useState,useRef } from 'react';

interface CarouselContextType {
  currentItem: number;
  setCurrentItem: React.Dispatch<React.SetStateAction<number>>;
  images: string[];
  prevItem: any;
}

const CarouselContext = createContext<CarouselContextType | undefined>(undefined);

export const CarouselProvider = ({ children,images }:{children: React.ReactNode,images: string[]}) => {
  const [currentItem, setCurrentItem] = useState<number>(0);
  const prevItem = useRef<number>(-1)
  return (
    <CarouselContext.Provider value={{ currentItem, setCurrentItem,images , prevItem}}>
      {children}
    </CarouselContext.Provider>
  );
};

export const useCarouselContext = () => {
  const context = useContext(CarouselContext);
  if (context === undefined) {
    throw new Error('useCarousel must be used within a CarouselProvider');
  }
  return context;
};
