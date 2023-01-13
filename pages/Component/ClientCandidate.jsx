import React from 'react'
import Link from 'next/link'

const ClientCandidate = () => {
  return (
    <div className='w-full bg-[#14213d]'>
        <div className='md:w-full  md:grid md:grid-cols-2 m-auto '>
            <div className='items-center p-8'>
                <h1 className='text-3xl text-[#fca311] font-bold py-4 text-center'>Candidates</h1>
                <p className='text-center text-sm py-2 text-white '>
                    Let us know about yourself and what motivates you, so we can update you
                    on our vacancies or job hunt on your behalf.
                </p>
                <div className='flex items-center mx-auto justify-center py-8'>
                <Link href='/Candidates'><button className='uppercase py-2 px-5 text-sm bg-[#fca311] hover:bg-slate-500 hover:text-white rounded-sm '>Read more</button></Link>
                </div>
            </div>
            <div className='items-center bg-slate-200 py-8'>
                <h1 className='text-3xl text-[#14213d] font-bold py-4 text-center'>Clients</h1>
                <p className='text-center text-sm text-[#14213d] p-2'>
                    Let us know about yourself and what motivates you, so we can update you
                    on our vacancies or job hunt on your behalf.
                </p>
                <div className='flex items-center mx-auto justify-center py-6'>
                    <Link href='/Client'><button  className='uppercase py-2 text-white px-5 text-sm bg-[#14213d] hover:bg-[#fca213] hover:text-[#14213d]  rounded-sm '>Read more</button></Link>
                </div>
            </div>
        </div>
   
    </div>
  )
}

export default ClientCandidate