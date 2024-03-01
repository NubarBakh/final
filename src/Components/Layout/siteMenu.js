'use client'
import React, { useState } from "react";
import { AlignJustify, X } from "lucide-react";
import Link from "next/link";
import Button from "./Button";

export default function SiteMenu() {
  const [open, setOpen] = useState(false);
  const user = false;
  const links = [
    { id: 1, title: 'Home', url: '/' },
    { id: 2, title: 'Restaurants', url: '/restaurants' },
    { id: 3, title: 'About us', url: '/about' },
    { id: 4, title: 'How it Works', url: '/how-it-works' },
    { id: 5, title: 'FAQs', url: '/faq' },
  ];

  const toggleMenu = () => {
    setOpen(!open);
  };
  

  return (
    <>
      <div className="relative">
      <div className={`lg:hidden xl:hidden 2xl:hidden sm:flex md:hidden transition-transform duration-500 ease-in-out  ${open ? "left-0" : 'left-[-100%] '}`}>
        {!open ? (
          <div onClick={toggleMenu} className="  z-100 flex ">
            <AlignJustify />
          </div>
        ) : (
          <div onClick={toggleMenu}className=" bg-opacity-50 z-50 flex" >
            <X />
          </div>
        )}

        {open && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex ">
              <div className="bg-white  p-4 w-96 gap-5">
              {!open ? (
          <div onClick={toggleMenu} className="  z-100 flex ">
            <AlignJustify />
          </div>
        ) : (
          <div onClick={toggleMenu}className=" bg-opacity-50 z-50 flex" >
            <X />
          </div>
        )}
              {!user &&(
              <Link href={'/register'} className="bg-red-500 text-white w-40 py-2 px-4 mb-2 rounded-full 
               mt-20  mx-auto
              flex justify-center items-center ">
                Sign up
              </Link>
            
            )}
            <div className="bg-white rounded-lg p-4   mt-20" >
            {links.map((item) => (
              <Link href={item.url} key={item.id}  className="block py-2 px-4 hover:bg-gray-200 rounded-md ">
                {item.title}
              </Link>
            ))}
            </div>
              </div>
            
          </div>
        ) }
      </div>
      </div>
    </>
  );
}
