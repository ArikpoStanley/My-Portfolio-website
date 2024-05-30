import React, { useRef } from 'react'
import s3 from '../assets/lobmek.png'
import s2 from '../assets/skulman.png'
import s4 from '../assets/Screenshot4.png'
import s5 from '../assets/Screenshot5.png'
import s6 from '../assets/Screenshot6.png'
import s7 from '../assets/Screenshot7.png'
import s8 from '../assets/Screenshot8.png'
import s9 from '../assets/Screenshot9.png'
import s10 from '../assets/Screenshot10.png'
import s11 from '../assets/Screenshot11.png'
import s12 from '../assets/Screenshot12.png'
import s13 from '../assets/Screenshot13.png'
import s14 from '../assets/Screenshot14.png'
import s15 from '../assets/Screenshot15.png'


const Projects = () => {
const t1 = useRef(null)
const t2 = useRef(null)
const t3 = useRef(null)
const t4 = useRef(null)
const t5 = useRef(null)
const t6 = useRef(null)
const t7 = useRef(null)
const t8 = useRef(null)
const t9 = useRef(null)
const t10 = useRef(null)
const t11 = useRef(null)
const t12 = useRef(null)
const t13 = useRef(null)
const t14 = useRef(null)
const btn1 = useRef()
const btn2 = useRef()
const btn3 = useRef()
const btn4 = useRef()
const btn5 = useRef()
const handlebtn1 = (e)=>{
  e.preventDefault()
  t1.current.style.display = "block"
  t2.current.style.display = "block"
  t3.current.style.display = "block"
  t4.current.style.display = "none"
  t5.current.style.display = "none"
  t6.current.style.display = "none"
  t7.current.style.display = "none"
  t8.current.style.display = "none"
  t9.current.style.display = "none"
  t10.current.style.display = "none"
  t11.current.style.display = "none"
  t12.current.style.display = "none"
  t13.current.style.display = "none"
  t14.current.style.display = "none"
  btn1.current.style.backgroundColor = "teal"
  btn2.current.style.backgroundColor = "transparent"
  btn3.current.style.backgroundColor = "transparent"
  btn4.current.style.backgroundColor = "transparent"
  btn5.current.style.backgroundColor = "transparent"

}

const handlebtn2= (e)=>{
  e.preventDefault()
  t1.current.style.display = "none"
  t2.current.style.display = "none"
  t3.current.style.display = "none"
  t4.current.style.display = "block"
  t5.current.style.display = "block"
  t6.current.style.display = "block"
  t7.current.style.display = "none"
  t8.current.style.display = "none"
  t9.current.style.display = "none"
  t10.current.style.display = "none"
  t11.current.style.display = "none"
  t12.current.style.display = "none"
  t13.current.style.display = "none"
  t14.current.style.display = "none"
  btn1.current.style.backgroundColor = "transparent"
  btn2.current.style.backgroundColor = "teal"
  btn3.current.style.backgroundColor = "transparent"
  btn4.current.style.backgroundColor = "transparent"
  btn5.current.style.backgroundColor = "transparent"
}
const handlebtn4= (e)=>{
  e.preventDefault()
  t1.current.style.display = "none"
  t2.current.style.display = "none"
  t3.current.style.display = "none"
  t4.current.style.display = "none"
  t5.current.style.display = "none"
  t6.current.style.display = "none"
  t7.current.style.display = "none"
  t8.current.style.display = "none"
  t9.current.style.display = "none"
  t10.current.style.display = "block"
  t11.current.style.display = "block"
  t12.current.style.display = "block"
  t13.current.style.display = "none"
  t14.current.style.display = "none"
  btn1.current.style.backgroundColor = "transparent"
  btn2.current.style.backgroundColor = "transparent"
  btn3.current.style.backgroundColor = "transparent"
  btn4.current.style.backgroundColor = "teal"
  btn5.current.style.backgroundColor = "transparent"
}

const handlebtn3 = (e)=>{
  e.preventDefault()
  t1.current.style.display = "none"
  t2.current.style.display = "none"
  t3.current.style.display = "none"
  t4.current.style.display = "none"
  t5.current.style.display = "none"
  t6.current.style.display = "none"
  t7.current.style.display = "block"
  t8.current.style.display = "block"
  t9.current.style.display = "block"
  t10.current.style.display = "none"
  t11.current.style.display = "none"
  t12.current.style.display = "none"
  t13.current.style.display = "none"
  t14.current.style.display = "none"
  btn1.current.style.backgroundColor = "transparent"
  btn2.current.style.backgroundColor = "transparent"
  btn3.current.style.backgroundColor = "teal"
  btn4.current.style.backgroundColor = "transparent"
  btn5.current.style.backgroundColor = "transparent"

}
const handlebtn5 = (e)=>{
  e.preventDefault()
  t1.current.style.display = "none"
  t2.current.style.display = "none"
  t3.current.style.display = "none"
  t4.current.style.display = "none"
  t5.current.style.display = "none"
  t6.current.style.display = "none"
  t7.current.style.display = "none"
  t8.current.style.display = "none"
  t9.current.style.display = "none"
  t10.current.style.display = "none"
  t11.current.style.display = "none"
  t12.current.style.display = "none"
  t13.current.style.display = "block"
  t14.current.style.display = "block"
  btn1.current.style.backgroundColor = "transparent"
  btn2.current.style.backgroundColor = "transparent"
  btn3.current.style.backgroundColor = "transparent"
  btn4.current.style.backgroundColor = "transparent"
  btn5.current.style.backgroundColor = "teal"

}

  return (
    <div id='project' className='bg-black text-white pb-20'>
      <div className='container text-center mx-auto pt-10'>
        <h1 className='font-extrabold text-3xl  text-center underline py-10 '>Projects</h1>
        <div className='container bg-gray-400 pt-4 rounded-xl'>
        <div className='flex flex-row space-x-4 bg-transparent w-80 text-blue-900 px-4 py-2 mb-4 font-bold rounded-lg'>
            <button onClick={()=>{
              t1.current.style.display = "block"
              t2.current.style.display = "block"
              t3.current.style.display = "block"
              t4.current.style.display = "block"
              t5.current.style.display = "block"
              t6.current.style.display = "block"
              t7.current.style.display = "block"
              t8.current.style.display = "block"
              t9.current.style.display = "block"
              t10.current.style.display = "block"
              t11.current.style.display = "block"
              t12.current.style.display = "block"
              t13.current.style.display = "block"
              t14.current.style.display = "block"
            }} className='hover:text-purple-700' >All</button>
            <button className='hover:text-purple-700'>Completed</button>
            <button className='hover:text-purple-700'>Pending</button>
            <button className='hover:text-purple-700'>Upcoming</button>
          </div>
          <div className='flex flex-row text-black font-bold border-2 border-purple-900 rounded-full lg:w-[513px] w-[270px] mx-auto mb-8 divide-x-2 '>
            <button className=' border-purple-900 px-2 lg:px-8 rounded-l-full bg-teal-800' onClick={handlebtn1} ref={btn1}>Tab1</button>
            <button className='lg:px-8 px-2 hover:bg-blue-500' onClick={handlebtn2} ref={btn2}>Tab2</button>
            <button className='lg:px-8 px-2 hover:bg-blue-500' onClick={handlebtn3} ref={btn3}>Tab3</button>
            <button className='lg:px-8 px-2 hover:bg-blue-500 ' onClick={handlebtn4} ref={btn4}>Tab4</button>
            <button className='lg:px-8 px-2 hover:bg-blue-500 rounded-r-full ' onClick={handlebtn5} ref={btn5}>Tab5</button>
            </div>
            <p className='font-bold text-black' data-aos="fade-left" data-aos-duration="2000">With my skillset i have contributed to building many stunning and wonderful tech solutions 
              which have been standing out over the years some of which are still under the process of being completetd 
              and are likely to hit the market anytime soon.
            </p>
            <div className='grid lg:grid-cols-3 shadow-md rounded-xl projects-Container mx-auto justify-between gap-10 mt-8 bg-gray-400 p-8' data-aos="fade-right" data-aos-duration="2000">
              <div className=' text-black rounded-2xl shadow-md shadow-gray-700 cursor-pointer p-4 hover:scale-150 transition duration-500 bg-white  ' ref={t1}>
                <img className=' hover:bg-purple-300 cursor-pointer ' src={s3} alt=""  />
                <p className='font-bold text-center'>LOBMEK project</p>
                <a href="https://lobmek2.netlify.app" className='font-bold hover:text-purple-600 text-blue-600'>View in browser</a>
              </div>
              <div className='text-black rounded-2xl flex flex-col shadow-md shadow-gray-700 cursor-pointer p-4 hover:scale-150 transition duration-500 bg-white ' ref={t2}>
                <img className=' hover:bg-purple-300' src={s2} alt="" />
                <p className='font-bold'>School Management System</p>
                <a href="https://myskullapp.netlify.app" className='font-bold hover:text-purple-600 text-blue-600  '>View in browser</a>
              </div>
              <div className='text-black rounded-2xl shadow-md shadow-gray-700 cursor-pointer p-4 hover:scale-150 transition duration-500 bg-white ' ref={t3}>
                <img className=' hover:bg-purple-300' src={s4} alt="" />
                <p className='font-bold'>Website for a Startup</p>
                <a href="" className='font-bold hover:text-purple-600 text-blue-600'>View in browser</a>
              </div>
              <div className='text-black rounded-2xl shadow-md shadow-gray-700 cursor-pointer p-4 hover:scale-150 transition duration-500 bg-white  hidden' ref={t4}>
                <img className=' hover:bg-purple-300' src={s5} alt="" />
                <p className='font-bold'>Portfoilio Website</p>
                <a href="" className='font-bold hover:text-purple-600 text-blue-600 '>View in browser</a>
              </div>
              <div className='text-black rounded-2xl shadow-md p-4 shadow-gray-700 cursor-pointer hover:scale-150 transition duration-500 bg-white  hidden' ref={t5}>
                <img className=' hover:bg-purple-300' src={s7} alt="" />
                <p className='font-bold'>Dashboard</p>
                <a href="https://lobmek2.netlify.app/" className='font-bold hover:text-purple-600 text-blue-600 '>View in browser</a>
              </div>
              <div className='text-black rounded-2xl shadow-md p-4 shadow-gray-700 cursor-pointer hover:scale-150 transition duration-500 bg-white  hidden' ref={t6}>
                <img className=' hover:bg-purple-300' src={s6} alt="" />
                <p className='font-bold'>Skills Section</p>
                <a href="" className='font-bold hover:text-purple-600 text-blue-600 '>View in browser</a>
              </div>
              <div className='text-black rounded-2xl shadow-md p-4 shadow-gray-700 cursor-pointer hover:scale-150 transition duration-500 bg-white  hidden' ref={t7}>
                <img className=' hover:bg-purple-300' src={s8} alt="" />
                <p className='font-bold'>Dashboard</p>
                <a href="" className='font-bold hover:text-purple-600 text-blue-600 '>View in browser</a>
              </div>
              <div className='text-black rounded-2xl shadow-md p-4 shadow-gray-700 cursor-pointer hover:scale-150 transition duration-500 bg-white  hidden' ref={t8}>
                <img className=' hover:bg-purple-300' src={s9} alt="" />
                <p className='font-bold'>Dashboard</p>
                <a href="" className='font-bold hover:text-purple-600 text-blue-600 '>View in browser</a>
              </div>
              <div className='text-black rounded-2xl shadow-md p-4 shadow-gray-700 cursor-pointer hover:scale-150 transition duration-500 bg-white  hidden' ref={t9}>
                <img className=' hover:bg-purple-300' src={s10} alt="" />
                <p className='font-bold'>Dashboard</p>
                <a href="" className='font-bold hover:text-purple-600 text-blue-600 '>View in browser</a>
              </div>
              <div className='text-black rounded-2xl shadow-md p-4 shadow-gray-700 cursor-pointer hover:scale-150 transition duration-500 bg-white  hidden' ref={t10}>
                <img className=' hover:bg-purple-300' src={s12} alt="" />
                <p className='font-bold'>Account Settings</p>
                <a href="" className='font-bold hover:text-purple-600 text-blue-600 '>View in browser</a>
              </div>
              <div className='text-black rounded-2xl shadow-md p-4 shadow-gray-700 cursor-pointer hover:scale-150 transition duration-500 bg-white  hidden' ref={t11}>
                <img className=' hover:bg-purple-300' src={s14} alt="" />
                <p className='font-bold'>CBT portal</p>
                <a href="" className='font-bold hover:text-purple-600 text-blue-600 '>View in browser</a>
              </div>
              <div className='text-black rounded-2xl shadow-md p-4 shadow-gray-700 cursor-pointer hover:scale-150 transition duration-500 bg-white  hidden' ref={t12}>
                <img className=' hover:bg-purple-300' src={s11} alt="" />
                <p className='font-bold'>Account Settings</p>
                <a href="" className='font-bold hover:text-purple-600 text-blue-600 '>View in browser</a>
              </div>
              <div className='text-black rounded-2xl shadow-md p-4 shadow-gray-700 cursor-pointer hover:scale-150 transition duration-500 bg-white  hidden' ref={t13}>
                <img className=' hover:bg-purple-300' src={s13} alt="" />
                <p className='font-bold'>MernStack Project</p>
                <a href="" className='font-bold hover:text-purple-600 text-blue-600 '>View in browser</a>
              </div>
              <div className='text-black rounded-2xl shadow-md p-4 shadow-gray-700 cursor-pointer hover:scale-150 transition duration-500 bg-white  hidden' ref={t14}>
                <img className=' hover:bg-purple-300' src={s15} alt="" />
                <p className='font-bold'>Movie Search App</p>
                <a href="" className='font-bold hover:text-purple-600 text-blue-600 '>View in browser</a>
              </div>
              
            </div>
            
        </div>
      </div>

    </div>
  )
}

export default Projects