import React from 'react'

const Promotion = () => {
  return (
    <div className='mb-[100px] mt-[100px]'>
         <div className="text-center mb-20">
        {/* hadding */}
    <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">
    Our Promotion
    </h1>
   
    <div className="flex mt-3 justify-center">
      <div className="w-16 h-1 rounded-full bg-orange-300 inline-flex" />
    </div>
  
  </div>
  {/* Promotion  start hear */}
  <div className='grid grid-cols-1 md:grid-cols-2 gap-6 '>
    {/* fist chaild */}
    <div className="hero h-[25rem] promo-1 rounded-xl " >
  <div className="hero-overlay bg-opacity-70 rounded-xl"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5   text-4xl font-bold uppercase text-white  tracking-tight">Get Upto <span className='text-orange-400'>60%</span>  Off</h1>
      <p className="mt-2 text-white scroll-m-20 text-base font-medium tracking-tight">Flash sales  Get upto  60% off  on seasonal verient </p>
      
    </div>
  </div>
</div>
    {/* second chiled */}
    <div className="hero h-[25rem] promo-2 rounded-xl " >
  <div className="hero-overlay bg-opacity-70 rounded-xl"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5   text-4xl font-bold uppercase text-white  tracking-tight">Get Upto <span className='text-orange-400'>30%</span>  Off</h1>
      <p className="mt-2 text-white scroll-m-20 text-base font-medium tracking-tight">Flash sales  Get upto  30% off  on new fashan  souts </p>
      
    </div>
  </div>
</div>
  </div>
  </div>
  )
}

export default Promotion