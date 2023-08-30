import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function LoginPage()
{
    return(<>
    <div className="p-4 h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)]
                    flex items-center justify-center
                    ">
       <div className="h-full shadow-2xl rounded-md
                        flex flex-col md:flex-row md:[h-70%] md:w-full">
        <div className="relative h-1/3 w-full md:h-full md:w-1/2">
            <Image className="object-cover" src="/loginBg.png" fill alt="" />
        </div>
        <div className="p-10 flex flex-col gap-8 md:w-1/2">
            <h1 className="font-bold text-xl">Welcome</h1>
            <p>Log into your account or create a new one using social buttons</p>
            <button className=" flex gap-3 p-4 ring-1 ring-orange-100">
                <Image src='/google.png' width={20} height={20} className="object-contain"   alt=""/>
                <span>Sign in with Google</span>
                </button>
            <button className="flex gap-3 p-4 ring-1 ring-blue-100"><Image src='/facebook.png' className="object-contain"  width={20} height={20} />
            <span>Sign in with Facebook</span>
            </button>
            <p className="text-sm">Have a problem? <Link className="underline" href='/Contact'>Contact us</Link></p>
        </div>
       </div>
    </div>
    </>)
}