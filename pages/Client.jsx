import React from 'react'
import Footer from './Component/Footer';
import Image from 'next/image';
import { SiSpeedtest } from 'react-icons/si';
import { TfiPieChart } from 'react-icons/tfi';
import { BsSliders} from 'react-icons/bs';
import { BiUpload } from 'react-icons/bi';
import Link from 'next/link';

const Client = () => {
    return (
        <div className="w-full  ">
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
                    <h1 className="text-white text-5xl tracking-widest  text-center font-extrabold">Clients</h1>
                </div>
                <div>
                <svg id='candidatesvgbottom'
                        className='fill-[#14213d]'
                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
                        <path class="elementor-shape-fill" d="M761.9,44.1L643.1,27.2L333.8,98L0,3.8V0l1000,0v3.9"></path>
                    </svg>
                </div>
            </div>

            {/* ---------------------------------------------section-2----------------------------- */}
            <div className="md:w-full  bg-[#FFFFFF] ">
                <div className='md:w-[1080px] mx-auto pt-16 tracking-widest leading-loose'>
                    <h1 className="text-3xl font-semibold text-[#08131F] px-2  ">Magnet Recruit offer a variety of services based on your specific needs and requirements.</h1>
                </div>
                <div className="grid md:grid-cols-4 p-2 md:w-[1080px] gap-10 m-auto ">
                    <div >
                        <h1 className="text-5xl my-4 text-center text-[#fca311]">Interim</h1>
                        <div className="shadow-xl border p-4">
                            <div className='flex justify-center text-gray-600 text-sm py-4'>
                                <TfiPieChart size={40} />
                            </div>
                            <p className=" text-center font-bold py-4">INTERIM</p>
                            <p className=" text-center px-2 font-normal  text-gray-500 text-base leading-loose">Drawing on our deep industry knowledge and large network, we will put the best individuals in front of you. Whether it’s short-term interim support during seasonal peaks or the right person for your project, our Interim Consultants team will ensure to facilitate the delivery of your assignment with the most appropriate contractors.</p>
                        </div>
                    </div>
                    <div>
                        <div className="h-36"></div>
                        <h1 className="text-5xl my-4 text-center text-[#fca311]">Perm</h1>
                        <div className="shadow-xl border p-4">
                            <div className='flex justify-center  py-4'>
                                <Image alt='image' src='/image/manlocate.png' width={50} height={50} />
                            </div>
                            <p className="text-center font-bold py-4">PERMANENT PLACEMENTS</p>
                            <p className=" text-center px-2 font-normal  text-gray-500 text-base leading-loose">Our permanent recruitment experts will guarantee you the best individuals who will strengthen your operation and take it to the next level. Always putting your Culture and values at the forefront whilst simultaneously ensuring a high-level professional performance that surpasses your expectations.</p>
                        </div>
                    </div>
                    <div>
                        <div className="h-72"></div>
                        <h1 className="text-5xl my-4 text-center text-[#fca311]">Retained</h1>
                        <div className="shadow-xl border">
                            <div className='flex justify-center py-4'>
                                <Image alt='image' src='/image/bill.png' width={50} height={50} />
                            </div>
                            <p className=" text-center font-bold py-4">RETAINED ROLES</p>
                            <p className=" text-center px-4 font-normal  text-gray-500 text-base leading-loose">
                                Magnet offers exclusive retained search services, whereby we allocate Consultants to dedicate time and prioritise your requirements to head-hunt the highest calibre professionals for your organisation. Our experts will go above and beyond to deliver within your specified deadline, without compromising on the quality of our service.
                            </p>
                        </div>
                    </div>
                    <div>
                        <div className="h-22"></div> <div className="md:h-52"></div> <div className="h-52"></div>
                        <h1 className="text-5xl my-4 text-center text-[#fca311]">Bespoke</h1>
                        <div className="shadow-xl border">
                            <div className='flex justify-center py-4'>
                                <BsSliders size={30} className='rotate-90 text-gray-600' />
                            </div>
                            <p className=" text-center font-bold py-4">BESPOKE PACKAGES</p>
                            <p className=" text-center px-4 font-normal  text-gray-500 text-base leading-loose">
                                At Magnet Recruit, we understand that recruitment services are not restricted to only filling vacancies. Therefore, we have put in place bespoke packages that are tailored to your specific needs. From Job Specifications creation to building professional teams for project requirements, we will allocate our best Consultants to work with you and for you
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            {/* ------------------------section-3---------------------------------------------------------- */}
            <div className=" bg-[url('/image/laptop.jpg')]   "  >
                <div className="bg-[#14213d] opacity-90 pt-28">
                    <div className="md:w-[1240px]  md:m-auto">
                        <div className='flex justify-center  '>
                            <span className='rounded-full p-6 bg-[#fca311]'>
                                <SiSpeedtest size={40} className='hover:fill-slate-400 fill-white ' />
                            </span>
                        </div>
                        <div className='md:w-[900px] w-full mx-auto'>
                            <h1 className="md:text-6xl py-4 text-4xl text-[#fca311] mx-8 text-center font-bold">Fast. Reliable. Facile.</h1>
                            <h1 className=" text-3xl text-white py-4 mx-8 text-center">We guarantee quality, every single time. </h1>
                            <div className='md:px-4 mx-10'>
                                <h1 className=' text-white tracking-widest'>We are leaders in:</h1>
                                <ul className="md:list-disc text-justify tracking-widest text-white  px-3  py-4 ">
                                    <li className=" list-disc tracking-widest">Quality over quantity.</li>
                                    <li className=" list-disc tracking-widest">Unrivalled market knowledge.</li>
                                    <li className="list-disc tracking-wide">Providing the highest calibre of candidates. </li>
                                </ul>
                            </div>
                        </div>
                        <div className="h-32"></div>
                    </div>
                </div>
            </div>
            {/* -------------------------section-4---------------------------------------- */}
            <div className="bg-[#14213D] py-8 lg:w-full sm:grid">
                <div className=" md:flex md:w-[980px] m-auto gap-10 py-2">
                    <div className="basis-1/2 px-6">
                        <h1 className="text-white text-3xl py-6 m-auto">Send your CV to us. Let us handle the rest.</h1>
                    </div>
                    <div className=" flex justify-center md:my-0 my-6">
                        <Link href='/' type='submit' className=" flex my-10 px-4 p-2 rounded-sm  hover:bg-[#fca311]  hover:text-white  bg-slate-200 ">
                            <BiUpload className='mx-2 my-auto'/> Send CV
                        </Link>
                    </div>
                </div>
            </div>
            <div className="w-full ">
                {/* <Carosel2 /> */}
            </div>
            <Footer />
        </div>
    )
}
export default Client;