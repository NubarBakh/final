import Button from "../Button";
import { CircleUserRound,ShoppingBasket, LogOut } from "lucide-react";
import ProfileFristSide from "./profilefirst";
import Image from 'next/image';

export default function ProfilePage(){
   return<>
    <div className="justify-around flex ">
        <div className="bg-gray-200 px-20 mt-10 pt-10  h-96 "> 
          <ProfileFristSide/>
        </div>

       
       
        <div className="flex flex-col my-10 pb-10 px-10 bg-gray-200">

            <h2 className="flex ml-10 mt-10 font-semibold text-gray-700 text-3xl">Profile</h2>

            <div  className="flex justify-center">
                <Image width={200} height={200} src={'/upload.png'}/>
            </div>

            <form className="flex justify-center gap-20 mt-10">
               <div className="flex flex-col">
                <label>Contact</label>
                <input className="border p-1 w-96 my-2 rounded" type="phone"  placeholder="+994"/>
                <label>Username</label>
                <input className="border p-1 my-2 rounded " type="text" placeholder="Username"/>
                <label>Full Name</label>
                <input className="border p-1 w-full my-2 rounded" type="text" placeholder="Full name"/>
               </div>
               <div className="flex flex-col">
               <label>Email</label>
                <input className="border p-1 w-full my-2 rounded" type="email" placeholder="E-mail"/>
                <label>Address</label>
                <input className="border p-1 w-96 mt-2 mb-4 rounded" type="text" placeholder="Address"/>
                <Button  style={{backgroundColor:'green', borderRadius:3,color:'white', }}>Save</Button>
               </div>
            </form>
        </div>
    </div>
   </>
}