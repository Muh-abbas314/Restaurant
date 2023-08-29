'use client'
import React from "react";
import Image from 'next/image'
import logo from '../../public/open.png'
import close from '../../public/close.png'
import Link from "next/link";
import CartIcon from "./CartIcon";
import { useState } from "react";

const Links=[
    {id:1,title:"Homepage",url:"/"},
    {id:2,title:"Menu",url:"/"},
    {id:3,title:"Working Hours",url:"/"},
    {id:1,title:"Contact",url:"/"},
]

export default function Menu()
{
    const [open,setOpen] = useState(false);
    const user=false

    return(<>
   
        {!open?(<Image src={logo}
        className="cursor-pointer"
        alt="Logo"
        onClick={()=>setOpen(true)}
        width={20} height={20}/>)
    : (<Image src={close}
    alt="Logo"
    className="cursor-pointer"
    onClick={()=>setOpen(false)}
    width={20} height={20}/>)}

    {open && <div className="bg-red-500 text-white absolute left-0 top-24 w-full h-[calc(100vh-6rem)]
    flex items-center justify-center flex-col gap-8 text-3xl z-10 ">
        {Links.map(item=>{
            return(<Link key={item.id } 
                onClick={()=>setOpen(false)} href={item.url}>{item.title}</Link>)
        })}
        {!user?<Link onClick={()=>setOpen(false)} href='/Login'>Login</Link>: <Link href='/Orders'>Orders</Link>}
         <Link onClick={()=>setOpen(false)} href="/Cart"><CartIcon/></Link>      
    </div>
}
    
    </>)
}