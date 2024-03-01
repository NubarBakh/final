import Button from "./Button";
import Image from 'next/image';

export default function OverFooter() {
    return (
        <>
            <div  className="flex mt-10 bg-slate-800 z-40  w-8/12 absolute bottom-72 p-10 
            rounded-3xl md:left-48 md:right-48 sm:left-24 sm:right-24 md:flex ">
              
                <div className="w-50 sm:hidden md:flex">
                    <Image  width={200} height={200} className="bg-slate-800" src={'/Pizza.jpg'} alt={'pizza'} />
                </div>
                <div className="sm:mx-auto">
                    <h2 className="text-white text-center leading-10 text-3xl font-semibold mb-8 sm:text-2xl">Discover Restaurants Near From You</h2>
                    <div className="flex justify-center">
                        <Button style={{ backgroundColor: 'orange', color: 'white', border: 'yellow', borderRadius: 100 }}> Explore Now</Button>
                    </div>
                </div>
                <div className=" w-52 sm:hidden md:flex">
                    <Image width={200} height={200} src={'/burger.png'} alt={'burger'} />
                </div>
              
            </div>
        </>
    );
}
