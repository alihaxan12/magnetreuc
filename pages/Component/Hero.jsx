
const Hero = () => {

    return (

        <div className=" w-full h-screen  "  >
            <div className=" bg-slate-900/80   h-screen w-full  mx-auto text-center items-center flex flex-col justify-center ">
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
                    <source src="/image/bgvid.mp4" type="video/mp4" />
                </video>
                <div className=" text-4xl grid md:w-[1240px]  font-bold text-white justify-center">
                    {/* <Typed
                        strings={[
                            "We are Food",
                            "We are Capital Projects",
                            "We are SMCG",
                            "We are Opration",
                        ]}
                        typeSpeed={100}
                        backSpeed={50}
                        loop
                    /><span className="Text-4xl font-bold text-[#fca311]">Recruitment Specialists</span>  */}


                    <button className=" text-sm tracking-widest text-white bg-transparent  border-[4px] 
                                        py-1  border-white mx-auto  mt-6 w-[280px] h-[60px] hover:border-[#fca311]
                                        ease-in-out duration-150 transition hover:-translate-y-1 hover:scale-x-110
                                        hover:bg-gray-500/70 ">
                            I&apos;M LOOKING FOR A JOB 
                    </button>
                    <button className=" text-sm tracking-widest text-white bg-transparent  border-[4px] 
                                        py-1  border-white mx-auto  mt-6 w-[280px] h-[60px] hover:border-[#fca311]
                                        ease-in-out duration-150 transition hover:-translate-y-1 hover:scale-x-110
                                        hover:bg-gray-500/70 ">
                            I&apos;M HIRING 
                    </button>
                </div>
                <div >

                </div>
            </div>
        </div>
    );
}

export default Hero;