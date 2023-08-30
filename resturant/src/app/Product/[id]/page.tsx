import React from "react";
import Image from "next/image";
import { singleProduct } from "@/data";
import Price from "@/Components/Price";


export default function SingleProductPage()
{
    return(<>
    <div className="p-4 lg:px-20 xl:px-40 h-screen flex flex-col justify-around gap-5 text-red-500
    md:flex-row ">
      {singleProduct.img&&(  <div className="relative w-full h-1/2">
            <Image className="border object-contain" src={singleProduct.img} fill alt="" />
        </div>)}
        <div className="h-1/2 flex flex-col gap-4 ">
            <h1 className="text-3xl font-bold">{singleProduct.title}</h1>
            <p>{singleProduct.desc}</p>
            {/* <p>{singleProduct.price}</p> */}
            <Price price={singleProduct.price} id={singleProduct.id}
            options={singleProduct.options}/>
           
        </div>
    </div>
    </>)
}