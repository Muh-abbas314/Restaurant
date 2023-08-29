import React from "react";
import Menu from "./Menu";
import Link from "next/link";

export default function NavBar()
{
    return(<>
   
        <div className="h-12 text-red-500 p-4 flex items-center
    justify-between border--2 border-b-red-500 uppercase">
          <div className="text-xl">
           <Link href='/'>Massimo</Link>
        </div>
        
        <div>
            <Menu/>
        </div>
        
        </div>
       </>)
}