import React, { useState } from 'react'
import pics2 from '../assets/pic2.png'
import {FaMessage, FaUser} from 'react-icons/fa6'
import { FaEnvelope } from 'react-icons/fa'
import axios from 'axios'
import { message } from 'antd'
const mess = message
const Contact = () => {
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [name, setName] = useState('')
    const feedback = {name, email, message}
     
      const handleSubmit =(e)=>{
        e.preventDefault()
      axios.post('http://localhost:3003/api/v1/project/email', feedback)
      .then((response)=>{
        mess.success(response?.data?.message)
        setEmail("")
        setMessage("")
        setName("")
      }).catch(error => {
        console.log(error);
      })
      }
      
    
  return (
    <div className='bg-[url("/src/assets/portfolio-img3.png")] '>
        <div className='flex lg:flex-row flex-col py-20 mx-auto ' > 
        <div className='lg:w-1/2 w-full mx-auto ' data-aos="fade-left" data-aos-duration="2000">
            <img className='bg-gradient-to-r from-black via-black to-transparent rounded-full mx-auto lg:mx-0' src={pics2} alt="" data-aos="fade-down" data-aos-duration="2000" />
        </div>
        <form onSubmit={handleSubmit} data-aos="fade-down" data-aos-duration="1500" className='lg:w-1/2 w-full rounded-l-3xl bg-gradient-to-r from-fuchsia-800 via-indigo-700 to-transparent p-8 text-white flex flex-col ' >
            <h1 className='font-bold text-5xl ' data-aos="fade-in" data-aos-duration="2000">Get in Touch </h1>
            <p>Send us a Message</p>
            <div className=' mt-8 w-full space-y-7 bg-transparent outline-none  ' data-aos="fade-up" data-aos-duration="2000">
            <div className='flex flex-row mb-8' >
                <input className='py-4 w-full bg-transparent border-b-2 outline-none placeholder:font-bold placeholder:text-white focus:border-blue-700 focus:placeholder:-translate-y-4 focus:placeholder:text-[8px] ' type="text" placeholder='Name' 
                value={name} onChange={(e)=>{setName(e.target.value)}}/>
            <FaUser className='absolute right-5 animate-bounce' />
            </div>
            <div className='flex flex-row mb-20' >
                <input className='w-full py-4  bg-transparent border-b-2 outline-none placeholder:font-bold placeholder:text-white focus:border-blue-700 focus:placeholder:-translate-y-4 focus:placeholder:text-[8px]' type="email" placeholder='Email'
                value={email}  onChange={(e)=>{setEmail(e.target.value)}} />
            <FaEnvelope className='absolute right-5 animate-bounce' />
            </div>
            <div className='flex flex-row' >
                <input className='w-full bg-transparent border-b-2 outline-none py-4 placeholder:font-bold focus:border-blue-700  placeholder:text-white focus:placeholder:-translate-y-4 focus:placeholder:text-[8px]' type="text" placeholder='Your message here...' 
                value={message} 
                onChange={(e)=>{setMessage(e.target.value)}} />
            <FaMessage className='absolute right-5 animate-bounce' />
            </div>
            <button type='submit' className='p-2 shadow-black shadow-md rounded-3xl font-extrabold bg-gradient-to-r from-fuchsia-800 via-green-500 to-indigo-800 cursor-pointer hover:scale-110 duration-500 transition'> Send Message</button>
            </div>
        </form>
       
        </div>
    </div>
  )
}

export default Contact