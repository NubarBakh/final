
import Image from 'next/image';
export default function AboutUs (){
    return <>
   <div className="flex justify-between mt-20  mx-10">
        <div className="w-1/2">

        <h2 className="text-5xl mb-10 font-semibold"> About Us</h2>
            <p className="text-gray-700" >Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>

        </div>

        <div className="relative">
                <Image width={380} height={380} className="w-auto h-auto relative " priority={true} src={'/rec.png'} alt={'rec'}/>
                <Image width={160} height={160} className="w-auto h-auto absolute top-0 right-10 " src={'/sous.png'} alt={'sous'}/>
                <Image width={160} height={160} className="w-auto h-auto absolute bottom-0 left-3" src={'/papa.png'} alt={'papa'}/>
                <Image width={160} height={160} className="w-auto h-auto absolute bottom-20 right-0" src={'/tomato.png'} alt={'tomato'}/>
                <Image  width={160} height={160}className="w-auto h-auto absolute top-20 left-0" src={'/hamburger.png'} alt={'hamburger'}/>
        </div>

   </div>
    </>
}