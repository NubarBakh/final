'use client'
import AdminHeader from '../../Components/Layout/Admin/AdminHeader'
import {  LogOut,ListOrdered,LayoutDashboard,KeyboardMusic ,Utensils,TicketPercent ,Boxes} from "lucide-react";
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import Button from '../../Components/Layout/Button';
import AdminSideMenu from '../../Components/Layout/Admin/AdminSideMenu';

export default function AdminHome (){

    


    return<>

    <div   className="flex flex-col bg-slate-900 pb-10 " >
        <AdminHeader/>
      <div >
        <div className="flex gap-5 md:ml-10 sm:mx-3 mt-10 sm:flex-col md:flex-row  sm:items-center">
            
            <AdminSideMenu/>
            
          
          <div className=''>
            <Image src={'/order.png'} width={300} height={300} alt="orders" />
          </div>
          <div>
            <Image src={'/salary.png'} width={400} height={400} alt="orders" />
          </div>
        </div>
        <div className="flex  gap-5 md:ml-20 sm:mx-3 mt-10 sm:flex-col md:flex-row  sm:items-center">
          <div>
            <Image src={'/risk.png'} width={405} height={300} alt="orders" />
          </div>
          <div>
            <Image src={'/action.png'} width={300} height={300} alt="orders" />
          </div>
        </div>
      </div>
   

    </div>
       
  
     
    
    </>
}