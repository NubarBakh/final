'use client'
import Link from "next/link";
import Button from "../Button";
import { useState } from 'react';

import AdminAddEdit from '../../Layout/Admin/AdminAddEdit'
import Image from "next/image";

export default function AdminHeader ({}){
  const[open, setOpen]=useState(false);
    return <>
     <div >
     
    



<header className="flex pt-2 mt-5 sm:justify-between md:flex md:justify-between bg-gray-100 px-10 mx-5 sm:py-4 my-5">
<div className="flex">
 
  <Link
    className="text-black-300 text-3xl font-bold sm:ml-5 md:flex md:justify-start"
    href={"/admin"}
  >
    <div className="flex">
      <div>Foody</div>
      <div className="text-red-500">.</div>
    </div>
  </Link>
</div>



<div className="flex gap-3 sm:flex-col sm:col-end-1 md:flex-row md:gap-1">
   <div onClick={()=>{setOpen(!open)}}>
   <Button > +ADD PRODUCT</Button>
   
   </div>
   {open&&( 
    <div >
      
  <AdminAddEdit value={'add Product'}
  />

    </div>
   )}

  <div className="rounded-full border bg-green-500 p-1 sm:flex sm:col-end-1 md:flex">
    Eng
  </div>

  
    <Link href={"/register"}>
      <div className="flex " >
      
        <Image src={'/pizza.png'} width={30} className="rounded-full" height={30} alt="admn"/> </div>
        
      
    </Link>
  
</div>
</header>
</div>
    </>
}