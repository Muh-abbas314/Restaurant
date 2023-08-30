import React from "react";
import Image from "next/image";
import Link from "next/link";


export default function CartPage()
{
    return(<>
    <div className="h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex flex-col lg:flex-row  text-red-500">
        <div className="h-1/2 p-4 flex flex-col justify-center 
                         lg:h-full lg:w-2/3">
            <div className=" flex items-center justify-between mb-3 overflow-scroll border">
                <Image className="" src='/temporary/p1.png' width={100} height={100} alt=""/>
                <div className="">
                    <h1 className="uppercase text-xl font-bold">Sicillian</h1>
                    <span>Large</span>
                </div>
                <h2 className="font-bold">$24.90</h2>
                <span className="cursor-pointer">x</span>
            </div>
        </div>
        <div className="h-1/2 p-4 bg-fuchsia-50 flex flex-col gap-4 justify-center
                         lg:h-full lg:w-1/3">
            <div className="flex justify-between ">
                <span className="">Sub Total (3 Items)</span>
                <span className="">$81.70</span>
            </div>
            <div className="flex justify-between ">
                <span className="">Service Cost</span>
                <span className="">$0</span>
            </div>
            <div className="flex justify-between ">
                <span className="">Delivery Cost</span>
                <span className="text-green-400">*FREE</span>
            </div>
            
                <hr className=""/>
                <div className="flex justify-between ">
                <span className="uppercase">Total (inc. vat)</span>
                <span className="">$199</span>
                </div>
                <button className="uppercase bg-red-500 text-white p-3 rounded-md w-1/2 self-end">CheckOut</button>
    
        </div>
    </div>
    </>)
}