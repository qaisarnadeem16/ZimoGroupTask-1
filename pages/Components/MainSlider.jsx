import React, { useRef } from 'react'
import Slider from "react-slick";
import { MdArrowForwardIos, MdArrowBackIos } from 'react-icons/md'
import img1 from '../../public/asssets/p1.png'
import Image from 'next/image';
import Link from 'next/link';
import InnerSlider from './InnerSlider'


function SampleNextArrow(props) {
    const { onClick } = props;
    return (
        <div
            style={{ display: "block", color: 'black ', fontSize: '1.5rem', backgroundColor: 'transparent', zIndex: '10', position: 'absolute', top: '-3rem', right: 50 }}
            onClick={onClick} >  <MdArrowForwardIos className=""/>
        </div>
    );
}
function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
        <div
            style={{ display: "block", color: 'black ', fontSize: '1.5rem', backgroundColor: 'transparent', zIndex: '10', position: 'absolute', top: '-3rem', right: 100 }}
            onClick={onClick} >  <MdArrowBackIos className="" />
        </div>
    );
}



const MainSlider = () => {
    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,

        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
    };

    const sliderRef = useRef(null);

    const handleSwipe = (e, direction) => {
        if (direction === 'left') {
            sliderRef.current.slickNext();
        } else {
            sliderRef.current.slickPrev();
        }
    };


    return (
        <>
            <div className="container md:px-12 px-5 relative ">
                <div className="topbar py-5 flex justify-between ">
                    <div className="">
                        <span className="">FEATURED</span>
                    </div>

                    <div className="">
                        <Link href=''><span className="text-black">VIEW ALL HOME</span></Link>
                    </div>

                    <div className="arrow md:block hidden">

                    </div>
                </div>

                <div className="">
                    <Slider {...settings} ref={sliderRef} swipe onSwipe={handleSwipe} className=' '>
                        <div className=''>
                            <InnerSlider />
                        </div>
                        <div className=''>
                            <InnerSlider />
                        </div>
                        <div className=''>
                            <InnerSlider />
                        </div>
                        <div className=''>
                            <InnerSlider />
                        </div>
                        <div className=''>
                            <InnerSlider />
                        </div>
                        <div className=''>
                            <InnerSlider />
                        </div>
                       

                    </Slider>
                </div>
            </div>

        </>
    )
}

export default MainSlider
