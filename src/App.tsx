import React from 'react';
import './sass/index.scss';
import TopNavigation from './components/TopNavigation';
import Title from './components/Title';
import CarouselContainer from './components/CarouselContainer';

function App() {
  return (
    <div className="App">
     <TopNavigation/>
     <Title heading="Featured Products" subHeading="Explore and discover a variety of products"/>
     <CarouselContainer/>
    </div>
  );
}

export default App;
