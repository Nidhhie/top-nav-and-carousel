import React from 'react';
import './sass/index.scss';
import Carousel from './components/Carousel';
import TopNavigation from './components/TopNavigation';
import img1 from './assets/img1.png'
import img2 from './assets/img2.png'
import img3 from './assets/img3.png'
import img4 from './assets/img4.png'
import img5 from './assets/img5.png'


const images  = [
  img1, img2, img3, img4,img5,img1, img2, img3, img4,img5
]
function App() {
  return (
    <div className="App">
     <TopNavigation/>
     <Carousel images={images}/>
    </div>
  );
}

export default App;
