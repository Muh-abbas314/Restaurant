import React from "react";
import Link from "next/link";

import cart from '../../public/cart.png'
export default function CartIcon()
{
    return(<>
    <div className="flex">
        <Link href='/Cart'>Cart </Link><Image src={cart} width={30} height={30}/> 
        <span>(3)</span>
        </div>
    </>)
}