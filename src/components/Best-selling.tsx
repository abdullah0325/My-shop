import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'

import { Heart, ShoppingCart } from 'lucide-react'
import { HeartCrack } from 'lucide-react'
import Bestsellingcart from './ui/bestsellingcart'

const Bestselling = () => {
  const bestselling=[

    {
      src:"/pic/short.jpg",
      alt:"pink short",
      title:"pink printed  short",
      desciption:"pink short for  male ",
      price:300,
      catigary:"tops",
      sluge:"pink-short"
    },
    {
      src:"/pic/blushort.jpg",
      alt:"Blue short",
      title:"Blue printed  short",
      desciption:"blue short for  male ",
      price:400,
      catigary:"tops",
      sluge:"blue short"
    },
    {
      src:"/pic/shoes.jpg",
      alt:"white shoes",
      title:"white printed  shoes",
      desciption:"white shoes for  male ",
      price:200,
      catigary:"tops",
      sluge:" white-shoes"
    }
  ]
  return (
    <div className='mb-[100px] mt-[100px]'>
        <div className="text-center mb-20">
    {/* hadding */}
<h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">
Best  selling Produts
</h1>

<div className="flex mt-3 justify-center">
  <div className="w-16 h-1 rounded-full bg-orange-300 inline-flex" />
</div>

</div>
{/* best selling products */}

<div className='flex flex-wrap justify-start gap-5'>
 {
   bestselling.map((items,i)=>(
<Bestsellingcart catigary={items.catigary} sluge={items.sluge} key={i} src={items.src} alt={items.alt} title={items.title} description={items.desciption} price={items.price}/>

   ))





 } 


</div>


    </div>
  )
}

export default Bestselling