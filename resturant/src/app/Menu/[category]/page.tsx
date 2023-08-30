import React from "react";
import { pizzas } from "@/data";
import Link from "next/link";
import Image from "next/image";

export default function Category({params}:any)
{
    
    return(<>
    <div className="flex flex-wrap text-red-500">
       
        {pizzas.map(item=>(
            <Link key={item.id} className="w-full h-[60vh]
             sm:w-1/2 lg:w-1/3
             p-4
             flex flex-col justify-between
             group
             even:bg-red-100
             border-l-2 border-r-2 border-b-2 border-red-500" href={`/Product/${item.id}`}>
                {item.img&& (
                <div className="relative h-[80%]  ">
                    <Image className="object-contain" src={item.img} fill  alt=""/>
                </div>) }   
                <div className="flex justify-between items-center ">
                    <p className="font-bold text-xl">{item.title}</p>
                    {(<p className="font-bold text-xl group-hover:hidden ">${item.price}</p>)}
                    <button className= " hidden group-hover:block bg-red-500 text-white p-2 rounded ">Add to Cart</button>
                </div>
            </Link>
        ))}
    </div>
    </>)
}