import Image from "next/image"
import Button from "./Button"
import { px } from "framer-motion"
import Link from "next/link";


export default function AboutSite(){
return <>
<main className="items-center flex  mt-5  "> 
        <div>
                <h1 className="text-black-600 text-3xl  font-bold mb-5 sm:hidden md:flex ">
                    Our Food site makes it easy to find local food
                </h1>

                <p className="mb-5 sm:hidden md:flex">"If you really want to make a friend, go to someone's house and eat with him... 
                    the people who give you their food give you their heart." - Cesar Chavez
                </p>

                <div className="flex gap-5 mt-5 sm:hidden md:flex">
                <Button style={{backgroundColor :'red', color:'white', borderRadius :100}}>Register </Button>
                <Button style={{backgroundColor :'white', borderColor: 'black', borderRadius :100}}>Order now</Button>
                </div>

        </div>
        <div className="relative ">
        
                <Image width={600}  height={600} className="relative top-0 left-0 sm:flex w-auto h-auto sm:mx-auto " priority={true} src={'/burger.png'}
                  alt={'burger'}/>
                <h1 className="text-black-600 text-3xl  font-bold mb-5 sm:flex md:hidden ">
                    Our Food site makes it easy to find local food
                </h1>
                <div className="flex  flex-col sm:w-32 sm:flex sm:mx-auto gap-5 mt-5 md:hidden">
               <Link href={'/register/Registration'}>
               <Button style={{backgroundColor :'red', color:'white', borderRadius :100}}>Register </Button>
               </Link>
                <Button style={{backgroundColor :'white', borderColor: 'black', borderRadius :100}}>Order now</Button>
                </div>
                <Image width={144}  height={144} className=" w-auto h-auto  absolute top-10 right-0    animate-bounce" src={'/G305.png'} alt={'burger'}/>
                <Image width={144}  height={144} className="w-auto h-auto  absolute bottom-40 left-0 sm:hidden md:flex  animate-bounce" src={'/G317.png'} alt={'burger'}/>
                <Image  width={144}  height={144} className="w-auto h-auto  absolute bottom-10 right-0 animate-bounce sm:hidden md:flex" src={'/G318.png'} alt={'burger'}/>
        </div>
        

      


</main>

</>
}