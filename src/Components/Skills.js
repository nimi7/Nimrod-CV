import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'
import java from '../Pics/java.png'
import Sharp from '../Pics/C-Sharp.png'
import HTML5 from '../Pics/HTML5-CSS3.png'
import mongodb from '../Pics/mongodb-1.png'
import node from '../Pics/node-js.png'
import REACT from '../Pics/REACT-JS.png'
import './page.css'



export default function Skills() {
    const Skilling = [java, Sharp, HTML5, mongodb, node, REACT];
    console.log(Skilling)
    return (
        <div id='Skills' >
            <h1 className='Project'>Skills</h1>
            <div className='mr-24 ml-24'>
                <div class="grid grid-cols-1 gap-4 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 xs:grid justify-items-center  ">
                    {Skilling.map((props) => {
                        return <div className=''>

                            <div class="mb-24 xs:text-center ">
                                <img src={props} className='w-48 h-40'  />
                            </div>
                        </div>


                    })}

                </div>




            </div>


        </div>
    )
}




{/* <div class="grid grid-cols-1 ml-10 gap-4 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 xs:ml-24   ">
{Skilling.map((props) => {
    return <div>

        <div class="skillsimage">
            <img src={props} className='h-48 w-48'/>
        </div>
    </div>


})}

</div> */}