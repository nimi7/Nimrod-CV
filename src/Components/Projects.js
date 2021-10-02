
import react from 'react'
import Burger from '../Pics/Burger-Web.png'
import Tilok from '../Pics/Tilok-Web.png'
import Westa from '../Pics/westa-tzaga.png'
import './page.css'
import Skills from './Skills'
import ProjectJasn from './ProjectJason';
import { Link } from 'react-router-dom'


export default function Projects() {
    console.log('ProjectJasn', ProjectJasn)
    return (
        <div id='Projects' className='project'>
            <div class="container mx-auto ">
                <h1 className='Project'>My Project</h1>




            </div>


            {ProjectJasn.map((props) => {
                return <div class="my-4  transform hover:scale-110 duration-500 relative rounded-lg flex flex-col md:flex-row items-center md:shadow-xl md:h-72 mx-2">
                  
                        <div class="z-0 order-1 md:order-2 relative w-full md:w-2/5 h-80 md:h-full overflow-hidden rounded-lg md:rounded-none md:rounded-r-lg">
                            <div class="absolute inset-0 w-full h-full object-fill object-center bg-blue-400 bg-opacity-30 bg-cover bg-bottom background-blend-mode: multiply" style={{ backgroundImage: `url(${props.Pic})` }} ></div>
                            <div class="md:hidden absolute inset-0 h-full p-6 pb-6 flex flex-col-reverse justify-start items-start bg-gradient-to-b from-transparent via-transparent to-gray-900">
                                <h3 class="w-full font-bold text-2xl text-white leading-tight mb-2">{props.Name}</h3>
                                <h4 class="w-full text-xl text-gray-100 leading-tight"></h4>
                            </div>
                            <svg class="md:block absolute inset-y-0 h-full w-24 fill-current text-white -ml-12" viewBox="0 0 100 100" preserveAspectRatio="none">
                                <polygon points="50,0 100,0 50,100 0,100" />
                            </svg>
                        </div>

                        <div class="z-10 order-2 md:order-1 w-full h-full md:w-3/5 flex items-center -mt-6 md:mt-0">
                            <div class="p-8 md:pr-18 md:pl-14 md:py-12 mx-2 md:mx-0 h-full bg-white rounded-lg md:rounded-none md:rounded-l-lg shadow-xl md:shadow-none">
                                <h4 class="hidden md:block text-xl text-gray-400">{props.WebSite}</h4>
                                <h3 class="hidden md:block font-bold text-2xl text-gray-700">{props.Name}</h3>
                                <p class="text-gray-600 text-justify">{props.Words}</p>
                                <a class="flex items-baseline mt-3 text-blue-600 hover:text-blue-900 focus:text-blue-900" href={props.WebSite}>
                                    <span>Go to WebSite</span>
                                    <span class="text-xs ml-1">&#x279c;</span>
                                </a>
                            </div>
                        </div>
                   
                </div>

            })}



        </div>

    )
}