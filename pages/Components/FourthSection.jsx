import React from 'react'
import logo from '../../public/asssets/Group 4758.svg'
import img from '../../public/asssets/Group 4762.svg'
import Image from 'next/image'

const FourthSection = () => {
    return (
        <>
            <div className="w-full h-full pb-10 md:px-16 px-10">
                <div className="flex md:flex-row flex-col">
                    <div className="md:w-[40%] w-full flex flex-col justify-center items-start">
                        <Image src={logo} alt='' width={450} />
                        <h1 className="pt-5 tracking-[3px] lg:text-3xl md:text-2xl text-2xl font-[300] mt-3 text-center">
                            ONE SOURCE
                        </h1>

                        <h1 className=" tracking-[4px] lg:text-4xl md:text-3xl text-2xl font-[400] mt-3 text-center">
                            ENTRY TICKETS
                        </h1>
                        <h1 className="py-5 text-[14px] tracking-[2px] text-[#737373]">FOR ALL PREMIUM TICKETS</h1>

                    </div>
                    <div className="md:w-[60%] w-full ">
                        <Image src={img} alt='' />

                    </div>
                </div>
            </div>
        </>
    )
}

export default FourthSection
