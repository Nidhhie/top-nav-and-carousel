import  { useRef } from 'react';
import { useCarouselContext } from '../Context/CarouselContext';

const useCarousel = () => {
  const prevItem = useRef<number>(-1)
  const {currentItem, setCurrentItem, images} = useCarouselContext();

  const handleItemClick = (index:number) => {
    prevItem.current = currentItem
    setCurrentItem(index);
  };

  const handleNext = () => {
    prevItem.current = currentItem
    currentItem < images.length -1 ? setCurrentItem(currentItem + 1) : setCurrentItem(0)
  }

  const handlePrev = () => {
    prevItem.current = currentItem
    currentItem - 1 > 0? setCurrentItem(currentItem-1) :  setCurrentItem(images.length-1)
  };

  return {
    currentItem,
    handleItemClick,
    handleNext,
    handlePrev,
    prevItem: prevItem.current
  }
}

export default useCarousel