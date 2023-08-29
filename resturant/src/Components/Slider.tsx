'use client'
import React from "react";
import Image from "next/image";
import slide1 from '../../public/slide1.png'
import slide2 from '../../public/slide2.png'
import slide3 from '../../public/slide3.jpg'
import { useState,useEffect } from "react";



const data=[
    {id:1,
    title:"Always fresh & always crispy & always hot",
    image:slide1},
    {id:2,
    title:"We deliver your order whenever you are in NY",
    image:slide2},
    {id:3,
    title:"The best Pizza to share with your family",
    image:slide3},

]
export default function Slider()
{
    const [currentSlide,setSlider]=useState(0)
    useEffect(()=>{
        const interval=setInterval(()=>{
            setSlider((prev)=>(prev===data.length-1?0:prev+1))
        },2000)
        return ()=>clearInterval(interval)
    },[])
    return(<>
   <div className="flex flex-col h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] lg:flex-row">
    <div className="bg-gray-100 h-1/2 flex items-center justify-center flex-col gap-8 text-red-500 lg:h-full lg:w-1/2">
        <h1 className="text-3xl text-center uppercase p-4 md:p-3  md:text-5xl lg:text-6xl">
            {data[currentSlide].title}
        </h1>
        <button className="bg-red-500 text-white py-4 px-10">Order Now</button>
    </div>

    <div className="w-full h-1/2 relative lg:h-full lg:w-1/2">
        <Image src={data[currentSlide].image} alt='' fill className="object-cover"/>
        {/* <Image src={slide2} alt=''/>
        <Image src={slide3} alt=''/> */}
    </div>
   </div>
    </>)
}