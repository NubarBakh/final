import Button from "@/Components/Layout/Button";
import Image from 'next/image';

import { PlusCircle} from "lucide-react";
import Basket2 from "../basket/basket2";

export default function Restaurant (){
    return<>
   <main>
    <div className="flex flex-col border-b-current">
        <Image width={380} height={380} className="w-2/3 mx-auto mb-5" src="/jons.png"/>
        <div className="flex justify-around">
            <div>
                <h2  className="text-2xl">Papa John’s Pizza Restaurant</h2>
                <p>19 Nizami street, Sabail, Baku</p>
            </div>
            <div>
            <h3>Cuzine</h3>
                <p>pizza, drink, hotdog, sendvich, roll</p>

            </div>
            <div className="border-indigo-950">
                $5 Delivery
            </div>
            <Button style={{backgroundColor:'red', color:'white'}}>Go Back</Button>
            
        </div>
    </div>
         
        <div className="flex mx-14  ">
               
                <div className="flex bg-gray-200  flex-col  my-10  px-10 mx-5 w-screen divide-y divide-solid divide-stone-950">
                    <h2 className="text-center mb-10  mt-2 text-3xl font-bold">Products</h2>
                    <div className="flex justify-between  mb-5 py-5 gap-10 ">
                        <div className="flex gap-10" >
                            <div >
                                <Image width={380} height={380} src="/pizza.png" className="w-24 h-24"  alt=""/>

                            </div>
                            <div className="flex flex-col gap-1">
                                <div className="font-semibold text-xl">pizza</div>
                                <div>lknbdf;lnd;anlblfkmnscjfm</div>
                                
                            </div>

                        </div>
                      <div className="flex gap-10 ">
                            <div className="   flex flex-col w-7 items-center pt-3">
                               $7.90
                                
                            </div>
                            <div>
                            <PlusCircle />   
                            </div>

                    </div>

                    </div>

                </div>
                <div className="w-1/3">
                    <Basket2/>
                </div>
            
        </div>
   
   </main>
   </>
}