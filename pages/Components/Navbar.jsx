import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import logo1 from '../../public/asssets/Group 3005.svg'
import flag from '../../public/asssets/Group 3035.svg'
import cart from '../../public/asssets/cart.svg'
import profile from '../../public/asssets/profile.svg'
import logo2 from '../../public/asssets/logo2.svg'
import logo3 from '../../public/asssets/logo3.svg'
import Clock from 'react-clock';
import moment from 'moment';

const Navbar = () => {
    const [location, setLocation] = useState(null);
    const [countryInfo, setCountryInfo] = useState(null);
    const [time, setTime] = useState(moment());
    const [date, setDate] = useState(null);

    useEffect(() => {
        // Fetch user's location data using geolocation-db API
        fetch('https://geolocation-db.com/json/')
            .then(response => response.json())
            .then(data => setLocation(data));

        // Fetch country data using restcountries API
        fetch(`https://restcountries.com/v2/alpha/${location?.country_code}`)
            .then(response => response.json())
            .then(data => setCountryInfo(data));
    }, [location]);

    useEffect(() => {
        // Set current date using the Date object
        const currentDate = new Date();
        setDate(moment(currentDate).format('dddd, MMMM Do YYYY'));
    }, []);

    useEffect(() => {
        // Set current date using the Date object
        const currentDate = new Date();
        setDate(moment(currentDate).format('dddd, MMMM Do YYYY'));
    }, []);

    useEffect(() => {
        // Update time every 1 minute
        const interval = setInterval(() => {
            setTime(moment());
        }, 60000);
        return () => clearInterval(interval);
    }, []);


    return (
        <>

            <div className="py-5 px-2 md:px-8 w-[100%] flex justify-between items-center">
                <div className="text-white flex gap-x-5 ">
                    <div className=""><Image src={logo2} alt='' className='md:w-[40px] w-[30px]' /></div>
                    <div className="lg:block hidden"><Image src={logo3} alt='' className='w-[100px] ' /></div>
                    <div className="md:flex items-end tracking-[2px] uppercase text-[12px] hidden"><Link href='/'>About</Link></div>
                </div>

                <div className=" flex items-center justify-end md:ml-20 ml-16">
                    <Image src={logo1} alt='' className="md:w-[120px] w-[70px]" />
                </div>

                <div className="flex gap-2">
                    <div className="text-white text-[9px] xl:text-[12px] md:block hidden">
                        <div className="flex lg:tracking-[2px] gap-x-2">
                            <p>{time.format('h:mm A')}</p>
                            {location && (
                                <div className='flex gap-x-2'>
                                    <p className="">{location.city}</p>
                                    <p className="">{location.country_name}</p>
                                </div>
                            )}
                        </div>
                      
                            {time && (
                                <div>
                                    <Clock value={time.toDate()} />
                                     <p className="text-[8px] xl:text-[12px] text-[#BE9F56] flex justify-end"> {date}</p>
                                </div>
                            )}
                    

                    </div>
                    <div className="flex justify-center items-center gap-x-3 md:gap-x-5 lg:gap-x-12">
                    {countryInfo && (   <Image src={countryInfo.flag} alt='' width={50} height={50} className='' />)}

                        <div className="">
                            <Link href='/' ><Image src={cart} alt='' className='w-[20px]' /></Link>
                        </div>

                        <div className="">
                            <Link href='/' ><Image src={profile} alt='' className='w-[20px]' /></Link>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Navbar
