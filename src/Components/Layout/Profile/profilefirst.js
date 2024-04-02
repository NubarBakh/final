import { CircleUserRound,ShoppingBasket, LogOut } from "lucide-react";
import Link from "next/link";



export default function ProfileFirstSide (){

    return<>
     <div className="bg-gray-100 px-20 mt-10 py-10   ">
     <div className="flex gap-3 mb-4 border w-36" >
           <CircleUserRound />  <Link href={'/userpage/profiles'}>Profile</Link>
           </div>
            <div className="flex gap-3  mb-4">
            <ShoppingBasket /> <Link href={'/userpage/basket'}>Your Basket</Link>
            </div>
            <div className="flex gap-3  mb-4">
            <ShoppingBasket /> <div>Your Orders</div>
            </div>
            <div className="flex gap-3  mb-4">
            <ShoppingBasket /> <Link href={'/userpage/order/checkout'}>Checkout</Link>
            </div>
          <div className="flex gap-3  mb-4">
          <LogOut /><div>Log out</div>
          </div>
     </div>
    </>
}