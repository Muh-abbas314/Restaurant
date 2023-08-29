import React from "react";
import Menu from "./Menu";
import Link from "next/link";
import CartIcon from "./CartIcon";
import Image from "next/image";
import phone from'../../public/phone.png'
export default function NavBar()
{
    const user=false
    return(<>
   
        <div className="h-12 text-red-500 p-4 flex items-center
    justify-between border-b-2 border-b-red-500 uppercase md:h-24">
          
          <div className="hidden md:flex gap-4 flex-1">
            <Link href='/'>Home</Link>
            <Link href='/Menu'>Menu</Link>
            <Link href='/Contact'>Contact</Link>
          </div>
          
          <div className="text-xl md:font-bold flex-1 md:text-center">
           <Link href='/'>Massimo</Link>
        </div>
        
        <div className="md:hidden">
            <Menu/>
        </div>
        <div className="hidden md:flex gap-4 justify-end flex-1">
           <div className="md:absolute top-3 r-2 flex items-center gap-2 cursor-pointer px-2 bg-orange-300 rounded-xl"> 
           <Image src={phone} width={20} height={20} alt="phone"/><span>123 246 789</span></div>
           {!user? <Link href='/Login'>Login</Link>:<Link href='/Orders'>Orders</Link>}
            <CartIcon/>
          </div>
        
        </div>
       </>)
}