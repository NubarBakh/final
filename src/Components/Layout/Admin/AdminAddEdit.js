import { useState } from "react";
import Button from "../Button";
import Image from 'next/image';

export default function AdminAddEdit ({value}){
    
    const[open,setOpen]=useState(true)
    return<>

    {open&&( <div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex  justify-end">
 
   <button className="fixed inset-0 z-50 flex  justify-end text-gray-600 hover:text-gray-800"  onClick={()=>{setOpen(false)}}>
    X
  </button>  
    
 <div className="bg-white p-8 rounded-lg max-w-md w-full">
    
    
 
  
   <h2 className="text-xl font-semibold mb-4" >{value}</h2>
   <div className="flex items-center mb-4">
     <h3 className="mr-2">Upload your product image</h3>
     <div>
       <Image src={'/pizza.png'} alt="a" width={50} height={50}  />
       <input type="file" />
     </div>
   </div>
   <div className="mb-4">
     <h2>Add your Product description and necessary information</h2>
     <form className="flex flex-col">
       <label>Name</label>
       <input type="text" />
       <label>Description</label>
       <input type="text" />
       <label>Price</label>
       <input type="text" />
       <label>Restaurants</label>
       <select
       
       >
         <option value="">Please choose a restaurant</option>
         <option value="option1">Option 1</option>
         <option value="option2">Option 2</option>
         <option value="option3">Option 3</option>
       </select>
     </form>
   </div>
   <div className="flex justify-between">
     <Button >Cancel</Button>
     <Button>Create Product</Button>
   </div>
 </div>
</div>)}
 
   
  

   


    </>
}