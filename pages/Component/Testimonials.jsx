import React from 'react'

import Image from 'next/image'

const Testimonials = () => {
    return (
        <div className='w-full'>
            <div className='bg-[#E5E5E5]'>
                <svg id='testmonialsvgtop' className='fill-[#14213d]' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
                    <path class="elementor-shape-fill" d="M761.9,44.1L643.1,27.2L333.8,98L0,3.8V0l1000,0v3.9"></path>
                </svg>
            </div>
            <div className='justify-center bg-[#14213d]'>
                <h1 className='text-5xl text-center font-bold text-white'>Testimonials</h1>
            </div>
            <div className='md:w-full m-auto bg-[#14213d] h-64'>
                {/* <Carosel /> */}
              
            </div>
            <div className='md:w-full'>
                {/* <Carosel2 /> */}
            </div>
        </div>
    )
}

export default Testimonials