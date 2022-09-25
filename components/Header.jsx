import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import logo from '../public/logo.svg'

const links = ['Our Story', 'Membership', 'Write', 'Sign In']
const Link = ({ link }) => {
    return (
        <div className='hidden sm:inline ml-4 cursor-pointer '>
            {link}
        </div>
    )
}

function Header() {

    return (
        <header className={`w-full border-b  border-black bg-[#FFC017]  ease-in duration-200  z-10`}>
            <div className='container px-8 mx-auto flex justify-between items-center'>
                <Image src={logo} alt='Medium' width={150} />
                <div className='flex text-black items-center text-sm'>
                    {links.map((e, i) => {
                        return (
                            <Link

                                key={i} link={e} />
                        )
                    })}
                    <div className={`ml-4 text-white bg-[#0000009d] hover:bg-black cursor-pointer ease-in duration-200  rounded-full px-3 py-2`}>
                        Get Started
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
