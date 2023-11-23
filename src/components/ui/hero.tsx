import React from 'react'
import Image from 'next/image';
import { Button } from './button';
const Hero=()=>{
return(
    
    <div><div className="hero mx-auto min-h-[80vh] bg-fixed bg-center bg-no-repeat custom-img mb-[100px]">
    <div className="hero-overlay bg-opacity-30"></div>
    <div className="hero-content text-center text-neutral-content">
      <div className="max-w-md">
        <h1 className="mb-5 text-5xl font-bold">Futurestic <span className='text-orange-300'>Clothes</span></h1>
        <p className="mb-5 text-lg font-bold">Upgrade your wordrab with sleek & stylesh apparel and top-notch shoes </p>
        <Button className='outline  outline-offset-2 outline-1 hover:rounded-3xl duration-700 group hover: hover:outline-orange-400 text-white text-xl font-bold'>
          <Image alt='berger' src={require('../../../public/download.jpeg')} className="mr-3 h-6 w-6  group-hover:animate-bounce " />
       shop now
      
    </Button>
      </div>
    </div>
  </div></div>
)
}
export default Hero;