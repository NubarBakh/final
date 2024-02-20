export default function AboutUs (){
    return <>
   <div className="flex justify-between mt-20  mx-10">
        <div className="w-1/2">

        <h2 className="text-5xl mb-10 font-semibold"> About Us</h2>
            <p className="text-gray-700" >Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>

        </div>

        <div className="relative">
                <img className="w-96 relative" src={'/rec.png'} alt={'rec'}/>
                <img className="w-40 absolute top-0 right-10 " src={'/sous.png'} alt={'sous'}/>
                <img className="w-40 absolute bottom-0 left-3" src={'/papa.png'} alt={'papa'}/>
                <img className="w-40 absolute bottom-20 right-0" src={'/tomato.png'} alt={'tomato'}/>
                <img className="w-40 absolute top-20 left-0" src={'/hamburger.png'} alt={'hamburger'}/>
        </div>

   </div>
    </>
}