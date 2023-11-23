import { Button } from '@/components/ui/button'
import Slugecomponent from '@/components/ui/slugecomponent'
import { HeartCrack, Minus, Plus, ShoppingCart } from 'lucide-react'
import React from 'react'

const Sluge = () => {
  return (
    <section className="text-gray-600 body-font overflow-hidden">
  <div className="container px-5 py-24 mx-auto">
    <div className="lg:w-4/5 mx-auto flex flex-wrap">

{/* image */}


      {/* <img
        alt="ecommerce"
        className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
        src="https://dummyimage.com/400x400"
      /> */}
<Slugecomponent/>


      <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">

{/* catigary */}
        
        <h2 className="text-lg title-font text-gray-500 tracking-widest">
          Tops
        </h2>



        
        {/* title */}
        <h1 className="text-gray-900 mt-2 capitalize text-3xl title-font font-medium mb-1">
          white printed shoes
        </h1>

{/* rating */}
<div className="mt-2 rating rating-sm">
  <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" checked />
  <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
</div>

<div className="divider"></div>

       

        {/* description */}
        <p className="leading-relaxed mt-3">
        Introducing our stylish and versatile White Printed Shoes!
         These fashion-forward shoes are designed
         to elevate your outfit with their trendy print and classic 
         white color. Crafted with care and attention to 
        </p>
        <div className="flex mt-6 items-center pb-5  border-gray-100 mb-5">
          <div className="flex">
            <span className="mr-3">Color</span>
            <button className="border-2 border-gray-300 rounded-full w-5 h-5 focus:outline-none" />
            <button className="border-2 border-gray-300 ml-1 bg-gray-700 rounded-full w-5 h-5 focus:outline-none" />
            <button className="border-2 border-gray-300 ml-1 bg-indigo-500 rounded-full w-5 h-5 focus:outline-none" />
            <button className="border-2 border-gray-300 ml-1 bg-red-500 rounded-full w-5 h-5 focus:outline-none" />
          </div>
          <div className="flex ml-6 items-center">
            <span className="mr-3">Size</span>
            <div className="relative">
            <div className="form-control w-full max-w-xs">
  
  <select className="select capitalize select-bordered">
    <option disabled selected>select size </option>
    <option>s</option>
    <option>m</option>
    <option>lg</option>
    <option>xl</option>
    <option>xxl</option>
  </select>
  
</div>
             
            </div>
          </div>
        </div>
{/* q */}
<div className='flex items-center '>
<span className="mr-3">Quantity</span>

<Button className='goup bg-slate-600 hover:bg-transparent text-white
     hover:text-gray-700 scroll-m-20 text-xs font-semibold w-fit h-fit  tracking-tigh rounded-xl bottom-2 right-2 ' >
      <Minus  className='mr-2 h-5 w-5 hover:text-orange-600 duration-300' /> Less</Button>
<div className='mr-2 ml-2 scroll-m-20 text-base font-semibold tracking-tight'>         hellow

</div>

<Button className='goup bg-slate-600 hover:bg-transparent text-white
     hover:text-gray-700 scroll-m-20 text-xs font-semibold w-fit h-fit  tracking-tigh rounded-xl bottom-2 right-2 ' >
      <Plus className='mr-2 h-5 w-5 hover:text-orange-600 duration-300' />Add</Button>
</div>

{/* dvider */}
        <div className="divider"></div>

        <div className="flex items-center justify-between">
          <span className="title-font font-medium text-2xl text-gray-900">
            $58.00
          </span>



          
          <Button className='goup bg-slate-600 hover:bg-transparent text-white
     hover:text-gray-700 scroll-m-20 text-xs font-semibold  tracking-tigh rounded-xl bottom-2 right-2 ' >
      <ShoppingCart className='mr-2 h-5 w-5 hover:text-orange-600 duration-300' /> Add to cart</Button>
          {/* <button title='shuch as' className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
            <svg
              fill="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
            </svg>
          </button> */}
          
        </div>
        <Button className='goup bg-slate-600 mt-5 w-full hover:bg-transparent text-white
     hover:text-gray-700 scroll-m-20 text-xs font-semibold  tracking-tigh rounded-xl bottom-2 left-2 ' >
      <HeartCrack className='mr-2 h-5 w-5 hover:text-orange-800 duration-300' /> Buy now</Button>
       
      </div>
    </div>
  </div>
</section>

  )
}

export default Sluge