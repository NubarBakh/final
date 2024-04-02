'use client'
import React, { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { ListFilter, X } from "lucide-react";



export default function RestaurantsList() {
  const [open, setOpen] = useState(false);
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    
    const getRestaurants=async()=>{
      const{data:res}=await  axios.get("http://localhost:3001/api/restuarants");
    setRestaurants (res);
  };
  getRestaurants()
    },[]);
    
  console.log(restaurants)
      

  return (
    <>
      <div className="md:flex md:flex-row mt-5 sm:flex-col">
        <div className="bg-gray-200 w-80 p-5 m-5 mx-10 pl-10 md:flex md:flex-col sm:hidden">
          <div className="flex font-semibold gap-2 mb-3">
            <Image src={'/pizza.png'} width={30} height={30} alt={'pizza'} />
            Chinese
          </div>
          <div className="flex font-semibold gap-2 mb-3">
            <Image src={'/pizza.png'} width={30} height={30} alt={'pizza'} />
            Fast food
          </div>
          <div className="flex font-semibold gap-2 mb-3">
            <Image src={'/pizza.png'} width={30} height={30} alt={'pizza'} />
            India
          </div>
          <div className="flex font-semibold gap-2 mb-3">
            <Image src={'/pizza.png'} width={30} height={30} alt={'pizza'} />
            See food
          </div>
          <div className="flex font-semibold gap-2 mb-3">
            <Image src={'/pizza.png'} width={30} height={30} alt={'pizza'} />
            Indian
          </div>
          <div className="flex font-semibold gap-2 mb-3">
            <Image src={'/pizza.png'} width={30} height={30} alt={'pizza'} />
            Kebab
          </div>
        </div>

        <div className="2xl:hidden xl:hidden l:hidden lg:hidden md:hidden sm:flex sm:justify-center sm:items-center sm:mb-10 border-2 m-5 cursor-pointer" onClick={() => { setOpen(!open) }}>
          <div className="sm:flex sm:justify-center sm:items-center sm:mx-auto sm:p-1">
            <ListFilter />
            Filters
          </div>
        </div>

        <div className="mx-2 flex gap-5 m-5 flex-wrap sm:flex-wrap sm:justify-center md:justify-start">
          
       
            <Link href={`/restaurants/`} >
            {Array.isArray(restaurants)&&restaurants?.map(restaurant=>
             <div className="border-solid border-gray border-2 px-5 box-border pt-5">
             <div className="flex justify-center mb-2">
               
                 <Image src={''} width={100} height={100} alt={''} />
               
             </div>
             <div className="flex font-bold text-lg mb-2"></div>
             <p className="mb-3">{restaurant.name}</p>
             <div className="flex justify-between mb-3">
               <div className="font-semibold mb-2">$ Delivery</div>
               <div className="bg-red-400 text-white rounded-full p-1 px-2"></div>
             </div>
           </div>
              )}
             
            </Link>
          
        </div>

        {open && (
          <div className="2xl:hidden xl:hidden lg:hidden md:hidden bottom-0 bg-opacity-50 fixed inset-0 bg-black opacity-1">
            <div className="bg-white fixed w-full bottom-0 z-50 rounded-md shadow-2xl sm:h-96 px-10 sm:border-2 sm:border-gray">
              <div className="rounded-full border-black border-2 w-7 mx-auto flex flex-col 2xl:hidden xl:hidden lg:hidden md:hidden sm:flex sm:flex-col mt-5" onClick={() => { setOpen(false) }}>
                <X />
              </div>
              <div className="flex flex-col 2xl:hidden xl:hidden lg:hidden md:hidden sm:flex sm:flex-col divide-y divide-solid divide-gray-300">
                <p className="font-semibold text-lg mb-2 pt-2">Pizza</p>
                <p className="font-semibold text-lg mb-2 pt-2">Kebab</p>
                <p className="font-semibold text-lg mb-2 pt-2">Pizza</p>
                <p className="font-semibold text-lg mb-2 pt-2">Kebab</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
