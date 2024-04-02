'use client'
import AdminHeader from "../../../Components/Layout/Admin/AdminHeader";
import AdminSideMenu from '../../../Components/Layout/Admin/AdminSideMenu';
import AdminAddEdit from "../../../Components/Layout/Admin/AdminAddEdit";
import Image from "next/image";
import { Pencil,Trash2 } from "lucide-react";
import Button from "../../../Components/Layout/Button";
import { useState } from "react";
export default function Product (){

    const[show,setShow]=useState(false)
    const[open, setOpen]=useState(false);

    return <>
    <div  className="relative">
        <AdminHeader/>
        <div className="flex">
           <AdminSideMenu/>
            <div className="flex flex-col">
            <div className="flex ">
                <p>Products</p>
              <div className="flex justify-end">
                 
              <select  >
                  <option value="">Restaurant type</option>
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                </select>

              <div>
              <input placeholder="search"/>
              </div>
              </div>
            </div>
            <div>

            <div className="mx-2 flex gap-5 m-5 flex-wrap sm:flex-wrap sm:justify-center md:justify-start">
          
       
         
          
           <div className="border-solid border-gray border-2 px-5 box-border pt-5">
           <div className="flex justify-center mb-2">
             
               <Image src={'/uploadadmin.png'} width={100} height={100} alt={''} />
             
           </div>
           <div className="flex font-bold text-lg mb-2"></div>
           <p className="mb-3">{}</p>
           <div className="flex justify-between mb-3">
             <div className="font-semibold mb-2">$ 16</div>
             <div className="flex   p-1 ">
                <div onClick={()=>{setOpen(!open)}}  className="cursor-pointer">
                <Pencil />
             {open&&( 
    <div >
      
  <AdminAddEdit value={'edit Product'}
  />

    </div>
   )}


                </div>
             
             <Trash2  onClick={()=>{setShow(!show)
             console.log(show)
           
                
             }}
             />
               {show&&(
                <div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex justify-center items-center">
                <div  className="bg-white p-8 rounded-lg">
                <h2>Are you sureit`s deleted?</h2>
                <p>Attention!If you delete this product, it will not come back...</p>
                <div>
                   <div onClick={()=>{setShow(!show)}}>
                   <Button >Cancel</Button>
                   </div>
                   <div onClick={()=>{}}>
                   <Button>Delete</Button>
                   </div>
                </div>
                </div>
             </div>
             )}
             </div>
           </div>
         </div>

         
            
         
        
      </div>
            </div>
            </div>
        </div>
    </div>
    </>
}