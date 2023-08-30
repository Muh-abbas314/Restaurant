'use client'
import { setServers } from "dns";
import React from "react";
import { useState,useEffect } from "react";
type Props={
    price:number;
    id:number;
    options?:{title:string;additionalPrice:number}[];
};


export default function Price({price,id,options}:Props)
{
    const[total,setPrice]=useState(price)
    const[quantity,setQuantity]=useState(1)
    const[selected,setselected]=useState(0)
    useEffect(()=>(
        setPrice(quantity*(options?price+options[selected].additionalPrice:price))
    ),[quantity,selected,options,price])
    return(<>
    <div className="flex flex-col gap-4">
        <h2 className="text-2xl font-bold">${total.toFixed(2)}</h2>
        <div className="flex gap-4">
            {options?.map((option,index)=>(
                <button 
                onClick={()=>setselected(index)}
                style={{background:selected===index?"rgb(248 113 113)":"white",
                        color:selected===index?"white":"red"}}
                className="border p-2 rounded-lg bg-red-500 text-white border-red-500" key={option.title}>
                {option.title}
                </button>
            ))}
        </div>

        <div className="flex justify-between  items-center ">
            <div className="flex flex-row justify-between  w-1/2 p-2  border border-red-500">
                <span>Quantity</span>
                <div className=" flex justify-around">
                    <button onClick={()=>setQuantity(prev=>prev>1?prev-1:1)} className="px-1 ">{'<'}</button>
                    <span className="mx-3">{quantity}</span>
                    <button onClick={()=>setQuantity(prev=>prev<9?prev+1:prev)} className="px-1 py-0.4 ">{'>'}</button>
                </div>
            </div>
            <button className="uppercase bg-red-500 text-white p-2 ring-1 ring-red-400 rounded-lg">Add to Cart</button>
        </div>
    </div>
    </>)
}