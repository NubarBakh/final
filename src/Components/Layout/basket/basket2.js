'use client'
import { CircleUserRound,ShoppingBasket, LogOut ,Trash2} from "lucide-react";
import Button from "../Button"
import Image from 'next/image';
import { useCart, CartProvider } from "react-use-cart";
import React, { useEffect } from "react";
import EmptyBasket from '../basket/emptyBasket'
import axios from "axios";

export default function Basket2(){

  useEffect(()=>{
    axios.get('http://localhost:3001/api/basket', {
      headers: {
        'Authorization': `Bearer ${'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJwRjNHdk1vczVNWE4xRXNtcGNDVjBsOVlMNmgxIiwiaWF0IjoxNzEzMTY4NDYyLCJleHAiOjE3MTMxNzIwNjJ9.xGZZJD8JTrSv6l6iMO5_Dg2QmIXZ1nmoWQWvqzJxzqQ'}`
      }
    })
    .then((result)=>{console.log(result)}
    )
    .catch((error)=>{console.log(error)})

  },[])

 

  
   const {
        
        isEmpty,
        totalUniqueItems,
        items,
        totalItems,
        cartTotal,
        emptyCart,
        updateItemQuantity,
        removeItem,
    } = useCart();
  
   /* if (isEmpty) return <div className="flex justify-center"> <EmptyBasket/> </div>;*/
 return (
              <>
               
    <div className="flex  flex-col my-10  px-5 bg-gray-100   divide-y divide-solid divide-slate-400 ">
    <h1 className="flex gap-1 text-red-600 py-3  sm:hid"><ShoppingBasket/> {totalItems} items</h1>

{items.map((item) => (
                   

                    <div key={item.id}>

              <div className="flex justify-between mb-5 py-5 gap-5">
                    <div className="flex gap-5" >
                    <div>
                      <Image
                        src={''}
                        alt={''}
                        height={50}
                        width={50}
                      />
                    </div>
                        <div className="flex flex-col">
                            <div className="font-semibold text-xl">{item.title}</div>
                            <div>{item.price}</div>
                            
                        </div>

                    </div>
                   <div className="flex gap-5">
                        <div className=" rounded-full  flex flex-col border-x-orange-900 bg-white w-7 items-center pt-3">
                           
                            <div>
                              <button /*onClick={() => updateItemQuantity(item.id, item.quantity + 1)}*/
                              onClick={addBasket}> + </button>
                            </div>
                            <div>{item.quantity}</div>
                            <div>
                            <button onClick={() => updateItemQuantity(item.id, item.quantity - 1)} >-</button>
                            </div>
                           
                            
                        </div>
                          <button onClick={() => removeItem(item.id)}><Trash2 /></button>
                        
                            
                        

                   </div>

                </div>
                
            
            
                
           

                    </div>


        

                  ))}

            
                            
             <div className=" flex pt-5 mb-5">
                <Button style={{backgroundColor :'red', color:'white', borderRadius :100,width: '100%'}} >
                   <div className="flex justify-between">
                    <p>Checkout </p>
                    
                <div className=" text-red-700 w-20 rounded-full bg-white">${cartTotal}</div>
                   </div>
                   </Button>
               
            
            </div>
               

            
        </div>
      
   
   </>
   );

}
