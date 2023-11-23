import { NavigationMenuDemo } from "@/components/navlinks";
import { Import } from "lucide-react";
import Image from 'next/image'
import Link from "next/link";
import next from "next/types";
import React from "react";
const Navebar =()=> {
  return(
    <div><div className="navbar mx-auto bg-mywighy ">
    <div className="navbar-start">
      <div className="dropdown">
        <label tabIndex={0} className="p-0 text-2xl lg:hidden">
          {/* <svg xmlns="a" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg> */}
<Image alt="berger" src={require("../../public/threelines.webp")} className="h-7 w-10"/>


        </label>
        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li><Link href={'/'}>Home</Link></li>
            <li tabIndex={0}>
            <details>
              <summary>Women clothing</summary>
              <ul className="p-2">
              <li><Link href={'/tops'}>Tops</Link></li>
              <li><Link href={'/pants'}>Pants</Link></li>
              <li><Link href={'/acessries'}>Acessries/Jewlry</Link></li>
              <li><Link href={'/shoes'}>Shoes</Link></li>
              </ul>
            </details>
          </li>
          <li><Link href={'/about'}>About</Link></li>
          <li><Link href={'/contact'}>Contact</Link></li>
          </ul>
        {/* <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-50">
          <li><Link href={'#'}>Home</Link></li>
          <li tabIndex={0}>
          <details>
          <summary>Women clothing</summary>
            <ul className="p-2">
              <li><Link href={'#'}>Tops</Link></li>
              <li><Link href={'#'}>Pants</Link></li>
              <li><Link href={'#'}>Acessries/Jewlry</Link></li>
              <li><Link href={'#'}>Shoes</Link></li>
              
            </ul>
            </details>
          </li>
          <li><Link href={'#'}>About</Link></li>
          <li><Link href={'#'}>Contact</Link></li>
        </ul> */}
      </div>
      {/* <Link href={'#'} className="btn btn-ghost normal-case text-xl"> <Image/> </Link> */}
      <button>
            
      
      <Image alt="Ham berger" width={60} className=" hidden lg:block rounded-3xl" src={require("../../public/logo1.jpg")}/>
      </button>
    </div>
    <div className="navbar-center ">
    <Image alt="Ham berger" width={60} className="block lg:hidden rounded-3xl" src={require("../../public/logo1.jpg")}/>
    <div className="hidden lg:flex">
    <NavigationMenuDemo/>
    </div>
    </div>
    <div className="navbar-end">
      {/* <Link href={'#'} className="btn">Button</Link> */}
      <Link href={"/cart"}>
      <label tabIndex={0} className="p-4 cursor-pointer group  duration-30">
        <div className="indicator">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 group-hover:text-orange-500" fill="none" viewBox="0 0 24 24" 
          stroke="currentColor"><path strokeLinecap="round" 
          strokeLinejoin="round" strokeWidth="2" 
          d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63
          .63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
          <span className="badge badge-sm indicator-item group group-hover:text-white group-hover:bg-black">8</span>
        </div>
      </label>
     </Link>
    </div>
    </div>
  </div>
  )
}
export default Navebar;