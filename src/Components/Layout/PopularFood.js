
import Image from 'next/image';
export default function PopularFood() {
    return <>

<div className=" flex flex-col	 mx-14 mt-20 ">
        <h2 className="text-3xl font-bold mx-auto ">Our Popular Update New Foods</h2>
        <p className="text-l font-normal mt-5  mx-auto ">Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>
       
        <div className="flex justify-between mt-10 sm:flex sm:flex-col md:flex sm:justify-center sm:items-center md:flex-row">
           
            <Image width={320} height={320} className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300  pt-2 w-auto h-auto"  src={'/twister.png'} alt={'twister'}/>
            <Image width={320} height={320} className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 pt-2 w-auto h-auto"   src={'/margarita.png'} alt={'margarita'}/>
            <Image width={320} height={320}  className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300  pt-2 w-auto h-auto" src={'/chees.png'} alt={'chees'}/>
          
            
        </div>
    </div>
    
    </>
}