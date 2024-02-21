'use client'
import POST from "@/app/api/register/route";
import Button from "@/Components/Layout/Button";
import Link from "next/link";
import { useState } from "react";

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
            <div >
                <h2 className="text-white text-3xl font-bold">Foody.</h2>
            </div>
            <div> 
            <div className="rounded-full border bg-green-500 p-1"> Eng</div>
        </div>

    
    </div>
        <div className="flex mx-auto ">
            <Image className="bg-red-400 mt-5 w-1/3 h-1/3 ml-20" src={'/login.png'}/>

                <div className="flex mt-20 mx-auto  flex-col ">
                                <div className="mx-auto  flex gap-5 font-semibold text-lg mb-10">  
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
                            <input className="mt-1 h-10 bg-red-100 rounded-md pl-3" type="text" placeholder="Fullname"  value={fullname}
                            onChange={e=>setFullname(e.target.value)}/> 

                            <label  className="mt-4"> 
                                Username
                            </label >
                            <input className=" mt-1 h-10 bg-red-100 rounded-md pl-3" type="text" placeholder="username" value={username}
                            onChange={e=>setUsername(e.target.value)}/>

                           
                            <label className="mt-4">
                                E-mail
                            </label>
                            <input className="mt-1 h-10   bg-red-100 rounded-md pl-3" type="email" placeholder="email" value={email}
                            onChange={e=>setEmail(e.target.value)}/>

                            <label className="mt-4">
                                Password
                            </label>
                            <input className="mt-1 h-10  mb-10 bg-red-100 rounded-md pl-3" type="password" placeholder="password" value={password}
                            onChange={e=>setPassword(e.target.value)}/>

                            <Button  style={{ borderRadius :5, backgroundColor:'rgb(248 113 113)',width: 415, color :'white'}}>Register</Button>

                            <Button style={{ borderRadius :5, backgroundColor:'blue',width: 415, color :'white', marginTop:10, display:' flex'}}>
                                <Image width={24} height={24} className="mx-12" src={'/google.png'}/>
                                Login with Google</Button>
                                                       
                        </form>
           
                </div>

        </div>
    
    </>
}