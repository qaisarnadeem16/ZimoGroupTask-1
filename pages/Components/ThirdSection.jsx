import React, { useRef } from 'react'
import Slider from "react-slick";
import { MdArrowForwardIos, MdArrowBackIos } from 'react-icons/md'
import c1 from '../../public/asssets/c1.svg'
import c2 from '../../public/asssets/c2.svg'
import c3 from '../../public/asssets/c3.svg'
import c4 from '../../public/asssets/c4.svg'
import Image from 'next/image';


function SampleNextArrow(props) {
    const { onClick } = props;
    return (
        <div
            style={{ color: 'black ', fontSize: '1.5rem', backgroundColor: 'transparent', zIndex: '10', }}
            onClick={onClick} className="absolute top-[-2.5rem] right-5 sm:top-[-6rem] sm:right-10 ">  <MdArrowForwardIos />
        </div>
    );
}
function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
        <div
            style={{ color: 'black ', fontSize: '1.5rem', backgroundColor: 'transparent', zIndex: '10', }}
            onClick={onClick} className="absolute top-[-2.5rem] right-12 sm:top-[-6rem] sm:right-16 " >  <MdArrowBackIos />
        </div>
    );
}



const ThirdSection = () => {
    var settings = {
        touchThreshold: 200,
        speed: 500,
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


    return (
        <>
            <div className=" relative !w-full md:px-12 px-5 py-10" id='mainSlider'>
                <div className="topbar md:pb-16 pb-4 flex flex-start items-center px-5 ">
                    <div className="">
                        <span className=" font-[400] tracking-[3px] md:text-3xl text-xl text-black">Our Category</span>
                    </div>


                </div>
                <div className="">
                    <Slider {...settings} className='mx-auto'>
                        <div className=' '>
                            <div className="relative flex justify-center">
                                <Image src={c1} alt='' height={300} />
                                <div className="absolute bottom-5  text-white">
                                    <p className=''>REAL ESTATE</p>
                                </div>
                            </div>

                        </div>
                        <div className='shrink-0  '>
                            <div className="relative flex justify-center">
                                <Image src={c2} alt='' height={300} />
                                <div className="absolute bottom-5 text-white">
                                    <p>Cars</p>
                                </div>
                            </div>

                        </div>
                        <div className='shrink-0  '>
                            <div className="relative flex justify-center">
                                <Image src={c3} alt='' height={300} />
                                <div className="absolute bottom-5 text-white">
                                    <p>Yachts</p>
                                </div>
                            </div>

                        </div>
                        <div className='shrink-0  '>
                            <div className="relative flex justify-center">
                                <Image src={c4} alt='' height={300} />
                                <div className="absolute bottom-5 text-white">
                                    <p>Watches</p>
                                </div>
                            </div>

                        </div>
                        <div className='shrink-0  '>
                            <div className="relative flex justify-center">
                                <Image src={c1} alt='' height={300} />
                                <div className="absolute bottom-5  text-white">
                                <p className=''>REAL ESTATE</p>

                                </div>
                            </div>

                        </div>




                    </Slider>
                </div>
                <div className="">
                    <div className="py-12">
                        <h1 className="tracking-[3px] lg:text-3xl md:text-2xl text-2xl font-[500] mt-3 text-center">
                            ONE PLATFORM FOR ALL PREMIUM LISTINGS
                        </h1>
                    </div>

                    <div className="pb-10">
                        <h1 className="tracking-[3px] lg:text-3xl md:text-2xl text-2xl font-[300] mt-3 text-center">
                            UNLIMITED POTENTIAL
                        </h1>
                    </div>

                </div>
            </div>

        </>
    )
}

export default ThirdSection
