import React from 'react'
import { HiLocationMarker, HiMail, HiPhone } from "react-icons/hi";
import { BsFacebook, BsLinkedin, BsTwitter } from "react-icons/bs";
import Image from 'next/image';
import Link from 'next/link';
import Mappage from './Mappage';

const Footer = () => {
    return (
        <div className='w-full bg-[#14213d] font-sans'>
            <div className='pt-10 px-6 md:px-32'>
                <Image src="/image/logo.png" width={400} height={80} quality={100} alt='image' />
            </div>
            <div className='md:w-[1240px] md:grid md:grid-cols-3 mx-5 md:mx-auto'>
                <div className='  md:grid '>
                    <div className='mt-5 mx-auto w-full'>
                        <h1 className='font-sans text-white text-center md:text-left text-2xl md:text-xl font-bold'>Get in Touch</h1>
                        <div className='flex m-auto  text-white px-2 md:px-0  py-2'>
                            <HiLocationMarker size={30} className='mt-3' />
                            <p className='text-white  text-xs tracking-widest py-2  ml-4'>3.1 Universal Square, Devonshire St North, Manchester M12 6JH</p>
                        </div>
                        <div className='flex m-auto text-white px-2 md:px-0  py-2'>
                            <HiPhone size={30} />
                            <p className='text-white text-sm tracking-widest py-2 ml-4'>0161 974 6110</p>
                        </div>
                        <div className='flex m-auto text-white px-2 md:px-0  py-2'>
                            <HiMail size={30} />
                            <p className='text-white tracking-widest text-sm py-2 ml-4'>info@magnetrecruit.com</p>
                        </div>
                        <div className='flex m-auto text-white px-2 md:px-0  py-2'>
                            <p className='text-white text-center tracking-wide md:mx-0 mx-auto text-sm'>Interact with Us on Social Media</p>
                        </div>
                        <div className='flex md:justify-start justify-center  gap-10 text-white   py-3'>
                            <BsFacebook size={25} className='hover:fill-[#fca311]' />
                            <BsTwitter size={25} className='hover:fill-[#fca311]' />
                            <BsLinkedin size={25} className='hover:fill-[#fca311]' />
                        </div>
                    </div>
                </div>
                <div className='mt-5  px-4'>
                    <h1 className='font-sans text-white text-center md:text-left text-2xl md:text-xl font-bold '>Quick Links</h1>
                    <div className='grid '>
                        <ul className='text-white text-center md:text-justify'>
                            <Link href='/'><li className='py-2 text-[#fca311] md:text-sm  hover:text-white'>Magnet Recruit</li></Link>
                            <Link href='/WhoweAre'><li className='py-2 md:text-sm hover:text-[#fca311]'>Who We Are</li></Link>
                            <Link href='/Client'><li className='py-2 md:text-sm hover:text-[#fca311]'>Clients</li></Link>
                            <Link href='/Candidates'><li className='py-2 md:text-sm hover:text-[#fca311]'>Candidates</li></Link>
                            <Link href='/SearchJob'><li className='py-2 md:text-sm hover:text-[#fca311]'>Search Job</li></Link>
                            <Link href='/ContactUs'><li className='py-2 md:text-sm hover:text-[#fca311]'>Contact Us</li></Link>
                        </ul>
                    </div>
                </div>
                <div className=' mx-auto w-full  h-[200px] overflow-hidden '>
                    <Mappage />
                </div>
            </div>
            <div className=' py-10  flex justify-center  text-white '>
                <ul className='md:flex grid md:justify-between md:gap-20 text-center'>
                    <Link href='/'><li className='md:py-2  text-sm'>Privacy Policy</li></Link>
                    <Link href='/'><li className='md:py-2 text-sm'>Cookie Policy</li></Link>
                    <Link href='/'><li className='md:py-2 text-sm'>Retention Policy</li></Link>
                </ul>
            </div>
            <div className=' text-center py-2 text-sm text-white '>
                <p>Copyright © 2022 Magnet Recruit Limited. All Rights Reserved.</p>
            </div>
        </div>
    )
}
export default Footer;