import  { FC } from 'react';

interface CarouselItemProps {
  imageUrl: string;
  imageIdx: number;
  seletecIdx: number;
  onItemClick: (idx:number) => void;
}

const CarouselItem: FC<CarouselItemProps> = ({
  imageUrl,
  imageIdx,
  seletecIdx,
  onItemClick,
}) => {
  return (
    <div
      className={`carousel-item ${imageIdx === seletecIdx  ? 'active' :(imageIdx === seletecIdx+1 || imageIdx === seletecIdx-1 || imageIdx + seletecIdx === 9) ? 'sibling-active' : ''}`}
      onClick={() => onItemClick(imageIdx)}
    >
      <img src={imageUrl} alt={`Item ${imageIdx}`} />
    </div>
  );
};

export default CarouselItem;
