import Image from "next/image"
import Button from "./Button"
export default function AboutSite(){
return <>
<main className="items-center flex  "> 
        <div>
                <h1 className="text-black-600 text-5xl  font-bold mb-5">
                    Our Food site makes it easy to find local food
                </h1>

                <p className="mb-5">"If you really want to make a friend, go to someone's house and eat with him... 
                    the people who give you their food give you their heart." - Cesar Chavez
                </p>

                <div className="flex gap-5 mt-5">
                <Button style={{backgroundColor :'red', color:'white', borderRadius :100}}>Register </Button>
                <Button style={{backgroundColor :'white', borderColor: 'black', borderRadius :100}}>Order now</Button>
                </div>

        </div>
        <div className="relative ">
        
                <img  className="relative top-0 left-0" src={'/burger.png'} alt={'burger'}/>
                <img className=" w-36  absolute top-10 right-0  animate-bounce" src={'/G305.png'} alt={'burger'}/>
                <img className="  w-36  absolute bottom-40 left-0 animate-bounce" src={'/G317.png'} alt={'burger'}/>
                <img className=" w-36 absolute bottom-20 right-0 animate-bounce" src={'/G318.png'} alt={'burger'}/>
        </div>
        

      


</main>

</>
}