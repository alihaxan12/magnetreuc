import React from 'react'
import Accordion from './Component/Accordion';
import { HiOutlineArrowUpTray } from 'react-icons/hi2';
import Footer from './Component/Footer';
import Image from 'next/image';
import Link from 'next/link';
import { BiUpload } from 'react-icons/bi';

const Candidates = () => {
    return (
        <div className="w-full">
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
                    <h1 className="text-white text-5xl tracking-widest  text-center font-extrabold">Candidats</h1>
                </div>
                <div>
                    <svg id='candidatesvgbottom'
                        className='fill-[#14213d]'
                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
                        <path class="elementor-shape-fill" d="M761.9,44.1L643.1,27.2L333.8,98L0,3.8V0l1000,0v3.9"></path>
                    </svg>
                </div>
            </div>
            {/* ------------------------------Sectin-2---------------------------------------------- */}
            <div className='w-full bg-white' >
                <div className='fill-[#14213d] '>
                    <svg className='absolute' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
                        <path class="elementor-shape-fill" d="M500,98.9L0,6.1V0h1000v6.1L500,98.9z"></path>
                    </svg>
                </div>
                <div className="grid md:grid-cols-2  ">
                    <div className=" max-w-md mx-auto  py-32">
                        <h1 className="text-[#fca311] text-xl   ">YOUR FUTURE STARTS HERE</h1>
                        <p className="text-xs leading-5 tracking-wider  py-4">At Magnet Recruit, we focus on allowing our Candidates to
                            exploit their potential to its fullest, by offering them the most
                            suitable opportunities. Your growth is what drives us everyday
                            and our Consultants will always make sure to highlight the value you can add to our Clients.</p>
                    </div>
                    <div className="bg-[url('/image/building.png')] " />
                </div>
            </div>
            {/* ----------------------section-3---------------------------------------------------- */}
            <div className="md:w-full bg-[#14213D] md:px-0 px-8  ">
                <div className="grid md:grid-cols-2  md:w-[980px] m-auto">
                    <div className=' py-28 flex mx-auto'>
                        <Image alt='image' src='/image/Chairs.JPG' width={400} height={200} />
                    </div>
                    <div className="py-8">
                        <h1 className="text-[#fca311] md:text-left text-center tracking-widest text-xs py-4">OUR PLACEMENT SERVICES</h1>
                        <h1 className="text-[#fca311] md:text-left text-center tracking-wider text-xl  py-8 leading-loose">MAXIMISE YOUR OPPORTUNITIES WITH<br /> MAGNET RECRUIT</h1>
                        <div className="pt-2    pb-10">
                            <Accordion />
                        </div>
                    </div>
                </div>
            </div>
            {/* --------------------Section-4---------------------------------- */}
            <div className='w-full bg-white' >
                <div className='fill-[#14213d] '>
                    <svg id='candidatesvgmanhandshake' className='absolute ' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
                        <path class="elementor-shape-fill" d="M500,98.9L0,6.1V0h1000v6.1L500,98.9z"></path>
                    </svg>
                </div>
                <div className="grid md:grid-cols-2 md:bg-none bg-[#E5E5E5] " >
                    <div className="  pt-40 px-14 max-w-xl mx-6">
                        <h1 className="text-[#fca311] text-xl font-semibold">OUR RIGOROUS PROCESS IS PROVEN TO GET YOU THE TOP TALENT</h1>
                        <div className="py-6 flex w-full ">
                            <h1 className="text-xs border-b-2 w-[96%] border-b-orange-400  py-1 text-gray-800">EXPERIENCE</h1>
                            <p className=' border-b-slate-900 border-b-2 w-[4%]'></p>
                        </div>
                        <div className="py-2 flex w-full">
                            <h1 className="text-xs border-b-2 w-[88%] border-b-orange-400  py-1 text-gray-800">COLLABORATION</h1>
                            <p className=' border-b-slate-900 border-b-2 w-[12%]'></p>
                        </div>
                        <div className="py-2 flex w-full">
                            <h1 className="text-xs border-b-2 w-[92%] border-b-orange-400  py-1 text-gray-800">NETWORKING</h1>
                            <p className=' border-b-slate-900 border-b-2 w-[8%]'></p>
                        </div>
                    </div>
                    <div className=''>
                        <Image alt='image' src='/image/man-hand.jpg' width={1080} height={1000} style={{ objectFit: 'cover' }} />
                    </div>

                </div>
            </div>
            {/* --------------------------------Section-5------------------------------------- */}

            <div className="bg-[#14213D] w-full ">
                <div className="py-12 md:w-[900px] grid md:grid-cols-5  mx-auto">
                    <div className=' justify-center w-44 mx-auto'>
                        <Image src='/image/bag.png'
                            width={150}
                            height={100}
                            alt='image' className='mx-auto' />
                        <h1 className="text-[#fca311]  text-center text-6xl   font-bold ">3</h1>
                        <h1 className="m-auto text-center text-white font-bold">Weekly Successes</h1>
                    </div>
                    <div className=' justify-center w-44 mx-auto'>
                        <Image src='/image/location.png'
                            width={150}
                            height={100}
                            alt='image' className='mx-auto' />
                        <h1 className="text-[#fca311]  text-center text-6xl   font-bold ">8</h1>
                        <h1 className="m-auto text-center text-white font-bold">Global Clients</h1>
                    </div>
                    <div className=' justify-center w-44 mx-auto'>
                        <Image src='/image/nots.png'
                            width={150}
                            height={100}
                            alt='image' className='mx-auto' />
                        <h1 className="text-[#fca311]  text-center text-6xl   font-bold ">100</h1>
                        <h1 className="m-auto text-center text-white font-bold">Success (on retained)</h1>
                    </div>
                    <div className=' justify-center w-44 mx-auto'>
                        <Image src='/image/search.png'
                            width={150}
                            height={100}
                            alt='image' className='mx-auto' />
                        <h1 className="text-[#fca311]  text-center text-6xl   font-bold ">24</h1>
                        <h1 className="m-auto text-center text-white font-bold">Customer Service</h1>
                    </div>
                    <div className=' justify-center w-44 mx-auto'>
                        <Image src='/image/arrow.png'
                            width={150}
                            height={100}
                            alt='image' className='mx-auto' />
                        <h1 className="text-[#fca311]  text-center text-6xl   font-bold ">100</h1>
                        <h1 className="m-auto text-center text-white font-bold">Client Satisfaction</h1>
                    </div>
                </div>
            </div>
            {/* ----------------------------------Sectin-6-------------------------------------- */}

            <div className='grid'>
                <div className='fill-[#14213d] '>
                    <svg id='servicesbottomsvg' className='absolute' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
                        <path class="elementor-shape-fill" d="M500,98.9L0,6.1V0h1000v6.1L500,98.9z"></path>
                    </svg>
                </div>
                <div className='w-full h-44 bg-white'>
                    {/* Slider */}
                </div>
            </div>
            <div className="bg-[#14213D] pt-8">
                <h1 className=" text-center text-xl text-slate-300 font-bold">SEND IN YOUR CV</h1>
                <div className="items-center flex justify-center ">
                    <Link href='/' type='submit' className=" flex my-10 px-4 p-2 rounded-sm  hover:bg-[#fca311]  hover:text-white  bg-slate-200 ">
                        <BiUpload className='mx-2 my-auto' /> Send CV
                    </Link>
                </div>
            </div>
            <Footer />



        </div>
    )
}
export default Candidates;