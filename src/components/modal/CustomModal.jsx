import React, { useState, useEffect } from 'react'
import aos from "aos";
import "aos/dist/aos.css"

function CustomModal({openmodal, closemodal, title, preventPropagate}) {
  if (!openmodal) return null;

  useEffect(() => {
    aos.init(); 
  }, [])
 
  return (
    <div className='w-screen h-screen bg-gray-200 flex z-20 flex-col items-center justify-center '
    data-aos="fade" data-aos-delay="300" data-aos-anchor=".example-selector" data-aos-easing="ease-in-sine" data-aos-duration="600"
    onClick={closemodal} >
    
      <div className=' h-[100%] w-[100%] sm:h-[80%] sm:w-[50%] shadow-lg rounded-md p-4 bg-white' onClick={preventPropagate}>
        <div className='flex items-center text-center justify-center relative'>
          <h2> {title} </h2>
          <button onClick={closemodal} className='absolute right-0 text-red-500 font-bold'> X </button>
        </div>
      </div>
    </div>
  )
}

export default CustomModal