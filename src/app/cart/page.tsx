import { Button } from '@/components/ui/button'
import React from 'react'

const Cart = () => {
  return (
    <div className='mt-[50px] mb-[100px] '>Cart
    
    <div className='grid grid-cols-1 lg:grid-cols-3'>
{/* items */}


<div className='col-span-2'></div>



{/* summary */}

<div className='bg-black/10 p-4 rounded-xl'>
    
    {/* hadding*/}

<h1 className="scroll-m-20 text-lg font-semibold tracking-tight uppercase text-gray-800">order summry</h1>


{/* devider */}
<div className="divider mt-0 mb-1 s"></div>


{/* pricing */}
<div className='text-lg font-medium tracking-tight  text-gray-600'>
<div className='flex items-center justify-between capitalize'>
{/* product pricing */}
    <h1>sub total</h1>
    <h1>$ 500</h1>
</div>

{/* delivry price */}

<div className='flex items-center justify-between capitalize'>
{/* delivry  pricing */}
    <h1>deleviry charges</h1>
    <h1>
    TBD
    </h1>
</div>


<div className='flex items-center justify-between capitalize'>
{/* service  pricing */}
    <h1>sales  tax</h1>
    <h1>
    TBD
    </h1>
</div>

</div>
<div className="divider mt-0 mb-1 s"></div>
{/* estimaited total */}


<div className='flex items-center justify-between capitalize'>
{/*  */}
    <h1>estimait  total</h1>
    <h1>$ 1500</h1>
</div>

{/* devider */}
<div className="divider mt-0 mb-1 s"></div>
{/* chek out */}
<div className='flex items-center justify-center '>
    <Button className='bg-blue-400 duration-100 uppercase hover:shadow-md hover:bg-slate-300 rounded-xl'>proceed to chek out</Button>



</div>
{/* devider */}
<div className="divider mt-0 mb-1 s"></div>
{/* chek out */}






    </div></div>


    
    
    </div>
  )
}

export default Cart