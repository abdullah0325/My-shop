import { BadgeDollarSign, Cake, Truck } from 'lucide-react';
import Image from 'next/image';
import React from 'react'

const Services = () => {
  return (
    <div><section className=" body-font mb-[100px] mt-[100px]">
    <div className="container px-5 mx-auto">
      <div className="text-center mb-20">
        <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">
        Our Services
        </h1>
       
        <div className="flex mt-3 justify-center">
          <div className="w-16 h-1 rounded-full bg-orange-300 inline-flex" />
        </div>
      </div>
      
      <div className="  flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
        {/* Free delivery*/}
        <div className="group p-4 lg:w-1/3 flex flex-col text-center items-center">
          <div className="w-20 h-20 inline-flex items-center justify-center  rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
          <Truck width={55} height={60}/>
          </div>
          <div className="flex-grow">
            <h2 className="text-gray-900 group-hover:text-orange-300 duration-300 text-lg capitalize title-font font-medium mb-3">
              Free delivery
            </h2>
            <p className="leading-relaxed line-clamp-2 group-hover:text-gray-300 duration-300  text-base">
             Free delivery on order above 100$
            </p>
            
            
          </div>
        </div>
        {/*24/7 services */}
        <div className="group p-4 lg:w-1/3 flex flex-col text-center items-center">
          <div className="w-20 h-20 inline-flex items-center justify-center  rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
          <Cake width={55} height={60}/>
          </div>
          <div className="flex-grow">
            <h2 className="text-gray-900 group-hover:text-orange-300 duration-300 text-lg capitalize title-font font-medium mb-3">
            24/7 services
            </h2>
            <p className="leading-relaxed line-clamp-2 group-hover:text-gray-300 duration-300  text-base">
             
            Feel 
            
            Free for ask any  question and quires
            </p>
            
            
          </div>
        </div>
        {/* Mony back */}
        <div className="group p-4 lg:w-1/3 flex flex-col text-center items-center">
          <div className="w-20 h-20 inline-flex items-center justify-center  rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
          <BadgeDollarSign  width={55} height={60}/>
          </div>
          <div className="flex-grow">
            <h2 className="text-gray-900 group-hover:text-orange-300 duration-300 text-lg capitalize title-font font-medium mb-3">
            Mony back garenty
            </h2>
            <p className="leading-relaxed line-clamp-2 group-hover:text-gray-300 duration-300  text-base">
             mony back garenty  on  damage  product
            </p>
            
            
          </div>
        </div>

      </div>
      
    </div>
  </section>
   </div>
  )
}

export default Services;