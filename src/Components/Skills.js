import * as React from "react"
import java from '../Pics/java.png'
import Sharp from '../Pics/C-Sharp.png'
import HTML5 from '../Pics/HTML5-CSS3.png'
import mongodb from '../Pics/mongodb-1.png'
import node from '../Pics/node-js.png'
import REACT from '../Pics/REACT-JS.png'





export default function Skills() {
    const Skilling = [java, Sharp, HTML5, mongodb, node, REACT];

    return (
        <div >


            <div id='Skills' >
                <h1 className='Project'>Skills</h1>
                <div className='mr-24 ml-24'>
                    <div class="grid grid-cols-2 gap-4 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 xs:grid justify-items-center  ">
                        {Skilling.map((props) => {
                            return <div className=''>

                                <div class="mb-24 xs:text-center ">
                                    <img src={props} className=' w-32 h-32 max-w-32 max-h-32' />
                                </div>
                            </div>


                        })}

                    </div>




                </div>


            </div>
         

        </div>

    )
}




