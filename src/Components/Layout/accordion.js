"use client"
import { Minus, Plus } from "lucide-react";
import React, { useState } from "react";

export default function Accordion ({title,text}){

    const[open,setOpen]=useState(false)
    return <> 
    <div className="flex ">
        <div className="flex  w-full p-4 shadow-md border my-1 cursor-pointer  flex-col " onClick={()=>setOpen(!open)}>
            <div className="flex w-full justify-between">
                <div >{title}</div>
                <div>
                    {open ?<Minus/>:<Plus/>}
                </div>
            </div>

            

            <div className={`  transition-all duration-500 text-slate-600 text-sm ease-in-out `}>
                {open ? text : ''}
            </div>

        
        </div>

      
    </div>
    
    </>
}