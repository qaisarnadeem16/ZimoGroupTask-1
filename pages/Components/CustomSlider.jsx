import Image from "next/image";
import React, { useState } from "react";
import data from "../../public/data.json";
import Timer from "./Timer";
import { MdArrowLeft, MdArrowRight } from 'react-icons/md'
import { AiOutlineShareAlt, AiFillHeart } from 'react-icons/ai'
import logo from '../../public/asssets/logo1.svg'
import company1 from '../../public/asssets/g12.svg'


const Dot = ({ active, onClick }) => {
    const style = {
        cursor: "pointer",
        height: "2px",
        width: "15px",
        backgroundColor: active ? "grey" : "white",
        margin: "0 3px",
        display: "inline-block"
    };
    return <span style={style} onClick={onClick} />;
};

const CustomSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const images = [];

    const listings = data.listing.map((listing) => ({
        id: listing.id,
        img: listing.first_image,
        timer: listing.expiry,
    }));

    listings.forEach((listing) => {
        images.push(listing.img);
    });

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => {
            if (prevIndex === images.length - 1) {
                return 0;
            }
            return prevIndex + 1;
        });
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => {
            if (prevIndex === 0) {
                return images.length - 1;
            }
            return prevIndex - 1;
        });
    };
    const handleDotClick = (index) => {
        setCurrentIndex(index);
    };

    const [isRed, setIsRed] = useState(false);
    const toggleColor = () => {
        setIsRed(!isRed);
    };
    return (
        <>
            <div className="slider">
                <div className='relative'>
                    <div className='relative rounded-[2rem] overflow-hidden flex gap-5 w-[95%]'>
                        <div className=""> <img src={images[currentIndex]} alt="" className="rounded-[1rem]  w-[100%] h-[400px] overflow-hidden" /></div>

                        <div className="Timer absolute top-0 left-0 px-3 w-[100%] h-24 rounded-lg"></div>
                        <div className="absolute w-full flex justify-center top-0 left-0 px-5 pt-1">


                            <Timer expireDate={new Date('2023-04-27 00:00:00').getTime()} />


                        </div>
                        <div className="flex gap-3  justify-end absolute top-24 right-6 text-xl">
                            <AiOutlineShareAlt className="text-white" />
                            <AiFillHeart className="" onClick={toggleColor}
                                color={isRed ? "#B00000" : "white"}
                                size={24} />
                        </div>

                        <div className="Timer absolute bottom-0 left-0 px-3 w-[100%]  h-32 rounded-lg"></div>
                        <div className="absolute bottom-2 px-5 text-white text-center">
                            <span className=" text-center md:text-[13px] text-[12px] leading-[1px] ">SHELTON STREET CONVENT LONDON WC2H UNITED KINGDOM</span>
                            <div className="flex justify-between items-center pt-2">
                                <Image src={logo} alt='' />
                                <div className="flex flex-col">
                                    <span className="text-[13px] md:text-[10px]">€ 5,000,000 GPA</span>
                                    <span className="text-[10px] md:text-[7px] tracking-widest">#ZM7861234567</span>
                                </div>
                                <Image src={company1} alt='' width={60} />

                            </div>
                        </div>
                        <div className="absolute bottom-10 md:bottom-5 md:right-24 right-16 rounded-full  px-1 text-center text-white border-b-2 border-r-2 border-[#BE9F56]"><span className="text-[8px]">23%</span></div>

                        <div className="slider__dots absolute md:bottom-24 bottom-28 w-full flex justify-center">
                            {images.map((image, index) => (
                                <Dot key={index} active={index === currentIndex} onClick={() => handleDotClick(index)} />
                            ))}
                        </div>
                    </div>
                    <div className="relative mt-2 py-3 bg-black rounded-2xl w-[95%]  text-white">
                        <div className="flex ml-7 gap-12 text-[14px]  font-[200]">
                            <span className="">€25.00 GBP</span>
                            <span className="">BUY ENTRY NOW</span>
                        </div>
                        <span className="absolute bottom-0 right-4 text-[9px]  ">#ZM7861234567</span>
                    </div>
                    <div className="slider__controls">
                        <button onClick={nextSlide} > <MdArrowRight className="block text-white text-[3rem] absolute top-[11rem] right-3" /></button>
                        <button onClick={prevSlide}>  <MdArrowLeft className="block text-white text-[3rem] absolute top-[11rem] left-3" />
                        </button>
                    </div>

                </div>


            </div>
        </>
    );
};

export default CustomSlider;
