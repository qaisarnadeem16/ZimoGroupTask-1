import React from 'react'
import logo from '../../public/asssets/Group 4743.svg'
import arrow from '../../public/asssets/arrowBlack.svg'
import Image from 'next/image'

const SecondSection = () => {
    return (
        <>
            <div className="w-full h-full">
                <div className="py-8  ">
                    <p className="uppercase text-center text-[14px] font-[400] tracking-[2px]">The real estate and property PLAFORm THat is changing the world</p>
                </div>
                <div className="xl:w-[60%] md:w-[70%] w-full  px-10 flex flex-col md:items-start items-center ">
                    <h1 className=" lg:tracking-[2px] lg:text-3xl md:text-2xl text-xl ">A REVOLUIONARY PLATFORM</h1>
                    <h1 className="tracking-[3px] lg:text-5xl md:text-3xl text-2xl font-[500] mt-3">ENTRIES - SELLERS</h1>
                    <h1 className="tracking-[6px] lg:text-7xl md:text-5xl text-4xl font-[500] mt-3">WORLDWIDE</h1>
                </div>

                <div className=" w-full px-10 flex md:justify-end md:py-0 py-10 ">
                    <div className="md:w-[40%] w-full ">
                        <Image src={logo} alt=''  className='mx-auto md:w-[100%] w-[70%]' />
                        <div className="pt-10 md:px-3">
                            <p className="uppercase text-center text-[17px] font-[400] tracking-[2px] leading-[40px]">COnnecting the user across the Global to facilitate Most important personal transaction </p>

                        </div>
                    </div>
                </div>

                <div className="md:w-[50%] w-full px-10">
                    <h1 className="tracking-[2px] md:text-3xl text-2xl">THE BEST OF THE BEST </h1>

                    <p className="pt-7 uppercase  text-[15px] font-[300] tracking-[1px] leading-[30px]">A COMBINATION OF AUTOMATION AND MANUAL CURATION OUR PRO AGENTS AND
                        MODERATION TEAM SELECTS THE HIGHEST QUALITY LISTINGS ON THE MARKET
                        FROM ACROSS THE WORLD</p>

                </div>

                <div className="flex justify-center pt-10 md:pt-8">
                 <Image src={arrow} alt='' className='w-[40px] scale-down animate-bounce'/>
                </div>


            </div>
        </>
    )
}

export default SecondSection
