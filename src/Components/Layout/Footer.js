export default function Footer (){
    return <>
    <footer className="bg-black text-white  flex flex-col mt-20 p-1 pt-20">
        <div className="flex gap-20  mx-auto  p-4 py-6  ">
            <div>
                    <div className="flex flex-row ">
                        <h2 className="text-2xl">Foody</h2>
                        <div className="text-2xl text-red-400">.</div>
                    </div>
                    <div className="text-gray-400 w-80 mt-4">  Lorem ipsum is placeholder text commonly used in the graphic.
                    </div>
                    <div className="flex mt-5 gap-3">
                       <a className="w-14 h-14 rounded-full border-white-700 border-4 p-1" href="">
                         <img className="w-12 h-12 rounded-full  " src="./instagram.png" alt="instagram"/>
                         </a>
                        <a  className="w-14 h-14 rounded-full border-white-700 border-4 p-1">
                        <img className="w-12 h-12 rounded-full " src="./fb.png" alt="fb"/>
                        </a>
                        <a  className="w-14 h-14 rounded-full border-white-700 border-4 p-1">
                        <img className="w-12 h-12 rounded-full " src="./twitter.png" alt="twitter"/>
                        </a>
                    </div>
            </div>

            <div>
                <h3 className="text-xl font-bold">Popular</h3>
                <ul className="leading-8 text-sm text-gray-400">
                    <li> <a href="">Programming</a></li>
                    <li> <a href="">lskvdnsdnv</a></li>
                    <li> <a href="">lvkndlsdk</a></li>
                    <li> <a href="">Pdvsdvlm</a></li>
              </ul>
            </div>
            <div>
                <h3 className="text-xl font-bold">Cash</h3>
                <ul  className="leading-8 text-sm text-gray-400">
                    <li> <a href="">Delivery</a></li>
                    <li> <a href="">payment</a></li>
                    <li> <a href="">About the store</a></li>
                   
                </ul>
            </div>
            <div>
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