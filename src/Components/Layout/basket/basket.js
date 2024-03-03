
import Basket2 from "./basket2";
import ProfileFirstSide from "../Profile/profilefirst";


export default function MyBasket (){
    return<>
    <div className="gap-5 flex ">
        <div className="ml-10">
            <ProfileFirstSide/>
        </div>
        <div className="w-screen mr-10 ">
        <Basket2/>
        </div>

    </div>
    
    </>
}