import { useCallback, useEffect, useRef, useState } from "react";
import Button from "../Button";
import Image from 'next/image';
import axios from "axios";

export default function AdminAddProduct ({value}){
    
    const[open,setOpen]=useState(true);
    const[lists,setLists]=useState([]);
    const nameRef=useRef(null);
    const descriptionRef= useRef(null);
    const priceRef= useRef(null);
    const [selectedRestaurant, setSelectedRestaurant] = useState("");


    useEffect(()=>{
      axios.get('http://localhost:3001/api/restuarants')
      .then((result)=>{
        setLists(result.data.result.data)
        console.log(result.data.result.data)
        })
      .catch((error)=>{
        console.log(error)
      })
    },[]);

    const handleRestaurantChange = (e) => {
      setSelectedRestaurant(e.target?.value);
    };

    const create= useCallback (()=>{

      const name = nameRef.current?.value;
      const price = priceRef.current?.value;
      const description=descriptionRef.current?.value;

      axios.post('http://localhost:3001/api/products')
      .then(
        {
          "name": name,
          "description": description,
          "img_url": "saaatrgfbing",
          "rest_id": selectedRestaurant,
          "price": price,
        }
      )
      .catch((error)=>{
        console.log(error)
      })
    },[selectedRestaurant])


    return<>

    {open&&( <div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex    justify-end">
 
  
    
 <div className="  rounded-lg  bg-slate-800 sm:pl-1 ">
    
    
 
  
   <h2 className="text-xl text-white font-semibold mb-2 sm:pl-1 mt-1" >{value}</h2>
   <div className="flex  flex-col  mb-4 sm:pl-1">
     <h3 className="text-white mb-2">Upload your product image</h3>
     <div className="flex">
      {/*<Image src={'/pizza.png'} alt="a" width={50} height={50}  />*/ }
       <input type="file" />
     </div>
   </div>
   <div className="mb-2 flex sm:flex-col md:flex-row ">
     <h2 className="text-white  sm:pl-1">Add your Product description and necessary information</h2>
     <form className="flex flex-col bg-slate-700  p-5  md:mr-5 rounded-md  sm:w-2/3 sm:m-auto" >
       <label className="text-white mb-1">Name</label>
       <input type="text"  ref={nameRef} className="rounded-md p-1 mb-2 bg-slate-500 "/>
       <label className="text-white mb-1">Description</label>
       <textarea type="textarea" ref={descriptionRef} className="rounded-md p-1 mb-2  bg-slate-500"></textarea>
       <label className="text-white mb-1">Price</label>
       <input type="text" ref={priceRef}  className="rounded-md p-1 mb-2 bg-slate-500"/>
       <label className="text-white mb-1">Restaurants</label>
       
       <select  onChange={handleRestaurantChange} className="rounded-md p-1 mb-2 text-white bg-slate-500">
         
         {lists.map((list,key)=>(
          
           <option value={list.name} key={key}>{list.name}</option>)
         

         )}
        
       </select>
     </form>
   </div>
   <div className="flex justify-around mt-10">
    <button onClick={()=>{setOpen(false)}} className="text-white flex bg-slate-700 rounded-md w-1/3 justify-center items-center">
    Cancel
    </button>
    
   <button onClick={create} className="text-white rounded-md bg-magenta flex w-1/3 p-1  justify-center items-center">
   Create Product
   </button>
   </div>
 </div>
</div>)}
 
   
  

   


    </>
}