import ProfileFirstSide from "../Profile/profilefirst";

import Image from 'next/image';

export default function CheckoutSucces (){
    return <>
  <div className="flex mx-10 gap-10">
    <ProfileFirstSide/>

  <div className="flex flex-col items-center  py-10 my-10 pb-10 px-10 bg-gray-200  w-2/3">
        <Image width={380} height={380} className="w-52 mb-5 py-10" src={'/succes.png'}/>
        <p className=" font-semibold text-xl">
        Your order has been received
        </p>
    </div>
  </div>
    
    </>
}