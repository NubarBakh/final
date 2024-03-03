'use client'
import Image from "next/image"
import {  ListFilter, X } from "lucide-react";
import { useState } from "react";
import Link from "next/link";


export default function RestaurantsList (){

    const [open,setOpen]=useState(false)
    

    return <>
    <div className="md:flex md:flex-row mt-5  sm:flex-col  ">
        <div className="bg-gray-200 w-80 p-5 m-5 mx-10 pl-10 md:flex md:flex-col sm:hidden" >
        <div className="flex font-semibold gap-2 mb-3">
            <Image src={'/pizza.png'} width={30}height={30} alt={'pizza'}></Image>
            Chinese
        </div>
        <div className="flex font-semibold gap-2 mb-3">
        <Image src={'/pizza.png'} width={30}height={30} alt={'pizza'}></Image>
            Fast food
        </div>
        <div className="flex font-semibold gap-2 mb-3">  <Image src={'/pizza.png'} width={30}height={30} alt={'pizza'}></Image>
            India
        </div>
        <div className="flex font-semibold gap-2 mb-3"> <Image src={'/pizza.png'} width={30}height={30} alt={'pizza'}></Image>
            See food
            </div>
        <div className="flex font-semibold gap-2 mb-3">  <Image src={'/pizza.png'} width={30}height={30} alt={'pizza'}></Image>
            Indian
            </div>
        <div className="flex font-semibold gap-2 mb-3"> <Image src={'/pizza.png'} width={30}height={30} alt={'pizza'}></Image>
            Kebab
            </div>
        </div>

        <div className="2xl:hidden xl:hidden l:hidden lg:hidden md:hidden  sm:flex sm:justify-center sm:items-center
          sm:mb-10 border-2 m-5 cursor-pointer " onClick={()=>{setOpen(!open)}}>
        <div className="sm:flex sm:justify-center sm:items-center sm:mx-auto sm:p-1">
        <ListFilter />
        Filters
        </div>
        </div>

        
        


        <div className=" mx-2 flex gap-5 m-5 flex-wrap sm:flex-wrap sm:justify-center  md:justify-start ">

        <Link href="/restaurants/restaurant">
            <div  className="border-solid border-gray border-2 px-5 box-border pt-5" >
                <div className="flex justify-center mb-2 ">
                    <Image src={'/pizza.png'} width={100}height={100} alt={'pizza'}></Image>
                </div>
                <div className="flex font-bold text-lg mb-2">Cofe Mania</div>
                <p className=" mb-3">chinese, indian,seefood,thai</p>
                <div className="flex justify-between  mb-3">
                <div className="font-semibold  mb-2">$5 Delivery</div>
                <div className="bg-red-400 text-white rounded-full p-1 px-2  ">
                    30 Min
                </div>
                </div>
            </div>

        </Link>
       
        
        <div  className="border-solid border-gray border-2 px-5 box-border pt-5">
            <div className="flex justify-center mb-2 ">
                <Image src={'/pizza.png'} width={100}height={100} alt={'pizza'}></Image>
            </div>
            <div className="flex font-bold text-lg mb-2">Cofe Mania</div>
            <p className=" mb-3">chinese, indian,seefood,thai</p>
            <div className="flex justify-between  mb-3">
            <div className="font-semibold  mb-2">$5 Delivery</div>
            <div className="bg-red-400 text-white rounded-full p-1 px-2  ">
                30 Min
            </div>
            </div>
        </div>
        <div  className="border-solid border-gray border-2 pt-5 px-5 box-border">
            <div className="flex justify-center mb-2 ">
                <Image src={'/pizza.png'} width={100}height={100} alt={'pizza'}></Image>
            </div>
            <div className="flex font-bold text-lg mb-2">Cofe Mania</div>
            <p className=" mb-3">chinese, indian,seefood,thai</p>
            <div className="flex justify-between  mb-3">
            <div className="font-semibold  mb-2">$5 Delivery</div>
            <div className="bg-red-400 text-white rounded-full p-1 px-2  ">
                30 Min
            </div>
            </div>
        </div>
        <div  className="border-solid border-gray border-2 px-5 pt-5 box-border">
            <div className="flex justify-center mb-2 ">
                <Image src={'/pizza.png'} width={100}height={100} alt={'pizza'}></Image>
            </div>
            <div className="flex font-bold text-lg mb-2">Cofe Mania</div>
            <p className=" mb-3">chinese, indian,seefood,thai</p>
            <div className="flex justify-between  mb-3">
            <div className="font-semibold  mb-2">$5 Delivery</div>
            <div className="bg-red-400 text-white rounded-full p-1 px-2  ">
                30 Min
            </div>
            </div>
        </div>
        <div  className="border-solid border-gray border-2 px-5 pt-5 box-border">
            <div className="flex justify-center mb-2 ">
                <Image src={'/pizza.png'} width={100}height={100} alt={'pizza'}></Image>
            </div>
            <div className="flex font-bold text-lg mb-2">Cofe Mania</div>
            <p className=" mb-3">chinese, indian,seefood,thai</p>
            <div className="flex justify-between  mb-3">
            <div className="font-semibold  mb-2">$5 Delivery</div>
            <div className="bg-red-400 text-white rounded-full p-1 px-2  ">
                30 Min
            </div>
            </div>
        </div>
       
        </div>
       {open&& (  <div className="   2xl:hidden xl:hidden lg:hidden md:hidden 
         bottom-0  bg-opacity-50  fixed inset-0  bg-black opacity-1 ">
           <div className="bg-white fixed w-full bottom-0  z-50  rounded-md shadow-2xl sm:h-96 px-10 sm:border-2  sm:border-gray">

           <div className="rounded-full border-black border-2 w-7 mx-auto flex flex-col 2xl:hidden xl:hidden 
            lg:hidden md:hidden sm:flex sm:flex-col mt-5 " onClick={()=>{setOpen(false)}}>
            <X />
            </div>
           <div className=" flex flex-col 2xl:hidden xl:hidden lg:hidden md:hidden sm:flex sm:flex-col divide-y divide-solid
            divide-gray-300">
           <p className="font-semibold text-lg mb-2 pt-2 ">Pizza</p>
            <p className="font-semibold text-lg mb-2 pt-2">kebab</p>
            <p className="font-semibold text-lg mb-2 pt-2">Pizza</p>
            <p className="font-semibold text-lg mb-2 pt-2">kebab</p>
           </div>
           </div>

        </div> )}
    </div>
    
    </>
}