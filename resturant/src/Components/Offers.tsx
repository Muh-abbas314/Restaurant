import React from "react";
import Image from "next/image";
import CountDown from "./Countdown";

export default function Offers()
{
    return(<>
    <div className="bg-black h-screen flex flex-col md:flex-row md:justify-between md:bg-[url('/offerBg.png')] md:h-[70vh]">
    <div className="flex-1 flex flex-col justify-center items-center text-center">
        <h1 className="text-white text-5xl font-bold xl:text-6xl">Delicious Burgers & French Fry</h1>
        <p className="text-white my-3">
            Progressively simpify effective e-toilers and process-centric methods of 
            empowerment. Quickly pontificate parallel.
        </p>
        <button className="bg-red-500 text-white rounded-md my-2 py-3 px-6">Order Now</button>
        <CountDown/>
    </div>
    <div className="flex-1 w-full relative md:h-full ">
        <Image className="object-contain" src='/offerProduct.png' alt="" fill/>
    </div>
    </div>
    </>)
}