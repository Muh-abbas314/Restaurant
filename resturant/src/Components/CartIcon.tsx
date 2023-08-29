import React from "react";
import Link from "next/link";
import Image from "next/image";
import cart from '../../public/cart.png'
export default function CartIcon()
{
    return(<>
    <div className="flex gap-1">
    <Image src={cart} width={20} height={20}/>
        <Link href='/Cart'>Cart </Link> 
        <span>(3)</span>
        </div>
    </>)
}