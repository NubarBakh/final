import Image from "next/image"

export default function Features(){
    return <>
    <div className=" flex flex-col mx-14	 mt-20 ">
        <h2 className="text-3xl font-bold mx-auto ">Features</h2>
        <p className="text-l font-normal mt-5  mx-auto ">Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>
        <div className="flex justify-between mt-5">
            <div>
            <img src={'/discount.png'} alt='discount'/>
            </div>
            <div>
                <img src={'/fresh.png'} alt='fresh'/>
            </div>
            <div>
            <img src={'/fast.png'} alt='fast'/>
            </div>
        </div>
    </div>

    <div className="flex   mx-14  mt-20">
        <div className="flex flex-col">
            <h2 className="text-6xl font-bold  ">
            Menu That Always Make You Fall In Love
            </h2>
            <p className="mt-10 leading-8">
            Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
            </p>
        </div>
        <img  className='w-1/3 mr-24' src={'/kfc.png'} alt='kfc'/>
    </div>


    <div className="flex   mx-14  mt-20">

    <img  className='w-1/3 mr-24' src={'/pizza.png'} alt='pizza'/>

        <div className="flex flex-col">
            <h2 className="text-6xl font-bold  ">
            Yummy Always Papa John’s Pizza.Agree?
            </h2>
            <p className="mt-10 leading-8">
            Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
            </p>
        </div>
       
    </div>


    <div className="flex   mx-14  mt-20">
        <div className="flex flex-col">
            <h2 className="text-6xl font-bold  ">
            Do You Like French Fries? Mmm...
            </h2>
            <p className="mt-10 leading-8">
            Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
            </p>
        </div>

        <img  className='w-1/3 mr-24' src={'/potato.png'} alt='potato'/>
    </div>
    
    </>
}
