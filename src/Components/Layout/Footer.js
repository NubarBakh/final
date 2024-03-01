import Image from 'next/image';

export default function Footer (){
    return <>
    <footer className="bg-black text-white  flex flex-col mt-20  pt-20">
        <div className="flex gap-16  mx-auto  p-7  md:flex   ">
            <div  className='' >
                    <div className="flex flex-row  sm:flex sm:justify-center col-start-3  md:flex md:justify-start  ">
                        <h2 className="text-2xl">Foody</h2>
                        <div className="text-2xl text-red-400">.</div>
                    </div>
                    <div className="text-gray-400  mt-4 sm:flex sm:justify-center "> 
                     <p>
                    Lorem ipsum is placeholder text 
                    commonly used in the graphic.
                    </p>
                    </div>
                    <div className="flex mt-5 gap-3 sm:flex sm:justify-center md:flex md:justify-start">
                       <a className="w-14 h-14 rounded-full border-white-700 border-4 " href="">
                         <Image width={48} height={48} className="rounded-full" src="/instagram.png" alt={"instagram"}/>
                         </a>
                        <a  className="w-14 h-14 rounded-full border-white-700 border-4">
                        <Image  width={48} height={48}  className="w-12 h-12 rounded-full " src="/fb.png" alt={"fb"}/>
                        </a>
                        <a  className="w-14 h-14 rounded-full border-white-700 border-4 ">
                        <Image width={48} height={48}  className="w-12 h-12 rounded-full " src="/twitter.png" alt={"twitter"}/>
                        </a>
                    </div>
            </div>

            <div className='sm:hidden md:flex md:flex-col'>
                <h3 className="text-xl font-bold">Popular</h3>
                <ul className="leading-8 text-sm text-gray-400">
                    <li> <a href="">Programming</a></li>
                    <li> <a href="">lskvdnsdnv</a></li>
                    <li> <a href="">lvkndlsdk</a></li>
                    <li> <a href="">Pdvsdvlm</a></li>
              </ul>
            </div>
            <div className='sm:hidden md:flex md:flex-col'>
                <h3 className="text-xl font-bold">Cash</h3>
                <ul  className="leading-8 text-sm text-gray-400">
                    <li> <a href="">Delivery</a></li>
                    <li> <a href="">payment</a></li>
                    <li> <a href="">About the store</a></li>
                   
                </ul>
            </div>
            <div className='sm:hidden md:flex md:flex-col'>
                <h3 className="text-xl font-bold">Help</h3>
                <ul  className="leading-8 text-sm text-gray-400"> 
                    <li> <a href="">Contact</a></li>
                    <li> <a href="">Purchase return</a></li>
                    <li> <a href="">Buyer help</a></li>
                  
                </ul>
            </div>
        </div>
        <div className="mx-auto mb-7">All rights reserved 	&#169; Foody TERMS OF USE | Privacy Policy</div>
    </footer>
    </>
}