import Image from "next/image"


export default function Features(){
    return <>
    <div className=" flex flex-col mx-14 	 mt-20 ">
        <h2 className="text-3xl font-bold mx-auto ">Features</h2>
        <p className="text-l font-normal mt-5  mx-auto ">Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>
        <div className="flex justify-between mt-5  sm:flex-col md:flex sm:gap-10 sm:justify-center sm:items-center md:flex-row" >
            <div>
            <Image width={200} height={200}  src={'/discount.png'} className="w-auto h-auto" alt={'discount'}/>
            </div>
            <div>
                <Image width={200} height={200} src={'/fresh.png'} className="w-auto h-auto" alt={'fresh'}/>
            </div>
            <div>
            <Image width={200} height={200} className="w-auto h-auto" src={'/fast.png'} alt={'fast'}/>
            </div>
        </div>
    </div>

    <div className="flex   mx-14  mt-20 sm:flex sm:flex-col  md:flex md:flex-row">
        <div className="flex flex-col">
            <h2 className="text-4xl font-bold  ">
            Menu That Always Make You Fall In Love
            </h2>
            <p className="mt-10 leading-8">
            Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
            </p>
        </div>
        <Image width={200} height={200} className='w-1/3 mr-24 sm:w-96 sm:h-96 sm:mx-auto' src={'/kfc.png'} alt={'kfc'}/>
    </div>


    <div className="flex   mx-14  mt-20 sm:flex sm:flex-col  md:flex md:flex-row">

    <Image  width={200} height={200} className='w-1/3 mr-24 sm:w-96 sm:h-96 sm:mx-auto' src={'/pizza.png'} alt={'pizza'}/>

        <div className="flex flex-col">
            <h2 className="text-4xl font-bold  ">
            Yummy Always Papa John’s Pizza.Agree?
            </h2>
            <p className="mt-10 leading-8">
            Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
            </p>
        </div>
       
    </div>


    <div className="flex   mx-14  mt-20 sm:flex sm:flex-col  md:flex md:flex-row">
        <div className="flex flex-col">
            <h2 className="text-4xl font-bold  sm: ">
            Do You Like French Fries? Mmm...
            </h2>
            <p className="mt-10 leading-8">
            Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
            </p>
        </div>

        <Image  width={200} height={200} className='w-1/3 mr-24 sm:w-96 sm:h-96 sm:mx-auto' src={'/potato.png'} alt={'potato'}/>
    </div>
    
    </>
}
