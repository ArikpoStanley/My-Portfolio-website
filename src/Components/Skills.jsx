import React from 'react'
import { FaAngleLeft, FaAngleRight} from 'react-icons/fa'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  return (
    <div className='text-white flex items-center justify-center py-28 bg-[url("/src/assets/portfolio-img2.png")] h-screen'>
      <div className='container bg-gray-900 mx-auto rounded-2xl pt-8'>
        <div className='mx-auto  flex-col'>
       <div className='mx-auto flex flex-col justify-center items-center mb-6 text-center w-4/5' data-aos="fade-up" data-aos-duration="2000">
       <h1 className='font-extrabold text-3xl mb-10 underline'>Skills</h1>
        <p className='items-center font-bold'>Over the years i have accumulated by virtue of experience a 
        number of skills that have proven to be very helpful and of great assistance and
         application to both to life and my tech career. Some of which are...</p>
       </div>
          <Carousel  centerMode responsive={responsive} infinite={true} className='skill-slider pb-10 flex items-center justify-center pr-[124px] ' >
          <div>
          <div className='border-8  border-fuchsia-800 rounded-full w-28 h-28 p-6 text-2xl font-extrabold  ' data-aos="fade-down" data-aos-duration="2000">80% </div>
          <span className='ml-7 font-bold '>UI/UX</span>
        </div>
        <div>
          <div className='border-8 border-fuchsia-800 rounded-full w-28 h-28 p-6 text-2xl font-extrabold ' data-aos="fade-down" data-aos-duration="2000">92%</div>
          <span className='ml-5 font-bold '>Javascript</span>
        </div>
        <div>
          <div className='border-8 border-fuchsia-800 rounded-full w-28 h-28 p-6 text-2xl font-extrabold ' data-aos="fade-down" data-aos-duration="2000">95%</div>
          <span className='font-bold ml-4'>Typescript</span>
        </div>
        <div>
          <div className='border-8 ml-3 border-fuchsia-800 rounded-full w-28 h-28 p-6 text-2xl font-extrabold ' data-aos="fade-down" data-aos-duration="2000">95%</div>
          <span className='font-bold '>Web Development</span>
        </div>
        <div>
          <div className='border-8 border-fuchsia-800 rounded-full w-28 h-28 p-6 text-2xl font-extrabold '>90%</div>
          <span className='ml-1 font-bold '>Bootstrap CSS</span>
        </div>
        <div>
          <div className='border-8 border-fuchsia-800 rounded-full w-28 h-28 p-6 text-2xl font-extrabold '>90%</div>
          <span className=' font-bold ml-2'>RESTful APIs</span>
        </div>
        <div>
          <div className='border-8  border-fuchsia-800 rounded-full w-28 h-28 p-6 text-2xl font-extrabold '>90%</div>
          <span className='font-bold'>Mongoose</span>
        </div>
        <div>
          <div className='border-8  border-fuchsia-800 rounded-full w-28 h-28 p-6 text-2xl font-extrabold '>90%</div>
          <span className=' font-bold ml-6'>Node Js</span>
        </div>
        <div>
          <div className='border-8  border-fuchsia-800 rounded-full w-28 h-28 p-6 text-2xl font-extrabold '>90%</div>
          <span className='ml-5 font-bold '>Express Js</span>
        </div>
        <div>
          <div className='border-8  border-fuchsia-800 rounded-full w-28 h-28 p-6 text-2xl font-extrabold '>90%</div>
          <span className='ml-10 font-bold '>SQL</span>
        </div>
        <div>
          <div className='border-8  border-fuchsia-800 rounded-full w-28 h-28 p-6 text-2xl font-extrabold ' data-aos="fade-down" data-aos-duration="2000">90%</div>
          <span className=' font-bold ml-3'>Typescript</span>
        </div>
        <div>
          <div className='border-8 ml-2 border-fuchsia-800 rounded-full w-28 h-28 p-6 text-2xl font-extrabold ' data-aos="fade-down" data-aos-duration="2000">90%</div>
          <span className='font-bold'>React Bootstrap</span>
        </div>
          </Carousel>
        </div>
        
      </div>
    </div>
  )
}

export default Skills