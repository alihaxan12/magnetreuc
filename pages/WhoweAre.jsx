import React from 'react'
import { FaLinkedinIn } from 'react-icons/fa';
import { HiMail } from 'react-icons/hi';
import Footer from './Component/Footer';
import Image from 'next/image';
import Link from 'next/link';
import { AiFillCheckCircle } from 'react-icons/ai';
import { FaUserCheck } from 'react-icons/fa';
import { GoArrowRight } from 'react-icons/go';
import { GiImperialCrown } from 'react-icons/gi';
import { BsCheckLg } from 'react-icons/bs';
const WhoweAre = () => {
  return (
    <div className='w-full  '>
      <div className=" md:w-full ">
        <video className=" "
                    autoPlay
                    loop
                    muted
                    style={{
                        position: 'absolute',
                        width: '100%',
                        height: '110%',
                        objectFit: 'cover',
                        transferm: 'translate(-50%, -50%)',
                        zIndex: '-1'
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
          <h1 className="text-white text-5xl tracking-widest  text-center font-extrabold">Who We Are</h1>
        </div>
        <div>
          <svg id='testmonialsvgtop'
            className='fill-[#14213d]'
            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
            <path class="elementor-shape-fill" d="M761.9,44.1L643.1,27.2L333.8,98L0,3.8V0l1000,0v3.9"></path>
          </svg>
        </div>
      </div>

      {/*---------------------------------Section-2---------------------------------*/}
      <div className='bg-[#14213d] '>
        <h1 className='text-white py-8 text-4xl text-center font-bold'>Meet Our Team</h1>
        <div className='grid md:grid-cols-2 md:w-[1080px] w-full mx-auto'>
          {/*----------------------------- for Sam Hassan-------------------------------  */}
          <div className='item-center '>
            <div className='flex justify-center mx-auto'>
              <Image className='mx-auto overflow-hidden' alt='image' src='/image/person1.png' width={250} height={170} />
            </div>
            <h1 className='text-[#fca214] text-2xl text-center font-semibold px-4 pt-3 '>Sam  Hassan</h1>
            <p className=' text-white px-12 text-center font-semibold'>Founder</p>
            <div className='flex gap-2 cursor-pointer justify-center py-2 text-slate-800'>
              <FaLinkedinIn size={25} className='bg-[#fca214] rounded' />
              <HiMail size={25} className='bg-[#fca214] rounded' />
            </div>
            <div className='md:w-full px-2'>
              <div className="flex border md:border-none sm:mx-2">
                <p className=" md:w-[25%] w-full  text-sm text-[#FCA311]  border   p-4 md:border-b-0 ">About Sam</p>
                <p className="w-[80%] hidden md:block  border-b-2"></p>
              </div>
              <div className="md:mx-2 ">
                <p className="p-4   border  text-white border-t-transparent text-sm text-justify ">
                  Previously working for various companies as an Interim
                  Recruitment Consultant, Sam decided to give up his status
                  of employee and establish an honest organisation based on
                  the values he believes in. He founded Magnet Recruit in the
                  midst of the 2020 pandemic, with the aim of creating promoting a Culture within the recruitment industry that
                  puts Clients and Candidates first.
                </p>
              </div>
              <div className="my-4 border md:border-none sm:mx-2">
                <div className="flex ">
                  <p className=" md:w-[25%] w-full   text-[#FCA311]  border  p-4 lg:border-b-0 ">His motto</p>
                  <p className="w-[80%] hidden md:block border-b-2"></p>
                </div>
                <div>
                  <p className="md:pr-40 md:py-5 md:pb-6 w-full p-4 border  text-white border-t-transparent text-sm text-justify ">
                    “Begin with the end in mind”.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/*--------------------------------------- for Dominic Jones --------------------------*/}
          <div className='item-center '>
            <div className='flex justify-center mx-auto'>
              <Image className='mx-auto overflow-hidden' alt='image' src='/image/person2.png' width={250} height={200} />
            </div>
            <h1 className='text-[#fca214] text-2xl text-center font-semibold px-4 pt-3 '>Dominic Jones</h1>
            <p className=' text-white px-12 text-center font-semibold'>Director</p>
            <div className='flex gap-2 cursor-pointer justify-center py-2 text-slate-800'>
              <FaLinkedinIn size={25} className='bg-[#fca214] rounded' />
              <HiMail size={25} className='bg-[#fca214] rounded' />
            </div>
            <div className='md:w-full px-2'>
              <div className="flex border md:border-none sm:mx-2">
                <p className=" md:w-[30%] w-full  text-sm text-[#FCA311]  border   p-4 md:border-b-0 ">About Dominic</p>
                <p className="w-[80%] hidden md:block  border-b-2"></p>
              </div>
              <div className="md:mx-2 ">
                <p className="p-4   border  text-white border-t-transparent text-sm text-justify ">
                  With extensive recruitment experience within the Food
                  Manufacturing & FMCG space, Dom has a strong eye for detail and
                  will partner with Sam to give both existing and new clients best in
                  class support across Engineering, Operations, Technical and
                  Commercial disciplines, within both Perm and Interim contracts.
                  Building relationships with both Clients and Candidates alike, is
                  what Dom strives for
                </p>
              </div>
              <div className="my-4 border md:border-none sm:mx-2">
                <div className="flex ">
                  <p className=" md:w-[25%] w-full   text-[#FCA311]  border  p-4 lg:border-b-0 ">His motto</p>
                  <p className="w-[80%] hidden md:block border-b-2"></p>
                </div>
                <div>
                  <p className="md:pr-40 md:py-5 md:pb-6 w-full p-4 border  text-white border-t-transparent text-sm text-justify ">
                    “When you put people first, the rest falls into place”.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* -----------------------Suzanne Malik --------------------------------------*/}
          <div className='item-center mt-20'>
            <div className='flex justify-center mx-auto'>
              <Image alt='image' src='/image/woman1.png' width={250} height={200} />
            </div>
            <h1 className='text-[#fca214] text-2xl text-center font-semibold px-4 pt-3 '>Suzanne Malik</h1>
            <p className=' text-white px-12 text-center font-semibold'>Recruitment Consultant &Account Manager</p>
            <div className='flex gap-2 cursor-pointer justify-center py-2 text-slate-800'>
              <FaLinkedinIn size={25} className='bg-[#fca214] rounded' />
              <HiMail size={25} className='bg-[#fca214] rounded' />
            </div>
            <div className='md:w-full px-2'>
              <div className="flex border md:border-none sm:mx-2">
                <p className=" md:w-[35%] w-full  text-sm text-[#FCA311]  border   p-4 md:border-b-0 ">About Suzanne</p>
                <p className="w-[80%] hidden md:block  border-b-2"></p>
              </div>
              <div className="md:mx-2 ">
                <p className="p-4   border  text-white border-t-transparent text-sm text-justify ">
                  With a strong background in law and Client Relationship
                  management, Suzanne joined the magnet team ready to start an
                  exciting journey and in need of a new challenge. With her positive
                  mindset and enthusiastic character, she has already developed an
                  excellent network within the industry.  Suzanne is very passionate
                  about health, wellbeing and lifestyle coaching.
                </p>
              </div>
              <div className="my-4 border md:border-none sm:mx-2">
                <div className="flex ">
                  <p className=" md:w-[25%] w-full   text-[#FCA311]  border  p-4 lg:border-b-0 ">Her motto</p>
                  <p className="w-[80%] hidden md:block border-b-2"></p>
                </div>
                <div>
                  <p className="md:pr-40 md:py-5 md:pb-6 w-full p-4 border  text-white border-t-transparent text-sm text-justify ">
                    “Vision without action is a daydream”.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* --------------------------------for Yasmin------------------------------------ */}
          <div className='item-center mt-20'>
            <div className='flex justify-center mx-auto'>
              <Image alt='image' src='/image/woman2.png' width={250} height={200} />
            </div>
            <h1 className='text-[#fca214] text-2xl text-center font-semibold px-4 pt-3 '>Yasmine Boubakir</h1>
            <p className=' text-white px-12 text-center font-semibold'>Accounts Administrator</p>
            <div className='flex gap-2 cursor-pointer justify-center py-2 text-slate-800'>
              <FaLinkedinIn size={25} className='bg-[#fca214] rounded' />
              <HiMail size={25} className='bg-[#fca214] rounded' />
            </div>
            <div className='md:w-full px-2'>
              <div className="flex border md:border-none sm:mx-2">
                <p className=" md:w-[35%] w-full  text-sm text-[#FCA311]  border   p-4 md:border-b-0 ">About Yasmine</p>
                <p className="w-[80%] hidden md:block  border-b-2"></p>
              </div>
              <div className="md:mx-2 ">
                <p className="p-4  md:pb-9 border  text-white border-t-transparent text-sm text-justify ">
                  Yas recently joined Magnet Recruit to take over the administrative
                  side of the business and manage all things accounting and
                  invoicing. While simultaneously conducting her doctoral research
                  in the field of languages and human sciences, she runs the back
                  office and operates behind the scenes to put systems of
                  organisation in place
                </p>
              </div>
              <div className="my-4 border md:border-none sm:mx-2">
                <div className="flex ">
                  <p className=" md:w-[25%] w-full   text-[#FCA311]  border  p-4 lg:border-b-0 ">Her motto</p>
                  <p className="w-[80%] hidden md:block border-b-2"></p>
                </div>
                <div>
                  <p className="md:pr-40 md:py-5 md:pb-6 w-full p-4 border  text-white border-t-transparent text-sm text-justify ">
                    “Always under-promise and over-deliver”.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* --------------------------------Section-3-------------------------------------------------------- */}

        <div className='w-full hidden md:block md:flex cols-3 mt-20 text-white' style={{ backgroundImage: 'url(image/skyscrapers.png)', backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
          <div className='grid w-[25%]'></div>
          <div className='grid w-[50%] bg-[#14213d] pt-24'>
            <div className=" justify-center   px-6   ">
              <h1 className="md:text-6xl text-xl w-full  text-[#FCA311] text-center">How do we recruit<br /> people?</h1>
              <div className='mx-auto md:pl-48 items-center'>
              <div className="  text-white pt-8 flex">
                <div className='flex justify-center'>
                  <AiFillCheckCircle size={25} fill='white' />
                </div>
                <Link href="/"><h1 className="text-justify md:font-medium  px-4 hover:text-[#FCA311]">We ask the difficult question</h1></Link>
              </div>
              <div className="  text-white mt-2 flex">
                <div className='flex mt-3 justify-center'>
                  <FaUserCheck size={25} fill='white' />
                </div>
                <Link href="/"><h1 className=" text-justify font-medium py-1 px-4 hover:text-[#FCA311]">We only put the best candidates in<br /> front of you.</h1></Link>
              </div>
              <div className="  text-white mt-2 flex">
                <div className='flex justify-center'>
                  <GoArrowRight size={25} fill='white' />
                </div>
                <Link href="/"><h1 className="text-justify  font-medium py-1 px-4 hover:text-[#FCA311]">We look for long-term partnerships.</h1></Link>
              </div>
              <div className="  text-white mt-2 flex">
                <div className='flex justify-center'>
                  <GiImperialCrown size={25} fill='white' />
                </div>
                <Link href="/"><h1 className="text-justify  font-medium py-1 px-4 hover:text-[#FCA311]">We specialise in what we do.</h1></Link>
              </div>
              <div className="  text-white mt-2 flex">
                <div className='flex mt-3 justify-center'>
                  <BsCheckLg size={25} fill='white' />
                </div>
                <Link href="/"><h1 className="text-justify  font-medium py-1 px-4 hover:text-[#FCA311]">We ensure every candidate we<br />
                  represent, can do that role.</h1></Link>
              </div>
            </div>
            </div>
          </div>
          <div className='grid w-[25%]'></div>
        </div>
        {/* -----------------------------section-4---------------------------------------------- */}

        <div className="md:w-[1240px] w-full justify-center py-12 m-auto ">
          <h1 className="text-[#fca311]  text-center py-2 font-bold">RECRUITMENT</h1>
          <h1 className="text-white  tracking-wider text-4xl text-center font-bold py-2">Our Recruitment Process</h1>
        </div>
        <div className="md:w-[900px] md:block  m-auto gap-10 hidden md:grid grid-cols-3 py-4">
          <div className="grid ">
            <h1 className="mt-40"></h1>
                <h1 className="text-[#fca311]  tracking-wider text-justify  font-bold">04. THE PROCESSING</h1>
                <span className=" border-t-2  "></span>
                <h1 className=" text-white text-sm tracking-widest justify-center ">
                  We will manage the entire process that follows the interview stage. From feedback, to offers and referencing, we will take over to save you time and enable you to focus on the essential instead.
                </h1>
            <div className='flex justify-center rotate-180'>
              <Image alt='image' src='/image/downarrow.png' width={100} height={1} />
            </div>
          </div>
          <div>
            <h1 className=" text-[#fca311] tracking-wider font-bold ">01. THE CONSULTATION</h1>
            <h1 className=" border-b-2  mt-10 "></h1>
            <div className=" grid place-content-center">
              <h1 className="py-6 tracking-widest text-white  text-sm">
                We will take a dive into your
                Company, Culture, values and
                roles’ requirement to gain an in-
                depth understanding of the vacancies.
              </h1>
            </div>
            <div className=" grid place-content-center mx-auto">
              <div className='flex justify-center py-14'>
                <Image alt='image' src='/image/Mr.png' width={250} height={150} />
              </div>
              <h1 className=" text-[#fca311] tracking-wider font-bold mt-24 ">03. THE ASSESSMENT</h1>
              <h1 className=" border-b-2 pt-6  "></h1>
              <h1 className=" py-6 tracking-widest text-white text-sm justify-center ">We will thoroughly review, shortlist and outline the most relevant applicants to go through to the interview stage.</h1>
            </div>
          </div>
          <div className="grid">
            <div className='flex justify-center'>
              <Image alt='image' src='/image/downarrow.png' width={100} height={50} />
            </div>
            <h1 className=" pt-16 text-[#fca311]  font-bold ">02. THE RESOURCING</h1>
            <h1 className=" border-b-2 "></h1>
            <h1 className="pt-10 text-sm text-white tracking-widest  ">Our Consultants will then source the best-suited candidates for your requirements. Our research process is based on our knowledge of the industry and awareness of Candidates availabilities, as well as our extensive network and database.</h1>
            <div className='flex justify-center rotate-90'>
              <Image alt='image' src='/image/downarrow.png' width={100} height={50} />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full mt-18 ">
        {/* <Carosel2/> */}
      </div>
      <Footer />
    </div>
  )
}
export default WhoweAre;
