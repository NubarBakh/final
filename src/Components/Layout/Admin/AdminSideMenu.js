import {  LogOut,ListOrdered,LayoutDashboard,KeyboardMusic ,Utensils,TicketPercent ,Boxes} from "lucide-react";
import Link from 'next/link';

export default function AdminSideMenu (){
    return<>
      <div className="p-5 px-10 bg-purple-500 rounded-md sm:hidden md:flex flex flex-col h-96 ">
            <div className="flex gap-3 mb-4  w-36">
              <LayoutDashboard />
              <Link href={'/admin'}>Dashboard</Link>
            </div>
            <div className="flex gap-3 mb-4">
              <KeyboardMusic />
              <Link href={'/admin/products'}>Products</Link>
            </div>
            <div className="flex gap-3 mb-4">
              <Utensils />
              <Link href={'/admin/restuarants'}>Restaurants</Link>
            </div>
            <div className="flex gap-3 mb-4">
              <Boxes />
              <Link href={'/admin/category'}>Category</Link>
            </div>
            <div className="flex gap-3 mb-4">
              <ListOrdered />
              <Link href={'/admin/orders'}>Orders</Link>
            </div>
            <div className="flex gap-3 mb-4">
              <TicketPercent />
              <Link href={'/admin/offers'}>Offers</Link>
            </div>
            <div className="flex gap-3 mb-4">
              <LogOut />
              <Link href={'/admin/login'}>Log out</Link>
            </div>
          </div>
    </>
}