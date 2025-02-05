import React from 'react'
import pic from '../assets/pic.png'
import { FaArrowRight } from 'react-icons/fa'
import Skills from './Skills'
import Projects from './Projects'
import Contact from './Contact.jsx'
import { TypeAnimation } from 'react-type-animation'
import CountUp from 'react-countup'
import { FaFacebook, FaWhatsapp, FaInstagram, FaLinkedin, FaGithub,} from 'react-icons/fa'
import { message } from 'antd'

const Hero = () => {
    const download = async () => {
      try {
        const response = await fetch("http://localhost:3003/api/v1/project/download", {
          method: "GET",
        });
  
        if (!response.ok) {
          message.error("Failed to download CV");
        }
  
        // Convert response to blob (binary large object)
        const blob = await response.blob();
  
        // Create a download link
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "MyCV.docx"; // Filename when downloaded
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
  
        // Clean up object URL to prevent memory leaks
        window.URL.revokeObjectURL(url);
        message.loading("Downloading please wait!!!", 2, ()=>{message.success("Downloaded Complete...")})
      } catch (error) {
        console.error("Error downloading CV:", error);
      }
    };
  

  return (
    <>
    <div  className='flex lg:flex-row flex-col-reverse justify-between px-0 bg-[url("/src/assets/portfolio-img1.png")] pt-16'>
        <div className='lg:w-2/5 w-full text-white lg:text-left text-center rounded-xl bg-gradient-to-r from-black  via-black to-transparent p-5' data-aos="fade-up-left" data-aos-duration="2000">
            <h1 className='font-extrabold text-4xl font-sans mt-4' data-aos="fade-up" data-aos-duration="2000">STANLEY SAMUEL</h1>
            <h4 className='text-2xl font-extrabold '> 
             I am a <br /> <TypeAnimation speed={50}
            repeat={Infinity} className='text-blue-800 bg-white rounded-3xl px-2 text-3xl leading-[2]' sequence={[
              'FullStack Developer', 2000,
              'Automation Tester', 2000,
              'Backend Developer', 2000,
              'Frontend Developer', 2000,
              'MERN Stack Developer', 2000,
              'Software Engineer', 2000,
              ]} /></h4>
            <p className='font-bold mt-2'><span className='text-2xl font-extrabold'>W</span>elcome to my page and feel free to explore, I have been a developer for quite a number of years with a huge amount of experience in current Web Architecture and good hands on technologies like bootstrap, tailwind css, 
            Nodejs, Typescript, ReactJs, React Typescript, Javascript, React-Bootstrap and a host of others too numerous to mention... I have also participated in building and implementing different technological solutions over the years. Feel free to explore...</p>
            <div className='flex flex-row p-4 leading-1 lg:text-left text-center lg:justify-start justify-center'>
            <div>
            <CountUp className='bg-clip-text  bg-gradient-to-r from-fuchsia-800 via-green-500 to-indigo-800 text-transparent text-6xl font-extrabold' start={0} end={5} duration={30} />
            <p className='w-[100px] font-extrabold'>Years of Experience</p>
            </div>
            <div>
            <CountUp className='bg-clip-text  bg-gradient-to-r from-fuchsia-500 via-rose-500 to-indigo-800 text-transparent text-6xl font-extrabold' start={0} end={15} duration={50} />
            <p className='w-[100px] font-extrabold'>Projects Completed</p>
            </div>
            <div>
            <CountUp className='bg-clip-text  bg-gradient-to-r from-fuchsia-800 via-blue-700 to-indigo-800 text-transparent text-6xl font-extrabold' start={0} end={25} duration={50} />
            <p className='w-[100px] font-extrabold'>Satisfied Clients</p>
            </div>
            </div>
            <button data-aos="flip-left" data-aos-duration="2000" className='flex lg:mx-0 mx-auto flex-row bg-teal-700 py-2 px-4 font-extrabold rounded-br-[40px] mt-6 border-2 border-white border-inset hover:scale-125 transition duration-500' onClick={download}>Download CV<FaArrowRight className='pt-1 ml-4 mt-1 font-extrabold'/></button>
        </div>
        <div className='mx-auto justify-betwen flex flex-col bg-gradient-to-r from-transparent  via-black to-transparent ' data-aos="fade-up-right" data-aos-duration="2000">
            <div className='rounded-full bg-gradient-to-b from- black to-transparent'>
            <img className='lg:mx-0 mx-auto rounded-full ' src={pic} width={600} height={300} alt="" />
            </div>
            <div className='social-icons flex flex-row justify-center py-2 space-x-2 visible lg:hidden md:hidden text-white mx-auto'>
                    <a href="https://facebook.com/ExcellenceJnr" className=' hover:bg-gradient-to-t from-indigo-700 via-fuchsia-600 to-transparent border-2 hover:animate-bounce rounded-full border-purple-600 p-2'><FaFacebook /></a>
                    <a href="https://github.com/stanley-samuel123" className=' hover:bg-gradient-to-t from-indigo-700 via-fuchsia-600 to-transparent border-2 hover:animate-bounce rounded-full border-purple-600 p-2' ><FaGithub /></a>
                    <a href="https://linkedin.com/in/stanley-samuel-8baa38277" className='hover:bg-gradient-to-t from-indigo-700 via-fuchsia-600 to-transparent border-2 hover:animate-bounce rounded-full border-purple-600 p-2'><FaLinkedin /></a>
                    <a href="https://instagram.com/stanleysamuel70" className=' hover:bg-gradient-to-t from-indigo-700 via-fuchsia-600 to-transparent border-2 rounded-full hover:animate-bounce border-purple-600 p-2'><FaInstagram /></a>
                    <a href="https://wa.me/message/JFS322SF713HKI" className='hover:bg-gradient-to-t from-indigo-700 via-fuchsia-600 to-transparent border-2 hover:animate-bounce rounded-full border-purple-600 p-2'><FaWhatsapp /></a>
                </div>
        </div>
    </div>
    <Skills/>
    <Projects />
    <Contact />
    </>
  )
}

export default Hero