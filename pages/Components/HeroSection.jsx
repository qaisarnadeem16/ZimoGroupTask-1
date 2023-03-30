import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import {BiArrowBack} from 'react-icons/bi'
import arrow from '../../public/asssets/arrow.svg'


const HeroSection = () => {
  return (
    <>
    <div className="text-white py-5 px-2 md:px-8 w-[100%]">
        <div className="">
            <Link href='' className='flex gap-2 items-center'><BiArrowBack/> BACK</Link>
        </div>

        <div className="text flex flex-col justify-center md:items-start items-center h-[60vh] gap-4">
          <h1 className="text-3xl tracking-[3px]">DISCOVER</h1>
          <h1 className="text-4xl tracking-[5px]"> A NEW WORLD</h1>
          <h1 className="text-[14px] tracking-[2px] text-[#737373]">FOR THOSE WHO WISH FOR MORE...</h1>
        </div>
        <div className="pt-24 flex flex-col gap-7 items-center">
          <h1 className="text-[14px] tracking-[2px] text-[#737373]">BRINGING THE WORLD CLOSER TOGETHER</h1>
         <Link href='#mainSlider' >  <Image src={arrow} alt='' className='w-[40px] scale-down animate-bounce'/>
         </Link>

        </div>
    </div>
    </>
  )
}

export default HeroSection
