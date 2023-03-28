import React, { useRef } from 'react'
import Slider from "react-slick";
import { MdArrowForwardIos, MdArrowBackIos } from 'react-icons/md'
import Link from 'next/link';
import CustomSlider from './CustomSlider'


function SampleNextArrow(props) {
    const { onClick } = props;
    return (
        <div
            style={{ display: "block", color: 'black ', fontSize: '1.5rem', backgroundColor: 'transparent', zIndex: '10', position: 'absolute', top: '-3rem', right: 50 }}
            onClick={onClick} >  <MdArrowForwardIos className="md:block hidden" />
        </div>
    );
}
function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
        <div
            style={{ display: "block", color: 'black ', fontSize: '1.5rem', backgroundColor: 'transparent', zIndex: '10', position: 'absolute', top: '-3rem', right: 100 }}
            onClick={onClick} >  <MdArrowBackIos className="md:block hidden" />
        </div>
    );
}



const MainSlider = () => {
    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        initialSlide: 0,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1680,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 1224,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },

            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
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
            <div className=" relative !w-full md:px-12 px-5">
                <div className="topbar py-5 flex justify-between ">
                    <div className="tracking-[2px]">
                        <span className="">FEATURED</span>
                    </div>

                    <div className="">
                        <Link href=''><span className="text-black hover:text-blue-700">VIEW ALL HOME</span></Link>
                    </div>

                    <div className="arrow md:block hidden">

                    </div>
                </div>
                <div className="">
                    <Slider {...settings} ref={sliderRef} swipe onSwipe={handleSwipe} className=''>
                        <div className='shrink-0  '>
                            <CustomSlider />
                        </div>
                        <div className='shrink-0'>
                            <CustomSlider />
                        </div> <div className='shrink-0 '>
                            <CustomSlider />
                        </div> <div className='shrink-0 '>
                            <CustomSlider />
                        </div> <div className='shrink-0 '>
                            <CustomSlider />
                        </div> <div className='shrink-0 '>
                            <CustomSlider />
                        </div> <div className='shrink-0 '>
                            <CustomSlider />
                        </div>



                    </Slider>
                </div>
            </div>

        </>
    )
}

export default MainSlider
