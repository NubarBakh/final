import { useCallback, useEffect, useRef, useState } from "react";
import Button from "../Button";
import Image from 'next/image';
import axios from "axios";

export default function AdminAddEdit ({value}){
    
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
      axios.post('http://localhost:3001/api/products')
      .then(
        {
          "name": "aaaaaaaaaaaaaaaaaaaaaaaaatrgfging",
          "description": "aaaaastrigng",
          "img_url": "saaatrgfbing",
          "rest_id": selectedRestaurant,
          "price": 10
        }
      )
      .catch((error)=>{
        console.log(error)
      })
    },[selectedRestaurant])


    return<>

    {open&&( <div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex  justify-end">
 
  
    
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
       <label>Please choose a restaurant</label>
       <select  value={selectedRestaurant} onChange={handleRestaurantChange}>
         
         {lists.map((list,key)=>(
          
           <option value={list.name} key={key}>{list.name}</option>)
         

         )}
        
       </select>
     </form>
   </div>
   <div className="flex justify-between">
    <div onClick={()=>{setOpen(false)}}>
    <Button >Cancel</Button>
    </div>
    
   <div onClick={create}>
   <Button>Create Product</Button>
   </div>
   </div>
 </div>
</div>)}
 
   
  

   


    </>
}