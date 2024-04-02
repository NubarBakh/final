'use client'
import React, { createContext } from 'react';


import Button from "../Button";
import ProfileFirstSide from "../Profile/profilefirst";
import Basket2 from "../basket/basket2";
import { useCart, CartProvider } from "react-use-cart";
import dynamic from 'next/dynamic';
import Link from 'next/link';





 function CheckoutPage(){
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

   
    
  
    return<>
   <div className="flex gap-5 mx-10">
   <ProfileFirstSide/>
   <div className="flex flex-col my-10 pb-10 px-10 bg-gray-100  w-1/2">
        <h2  className="flex ml-10 mt-10 font-semibold text-gray-700 text-3xl"> Checkout</h2>

        <form className="flex flex-col">
            <label className="mt-2 font-semibold">Delivery Address</label>
            <input className=" p-1 mt-1" type="text"/>
            <label  className="mt-2 font-semibold"> Contact number</label>
            <input  className=" p-1 mt-1" type="number" placeholder="+994"/>

        </form>
       
        <div className="mb-5">
    <p className="mt-2 font-semibold mb-2">Payment method</p>

    <label for="payAtDoor" class="has-[:]:bg-indigo-50 has-[:checked]:text-green-900 has-[:checked]:ring-green-200 mr-5">
       
        <input type="radio" id="payAtDoor" name="paymentMethod" class="checked:border-green-500" /> Pay at the door
    </label>

    <label for="payAtDoorByCard" class="has-[:]:bg-indigo-50 has-[:checked]:text-green-900 has-[:checked]:ring-green-900">
        
        <input type="radio" id="payAtDoorByCard" name="paymentMethod" class="checked:border-green-900" />
        Pay at the door by credit card
    </label>
</div>


        <Button style={{backgroundColor:'green', borderRadius:5}}>
          <Link href={'/userpage/order/checkout/succes'}>  Checkout</Link>

        </Button>
    </div>
    <div className="flex flex-col my-10 pb-10 px-10 bg-gray-100 w-80  ">
        <h2 className="pt-10 text-2xl">Your order</h2>
        {items.map((item) => (
                   

                <div key={item.id} >
 
                      <div  className='flex justify-between gap-3'>
                      <div className='flex mt-3 '>
                      <div >{item.quantity}</div>
                      <div>X</div>
                      <div >{item.title}</div>

                      </div>
                           <div className='mt-3'>${item.price*item.quantity}</div>
                      </div>
                 
                   </div>

                 ))}
                  <div className='flex justify-between border-t-2  border-gray-300 mt-5 '>
                        <div className='mt-3'>Total</div>
                        <div className='mt-3'>${cartTotal}</div>
                      </div>
    </div>
   </div>

    </>
}

export default dynamic(()=>Promise.resolve(CheckoutPage),{ssr:false})

