'use client'
import POST from "@/app/api/register/route";
import Button from "@/Components/Layout/Button";
import Link from "next/link";
import { useState } from "react";
import Image from 'next/image';
import Header from "@/Components/Layout/Header";
import SiteMenu from "@/Components/Layout/siteMenu";


export default function Registration (){
const[email,setEmail]=useState('');
const[fullname,setFullname]=useState('')
const[username,setUsername]=useState('')
const[password,setPassword]=useState('')

function handleFormSubmit(e){
    e.preventDefault();
    fetch('/api/register',{
        method:'POST',
        body: JSON.stringify({email,password,username,fullname}),
        headers:{'Content-Type':'application/json'},
    })

}

    return <>
         <div className="flex bg-red-400 p-6 justify-between pl-17">
   <div className='flex'>
   <div className='mt-1'>
    <SiteMenu/>
   </div>
        <Link className="text-black-300 text-3xl font-bold  sm:ml-5 md:flex  " href={'/'}>
            <div className="flex ">
                <div className="text-white">Foody</div>
                <div className="text-white">.</div>
            </div>
        </Link>
   </div>
        <div className="rounded-full border bg-green-500 p-1 sm:flex  sm:col-end-1 md:flex"> Eng</div>
   

    
    </div>
        <div className="flex mx-auto sm:flex-col md:flex-row ">
            <Image className="bg-red-400 mt-5 w-1/3 h-1/3 ml-20 md:w-1/3 md:h-1/3 sm:w-9/12 sm:mx-auto sm:h-96" width={380} height={380} alt={'register'} src={'/login.png'}/>

                <div className="flex mt-20 mx-auto  flex-col ">
                                <div className="mx-auto flex gap-5 font-semibold text-lg mb-10">  
                                        <div>
                                        <Link href={'/register'}>Login</Link>
                                        </div>
                                    <div>
                                    <Link href={'/register/Registration'}>Register</Link>
                                    </div>
                                    </div>
                        <form onSubmit={handleFormSubmit} className="flex flex-col">

                        <label > 
                                Fullname
                            </label>
                            <input className="mt-1 h-10 bg-red-100 rounded-md pl-3 sm:w-72 md:w-96" type="text" placeholder="Fullname"  value={fullname}
                            onChange={e=>setFullname(e.target.value)}/> 

                            <label  className="mt-4 md:mt-12 sm:mt-3"> 
                                Username
                            </label >
                            <input className=" mt-1 h-10 bg-red-100 rounded-md pl-3 sm:w-72 md:w-96" type="text" placeholder="username" value={username}
                            onChange={e=>setUsername(e.target.value)}/>

                           
                            <label className="mt-4 md:mt-12 sm:mt-3">
                                E-mail
                            </label>
                            <input className="mt-1 h-10   bg-red-100 rounded-md pl-3 sm:w-72 md:w-96" type="email" placeholder="email" value={email}
                            onChange={e=>setEmail(e.target.value)}/>

                            <label className="mt-4 md:mt-12 sm:mt-3">
                                Password
                            </label>
                            <input className="mt-1 h-10  mb-10 bg-red-100 rounded-md pl-3 sm:w-72 md:w-96" type="password" placeholder="password" value={password}
                            onChange={e=>setPassword(e.target.value)}/>

                           <div className='sm:w-72 md:w-96 w-full sm:mb-2'>
                           <Button  className='w-full sm:w-72 md:w-96' style={{ borderRadius :5, backgroundColor:'rgb(248 113 113)', color :'white'}}>Register</Button>


                           </div>
                                                       
                        </form>
           
                </div>

        </div>
    
    </>
}