import React, { useRef } from 'react'
import Slider from "react-slick";
import { MdArrowForwardIos, MdArrowBackIos } from 'react-icons/md'
import Link from 'next/link';
import CustomSlider from './CustomSlider'


function SampleNextArrow(props) {
    const { onClick } = props;
    return (
        <div
            style={{  color: 'black ', fontSize: '1.5rem', backgroundColor: 'transparent', zIndex: '10',  }}
            onClick={onClick} className="absolute top-[-1.5rem] right-[45%] sm:top-[-3rem] sm:right-10 ">  <MdArrowForwardIos  />
        </div>
    );
}
function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
        <div
            style={{ color: 'black ', fontSize: '1.5rem', backgroundColor: 'transparent', zIndex: '10',}}
            onClick={onClick}  className="absolute top-[-1.5rem] right-[50%] sm:top-[-3rem] sm:right-16 " >  <MdArrowBackIos />
        </div>
    );
}



const MainSlider = () => {
    var settings = {
        touchThreshold:200,
        speed:500,
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
                breakpoint: 1880,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 1324,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                
                }
            },

            {
                breakpoint: 1180,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 1020,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
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
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    // const sliderRef = useRef(null);

    // const handleSwipe = (e, direction) => {
    //     if (direction === 'left') {
    //         sliderRef.current.slickNext();
    //     } else {
    //         sliderRef.current.slickPrev();
    //     }
    // };


    return (
        <>
            <div className=" relative !w-full md:px-12 px-5">
                <div className="topbar py-5 flex sm:justify-between sm:items-start flex-col sm:flex-row items-center px-5 tracking-[2px]">
                    <div className="">
                        <span className=" font-[300]">FEATURED</span>
                    </div>

                    <div className="md:mr-28 pb-1">
                        <Link href=''><span className="text-black hover:text-[#BE9F56]  font-[300] ">VIEW ALL HOME</span></Link>
                    </div>

                    <div className="arrow sm:block hidden">
            
                    </div>
                </div>
                <div className="">
                    <Slider {...settings}  className=''>
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
