import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import img1 from "../images/1.png"
import img2 from "../images/2.png"
import img3 from "../images/3.jpeg"
import img4 from "../images/4.jpg"
import img5 from "../images/5.jpg"
import img6 from "../images/6.jpg"
import img7 from "../images/7.jpg"
import img8 from "../images/8.png"
import img9 from "../images/9.jpg"
import img10 from "../images/10.jpg"

const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };

  export default function Carosello() {
    return(
        <>
        <AnimationOnScroll
        animateIn='animate__fadeIn'
        >
          <h1 className='caroselloTitle' id='CYLONSECTION'>Cylons</h1>
        </AnimationOnScroll>
        <Carousel
        swipeable={true}
        draggable={false}
        showDots={true}
        centerMode={false}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlaySpeed={1500}
        keyBoardControl={true}
        customTransition="transform 500ms ease-in-out"
        transitionDuration={900}
        slidesToSlide={1}
        containerClass="carousel-container"
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px carosello"
        focusOnSelect={true}
        autoPlay={true}
        >
            <div className='imgCarosello' style={{backgroundImage: `url(${img1})`}}></div>
            <div className='imgCarosello' style={{backgroundImage: `url(${img2})`}}></div>
            <div className='imgCarosello' style={{backgroundImage: `url(${img3})`}}></div>
            <div className='imgCarosello' style={{backgroundImage: `url(${img4})`}}></div>
            <div className='imgCarosello' style={{backgroundImage: `url(${img5})`}}></div>
            <div className='imgCarosello' style={{backgroundImage: `url(${img6})`}}></div>
            <div className='imgCarosello' style={{backgroundImage: `url(${img7})`}}></div>
            <div className='imgCarosello' style={{backgroundImage: `url(${img8})`}}></div>
            <div className='imgCarosello' style={{backgroundImage: `url(${img9})`}}></div>
            <div className='imgCarosello' style={{backgroundImage: `url(${img10})`}}></div>

        </Carousel>
        </>

    )
  }
  