"use client";
import Image from 'next/image'
import React, {useState}  from 'react'

const Slugecomponent = () => {
    const [path, setPath] = useState("")
  return (
    <div> 
<Image alt='ecommerce' width={400}  height={400} src={path? path: "/pic/shoes.jpg"} />

<div className='flex items-center justify-evenly mt-2 mx-auto'>
<div className='w-16 h-16 cursor-pointer'>
    <Image src={"/pic/blushort.jpg"} alt='woaw' width={ 60} height={60} onClick={()=> setPath("/pic/blushort.jpg")} />
</div>
<div className='w-16 h-16 cursor-pointer'>
    <Image src={"/pic/short.jpg"} alt='woaw' width={ 60} height={60} onClick={()=> setPath("/pic/short.jpg")} />
</div >
<div className='w-16 h-16 cursor-pointer'>
    <Image src={"/ph2.jpg"} alt='woaw' width={ 60} height={100}  onClick={()=> setPath("/ph2.jpg")} />
</div>
<div className='w-16 h-16 cursor-pointer'>
    <Image src={"/pant.jpg"} alt='woaw' width={ 60} height={60} onClick={()=> setPath("/pant.jpg")} />
</div>


</div>

    </div>
  )
}

export default Slugecomponent