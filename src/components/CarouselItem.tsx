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
      className={`carousel-item ${imageIdx === seletecIdx  ? 'active' : ''}`}
      onClick={() => onItemClick(imageIdx)}
    >
      <img src={imageUrl} alt={`Item ${imageIdx}`} />
    </div>
  );
};

export default CarouselItem;
