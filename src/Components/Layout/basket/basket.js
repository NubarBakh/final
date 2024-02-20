
import ProfileFristSide from "../profilefirst"

import Basket2 from "./basket2";


export default function MyBasket (){
    return<>
    <div className="gap-5 flex ">
        <div className="ml-10">
            <ProfileFristSide/>
        </div>
        <div className="w-screen mr-10 ">
        <Basket2/>
        </div>

    </div>
    
    </>
}