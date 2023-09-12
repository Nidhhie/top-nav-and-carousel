import { useCarouselContext } from '../Context/CarouselContext';
import useCarousel from '../hooks/useCarousel';

const SliderNav = () => {
  const {images, currentItem} = useCarouselContext()
   const {handlePrev, handleNext, handleItemClick} = useCarousel();
return(
    <div className="nav-controls">
      <button onClick={handlePrev}>←</button>
      {
        Array(images.length).fill(null).map((_,idx) => (
          <div onClick={() => handleItemClick(idx)} className={`circle ${idx === currentItem && 'filled'}`}> </div>
        ))
      }
      <button onClick={handleNext}>→</button>
    </div>
)

}

export default SliderNav