'use client'
import React from "react"
import Countdown from 'react-countdown'

const endingDate=new Date('2023-10-01')

export default function CountDown()
{
    return(
        <div>
           <Countdown className="font-bold text-5xl text-yellow-500" date={endingDate}/>
        </div>
    )
}