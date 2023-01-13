import React from 'react'
import Footer from './Component/Footer';
import Image from 'next/image';
import Link from 'next/link';
import { BsBookmark, BsBookmarks } from 'react-icons/bs';
import { FcBookmark } from 'react-icons/fc'
const SearchJob = () => {
    return (
        <div className='w-full'>
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
                    <h1 className="text-white text-5xl tracking-widest  text-center font-extrabold">Search Jobs</h1>
                </div>
                <div>
                    <svg id='candidatesvgbottom'
                        className='fill-[#14213d]'
                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
                        <path class="elementor-shape-fill" d="M761.9,44.1L643.1,27.2L333.8,98L0,3.8V0l1000,0v3.9"></path>
                    </svg>
                </div>
            </div>
            {/* -----------------------Section-2---------------------------------- */}
            <div className='w-full bg-[#e5e5e5]'>
                <div className='fill-[#14213d] '>
                    <svg className='absolute' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
                        <path class="elementor-shape-fill" d="M500,98.9L0,6.1V0h1000v6.1L500,98.9z"></path>
                    </svg>
                </div>
                <div className='py-16'></div>
                <div className='w-full md:grid md:grid-cols-3 mx-auto'>
                    <div className='grid grid-cols-1 border md:gap-1 gap-5 md:px-1 px-4 border-r-gray-500'>
                        <h1 className="text-4xl text-black text-center font-bold py-10">Sectors</h1>
                        <div className="items-center py-4 md:w-[300px]  w-full  md:mx-auto md:my-4 bg-white">
                            <div className='flex justify-center '>
                                <Image alt='image' src='/image/branch.png' width={50} height={70} />
                            </div>
                            <h1 className=" text-center  text-slate-600 font-bold py-4">Oprations & Supply Chain</h1>
                        </div>
                        <div className="items-center py-4 md:w-[300px]  :w-full  md:mx-auto md:my-4 bg-white">
                            <div className='flex justify-center '>
                                <Image alt='image' src='/image/users.png' width={50} height={70} />
                            </div>
                            <h1 className=" text-center  text-slate-600 font-bold py-4">Oprations & Supply Chain</h1>
                        </div>
                        <div className="items-center py-4 md:w-[300px]  w-full  md:mx-auto md:my-4 bg-white">
                            <div className='flex justify-center '>
                                <Image alt='image' src='/image/usercheck.png' width={50} height={70} />
                            </div>
                            <h1 className=" text-center  text-slate-600 font-bold py-4">Oprations & Supply Chain</h1>
                        </div>
                        <div className="items-center py-4 md:w-[300px]  w-full  md:mx-auto md:my-4 bg-white">
                            <div className='flex justify-center '>
                                <Image alt='image' src='/image/sitemap.png' width={50} height={70} />
                            </div>
                            <h1 className=" text-center  text-slate-600 font-bold py-4">Oprations & Supply Chain</h1>
                        </div>
                        <div className="items-center py-4 md:w-[300px]  w-full  md:mx-auto md:my-4 bg-white">
                            <div className='flex justify-center '>
                                <Image alt='image' src='/image/handholdingheart.png' width={50} height={70} />
                            </div>
                            <h1 className=" text-center  text-slate-600 font-bold py-4">Oprations & Supply Chain</h1>
                        </div>
                    </div>
                    {/* ========================== Section-3================================== */}
                    <div className='  py-24 mx-auto px-8'>
                        <div className=" text-slate-700 shadow-md " >
                            <div className="py-6 hover:bg-slate-700  md:w-full hover:text-white px-6 ">
                                <div className='flex gap-4 justify-between '>
                                    <div className=''>
                                        <Image alt='image' src='/image/breafcase.png' width={150} height={100} />
                                    </div>
                                    <div>
                                        <p className="text-xs font-semibold hover:text-white">
                                            Maintenance Engineering Supervisor/ Team Leader -West
                                            Yorkshire-£46k- Double Days (Mon-Fri)
                                        </p>
                                        <p className=" italic tracking-wide py-3 text-xs ">Magnet Recrute</p>
                                    </div>
                                </div>
                                <div className="flex flex-row gap-4 py-2 hover:text-white text-xs text-red-600 ">
                                    <FcBookmark size={20} className=''/>
                                    <p className="text-red-700 italic ">Permanent</p>
                                    <p className="text-red-700 italic ">North West</p>
                                    <p className="text-red-700 italic ">Salary Offer: <span className=''>46k + Benefits</span> </p>
                                </div>
                                <p className=" text-right mr-6  font-thin text-xs ">5 months ago</p>
                            </div>
                        </div>
                        <div className=" text-slate-700 shadow-md " >
                            <div className="py-6 hover:bg-slate-700  md:w-full hover:text-white px-6 ">
                                <div className='flex gap-4 justify-between '>
                                    <div className=''>
                                        <Image alt='image' src='/image/breafcase.png' width={80} height={50} />
                                    </div>
                                    <div>
                                        <p className="text-xs font-semibold hover:text-white">
                                        Operations Manager – Lancashire – 60k + Benefits
                                        </p>
                                        <p className=" italic tracking-wide py-3 text-xs ">Magnet Recrute</p>
                                    </div>
                                </div>
                                <div className="flex flex-row gap-4 py-2 hover:text-white text-xs text-red-600 ">
                                    <FcBookmark size={20} className=''/>
                                    <p className="text-red-700 italic ">Permanent</p>
                                    <p className="text-red-700 italic ">Lancashire</p>
                                    <p className="text-red-700 italic ">Salary Offer: <span className=''>60k + Benefits</span> </p>
                                </div>
                                <p className=" text-right mr-6  font-thin text-xs ">7 months ago</p>
                            </div>
                        </div>
                    </div>
                    <div className='  md:py-24 md:mx-auto px-8'>
                        <div className="hover:text-white text-slate-700 shadow-md " >
                            <div className="py-6 hover:bg-slate-700  md:w-full hover:text-white px-6 ">
                                <div className='flex gap-4 justify-between '>
                                    <div className=''>
                                        <Image alt='image' src='/image/breafcase.png' width={100} height={100} />
                                    </div>
                                    <div>
                                        <p className="text-xs font-semibold">
                                        Maintenance Engineer (Elec Bias) – North West – 44k + Benefits
                                        </p>
                                        <p className=" italic tracking-wide py-3 text-xs ">Magnet Recrute</p>
                                    </div>
                                </div>
                                <div className="flex flex-row gap-4 py-2 text-xs text-red-600 ">
                                    <p className="text-red-700 italic ">North West</p>
                                    <p className="text-red-700 italic ">Salary Offer: <span className='text-gray-700'>Compitative</span> </p>
                                </div>
                                <p className=" text-right mr-6  font-thin text-xs ">5 months ago</p>
                            </div>
                        </div>
                        <div className="hover:text-white text-slate-700 shadow-md " >
                            <div className="py-6 hover:bg-slate-700  md:w-full hover:text-white px-6 ">
                                <div className='flex gap-4 justify-between '>
                                    <div className=''>
                                        <Image alt='image' src='/image/breafcase.png' width={150} height={100} />
                                    </div>
                                    <div>
                                        <p className="text-xs font-semibold">
                                        Multi Skilled Maintenance Engineer (Mechanical Bias & Night Shift) – North West – 42k
                                        </p>
                                        <p className=" italic tracking-wide py-3 text-xs ">Magnet Recrute</p>
                                    </div>
                                </div>
                                <div className="flex flex-row gap-4 py-2 text-xs text-red-600 ">
                                    <p className="text-red-700 italic ">North West</p>
                                    <p className="text-red-700 italic ">Salary Offer: <span className=''>42k + Benefits</span> </p>
                                </div>
                                <p className=" text-right mr-6  font-thin text-xs ">9 months ago</p>
                            </div>
                        </div>
                    </div>
              
                   
                    
                </div>
            </div>
            <Footer />
        </div>
    )
}
export default SearchJob;