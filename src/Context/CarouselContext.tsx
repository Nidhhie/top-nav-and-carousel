import React, { createContext, useContext, useState } from 'react';

interface CarouselContextType {
  currentItem: number;
  setCurrentItem: React.Dispatch<React.SetStateAction<number>>;
  images: string[]
}

const CarouselContext = createContext<CarouselContextType | undefined>(undefined);

export const CarouselProvider = ({ children,images }:{children: React.ReactNode,images: string[]}) => {
  const [currentItem, setCurrentItem] = useState<number>(0);

  return (
    <CarouselContext.Provider value={{ currentItem, setCurrentItem,images }}>
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
