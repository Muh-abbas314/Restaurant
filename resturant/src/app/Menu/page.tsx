import React from "react";
import { menu } from "@/data";
import Link from "next/link";

export default function MenuPage()
{
    return(<>
    <div className="p-4 lg:px-20 xl:px-40 h-[100vh] md:h-[calc(100vh-9rem)]
    flex flex-col items-center md:flex-row">
        {menu.map(category=>(
            <Link href={`/Menu/${category.slug}`} key={category.id}
            className="w-full h-1/3 bg-color p-3 md:h-[50vh]"
            style={{backgroundImage:`url(${category.img})`,
            backgroundPositionX:'right',
            backgroundRepeat: 'no-repeat',
            backgroundSize:"cover"}}>
                <div className={`text-${category.color} w-1/2`}>
                    <h1 className="uppercase font-bold text-3xl">{category.title}</h1>
                    <p className="text-lg my-8">{category.desc}</p>
                    <button style={{background:`${category.color}`}} className={`hidden 2xl:block  text-${category.color ==='black'?"white":"red-500"} font-bold py-2 px-4 rounded-md`}>Explore</button>
                </div>
            </Link>
        ))}
    </div>
    </>)
}