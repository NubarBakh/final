import Button from "./Button";
import Image from 'next/image';

export default function OverFooter() {
    return (
        <>
            <div className="flex mt-10 bg-slate-800 z-40 absolute left-36 bottom-72 gap-10  p-10 rounded-3xl">
                <div className="w-72">
                    <Image  width={280} height={280} className="bg-slate-800" src={'/Pizza.jpg'} alt={'pizza'} />
                </div>
                <div>
                    <h2 className="text-white text-center leading-10 text-3xl font-semibold mb-8">Discover Restaurants Near From You</h2>
                    <div className="flex justify-center">
                        <Button style={{ backgroundColor: 'orange', color: 'white', border: 'yellow', borderRadius: 100 }}> Explore Now</Button>
                    </div>
                </div>
                <div className="w-72">
                    <Image width={280} height={280} src={'/burger.png'} alt={'pizza'} />
                </div>
            </div>
        </>
    );
}
