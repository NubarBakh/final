'use client'
import Basket2 from "./basket2";
import ProfileFirstSide from "../Profile/profilefirst";
import React, { createContext } from 'react';
import dynamic from 'next/dynamic';



 function MyBasket (){
    
    return<>
    <div className="gap-5 flex ">
        <div className="ml-10 sm:hidden md:flex">
            <ProfileFirstSide/>
        </div>
        <div className="w-screen bg-gray-100 mt-10 mr-20  sm:mx-5 ">
            <h2 className="flex ml-10 mt-10 font-semibold text-gray-700 text-3xl ">Your Basket</h2>
     
       <Basket2 />
      
        </div>

    </div>
    
    </>
}

export default dynamic(()=>Promise.resolve(MyBasket),{ssr:false})
