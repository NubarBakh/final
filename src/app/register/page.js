
import Link from "next/link";
import Button from "@/Components/Layout/Button";

export default function Sign (){
    return <>
    <div className="flex bg-red-400 p-6 justify-between pl-17">
        <div >
            <h2 className="text-white text-3xl font-bold">Foody.</h2>
        </div>
        <div> 
        <div className="rounded-full border bg-green-500 p-1"> Eng</div>
        </div>

    
    </div>

        <div className="flex mx-auto ">
                        <img className="bg-red-400 mt-5 w-1/3 h-1/3 ml-20" src={'/login.png'}/>
                <div className="flex mt-24 mx-auto  flex-col "> 
                    <div className="mx-auto  flex gap-5 font-semibold text-lg mb-10">  
                        <div>
                        <Link href={'/register'}>Login</Link>
                        </div>
                       <div>
                       <Link href={'/register/Registration'}>Register</Link>
                       </div>
                    </div>


                            <form className="flex flex-col   ">
                                <label > 
                                    Username
                                </label>
                                <input className="mt-5 h-10 bg-red-100 rounded-md pl-5" type="text" placeholder="username"/>

                                <label className="mt-12">
                                    Password
                                </label>
                                <input className="mt-5 h-10  mb-10 bg-red-100 rounded-md pl-5" type="password" placeholder="password"/>

                            <Link href={'/register/profiles'}>
                            <Button style={{ borderRadius :5, backgroundColor:'rgb(248 113 113)',width: 415, color :'white'}}>Log in</Button>

                            </Link>
                            </form>
                


                </div>
                

        </div>


    
    
    </>
}