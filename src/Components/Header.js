import React, { useEffect, useState } from 'react'
import { AiOutlineFacebook, AiOutlineLinkedin } from 'react-icons/ai';
import { FaInstagram } from 'react-icons/fa'
import { Icon } from '@iconify/react';
import { Link } from 'react-scroll'
import { Navbar, Nav, Container } from 'react-bootstrap'
import Aos from 'aos'
import CountUp from 'react-countup';

export default function Header() {
    useEffect(() => {
        Aos.init({ duration: 4000, throttleDelay: 99 })
    }, [])
    const [color, SEtcolor] = useState()
    return (
        <div>
            <div ></div>
            <div id='header' className='Header'>



                <header>



                    <div class="w-full mr-16 bg-center bg-cover h-screen" style={{ backgroundImage: "url()" }}>

                        <div class="flex items-center justify-center w-full h-full bg-gray-900 bg-opacity-50">


                            <div class="text-center ">
                                <div className='flex w-auto text-1xl font-semibold text-white'>
                                    <div class="-mt-36 md:block md:ml-10 md:pr-4 md:space-x-4">
                                        <a href="#" class="font-medium text-gray-300 hover:text-gray-900"> <Link to='About' spy={true} smooth={true}> About </Link></a>

                                        <a href="#" class="font-medium text-gray-300 hover:text-gray-900"> <Link to='Projects' spy={true} smooth={true}> Projects </Link></a>

                                        <a href="#" class="font-medium text-gray-300 hover:text-gray-900"> <Link to='Skills' spy={true} smooth={true}> Skills </Link></a>

                                        <a href="#" class="font-medium text-indigo-300 hover:text-indigo-500 "> <Link to='ContactMe' spy={true} smooth={true}> Contact-Me</Link></a>
                                    </div>
                                </div>
                                <h1 style={{ fontFamily: "Papyrus" }} class="animate__animated animate__zoomInLeft animate__delay-1s text-7xl text-white italic hover:scale-125   ">

                                    -  Nimrod Wandam -   <span class="text-blue-400 underline "></span></h1>
                                <div>
                                    <h5 style={{ fontFamily: "Papyrus" }} className='text-indigo-100  text-center'>you can do anything you set your <strong className='text-blue-400'>MIND</strong> to...</h5>
                                    <h6 className='text-indigo-300  text-center'><a href='https://en.wikipedia.org/wiki/Benjamin_Franklin'>-"Benjamin Franklin"-</a></h6>
                                </div>
                                <div className='grid grid-cols-3 flex items-center ml-12 ml-12 w-auto   '>
                                    <a href='https://www.facebook.com/tytwp.bsbylk/'><div className='rounded-lg transition-transform transform hover:scale-105'> <span class="iconify rounded-lg" data-icon="uim:facebook-f" style={{ color: 'cornflowerblue' }} data-width="64" data-height="64"></span></div></a>
                                    <a href='https://www.instagram.com/nimi_wandam/'> <div><Icon className=" transition-transform transform hover:scale-125 rounded-lg" icon="raphael:instagram" color="salmon" width="60" height="60" /></div></a>
                                    <a href='https://www.linkedin.com/in/nimrod-wandam/'><Icon className=" transition-transform transform hover:scale-125 rounded-lg" icon="line-md:linkedin" color="cornflowerblue" width="64" height="64" /> </a>
                                </div>

                            </div>

                        </div>
                    </div>

                </header>

            </div>

        </div>

    )
}