
import Link from "next/link";
import Button from "./Button";


export default function Header (){
    return <>
    
    <header className="flex  justify-between pt-5 mt-5  mx-10 md:flex">
        <Link className="text-black-300 text-4xl font-bold" href={'/'}>
            <div className="flex">
                <div>Foody</div>
                <div className="text-red-500">.</div>
            </div>
        </Link>


         <nav className="flex items-center gap-10 text-gray-400 ">
             <Link className="text-red-500" href={'/'}>Home</Link>
             <Link href={'/restaurants'}>Restaurants</Link>
             <Link href={'/about'}>About us</Link>
             <Link href={'/how-it-works'}>How it works</Link>
             <Link href={'/faq'}>FAQs</Link>
         </nav>

         <div className="flex gap-4">
                <input type="text" placeholder="Search" className="border p-1 rounded-md"/>
                <div className="rounded-full border bg-green-500 p-1"> Eng</div>
                <Link href={'/register'}>
                <Button style={{backgroundColor :'red', color:'white',borderRadius : 100  }}>Sign up</Button>
                </Link>
                
               
         </div>
    </header>
    </>
    
}