import {  LogOut,ListOrdered,LayoutDashboard,KeyboardMusic ,Utensils,TicketPercent ,Boxes} from "lucide-react";
import Link from 'next/link';

export default function AdminSideMenu (){
    return<>
      <div className="bg-gray-100 px-20 mt-10 py-10">
            <div className="flex gap-3 mb-4 border w-36">
              <LayoutDashboard />
              <Link href={'/'}>Dashboard</Link>
            </div>
            <div className="flex gap-3 mb-4">
              <KeyboardMusic />
              <Link href={'/userpage/basket'}>Products</Link>
            </div>
            <div className="flex gap-3 mb-4">
              <Utensils />
              <div>Restaurants</div>
            </div>
            <div className="flex gap-3 mb-4">
              <Boxes />
              <Link href={'/userpage/order/checkout'}>Category</Link>
            </div>
            <div className="flex gap-3 mb-4">
              <ListOrdered />
              <div>Orders</div>
            </div>
            <div className="flex gap-3 mb-4">
              <TicketPercent />
              <div>Offers</div>
            </div>
            <div className="flex gap-3 mb-4">
              <LogOut />
              <div>Log out</div>
            </div>
          </div>
    </>
}