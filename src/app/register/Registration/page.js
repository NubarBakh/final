'use client';

import React, { useCallback, useRef, useState } from "react";
import Image from 'next/image';
import SiteMenu from "../../../Components/Layout/siteMenu";
import axios from "axios";
import Link from "next/link";
import{ Eye, EyeOff} from 'lucide-react'


export default function Registration() {
const[showPass,SetShowPass]=useState(false);
function handlePass (){
  SetShowPass(!showPass)
}

  const userRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const fullnameRef = useRef(null);

  const onClick = useCallback(() => {
    const email = emailRef.current?.value;
    const password = passwordRef.current?.value;
    const user = userRef.current?.value;
    const fullname = fullnameRef.current?.value;

    console.log("Email:", email);
    console.log("Password:", password);
    console.log("User:", user);
    console.log("Fullname:", fullname);

    if (!password || password.length < 6) {
      alert("The password must be  at least 6 characters.");
      return;
    }

    axios.post("http://localhost:3001/api/auth/signup", {
      email: email,
      password: password,
      user: user,
      fullname: fullname,
    })
      .then((result) => {
        if (result.status === 201) {
          console.log(result)
          alert("Registration successful!");

        } else {
          alert("Registration failed");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("Registration failed");
      });
  }, []);

  return (
    <>
      <div className="flex bg-red-400 p-6 justify-between pl-17">
        <div className='flex'>
          <div className='mt-1'>
            <SiteMenu />
          </div>
          <Link href={'/'}>
            <div className="text-black-300 text-3xl font-bold  sm:ml-5 md:flex  ">
              <div className="flex ">
                <div className="text-white">Foody</div>
                <div className="text-white">.</div>
              </div>
            </div>
          </Link>
        </div>
        <div className="rounded-full border bg-green-500 p-1 sm:flex  sm:col-end-1 md:flex"> Eng</div>
      </div>
      <div className="flex mx-auto sm:flex-col md:flex-row ">
        <Image className="bg-red-400 mt-5 w-1/3 h-1/3 ml-20 md:w-1/3 md:h-1/3 sm:w-9/12 sm:mx-auto sm:h-96" width={380} height={380} alt={'register'} src={'/login.png'} />
        <div className="flex mt-20 mx-auto  flex-col ">
          <div className="mx-auto flex gap-5 font-semibold text-lg mb-10">
            <div>
              <Link href={'/register'}>Login</Link>
            </div>
            <div>
              <Link href={'/register/Registration'}>Register</Link>
            </div>
          </div>
          <form className="flex flex-col">
            <label>
              Fullname
            </label>
            <input className="mt-1 h-10 bg-red-100 rounded-md pl-3 sm:w-72 md:w-96" type="text" placeholder="Fullname"
              ref={fullnameRef}
            />

            <label className="mt-4 md:mt-12 sm:mt-3">
              Username
            </label>
            <input className=" mt-1 h-10 bg-red-100 rounded-md pl-3 sm:w-72 md:w-96" type="text" placeholder="username"
              ref={userRef}
            />

            <label className="mt-4 md:mt-12 sm:mt-3">
              E-mail
            </label>
            <input className="mt-1 h-10   bg-red-100 rounded-md pl-3 sm:w-72 md:w-96" type="email" placeholder="email"
              ref={emailRef}
            />

            <label className="mt-4 md:mt-12 sm:mt-3">
              Password
            </label>
            <div className="flex  sm:w-72 md:w-96 rounded-md  bg-red-100 h-10 mb-10 pr-3">
            <input className="mt-1    pl-3  bg-red-100   border-none outline-none sm:w-72 md:w-96" type={showPass?' text':'password'}
              placeholder="password" ref={passwordRef}
            />
           <span className="flex items-center cursor-pointer" onClick={handlePass}>
  {showPass && <Eye />}
  {!showPass && <EyeOff  />}
</span>
            </div>

            <button type="button" onClick={onClick} className=' sm:mb-2 bg-red-600 rounded-md w-full sm:w-72 md:w-96 text-white'>
              Register
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
