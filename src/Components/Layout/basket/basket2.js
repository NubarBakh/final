import { CircleUserRound,ShoppingBasket, LogOut ,Trash2} from "lucide-react";
import Button from "../Button"

export default function Basket2(){
   return<>
    <div className="flex  flex-col my-10  px-10 bg-gray-200  mx-10 divide-y divide-solid divide-stone-950  ">
            <div className="flex flex-col  py-3">

                <div >
                    <h2 className="text-3xl font-semibold">Your Bakset</h2>
                
                </div>

                <div className="flex mt-3 gap-3">
                <ShoppingBasket className="text-red-600" /> <div  className="text-red-600" > 3 items</div>
                
                </div>
            </div>

            
                <div className="flex justify-between mb-5 py-5">
                    <div className="flex gap-10" >
                        <div >
                            <img src="/pizza.png" className="w-24 h-24"  alt=""/>

                        </div>
                        <div className="flex flex-col">
                            <div className="font-semibold text-xl">pizza</div>
                            <div>$15</div>
                            
                        </div>

                    </div>
                   <div className="flex gap-5">
                        <div className=" rounded-full  flex flex-col border-x-orange-900 bg-white w-7 items-center pt-3">
                            <div>+</div>
                            <div>2</div>
                            <div>-</div>
                            
                        </div>
                        <div>
                        <Trash2 />
                            
                        </div>

                   </div>

                </div>
                
            
            
                
            <div className=" flex pt-5 mb-5">
                <Button style={{backgroundColor :'red', color:'white', borderRadius :100,width: '100%'}} >
                   <div className="flex justify-between">
                    <p>Checkout </p>
                    
                <div className=" text-red-700 w-36 rounded-full bg-white">$$</div>
                   </div>
                   </Button>
               
            
            </div>
        </div>
   
   </>

}