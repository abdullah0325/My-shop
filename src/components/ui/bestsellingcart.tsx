import Image from 'next/image'
import React from 'react'


import { Heart, ShoppingCart } from 'lucide-react'
import { HeartCrack } from 'lucide-react'
import { Button } from './button'
import Link from 'next/link'

const Bestsellingcart = ({
  src, title, alt, description , price ,catigary , sluge
}:{
   src:string, title:string, alt:string, description:string , price:number, catigary:string , sluge:string
  }) => {
  return (
    

<div className="w-[350px] h-[35rem] relative group bg-amber-100 rounded-xl shadow-md px-4 mx-auto">
<Link href={`/${catigary}/${sluge} `}>
<div className='block  overflow-hidden h-[23rem] rounded'>
    <Image alt={alt} src={src} width={400} height={350}/></div>  


  <div className="mt-4">
    {/* title */}
    {title && (<h2 className="scroll-m-20  pb-2 text-lg font-semibold tracking-tight
     transition-colors text-black line-clamp-1 first:mt-0">{title}</h2>)}
    {/* description */}
    {description && (<p className="scroll-m-20 text-sm font-semibold text-black/60 tracking-tight">{description}</p>)}
     
{/* price */}
     {price && (<p className="mt-2 scroll-m-20 text-base font-semibold text-black tracking-tight">$ {price}</p>)}
     
    
  </div>
  </Link>
  <div>
    <Button className='goup bg-slate-600 hover:bg-transparent text-white
     hover:text-gray-700 scroll-m-20 text-xs font-semibold  tracking-tigh rounded-xl bottom-2 right-2 absolute' >
      <ShoppingCart className='mr-2 h-5 w-5 group-hover:text-orange-400 duration-500' /> Add to cart</Button>

      <Button className='goup bg-slate-600 hover:bg-transparent text-white
     hover:text-gray-700 scroll-m-20 text-xs font-semibold  tracking-tigh rounded-xl bottom-2 left-2 absolute' >
      <HeartCrack className='mr-2 h-5 w-5 group-hover:text-orange-400 duration-500' /> Buy now</Button>
    
  </div>
</div>


    
  )
}

export default Bestsellingcart