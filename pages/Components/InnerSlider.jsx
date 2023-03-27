
import Slider from "react-slick";
import { MdArrowLeft, MdArrowRight } from 'react-icons/md'
import img1 from '../../public/asssets/p1.png'
import img2 from '../../public/asssets/p2.png'
import img3 from '../../public/asssets/p3.png'
import img4 from '../../public/asssets/p4.png'
import logo from '../../public/asssets/logo.png'
import company1 from '../../public/asssets/g12.png'
import Image from 'next/image';
import data from '../../public/data.json'
import Timer from "./Timer";




function InnerSliderNextArrow(props) {
    const { onClick } = props;
    return (
        <div
            style={{ display: "block", color: 'white ', fontSize: '3rem', backgroundColor: 'transparent', zIndex: '2', position: 'absolute', top: '13rem', right: 10 }}
            onClick={onClick} >  <MdArrowRight />
        </div>
    );
}
function InnerSliderPrevArrow(props) {
    const { onClick } = props;
    return (
        <div
            style={{ display: "block", color: 'white ', fontSize: '3rem', backgroundColor: 'transparent', zIndex: '2', position: 'absolute', top: '13rem', left: 10 }}
            onClick={onClick} >  <MdArrowLeft />
        </div>
    );
}

const innerSlider = () => {
    const listings = data.listing.map(listing => ({
        id: listing.id,
        img: listing.first_image,
        timer: listing.expiry,
    }));

  

    const settings = {
        className: "",
        dots: true,

        dotsClass: 'slick-dots custom-dots',
        customPaging: (i) => (
            <div className="custom-dot">
                <div className="bar "></div>
            </div>
        ),
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
        nextArrow: <InnerSliderNextArrow />,
        prevArrow: <InnerSliderPrevArrow />,
    };
    return (
        <>
            <div className="container">
                <Slider {...settings}>
                {listings.map(listing => (
                    <div key={listing.id} >
                        <div className='relative rounded-[2rem]'>
                            <div className=""> <img src={listing.img} alt=""  className="rounded-[1rem] w-[350px] h-[430px]" /></div>

                            <div className="Timer absolute top-0 left-0 px-3 md:w-[95%] h-32 rounded-lg"></div>
                            <div className="absolute top-0 left-0 px-5 pt-1">

                            <Timer expireDate={new Date(listing.timer).getTime()}/>

                            </div>

                            <div className="Timer absolute bottom-0 left-0 px-3 w-[95%] h-32 rounded-lg"></div>
                            <div className="absolute bottom-2 px-5 text-white text-center">
                                <span className=" text-center text-[13px]">SHELTON STREET CONVENT LONDON WC2H UNITED KINGDOM</span>
                                <div className="flex justify-between items-center">
                                    <Image src={logo} alt='' />
                                    <div className="flex flex-col">
                                        <span className="text-[10px]">€ 5,000,000 GPA</span>
                                        <span className="text-[6px]">#ZM7861234567</span>
                                    </div>
                                    <Image src={company1} alt='' />

                                </div>
                            </div>
                            <div className="absolute bottom-5 right-24 rounded-full px-1 text-center text-white border-b-2 border-r-2 border-[#BE9F56]"><span className="text-[8px]">23%</span></div>


                        </div>
                        <div className="relative mt-2 py-3 bg-black rounded-2xl w-[97%] text-white">
                            <div className="flex justify-evenly text-[12px]">
                                <span className="">€25.00 GBP</span>
                                <span className="">BUY ENTRY NOW</span>
                            </div>
                            <span className="absolute bottom-0 right-4 text-[8px] ">#ZM7861234567</span>
                        </div>


                    </div>
                ))}
                    {/* <div >
                        <div className='relative'>
                            <div className=""> <Image src={img2} alt="" width={350} /></div>

                            <div className="Timer absolute top-0 left-0 px-3 w-[95%] h-20 rounded-lg"></div>
                            <div className="absolute top-0 left-0 px-5">
                            <div className="text-white flex gap-10 pt-3  font-normal  ">
                                    <div className="flex flex-col gap-1 items-center">
                                        <span className="text-[2rem] font-[100] ">78</span>
                                        <span className="text-[10px]">DAYS</span>
                                    </div>

                                    <div className="flex flex-col gap-1 items-center">
                                        <span className="text-[2rem] font-[100]">06</span>
                                        <span className="text-[10px]">HOURS</span>
                                    </div>

                                    <div className="flex flex-col gap-1 items-center">
                                        <span className="text-[2rem] font-[100]">07</span>
                                        <span className="text-[10px]">MINUTES</span>
                                    </div>
                                    <div className="flex flex-col gap-1 items-center">
                                        <span className="text-[2rem] font-[100]">08</span>
                                        <span className="text-[10px]">SECONDS</span>
                                    </div>
                                </div>
                            </div>

                            <div className="Timer absolute bottom-0 left-0 px-3 w-[95%] h-20 rounded-lg"></div>
                            <div className="absolute bottom-2 px-5 text-white text-center">
                                <span className=" text-center text-[13px]">SHELTON STREET CONVENT LONDON WC2H UNITED KINGDOM</span>
                                <div className="flex justify-between items-center">
                                    <Image src={logo} alt='' />
                                    <div className="flex flex-col">
                                        <span className="text-[10px]">€ 5,000,000 GPA</span>
                                        <span className="text-[6px]">#ZM7861234567</span>
                                    </div>
                                    <Image src={company1} alt='' />

                                </div>
                            </div>
                            <div className="absolute bottom-5 right-24 rounded-full px-1 text-center text-white border-b-2 border-r-2 border-[#BE9F56]"><span className="text-[8px]">23%</span></div>


                        </div>
                        <div className="relative mt-2 py-3 bg-black rounded-2xl w-[97%] text-white">
                            <div className="flex justify-evenly text-[12px]">
                                <span className="">€25.00 GBP</span>
                                <span className="">BUY ENTRY NOW</span>
                            </div>
                            <span className="absolute bottom-0 right-4 text-[8px] ">#ZM7861234567</span>
                        </div>

                    </div>
                    <div >
                        <div className='relative'>
                            <div className=""> <Image src={img3} alt="" width={350} /></div>

                            <div className="Timer absolute top-0 left-0 px-3 w-[95%] h-20 rounded-lg"></div>
                            <div className="absolute top-0 left-0 px-5">
                            <div className="text-white flex gap-10 pt-3 font-normal  ">
                                    <div className="flex flex-col gap-1 items-center">
                                        <span className="text-[2rem] font-[100] ">78</span>
                                        <span className="text-[10px]">DAYS</span>
                                    </div>

                                    <div className="flex flex-col gap-1 items-center">
                                        <span className="text-[2rem] font-[100]">06</span>
                                        <span className="text-[10px]">HOURS</span>
                                    </div>

                                    <div className="flex flex-col gap-1 items-center">
                                        <span className="text-[2rem] font-[100]">07</span>
                                        <span className="text-[10px]">MINUTES</span>
                                    </div>
                                    <div className="flex flex-col gap-1 items-center">
                                        <span className="text-[2rem] font-[100]">08</span>
                                        <span className="text-[10px]">SECONDS</span>
                                    </div>
                                </div>
                            </div>

                            <div className="Timer absolute bottom-0 left-0 px-3 w-[95%] h-20 rounded-lg"></div>
                            <div className="absolute bottom-2 px-5 text-white text-center">
                                <span className=" text-center text-[13px]">SHELTON STREET CONVENT LONDON WC2H UNITED KINGDOM</span>
                                <div className="flex justify-between items-center">
                                    <Image src={logo} alt='' />
                                    <div className="flex flex-col">
                                        <span className="text-[10px]">€ 5,000,000 GPA</span>
                                        <span className="text-[6px]">#ZM7861234567</span>
                                    </div>
                                    <Image src={company1} alt='' />

                                </div>
                            </div>
                            <div className="absolute bottom-5 right-24 rounded-full px-1 text-center text-white border-b-2 border-r-2 border-[#BE9F56]"><span className="text-[8px]">23%</span></div>


                        </div>
                        <div className="relative mt-2 py-3 bg-black rounded-2xl w-[97%] text-white">
                            <div className="flex justify-evenly text-[12px]">
                                <span className="">€25.00 GBP</span>
                                <span className="">BUY ENTRY NOW</span>
                            </div>
                            <span className="absolute bottom-0 right-4 text-[8px] ">#ZM7861234567</span>
                        </div>

                    </div>
                    <div >
                        <div className='relative'>
                            <div className=""> <Image src={img4} alt="" width={350} /></div>

                            <div className="Timer absolute top-0 left-0 px-3 w-[95%] h-36 rounded-lg"></div>
                            <div className="absolute top-0 left-0 px-5">
                            <div className="text-white flex pt-3 gap-10  font-normal  ">
                                    <div className="flex flex-col gap-1 items-center">
                                        <span className="text-[2rem] font-[100] ">78</span>
                                        <span className="text-[10px]">DAYS</span>
                                    </div>

                                    <div className="flex flex-col gap-1 items-center">
                                        <span className="text-[2rem] font-[100]">06</span>
                                        <span className="text-[10px]">HOURS</span>
                                    </div>

                                    <div className="flex flex-col gap-1 items-center">
                                        <span className="text-[2rem] font-[100]">07</span>
                                        <span className="text-[10px]">MINUTES</span>
                                    </div>
                                    <div className="flex flex-col gap-1 items-center">
                                        <span className="text-[2rem] font-[100]">08</span>
                                        <span className="text-[10px]">SECONDS</span>
                                    </div>
                                </div>
                            </div>

                            <div className="Timer absolute bottom-0 left-0 px-3 w-[95%] h-20 rounded-lg"></div>
                            <div className="absolute bottom-2 px-5 text-white text-center">
                                <span className=" text-center text-[13px]">SHELTON STREET CONVENT LONDON WC2H UNITED KINGDOM</span>
                                <div className="flex justify-between items-center">
                                    <Image src={logo} alt='' />
                                    <div className="flex flex-col">
                                        <span className="text-[10px]">€ 5,000,000 GPA</span>
                                        <span className="text-[6px]">#ZM7861234567</span>
                                    </div>
                                    <Image src={company1} alt='' />

                                </div>
                            </div>
                            <div className="absolute bottom-5 right-24 rounded-full px-1 text-center text-white border-b-2 border-r-2 border-[#BE9F56]"><span className="text-[8px]">23%</span></div>


                        </div>
                        <div className="relative mt-2 py-3 bg-black rounded-2xl w-[97%] text-white">
                            <div className="flex justify-evenly text-[12px]">
                                <span className="">€25.00 GBP</span>
                                <span className="">BUY ENTRY NOW</span>
                            </div>
                            <span className="absolute bottom-0 right-4 text-[8px] ">#ZM7861234567</span>
                        </div>

                    </div> */}
                </Slider>

            </div>
        </>
    )
}

export default innerSlider;
