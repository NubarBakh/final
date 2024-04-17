'use client'
import React, { useCallback, useRef } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Button from "../../../Components/Layout/Button";

export default function AdminLogin() {
  const router = useRouter();
  const emailRef = useRef(null);

  
  const passwordRef = useRef(null);

  const onClick = useCallback((e) => {
    e.preventDefault();

    const email = emailRef.current?.value;
    const password = passwordRef.current?.value;

    console.log("Email:", email);
    console.log("Password:", password);

    axios
      .post("http://localhost:3001/api/auth/signin", {
        email: email,
        password: password,
      })
      .then((response) => {
        console.log("Login Result:", response);

        if (response.status === 200) {
          if (response.data.user.id === "pF3GvMos5MXN1EsmpcCV0l9YL6h1") {
            alert("Login successful!");
          }
          console.log(response.status);
          console.log(response.data.user.id);

          router.push("/admin");
        }
      })
      .catch((error) => {
        console.log("Login Error:", error.response);
        alert(error.response?.data?.message || "Login failed");
      });
  }, [router]);

  return (
    <>
      <div className="flex flex-col bg-slate-900 h-screen">
        <div className="flex justify-between">
          <h1 className="text-white text-3xl mt-4 ml-5 font-extrabold">
            <Link href={"/"}> Foody.</Link>
          </h1>
          <div className="text-white text-lg mt-4 mr-5">Lang</div>
        </div>

        <div className="flex mt-20 items-center justify-center sm:hidden md:flex">
          <div className="flex flex-col bg-slate-700 w-96 h-96 items-center justify-center">
            <h2 className="text-white text-xl mb-3">Welcome Admin</h2>
            <input
              type="text"
              placeholder="Email"
              className="mb-3 bg-slate-500 pl-3 p-1"
              ref={emailRef}
            />
            <input
              type="password"
              placeholder="Password"
              className="mb-5 bg-slate-500 pl-3 p-1"
              ref={passwordRef}
            />
            <div onClick={onClick} className="bg-purple">
              <Button
                style={{
                  backgroundColor: "purple",
                  borderRadius: 1,
                  color: "white",
                  width: 211,
                }}
              >
                Sign In
              </Button>
            </div>
          </div>
          <Image
            src={"/admin.png"}
            alt=""
            width={427}
            height={300}
            className="bg-white p-5"
          />
        </div>

        {/* Mobile version */}

        <div className="flex flex-col mt-10 items-center justify-center sm:flex md:hidden">
          <Image
            src={"/admin.png"}
            alt=""
            width={250}
            height={250}
            className="p-5"
          />
          <div className="flex flex-col items-center justify-center">
            <h2 className="text-white text-xl mb-3">Welcome Admin</h2>
            <input
              type="text"
              placeholder="Email"
              className="mb-3 bg-slate-500 pl-3 p-1"
              ref={emailRef}
            />
            <input
              type="password"
              placeholder="Password"
              className="mb-5 bg-slate-500 pl-3 p-1"
              ref={passwordRef}
            />
            <div onClick={onClick} className="bg-purple">
              <Button
                style={{
                  backgroundColor: "purple",
                  borderRadius: 1,
                  color: "white",
                  width: 211,
                }}
              >
                Sign In
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
