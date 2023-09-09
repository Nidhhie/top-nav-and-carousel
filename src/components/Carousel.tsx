import React, { useState, useEffect } from 'react';

const Carousel = ({ images }:{images: string[]}) => {
  const [currentItem, setCurrentItem] = useState(0);

  const handleItemClick = (index:number) => {
    setCurrentItem(index);
  };

  const handleNext = () => {
    setCurrentItem((currentItem + 1) % images.length);
  };

  useEffect(() => {
    document.querySelector('.carousel-container')?.scrollTo({
        left: currentItem * 600,
        behavior: 'smooth',
      });
  }, [currentItem])

  const handlePrev = () => {
    setCurrentItem((currentItem - 1 + images.length) % images.length);
  };

  useEffect(() => {
    // Automatically switch to the next item after a delay (e.g., every 5 seconds)
    const interval = setInterval(() => {
      handleNext();
    }, 5000); // Change item every 5 seconds

    return () => clearInterval(interval);
  }, [currentItem]);

  return (
    <div className="carousel">
      <div className="carousel-container">
        {images.map((item, index) => (
          <div
            key={index}
            className={`carousel-item ${index === currentItem ? 'active' : ''}`}
            onClick={() => handleItemClick(index)}
          >
            <img src={item} alt={`Item ${index}`} />
          </div>
        ))}
      </div>
      <button className="prev-button" onClick={handlePrev}>Previous</button>
      <button className="next-button" onClick={handleNext}>Next</button>
    </div>
  );
};

export default Carousel;
