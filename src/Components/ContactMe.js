import React, { useState,useEffect } from 'react'
import emailjs from 'emailjs-com';
import Starsrating from './StarRating';
import ReactStars from "react-rating-stars-component";
import MyAvatar from '../Pics/my-avatar.png'
import { Icon } from '@iconify/react';
import { Link } from 'react-scroll'
import { Modal, Button } from 'react-bootstrap';
import SubscribePic from '../Pics/SubscribeAvatar.png'

export default function Contact() {
  
    const [Name, SetName] = useState('');
    const [Company, SetCompany] = useState('');
    const [Email, SetEmail] = useState('');
    const [Rating, SetRating] = useState();
    const [Error, SetError] = useState('');

    const [smShow, setSmShow] = useState(false);

    function sendEmail(e) {
        e.preventDefault();
        if (Name.length < 1 || Company.length < 1 || Email.length < 1) {
            SetError('Please Enter Full Information')
            setTimeout(() => {
                SetError('')
            }, 2000)

        } else {
            setSmShow(true)
            emailjs.sendForm('service_v6y1trb', 'template_3k621we', e.target, 'user_ernECXdbsypLMtuaoKOEr')
                .then((result) => {
                    console.log(result.text);
                }, (error) => {
                    console.log(error.text);
                });

        }

        e.target.reset();
        SetName('')
        SetCompany('')
        SetEmail('')
        SetRating(0);
    }
    const ratingChanged = (newRating) => {
        console.log(newRating);
        SetRating(newRating);
    };


    return (
        <div id='ContactMe'>


            <Modal
                size="sm"
                show={smShow}
                onHide={() => setSmShow(false)}
                aria-labelledby="example-modal-sizes-title-sm"
            >

                <Modal.Body className='bg-blue-100'>
                    <img src={SubscribePic} />
                    <div className='text-center text-xl'>
                        Thank U for <br /> <span className='bg-blue-300 rounded-lg text-4xl'>Subscribe</span>
                    </div>
                </Modal.Body>
            </Modal>

            <div class="min-w-screen min-h-screen bg-blue-900 flex items-center justify-center px-2 py-2">
                <div class="bg-gray-100 text-gray-500 rounded-3xl shadow-xl w-full overflow-hidden">
                    <div class=" md:flex w-full items-center justify-center ">

                        <div class="w-full md:w-1/2 py-10 px-5 md:px-10">
                            <div className='mx:ml-0'>

                                <div class=" flex mb-12 items-center justify-center bg-gray-100">
                                    <div class="flex flex-col items-center w-full w-auto p-4 bg-white rounded-3xl md:flex-row">
                                        <div class="-mt-12 md:-my-16 md:-ml-12">
                                            <img
                                                class="w-auto h-48 rounded-full border-8"
                                                src={MyAvatar}
                                                alt="Ahmed Kamel"
                                            />
                                        </div>
                                        <div class="flex flex-col space-y-4 ml-4">
                                            <div class="flex flex-col items-center md:items-start">
                                                <h2 class="text-xl font-medium">Neriya Wandam</h2>
                                                <p class="text-base font-medium text-gray-400">Full Stack Developer</p>
                                                <p class="text-base font-medium text-gray-500 xs:text-sm">Email : Neriya.w7@gmail.com</p>
                                                <p class="text-base font-medium text-gray-500 xs:text-sm">Phone : 053-720-5885</p>


                                            </div>
                                            <div class="flex items-center  justify-center space-x-3 md:justify-start">

                                                <a href='https://wa.me/972537205885'> <Icon className='transform hover:scale-125' icon="logos:whatsapp" color="salmon" width="40" height="40" /></a>

                                                <a
                                                    href="https://github.com/nimi7"
                                                    target="_blank"
                                                    class="transition-transform transform hover:scale-125"
                                                >
                                                    <span class="sr-only">Github</span>
                                                    <svg
                                                        aria-hidden="true"
                                                        class="w-8 h-8 text-black"
                                                        fill="currentColor"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 24 24"
                                                    >
                                                        <path
                                                            fill-rule="evenodd"
                                                            clip-rule="evenodd"
                                                            d="M12.026,2c-5.509,0-9.974,4.465-9.974,9.974c0,4.406,2.857,8.145,6.821,9.465 c0.499,0.09,0.679-0.217,0.679-0.481c0-0.237-0.008-0.865-0.011-1.696c-2.775,0.602-3.361-1.338-3.361-1.338 c-0.452-1.152-1.107-1.459-1.107-1.459c-0.905-0.619,0.069-0.605,0.069-0.605c1.002,0.07,1.527,1.028,1.527,1.028 c0.89,1.524,2.336,1.084,2.902,0.829c0.091-0.645,0.351-1.085,0.635-1.334c-2.214-0.251-4.542-1.107-4.542-4.93 c0-1.087,0.389-1.979,1.024-2.675c-0.101-0.253-0.446-1.268,0.099-2.64c0,0,0.837-0.269,2.742,1.021 c0.798-0.221,1.649-0.332,2.496-0.336c0.849,0.004,1.701,0.115,2.496,0.336c1.906-1.291,2.742-1.021,2.742-1.021 c0.545,1.372,0.203,2.387,0.099,2.64c0.64,0.696,1.024,1.587,1.024,2.675c0,3.833-2.33,4.675-4.552,4.922 c0.355,0.308,0.675,0.916,0.675,1.846c0,1.334-0.012,2.41-0.012,2.737c0,0.267,0.178,0.577,0.687,0.479 C19.146,20.115,22,16.379,22,11.974C22,6.465,17.535,2,12.026,2z"
                                                        ></path>
                                                    </svg>
                                                </a>
                                            </div>
                                        </div>
                                    </div>



                                    <svg width="0" height="0" xmlns="http://www.w3.org/2000/svg">
                                        <defs>

                                            <clipPath id="roundedPolygon">
                                                <path
                                                    d="M79 6.237604307034a32 32 0 0 1 32 0l52.870489570875 30.524791385932a32 32 0 0 1 16 27.712812921102l0 61.049582771864a32 32 0 0 1 -16 27.712812921102l-52.870489570875 30.524791385932a32 32 0 0 1 -32 0l-52.870489570875 -30.524791385932a32 32 0 0 1 -16 -27.712812921102l0 -61.049582771864a32 32 0 0 1 16 -27.712812921102"
                                                />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </div>


                                <div class="fixed bottom-5 right-5 flex items-center space-x-4">

                                    <a href="https://github.com/Kamona-WD" target="_blank" class="transition-transform transform hover:scale-125">
                                        <span class="sr-only">Github</span>
                                        <svg
                                            aria-hidden="true"
                                            class="w-8 h-8 text-black"
                                            fill="currentColor"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                fill-rule="evenodd"
                                                clip-rule="evenodd"
                                                d="M12.026,2c-5.509,0-9.974,4.465-9.974,9.974c0,4.406,2.857,8.145,6.821,9.465 c0.499,0.09,0.679-0.217,0.679-0.481c0-0.237-0.008-0.865-0.011-1.696c-2.775,0.602-3.361-1.338-3.361-1.338 c-0.452-1.152-1.107-1.459-1.107-1.459c-0.905-0.619,0.069-0.605,0.069-0.605c1.002,0.07,1.527,1.028,1.527,1.028 c0.89,1.524,2.336,1.084,2.902,0.829c0.091-0.645,0.351-1.085,0.635-1.334c-2.214-0.251-4.542-1.107-4.542-4.93 c0-1.087,0.389-1.979,1.024-2.675c-0.101-0.253-0.446-1.268,0.099-2.64c0,0,0.837-0.269,2.742,1.021 c0.798-0.221,1.649-0.332,2.496-0.336c0.849,0.004,1.701,0.115,2.496,0.336c1.906-1.291,2.742-1.021,2.742-1.021 c0.545,1.372,0.203,2.387,0.099,2.64c0.64,0.696,1.024,1.587,1.024,2.675c0,3.833-2.33,4.675-4.552,4.922 c0.355,0.308,0.675,0.916,0.675,1.846c0,1.334-0.012,2.41-0.012,2.737c0,0.267,0.178,0.577,0.687,0.479 C19.146,20.115,22,16.379,22,11.974C22,6.465,17.535,2,12.026,2z"
                                            ></path>
                                        </svg>
                                    </a>
                                </div>

                            </div>
                            <div class="text-center mb-10">
                                <h1 style={{fontFamily:"Papyrus"}} class="font-bold text-3xl text-gray-900 animate__animated animate__jackInTheBox">Contact Me</h1>

                            </div>
                            <div class=" flex justify-center">
                                <form class="flex flex-col bg-blue text-center float-left w-2/2 px-3 text-gray-800 rounded" onSubmit={sendEmail}>
                                    <div className='md:flex'>

                                        <div class="w-1/2  mb-5 flex flex-col ">
                                            <label for="" class="text-xs font-semibold">Full Name</label>
                                            <div class="flex ">
                                                <div
                                                    class="w-10 z-10 pl-1  text-center pointer-events-none flex items-center justify-center">
                                                    <i class="mdi mdi-account-outline  text-lg"></i></div>
                                                <input type="text" minLength='2' name='from_name' value={Name} onChange={(e) => SetName(e.target.value)} class="w-18  -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="Name Here" />



                                            </div>


                                        </div>

                                        <div class="flex flex-col w-1/2  mb-5 x">
                                            <label for="" class="text-xs font-semibold">Company</label>
                                            <div class="flex">
                                                <div
                                                    class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                                                    <i class="mdi mdi-account-outline  text-lg"></i></div>
                                                  
                                                <input type="text" name='to_name' value={Company} onChange={(e) => SetCompany(e.target.value)} class="w-18 -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="Company" />



                                            </div>


                                        </div>

                                    </div>
                                    <div className='flex flex flex-col justify-center '>
                                        <div class="w-1/2  mb-5">
                                            <label for="" class="text-xs font-semibold ">your Email</label>
                                            <div className='flex'>
                                                <div class="flex">
                                                    <div
                                                        class="w-10 z-10 md:ml-4 pl-0 text-center pointer-events-none flex items-center justify-center">
                                                        <i class="mdi mdi-email-outline text-gray-400 text-lg"></i></div>
                                                    <input type="text" name='message' value={Email} onChange={(e) => SetEmail(e.target.value)} class="w-38 -ml-14 pl-12 pr-1 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="yourEmail@gmail.com" />
                                                    <input type="hidden" name='rating' value={Rating} />

                                                </div>
                                            </div>

                                        </div>
                                        <div className='w-1/2 text-left ml-14 w-auto '>
                                            <p>Rating</p>
                                            <ReactStars
                                                count={5}
                                                onChange={ratingChanged}
                                                size={24}
                                                activeColor="#ffd700"
                                            />


                                        </div>
                                        <div className='float-left'>
                                            {Error}
                                        </div>
                                    </div>




                                    <button style={{fontFamily:"Papyrus"}} type='submit' class="px-8 rounded-r-lg bg-yellow-400  text-gray-800 font-bold p-4 uppercase border-yellow-500 border-t border-b border-r">Subscribe</button>

                                </form>
                            </div>

                        </div>
                    


                    </div>

                </div>

            </div>



            <div class="flex items-end justify-end fixed bottom-0 right-0 mb-4 mr-4 z-10">

                <div><Link to='header' spy={true} smooth={true}>
                    <a title="Buy me a beer" href="" target="_blank" class="block w-16 h-16 rounded-full transition-all shadow hover:shadow-lg transform hover:scale-110 hover:rotate-12">
                        <img class="object-cover object-center w-full h-full rounded-full" src="https://i.pinimg.com/originals/60/fd/e8/60fde811b6be57094e0abc69d9c2622a.jpg" />
                    </a>
                </Link>

                </div>
            </div>


        </div>
    )
}




{/* <form className="contact-form" onSubmit={sendEmail}>
<input type="hidden" name="from_name" />
<label>from_name</label>
<input type="text" name="from_name" />
<label>reply_to</label>
<input type="email" name="reply_to" />
<label>Message</label>
<textarea name="message" />
<button type="submit" value="Send" >Send</button>
</form> */}