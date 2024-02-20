import Button from "../Button";
import ProfileFristSide from "../profilefirst";

export default function CheckoutPage(){
    return<>
   <div className="flex gap-5 mx-10">
   <ProfileFristSide />
   <div className="flex flex-col my-10 pb-10 px-10 bg-gray-200  w-1/2">
        <h2  className="flex ml-10 mt-10 font-semibold text-gray-700 text-3xl"> Checkout</h2>

        <form className="flex flex-col">
            <label className="mt-2 font-semibold">Delivery Address</label>
            <input className=" p-1 mt-1" type="text"/>
            <label  className="mt-2 font-semibold"> Contact number</label>
            <input  className=" p-1 mt-1" type="number" placeholder="+994"/>

        </form>
       
        <div className="mb-5">
    <p className="mt-2 font-semibold mb-2">Payment method</p>

    <label for="payAtDoor" class="has-[:]:bg-indigo-50 has-[:checked]:text-green-900 has-[:checked]:ring-green-200 mr-5">
       
        <input type="radio" id="payAtDoor" name="paymentMethod" class="checked:border-green-500" /> Pay at the door
    </label>

    <label for="payAtDoorByCard" class="has-[:]:bg-indigo-50 has-[:checked]:text-green-900 has-[:checked]:ring-green-900">
        
        <input type="radio" id="payAtDoorByCard" name="paymentMethod" class="checked:border-green-900" />
        Pay at the door by credit card
    </label>
</div>


        <Button style={{backgroundColor:'green', borderRadius:5}}>
            Checkout

        </Button>
    </div>
    <div className="flex flex-col my-10 pb-10 px-10 bg-gray-200 w-80 ">
        <h2 className="pt-10 text-2xl">Your order</h2>
       <div className="flex   flex-col" >
       <div className=" flex">
       <div>papacofe</div>
        <div>$17</div>
       </div>
        <div className=" flex">
            <div>
                total
            </div>
            <div>$20</div>
        </div>
       </div>
    </div>
   </div>

    </>
}