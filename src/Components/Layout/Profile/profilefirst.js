import { CircleUserRound,ShoppingBasket, LogOut } from "lucide-react";



export default function ProfileFirstSide (){

    return<>
     <div className="bg-gray-200 px-20 mt-10 pt-10   ">
     <div className="flex gap-3 mb-4 border  " >
           <CircleUserRound />  <div>Profile</div>
           </div>
            <div className="flex gap-3  mb-4">
            <ShoppingBasket /> <div>Your Basket</div>
            </div>
            <div className="flex gap-3  mb-4">
            <ShoppingBasket /> <div>Your Orders</div>
            </div>
            <div className="flex gap-3  mb-4">
            <ShoppingBasket /> <div>Checkout</div>
            </div>
          <div className="flex gap-3  mb-4">
          <LogOut /><div>Log out</div>
          </div>
     </div>
    </>
}