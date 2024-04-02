import { CircleUserRound,ShoppingBasket, LogOut ,Trash2} from "lucide-react";
import Image from "next/image";
import Button from "../Button";
export default function EmptyBasket (){
    return <>
    <div className="my-10  bg-gray-100 p-5 ">
       <div className="flex gap-2"> <ShoppingBasket/> 0 items</div>
       <div>
        <Image src={'/basket.png'} width={300} height={300} alt="empty-basket"></Image>
        <Image src={'/Opps.png'} width={300} height={300} alt="empty-basket"></Image>
       </div>
       <div className=" flex pt-5 mb-5">
                <Button style={{backgroundColor :'grey', color:'white', borderRadius :100,width: '100%'}} >
                   <div className="flex justify-between">
                    <p>Checkout </p>
                    
                <div className="w-20 rounded-full ">$ 0.00</div>
                   </div>
                   </Button>
               
            
            </div>

    </div>
    
    </>
}