'use client'
import React from "react";
import Image from "next/image";
import { featuredProducts } from "@/data";

export default function Featured()
{
    return(<>
   <div className="w-screen my-5 overflow-x-scroll text-red-500">
   <div className="w-max flex py-3">
    {featuredProducts.map(item=>( 
    <div key={item.id} className=" md:w-[50vw] xl:w-[33vw] xl:h-[90vh] lg:w-[40vw] w-screen h-[60vh] flex flex-col items-center justify-around
                                     hover:bg-fuchsia-50 transition-all duration-300 ">
        {/* Image */}
         {item.img&&<div className="relative hover:rotate-[30deg] transition-all duration-500">
         <Image className="object-contain" src={`${item.img}`} width={180} height={180}  alt="" />
         </div>}
        {/* Text */}
        <div className=" flex-1 flex flex-col justify-center items-center gap-4">
            <h1 className="text-xl font-bold uppercase">{item.title}</h1>
            <p className=" text-justify px-4">{item.desc}</p>
            <span className="text-xl font-bold">${item.price}</span>
            <button className="bg-red-500 text-white py-2 px-3 rounded-md">Add to cart</button>
        </div>
    </div>))}
   </div>
   
   </div>
    </>)
}