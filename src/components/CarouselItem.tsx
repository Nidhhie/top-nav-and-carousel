import  { FC } from 'react';
import { useCarouselContext } from '../Context/CarouselContext';
import useCarousel from '../hooks/useCarousel';

interface CarouselItemProps {
  imageUrl: string;
  imageIdx: number;
}

const CarouselItem: FC<CarouselItemProps> = ({
  imageUrl,
  imageIdx
}) => {
  const {currentItem} = useCarouselContext();
  const {handleItemClick} = useCarousel();

  return (
    <div
      className={`carousel-item ${imageIdx === currentItem  ? 'active' :(imageIdx === currentItem+1 || imageIdx === currentItem-1 || imageIdx + currentItem === 9) ? 'sibling-active' : ''}`}
      onClick={() => handleItemClick(imageIdx)}
    >
      <img src={imageUrl} alt={`Item ${imageIdx}`} />
    </div>
  );
};

export default CarouselItem;
