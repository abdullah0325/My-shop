// import Navigation from '../components/navigation'
import Bestselling from "@/components/Best-selling"
import Catigaries from "@/components/catigaries"
import { NavigationMenuDemo } from "@/components/navlinks"
import Promotion from "@/components/promotion"
import Hero from "@/components/ui/hero"
import Services from "@/components/ui/services"
import React from "react"



export default function Home() {
  return (
    <div className="">
      <Hero/>
      <Services/>
      <Promotion/>
      <Catigaries/>
      <Bestselling/>
     

    </div>
  )
}
