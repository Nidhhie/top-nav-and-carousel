import { CarouselProvider } from '../Context/CarouselContext';
import Carousel from './Carousel';

import img1 from '../assets/img1.png'
import img2 from '../assets/img2.png'
import img3 from '../assets/img3.png'
import img4 from '../assets/img4.png'
import img5 from '../assets/img5.png'

const images  = [
  img1, img2, img3, img4,img5,img1, img2, img3, img4,img5
]

const CarouselContainer = () => {
    return(
    <CarouselProvider images={images}>
     <Carousel/>
    </CarouselProvider>
    )
}

export default CarouselContainer