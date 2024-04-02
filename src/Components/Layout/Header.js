'use client'
import React from "react";
import SiteMenu from "./siteMenu";
import Link from "next/link";
import Button from "./Button";

export default function Header() {
 
  return (
    <>
      <header className="flex pt-2 mt-5 sm:justify-between md:flex md:justify-between bg-gray-100 px-10 mx-5 sm:py-4 my-5">
        <div className="flex">
          <SiteMenu />
          <Link
            className="text-black-300 text-3xl font-bold sm:ml-5 md:flex md:justify-start"
            href={"/"}
          >
            <div className="flex">
              <div>Foody</div>
              <div className="text-red-500">.</div>
            </div>
          </Link>
        </div>

        <nav className="items-center text-gray-400 flex sm:hidden md:flex gap-3">
          <Link className="text-red-500" href={"/"}>
            Home
          </Link>
          <Link href={"/restaurants"}>Restaurants</Link>
          <Link href={"/about"}>About us</Link>
          <Link href={"/how-it-works"}>How it works</Link>
          <Link href={"/faq"}>FAQs</Link>
        </nav>

        <div className="flex gap-3 sm:flex-col sm:col-end-1 md:flex-row md:gap-1">
          <input
            type="text"
            placeholder="Search"
            className="border p-1 rounded-md sm:hidden md:flex"
          />
          <div className="rounded-full border bg-green-500 p-1 sm:flex sm:col-end-1 md:flex">
            Eng
          </div>

          
            <Link href={"/register"}>
              <div className="sm:hidden md:flex">
                <Button
                  style={{
                    backgroundColor: "red",
                    color: "white",
                    borderRadius: 100,
                  }}
                >
                  Sign up
                </Button>
              </div>
            </Link>
          
        </div>
      </header>
    </>
  );
}
