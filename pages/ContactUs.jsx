import React from 'react'
import Footer from './Component/Footer';
import Image from 'next/image';
import Link from 'next/link';
import {AiOutlineHome} from 'react-icons/ai';
import {TfiHeadphoneAlt} from 'react-icons/tfi';
import {GoMailRead} from 'react-icons/go';
const ContactUs = () => {
    return (
        <div className=" md:w-full ">
                <video className=" "
                    autoPlay
                    loop
                    muted
                    style={{
                        position: 'absolute',
                        width: '100%',
                        height: '80%',
                        objectFit: 'cover',
                        transferm: 'translate(-50%, -50%)',
                        zIndex: '-1',
                        position: 'fixed'
                    }}>
                    <source src="/image/vid-3.mp4" type="video/mp4" />
                </video>
                <div >
                    <svg id='wwrtopsvg'
                        className='fill-[#14213d]'
                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
                        <path class="elementor-shape-fill" d="M761.9,44.1L643.1,27.2L333.8,98L0,3.8V0l1000,0v3.9"></path>
                    </svg>
                </div>
                <div className='py-28'>
                    <h1 className="text-white text-4xl tracking-widest  text-center font-extrabold">Contact Us</h1>
                </div>
                <div>
                    <svg id='candidatesvgbottom'
                        className='fill-[#14213d]'
                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
                        <path class="elementor-shape-fill" d="M761.9,44.1L643.1,27.2L333.8,98L0,3.8V0l1000,0v3.9"></path>
                    </svg>
                </div>
            {/* ---------------------------Section-2------------------------------- */}
            <div className="bg-[#14213D] py-6 ">
                <div className='md:w-[1240px] mx-auto'>
                    <h1 className="text-2xl text-center text-white font-semibold">We are here to assist you</h1>
                    <p className="text-white text-sm font-light  text-center  p-6"> Feel free to contact us or just drop a line here. Our support staff will reach you very soon.</p>
                </div>
                <div className="md:w-[1240px]  px-4 m-auto">
                    <div className="md:flex   py-8 ">
                        <div className="md:basis-1/2  py-6">
                            <h1 className="text-2xl py-8  text-[#fca311] font-bold" >CONTACT US</h1>
                            <div className=" md:flex md:gap-8 md:py-2 md:mx-auto">
                                <div className='flex text-[#fca311]'>
                                    <AiOutlineHome size={50}/>
                                </div>
                                <h1 className="hidden md:block  text-white tracking-widest">3.1 UNIVERSAL SQUARE,<br />
                                    DEVONSHIRE ST NORTH,<br /> MANCHESTER M12 6JH</h1>
                                <h1 className="py-4 block tracking-widest text-center md:hidden  text-xs w-full m-auto  text-white ">3.1 UNIVERSAL SQUARE,
                                    DEVONSHIRE ST NORTH, MANCHESTER M12 6JH</h1>
                            </div>
                            <div className=" lg:flex gap-8 py-2">
                                <div className='flex text-[#fca311]'>
                                    <TfiHeadphoneAlt size={40}/>
                                </div>
                                <h1 className=" text-white tracking-widest py-4 text-xs ml-10">0161 974 6110</h1>
                            </div>
                            <div className=" lg:flex gap-8 py-2">
                                <div className='flex text-[#fca311]'>
                                    <GoMailRead size={45}/>
                                </div>
                                <Link href='https://accounts.google.com/v3/signin/identifier?dsh=S1946800022%3A1668448922110746&service=mail&flowName=GlifWebSignIn&flowEntry=ServiceLogin&ifkv=ARgdvAtpIClW3LwyU3UBQE-GG7HNFTGaMg55GE_WuAYvER76vZ1cm9dhPrHSC-92QoQOi-lxnSb5'>
                                    <h1 className="cursor-pointer text-xs    text-white tracking-widest py-6">
                                        INFO@MAGNETRECRUIT.COM
                                    </h1></Link>
                            </div>
                        </div>
                        <div className="basis-1/2">
                            <h1 className="md:text-xl py-6 md:text-left text-center text-sm  text-[#fca311] font-bold" >SEND IN YOUR QUERY</h1>
                            <div className=" sm:mx-14 md:px-8">
                                <p className="text-white pt-4">Email <span className="text-red-700">*</span></p>
                                <input type="text" className="md:w-[600px] w-full  h-2 py-4" placeholder="" />
                                <p className="text-white pt-4">Phone <span className="text-red-700">*</span></p>
                                <input type="text" className="md:w-[600px] w-full  h-2 py-4" placeholder="" />
                                <p className="text-white pt-4">First Name <span className="text-red-700">*</span></p>
                                <input type="text" className=" md:w-[400px] w-full h-2 py-4" placeholder="" />
                                <p className="text-white pt-4">Last Name <span className="text-red-700">*</span></p>
                                <input type="text" className="md:w-[400px] w-full h-2 py-4" placeholder="" />
                                <p className="text-white pt-4">Message <span className="text-red-700">*</span></p>
                                <div className='w-full  '>
                                    <textarea name="" id="" cols="38" rows="5" ></textarea>
                                </div>
                                <div className=" flex justify-center md:justify-start mx-auto py-4">
                                    <button className=" py-2 px-4 rounded-sm text-xs   hover:bg-slate-500 font-bold hover:text-white  bg-slate-200 ">Submit Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
export default ContactUs;