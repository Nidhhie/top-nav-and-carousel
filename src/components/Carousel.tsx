import React, { useState, useEffect } from 'react';
import CarouselItem from './CarouselItem';

const Carousel = ({ images }:{images: string[]}) => {
  const [currentItem, setCurrentItem] = useState(0);

  const handleItemClick = (index:number) => {
    setCurrentItem(index);
  };

  const handleNext = () => {
    if(currentItem < images.length -1 ){
  setCurrentItem(currentItem + 1);
  }
  else{
    setCurrentItem(0)
  }
}

useEffect(() => {
  const container:any = document.querySelector('.carousel-container')
  container.style.transform =  currentItem + 3 > images.length ?  `translateX(-${(images.length + 2) *10+(((currentItem+3)%10) * 10)}vw)` : `translateX(-${currentItem * 10}vw)`
},[currentItem])
  
  const handlePrev = () => {
    if(currentItem - 1 > 0){
    setCurrentItem(currentItem-1);
    }
    else{
      setCurrentItem(images.length-1)
    }
  };

  // useEffect(() => {
  //   // Automatically switch to the next item after a delay (e.g., every 5 seconds)
  //   const interval = setInterval(() => {
  //     handleNext();
  //   }, 5000); // Change item every 5 seconds

  //   return () => clearInterval(interval);
  // }, [currentItem]);
  return (
    <div className="carousel">
      <div className="carousel-container">
        <CarouselItem
        imageUrl={images[images.length-2]}
        imageIdx={images.length-2}
        seletecIdx={currentItem}
        onItemClick={handleItemClick} 
        />
        <CarouselItem
        imageUrl={images[images.length-1]}
        imageIdx={images.length-1}
        seletecIdx={currentItem}
        onItemClick={handleItemClick} 
        />
        {images.map((item, index) => (
             <CarouselItem
             imageUrl={item}
             imageIdx={index}
             seletecIdx={currentItem}
             onItemClick={handleItemClick} 
             />
        ))}
       <CarouselItem
        imageUrl={images[1]}
        imageIdx={1}
        seletecIdx={currentItem}
        onItemClick={handleItemClick} 
        />
      <CarouselItem
        imageUrl={images[0]}
        imageIdx={0}
        seletecIdx={currentItem}
        onItemClick={handleItemClick} 
        />
      </div>
      <button className="prev-button" onClick={handlePrev}>Previous</button>
      <button className="next-button" onClick={handleNext}>Next</button>
    </div>
  );
};

export default Carousel;
