import Image from 'next/image'
import React from 'react'
import { BsBack } from 'react-icons/bs'

const CompanyIntro = () => {
    return (
        <div className='w-full  '>
            {/* -------------------------section-1-------------------------------------- */}
            <div className='w-full bg-[#14213d]' >
                <div>
                    <svg id='companyintrotopsvg'
                    className='fill-[#1b2b4d] '
                     xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
                        <path class="elementor-shape-fill" d="M761.9,44.1L643.1,27.2L333.8,98L0,3.8V0l1000,0v3.9"></path>
                    </svg>
                </div>
                <h1 className='text-4xl  font-bold text-center font-sans text-white'>We Specialise in Everything We Do</h1>
                <div className='md:grid md:grid-cols-2 md:w-[1000px] mx-auto'>
                    <div className='md:mt-2   p-5'>
                        <p className='text-white text-justify font-sans  py-1 '>
                            Based in Manchester, we recruit entry, middle and senior level
                            professionals into Food and FMCG businesses nationwide. Also,
                            we’re really good at it!
                        </p>
                        <p className='text-white text-justify font-sans py-3'>
                            From Operations to Supply Chain, from Technical to NPD, from
                            Engineering to Health and Safety, we understand the recruitment
                            challenges you face, and we’ve got your business covered.
                        </p>
                        <p className='text-white text-justify font-sans  py-3'>
                            We also believe in being different; We’re professional, honest and
                            fun! We are people, recruiting people, for people.
                        </p>
                    </div>
                    <div className='w-full   justify-center  items-center'>
                        <Image src='/image/location.png' width={250} height={250} className='mx-auto' alt='image' />
                        <div className='md:p-2 sm:p-10 font-sans'>
                            <p className='text-white text-justify px-4  '>
                                At Magnet Recruit, we do not pretend to specialise in everything,
                                everywhere. Instead, we do claim to know the food industry and we
                                have worked with hundreds of people, who will tell you the same.
                            </p>
                            <p className='text-white text-justify  p-2 px-4'>
                                We believe that your business is only as strong as its people and we
                                are committed to help you build a high calibre team with the best
                                Candidates, who will not only fit your job specifications, but also fit
                                your Culture and embody your core values.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
{/* ----------------------------------section-2---------------------------------- */}
            <div className='w-full bg-[#E5E5E5] pb-10 font-sans'>
                <div className='w-full mt-[-1]' >
                    <svg id='companyintrosvg'
                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none"
                        className='fill-[#13213d]'>
                        <path transform="scale(1,-1) tanslate(0, -100)" class="elementor-shape-fill" d="M761.9,44.1L643.1,27.2L333.8,98L0,3.8V0l1000,0v3.9"></path>
                    </svg>
                </div>
                <div className='md:w-[1080px] md:grid md:grid-cols-2 mx-auto' >
                    <div className='md:grid  md:grid-cols-2 pl-4 pb-10'>
                        <div>
                            <div className='items-center justify-center  py-4 mb-8 mx-auto'>
                                <div className='flex justify-center'>
                                    <Image src='/image/bag.png'
                                        width={80}
                                        height={80}
                                        alt='image' />
                                </div>
                                <h1 className='text-3xl text-center text-[#fca311] font-Montserrat font-[Montserrat] font-semibold pt-3'>7<span className='font-sans'>days</span></h1>
                                <p className='text-center text-sm'>Average time for a job offer</p>
                            </div>
                            <div className='items-center '>
                                <div className='flex justify-center'>
                                    <Image src='/image/search.png'
                                        width={80}
                                        height={80}
                                        alt='image' />
                                </div>
                                <h1 className='text-3xl text-center text-[#fca311] font-bold pt-3'>38</h1>
                                <p className='text-center text-sm'>Average permanent offers</p>
                            </div>
                        </div>
                        <div>
                            <div className='items-center py-4 mx-auto mb-8'>
                                <div className='flex justify-center'>
                                    <Image src='/image/arrow.png'
                                        width={80}
                                        height={80}
                                        alt='image' />
                                </div>
                                <h1 className='text-3xl text-center text-[#fca311] font-Montserrat font-[Montserrat] font-semibold pt-3'>7<span className='font-sans'>days</span></h1>
                                <p className='text-center text-sm'>Payments Processing time</p>
                            </div>
                            <div className='items-center '>
                                <div className='flex justify-center'>
                                    <Image src='/image/nots.png'
                                        width={80}
                                        height={80}
                                        alt='image' />
                                </div>
                                <h1 className='text-3xl text-center  text-[#fca311] font-bold pt-3'>98%</h1>
                                <p className='text-center text-sm'>Success rate</p>
                            </div>
                        </div>
                    </div>
                    <div className='mt-28 font-[Montserrat]'>
                        <h1 className='text-3xl  text-[#fca311] font-bold  px-4'>
                            We work to help you burst at the
                            seams, to unleash the potential of
                            your work force
                        </h1>
                        <p className='text-justify text-sm pt-3  px-3'>
                            Our key objective is to build long-term, trusting and genuine
                            relationships with our Clients and Candidates and understand their
                            goals, values, objectives and aims. It’s only once we get to know your
                            specific requirements that we can add value to your business via our
                            team of expert Consultants, who are committed to deliver the best service.
                        </p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default CompanyIntro