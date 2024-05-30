import { useRef } from 'react'
import logo from '../../assets/Logo.png';
import { useState} from 'react';
import axios from 'axios'; 
import { Link } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast'
import {useNavigate, useSearchParams, Outlet} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookOpen, faCalculator, faLaptop, faGear, faArchive, faClock, faCoffee, faHome, faVideo, faUser, faMessage, faPhone, faLockOpen, faLock } from '@fortawesome/free-solid-svg-icons'
import { FaMessage, FaRegMessage } from 'react-icons/fa6';


const Signup = () => {  
  const navigate = useNavigate()
  var ref = useRef(null)
  const [email, setEmail] = useState("");
  const [phone, setPhone ] = useState("")
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("")

  const handleSubmit = async (e)=>{
    e.preventDefault()
    const newUser = {
      username,
      email,
      phone,
      password,
      confirmPassword,
    }
    if(password !== confirmPassword){
      toast.success("Password mismatched", {
        position: 'top-right', duration: 2000
      });
    }
    else if(password.length < 5 || confirmPassword.length < 5 ){
      toast.success("Password must not be less than 5", {
        position: 'top-right', duration: 2000
      });
    }
    else if(isNaN(phone)){
      toast.success("Phone number must be a number", {
        position: 'top-right', duration: 2000
      });
    }
    else{
    axios.post('http://localhost:4000/api/auth/Signup', newUser)
    .then((response)=>{
      toast.success(response.data.message, {
        position: 'top-right', duration: 2000
      });
      navigate("/EmailVerification")
    }).catch(error => {
      toast.error(error.response.data.message, {
        position: 'top-right', duration: 2000
      });
    })
  }
  }
  
  return (  
    <div className="max-w-95% bg-no-repeat  h-screen flex flex-row justify-center">
      
       <div className="flex flex-col items-center w-2/3 bg-contain">        
       <form className='flex items-center flex-col justify-center rounded-tr-[40px] mt-2 space-y-6 shadow-2xl bg-white p-10  ' onSubmit={handleSubmit} method='POST'>  
       <h1 className=' text-3xl font-extrabold mb-[10px] '>Create a new Account </h1>
       <img className='w-[40px]' src={logo} alt="" />
       
       <div className='wrapper flex flex-row justify-between border border-b-2px border-purple-900 w-[400px]  border-t-0 border-l-4 border-r-0 rounded-lg'>
       <input className=' transition-all focus:placeholder:-translate-y-4 focus:within  h-[40px] outline outline-none
       rounded-lg focus:placeholder:text-[8px] placeholder:pl-1 font-bold placeholder:text-gray-300 focus:placeholder:text-blue-800 text-gray-700  
       w-[370px]' type="text" name="username" id="name"  placeholder='Username' 
       value={username}
       required
       onChange={(e)=>{
        setUsername(e.target.value)
       }}/>
       <FontAwesomeIcon icon={faUser} />
       </div>
       
       <div className='wrapper flex flex-row justify-between border border-b-2px border-purple-900 w-[400px]  border-t-0 border-l-4 border-r-0 rounded-lg'>
       <input className='transition-all placeholder:text-gray-300 outline-none focus:placeholder:text-blue-800 focus:placeholder:-translate-y-4 focus:within peer h-[40px] 
       rounded-lg w-[370px] focus:placeholder:text-[8px] placeholder:pl-1 placeholder:font-bold font-bold text-gray-700 
       ' type="email" name="email" id="email"  placeholder='Email' 
       value={email}
       required
       onChange={(e)=>{
        setEmail(e.target.value)
       }}
       />
       <FontAwesomeIcon  icon={faMessage} />
       </div>
       <div className='wrapper flex flex-row justify-between border border-b-2px border-purple-900 w-[400px]  border-t-0 border-l-4 border-r-0 rounded-lg'>
       <input className='transition-all  outline outline-none placeholder:text-gray-300 focus:placeholder:-translate-y-4 focus:within peer h-[40px] 
       rounded-lg focus:placeholder:text-[8px] placeholder:pl-1 placeholder:font-bold font-bold text-gray-700 border-t-0 focus:placeholder:text-blue-800 
       w-[370px]' type="tel" name="phone" id="phone"  placeholder='Phone Number' 
       value={phone}
       required
       onChange={(e)=>{
        setPhone(e.target.value)}}
       />
       <FontAwesomeIcon icon={faPhone} />
       </div>
       <div className='wrapper flex flex-row justify-between border border-b-2px border-purple-900 w-[400px]  border-t-0 border-l-4 border-r-0 rounded-lg'>
       <input className='transition-all outline outline-none focus:placeholder:-translate-y-4 focus:within peer h-[40px] 
       rounded-lg focus:placeholder:text-[8px] placeholder:pl-1 placeholder:font-bold font-bold placeholder:text-gray-300 focus:placeholder:text-blue-800 text-gray-700 
       w-[370px]' type="password" name="password" id="password"  placeholder='Password' 
       value={password}
       required
       onChange={(e)=>{
        setPassword(e.target.value)
       }}/>
       <FontAwesomeIcon icon={faLock} />
       </div>
       
       <div className='wrapper flex flex-row justify-between border border-b-2px border-purple-900 w-[400px]  border-t-0 border-l-4 border-r-0 rounded-lg'>
       <input className='transition-all outline outline-none focus:placeholder:-translate-y-4 h-[40px] 
       rounded-lg focus:placeholder:text-[8px] placeholder:pl-1 placeholder:font-bold font-bold placeholder:text-gray-300 focus:placeholder:text-blue-800 text-gray-700
       w-[370px]' type="password" name="confirmPassword" id="C_password"  placeholder='Confirm Password' 
       value={confirmPassword}
       required
       onChange={(e)=>{
        setConfirmPassword(e.target.value)
       }}/>
       <FontAwesomeIcon icon={faLock} />
       </div>
       

       <input className='btn font-extrabold p-2 bg-gradient-to-r from-gray-800 to-fuchsia-800  rounded-2xl text-white w-full h-[40px] hover:bg-purple-700' type="submit" name="submit" id="btn" value="Create Account"/>
       <p className=''>Already have an account? <Link to="/Signin"><span className='font-extrabold text-blue-800'>Sign in</span></Link></p>
       </form>
       
       </div>
                      
    </div>
  )
}
export default Signup