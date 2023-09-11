import  { useState, useEffect,useRef } from 'react';
import CarouselItem from './CarouselItem';

const Carousel = ({ images }:{images: string[]}) => {
  const [currentItem, setCurrentItem] = useState(0);
  const containerRef = useRef<any>();
  const prevItem = useRef<number>(-1)

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

useEffect(() => {
  if(containerRef.current){
   let transform =  currentItem + 3 > images.length ?  -((images.length + 2)*10 + (currentItem+3)%10* 21) : -currentItem * 15
   containerRef.current.style.transform =  `translateX(calc(${transform}vw - 30px))`
   if((prevItem.current < currentItem && !(currentItem === images.length - 1 && prevItem.current === 0))  || (currentItem === 0 && prevItem.current === images.length -1) ){
    containerRef.current.querySelectorAll('.active').forEach((item:any) => item.classList.add('next'))
    containerRef.current.querySelectorAll('.active').forEach((item:any) => item.classList.remove('prev'))
   } else{
    containerRef.current.querySelectorAll('.active').forEach((item:any) => item.classList.add('prev'))
    containerRef.current.querySelectorAll('.active').forEach((item:any) => item.classList.remove('next'))
   }
  }
},[currentItem, images])
  


  // useEffect(() => {
  //   
  //   const interval = setInterval(() => {
  //     handleNext();
  //   }, 5000); // Change item every 5 seconds

  //   return () => clearInterval(interval);
  // }, [currentItem]);
  return (
    <div className="carousel">
      <div className="carousel-container" ref={containerRef}>
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
        imageUrl={images[0]}
        imageIdx={0}
        seletecIdx={currentItem}
        onItemClick={handleItemClick} 
        />

       <CarouselItem
        imageUrl={images[1]}
        imageIdx={1}
        seletecIdx={currentItem}
        onItemClick={handleItemClick} 
        />
      </div>
      <div className="nav-controls">
      <button onClick={handlePrev}>←</button>
      {
        Array(images.length).fill(null).map((_,idx) => (
          <div onClick={() => handleItemClick(idx)} className={`circle ${idx === currentItem && 'filled'}`}> </div>
        ))
      }
      <button onClick={handleNext}>→</button>
      </div>
    </div>
  );
};

export default Carousel;
