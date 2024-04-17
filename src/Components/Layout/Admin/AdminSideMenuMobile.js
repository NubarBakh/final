import { LogOut, ListOrdered, LayoutDashboard, KeyboardMusic, Utensils, TicketPercent, Boxes, AlignJustify, X } from "lucide-react";
import Link from 'next/link';
import { useState } from "react";

export default function AdminSide() {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };

  return (
    <>
      <div className="relative p-1 rounded-md">
        <div className={`lg:hidden xl:hidden 2xl:hidden sm:flex md:hidden transition-transform duration-500 ease-in-out ${open ? "left-0" : 'left-[-100%] '}`}>
          {!open ? (
            <div onClick={toggleMenu} className="z-100 flex text-white">
              <AlignJustify />
            </div>
          ) : (
            <div onClick={toggleMenu} className="bg-opacity-50 z-50 flex">
              <X />
            </div>
          )}

          {open && (
            <div className="fixed inset-0 bg-black bg-opacity-50 z-50">
              <div className="p-4 w-80 gap-5 bg-purple-500 h-screen">
                {!open ? (
                  <div onClick={toggleMenu} className="z-100 flex">
                    <AlignJustify />
                  </div>
                ) : (
                  <div className="bg-opacity-50 z-50 flex mb-5">
                    <div onClick={toggleMenu}>
                      <X />
                    </div>

                    <Link className="text-black-300 text-3xl font-bold sm:ml-5 md:flex md:justify-start" href={"/admin"}>
                      <div className="flex">
                        <div className="text-white font-extrabold">Foody</div>
                        <div className="text-red-500">.</div>
                      </div>
                    </Link>
                  </div>
                )}

                <div className="flex gap-3 mb-4 w-36 text-white">
                  <LayoutDashboard />
                  <Link href={'/admin'}>Dashboard</Link>
                </div>
                <div className="flex gap-3 mb-4 text-white">
                  <KeyboardMusic />
                  <Link href={'/admin/products'}>Products</Link>
                </div>
                <div className="flex gap-3 mb-4 text-white">
                  <Utensils />
                  <Link href={'/admin/restaurants'}>Restaurants</Link>
                </div>
                <div className="flex gap-3 mb-4 text-white">
                  <Boxes />
                  <Link href={'/admin/category'}>Category</Link>
                </div>
                <div className="flex gap-3 mb-4 text-white">
                  <ListOrdered />
                  <Link href={'/admin/orders'}>Orders</Link>
                </div>
                <div className="flex gap-3 mb-4 text-white">
                  <TicketPercent />
                  <Link href={'/admin/offers'}>Offers</Link>
                </div>
                <div className="flex gap-3 mb-4 text-white">
                  <LogOut />
                  <Link href={'/admin/login'}>Log out</Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
