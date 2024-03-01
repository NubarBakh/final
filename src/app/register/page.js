import Image from 'next/image';

import Link from "next/link";
import Button from "@/Components/Layout/Button";
import Header from '@/Components/Layout/Header';
import SiteMenu from '@/Components/Layout/siteMenu';

export default function Sign (){
    return <>
    <div className="flex bg-red-400 p-6 justify-between pl-17">
   <div className='flex'>
   <div className='mt-1'>
    <SiteMenu/>
   </div>
        <Link className="text-black-300 text-3xl font-bold  sm:ml-5 md:flex  " href={'/'}>
            <div className="flex ">
                <div className="text-white">Foody</div>
                <div className="text-white">.</div>
            </div>
        </Link>
   </div>
        <div className="rounded-full border bg-green-500 p-1 sm:flex  sm:col-end-1 md:flex"> Eng</div>
   

    
    </div>

        <div className="flex mx-auto sm:flex-col md:flex-row ">
                        <Image width={380} height={380} className="bg-red-400 mt-5 md:w-1/3 md:h-1/3 ml-20 
                        sm:w-9/12 sm:mx-auto sm:h-96" 
                        src={'/login.png'} alt='login' />
                <div className="flex md:mt-24 mx-auto  flex-col sm:mt-5 "> 
                    <div className="mx-auto  flex gap-5 font-semibold text-lg mb-10">  
                        <div>
                        <Link href={'/register'}>Login</Link>
                        </div>
                       <div>
                       <Link href={'/register/Registration'}>Register</Link>
                       </div>
                    </div>


                            <form className="flex flex-col  sm:mb-3  ">
                                <label className="md:mt-12 sm:mt-3" > 
                                    Username
                                </label >
                                <input className="md:mt-5 sm:mt-1 h-10 bg-red-100 rounded-md pl-5 sm:w-72 md:w-96" type="text" placeholder="username"/>

                                <label className="md:mt-12 sm:mt-3">
                                    Password
                                </label>
                                <input className="md:mt-5 h-10  sm:mt-1 sm:mb-3 md:mb-10 sm:w-72 md:w-96 bg-red-100 rounded-md pl-5" type="password" placeholder="password"/>

                            <Link href={'/register/profiles'}>
                            <div className='sm:w-72 md:w-96 w-full'>
                         <Button className='w-full sm:w-72 md:w-96' style={{ borderRadius: 5, backgroundColor: 'rgb(248, 113, 113)', color: 'white' }}>Log in</Button>
                            </div>


                            </Link>
                            </form>
                


                </div>
                

        </div>


    
    
    </>
}