'use client'
import Image from "next/image";
import Button from '../../../Components/Layout/Button'
import React, { useCallback, useRef, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";


export default function AdminLogin(){
    const router= useRouter()

    const emailRef = useRef(null);
    const passwordRef = useRef(null);

   

    const onClick = useCallback((e) => {
        e.preventDefault();

        const email = emailRef.current?.value;
        const password = passwordRef.current?.value;

        console.log("Email:", email);
        console.log("Password:", password);

        axios.post("http://localhost:3001/api/auth/signin", {
            email: email,
            password: password,
        })
        .then((response) => {
            console.log("Login Result:", response);

          

            if (response.status === 200) {

               
                if(response.data.user.id=='pF3GvMos5MXN1EsmpcCV0l9YL6h1'){ alert("Login successful!");}
              //  said2323@gmail.com  said2023
                console.log(response.status);
                console.log(response.data.user.id)
               

                // Redirect to the profile page
                router.push("/admin");
            }
        })
        .catch(error => {
            console.log("Login Error:", error.response);
           
           
            alert(error.response?.data?.message || "Login failed");
        });
    }, [router]);

   
    return <>

   <div className="flex flex-col">
    <div className="flex justify-between"> 
    <h1>Foody.</h1>
    <div>Lang</div>

    </div>
   
    <div className="flex items-center justify-center">
        <div className="flex flex-col">
            <h2>Welcome Admin</h2>
            <input type="text" placeholder="email" className="border" ref={emailRef}/>
            <input type="password" placeholder="Password" className="border" ref={passwordRef}/>
            <div  onClick={onClick}>
            <Button style={{backgroundColor:'green', borderRadius:3,color:'white', }} > Signin</Button>

            </div>       
             </div>
        <Image src={'/admin.png'} alt=""  width={200} height={200} />
        
    </div>
   </div>
    </>
}