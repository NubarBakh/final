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

    <div   className="relative" >
        <AdminHeader/>
      <div>
        <div className="flex">
            <AdminSideMenu/>
          
          <div>
            <Image src={'/order.png'} width={300} height={300} alt="orders" />
          </div>
          <div>
            <Image src={'/salary.png'} width={300} height={300} alt="orders" />
          </div>
        </div>
        <div className="flex">
          <div>
            <Image src={'/risk.png'} width={300} height={300} alt="orders" />
          </div>
          <div>
            <Image src={'/action.png'} width={300} height={300} alt="orders" />
          </div>
        </div>
      </div>
   

    </div>
       
  
     
    
    </>
}