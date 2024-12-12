import React from 'react';
import Leptop from '../images/laptop.png'

const Laptop = () => {
  return (
    <>
    <div className='flex justify-center items-center md:mx-28 mt-4'>
      <img src={Leptop} alt="laptop" className=' md:w-full md:h-full mx-auto'/>
    </div>
    </>
  )
}

export default Laptop
