"use client"
import { useState } from 'react';
import Image from 'next/image';
import AdminHeader from '../../../Components/Layout/Admin/AdminHeader';
import AddRestaurant from '../../../Components/Layout/Admin/AddRestaurant';
import AdminSideMenu from '../../../Components/Layout/Admin/AdminSideMenu';
import { Trash2, Pencil } from 'lucide-react';

export default function AdminRestaurants() {
  const [open, setOpen] = useState(false);



  return (
    <>
      <div className='relative'>
        {open && <AddRestaurant value='Add restaurant' />}
        <AdminHeader />
        <div className='flex'>
          <AdminSideMenu />
          <div>
            <div className='flex justify-between items-center'>
              <p>Restaurants</p>
              <div>
                <select>
                  <option value=''>Category type</option>
                  <option value='option1'>Option 1</option>
                  <option value='option2'>Option 2</option>
                  <option value='option3'>Option 3</option>
                </select>
              </div>
              <div onClick={()=> setOpen(!open)}>
                + Add Restaurant
              </div>
            </div>
            <div className='flex border-2 items-center'>
              <Image src='/Pizza.png' width={50} height={50} alt='pizza' />
              <div>
                <h2>Papajons</h2>
                <p>pizza</p>
              </div>
              <div>
                <Trash2 />
                <Pencil />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
