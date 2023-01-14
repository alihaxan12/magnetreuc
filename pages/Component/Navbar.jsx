import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from 'react-icons/ai';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
const Navbar = () => {
    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    }
    return (
        <div className="w-full absolute pt-2 z-[1] overflow-x-hidden ">
            <div className="flex justify-between   items-center   px-2 md:px-10 w-full   ">
                <Link href='/'><Image src='/image/logo.png' className='cursor-pointer' width={350} height={50} alt='image' /></Link>
                <div >
                    <ul className="hidden md:flex gap-6 text-sm">
                        <Link href="/WhoweAre"><li className="cursor-pointer   font-bold text-white">Who We Are</li></Link>
                        <Link href='/Client'><li className="cursor-pointer   font-bold text-white  ">Clients</li></Link>
                        <Link href='/Candidates'><li className="cursor-pointer   font-bold text-white ">Candidates</li></Link>
                        <Link href='/SearchJob'><li className=" cursor-pointer  font-bold text-white  "> Search Jobs </li></Link>
                        <Link href='/ContactUs'><li className=" cursor-pointer  font-bold text-white  "> Contact Us </li></Link>
                        <Link href='/Slider'><li className=" cursor-pointer  font-bold text-white  "> Contact Us </li></Link>

                    </ul>
                </div>
                <div onClick={handleNav} className='md:hidden'>
                    {!nav ? <AiOutlineMenu size={30} className="fill-white" /> : <AiOutlineClose size={30} className="fill-white " />}
                </div>
            </div>
            <div className={nav ? 'fixed   w-[100%]  md:hidden bg-black  pl-10 ease-in duration-500 '
                : 'fixed top-[-100%] w-[100%] ease-in-out duration-500'}>
                <div className='flex py-4 flex-col'>
                    <ul className='uppercase text-white font-semibold'>
                        <Link onClick={() => setNav(false)} href="/WhoweAre"><li className="p-2 ">Who We Are</li></Link>
                        <Link onClick={() => setNav(false)} href='/Client'><li className="p-2   ">Clients</li></Link>
                        <Link onClick={() => setNav(false)} href='/Candidates'><li className="p-2  ">Candidates</li></Link>
                        <Link onClick={() => setNav(false)} href='/SearchJob'><li className="p-2   "> Search Jobs </li></Link>
                        <Link onClick={() => setNav(false)} href='/ContactUs'><li className="p-2   "> Contact Us </li></Link>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Navbar;