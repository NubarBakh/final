'use client'
import React, { useState } from "react";
import Link from "next/link";
import Button from "../Button";
import { UserRound } from "lucide-react";
import AdminAddEdit from "./AdminAddProduct";
import AdminSide from "./AdminSideMenuMobile";

export default function AdminHeader() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div>
        <header className="flex pt-2 mt-5 sm:justify-between md:flex md:justify-between md:px-10 md:mx-5 sm:px-5 sm:mx-3 sm:py-4 my-5 bg-slate-800">
          <div className="flex">
            <AdminSide />

            <Link className="text-black-300 text-3xl font-bold sm:ml-5 md:flex md:justify-start" href={"/admin"}>
              <div className="flex">
                <div className="text-white font-extrabold">Foody</div>
                <div className="text-red-500">.</div>
              </div>
            </Link>
          </div>

          <div className="flex md:gap-3 md:flex-row sm:gap-2">
            <div onClick={() => setOpen(!open)} className="text-white bg-magenta rounded-full sm:hidden md:flex">
              <Button>+ Add Product</Button>
            </div>
            {/* Mobile */}
            <div onClick={() => setOpen(!open)} className="text-white bg-magenta py-1 px-3 text-3xl box-border sm:rounded-full sm:flex md:hidden">
              +
            </div>

            {open && <AdminAddEdit value={'Add Product'} />}

            <div className="rounded-full border bg-green-500 p-1">Eng</div>

            <Link href={"/register"}>
              <div className="flex text-white mt-2 sm:ml-0 sm:hidden md:flex">
                <UserRound /> Admin
              </div>
            </Link>
            {/* Mobile */}
            <Link href={"/register"}>
              <div className="flex text-white mt-2 ml-1 sm:flex md:hidden">
                <UserRound />
              </div>
            </Link>
          </div>
        </header>
      </div>
    </>
  );
}
