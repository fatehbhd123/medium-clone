import Image from 'next/image'
import React from 'react'
import m from '../public/m.png'
function Hero() {
    return (
        <div className=' w-full bg-[#FFC017] flex items-center  py-36'>
            <div className='container  px-8  flex mx-auto justify-between items-center'>
                <div>
                    <h3 className='text-5xl sm:text-7xl  font-serif'>Stay curious.</h3>
                    <h6 className='text-xl sm:text-2xl my-10'>Discover stories, thinking, and expertise from writers on any topic.</h6>
                    <div className='mt-6 text-lg sm:text-xl text-white bg-[#191919] hover:bg-black  cursor-pointer ease-in duration-200  rounded-full px-10 py-2 w-fit'>
                        Start Reading
                    </div>
                </div>
                <div className='text-9xl hidden lg:inline '>
                    <Image src={m} alt='M' width={350} height={250} />
                </div>
            </div>
        </div>
    )
}

export default Hero
