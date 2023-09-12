import  {  useEffect,useRef } from 'react';
import useCarousel from '../hooks/useCarousel';
import CarouselItem from './CarouselItem';
import { useCarouselContext } from '../Context/CarouselContext';
import SliderNav from './SliderNav';

const Carousel = () => {
  const containerRef = useRef<any>();
  const {currentItem, images} = useCarouselContext();
  const { prevItem, handleNext} = useCarousel();

useEffect(() => {
  console.log(prevItem, currentItem)
  if(containerRef.current){
   let transform =  currentItem + 3 > images.length ?  -((images.length + 2)*10 + (currentItem+3)%10* 21) : -currentItem * 15
   containerRef.current.style.transform =  `translateX(calc(${transform}vw - 30px))`
   if((prevItem < currentItem && !(currentItem === images.length - 1 && prevItem === 0))  || (currentItem === 0 && prevItem === images.length -1) ){
    containerRef.current.querySelectorAll('.active').forEach((item:any) => item.classList.add('next'))
    containerRef.current.querySelectorAll('.active').forEach((item:any) => item.classList.remove('prev'))
   } else{
    containerRef.current.querySelectorAll('.active').forEach((item:any) => item.classList.add('prev'))
    containerRef.current.querySelectorAll('.active').forEach((item:any) => item.classList.remove('next'))
   }
  }
},[currentItem, images, prevItem])
  
  useEffect(() => {
    
    const interval = setInterval(() => {
      handleNext();
    }, 3000); 

    return () => clearInterval(interval);
  }, [currentItem,handleNext]);
  
  return (
    <div className="carousel">
      <div className="carousel-container" ref={containerRef}>
        <CarouselItem
        imageUrl={images[images.length-2]}
        imageIdx={images.length-2}
        />
        <CarouselItem
        imageUrl={images[images.length-1]}
        imageIdx={images.length-1}
        />
        {images.map((item, index) => (
             <CarouselItem
             imageUrl={item}
             imageIdx={index}
             />
        ))}
        <CarouselItem
        imageUrl={images[0]}
        imageIdx={0}
        />

       <CarouselItem
        imageUrl={images[1]}
        imageIdx={1} 
        />
      </div>
      <SliderNav/>

    </div>
  );
};

export default Carousel;
