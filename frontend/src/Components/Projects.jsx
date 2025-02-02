import React, { useRef, useEffect, useState } from 'react'
import axios from "axios"

const Projects = () => {
const backendURL = "http://localhost:5000"

const [projects, setProjects] = useState()
useEffect(()=>{
const fetchProjects = async () => {
  const response = await axios.get("http://localhost:5000/api/v1/project/fetch")
    setProjects(response)
    console.log(response)
}
fetchProjects()
}, [])

if(!projects?.data){
  return null
}
  return (
    <div id='project' className='bg-black text-white pb-20'>
      <div className='container text-center mx-auto pt-10'>
        <h1 className='font-extrabold text-3xl  text-center underline py-10 '>Projects</h1>
        <div className='container bg-gray-400 pt-4 rounded-xl'>
        <div className='flex flex-row space-x-4 bg-transparent w-80 text-blue-900 px-4 py-2 mb-4 font-bold rounded-lg'>
            <button className='hover:text-purple-700' >All</button>
            <button className='hover:text-purple-700'>Completed</button>
            <button className='hover:text-purple-700'>Pending</button>
            <button className='hover:text-purple-700'>Upcoming</button>
          </div>
  
            <p className='font-bold text-black' data-aos="fade-left" data-aos-duration="2000">With my skill-set i have contributed to building many stunning and wonderful tech solutions 
              which have been standing out over the years some of which are still under the process of being completed 
              and are likely to hit the market anytime soon.
            </p>
            <div className='grid lg:grid-cols-3 shadow-md rounded-xl projects-Container mx-auto justify-between gap-10 mt-8 bg-gray-400 p-8' data-aos="fade-right" data-aos-duration="2000">
             {projects?.data?.map((p, index) =>(
               <div key={index} className=' text-black rounded-2xl shadow-md shadow-gray-700 cursor-pointer p-4 hover:scale-150 transition duration-500 bg-white  '>
               <img className=' hover:bg-purple-300 cursor-pointer ' src={`${backendURL}${p.image}`} alt=""  />
               <p className='font-bold text-center'>{p.title}</p>
               <a href={p.url} className='font-bold hover:text-purple-600 text-blue-600'>View in browser {`${backendURL}${p.image}`}</a>
             </div>     
             ))}         
            </div>
            
        </div>
      </div>

    </div>
  )
}

export default Projects