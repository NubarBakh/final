
import Button from "../Button";
import { PlusCircle,X } from "lucide-react";
import Basket2 from "../basket/basket2";
import { useRouter } from 'next/navigation';
import dynamic from "next/dynamic";
import { useCart } from "react-use-cart";
import { useState,useCallback, useEffect } from 'react';
import axios from 'axios';


function RestaurantName({ value}) {
  
   


    const [product,setProduct]=useState([]);
    const router = useRouter();
    const [restaurant, setRestaurant] = useState(null);
    const {cartTotal,addItem,} = useCart();
    const [open,setOpen]=useState(false);
    const[id,setId]=useState(null)
    
console.log(product)
useEffect(() => {
    axios.get(`http://localhost:3001/api/products`)
        .then((response) => {
            setProduct(response.data.result.data);
        })
        .catch(error => {
            console.log(error.response);
        });
}, []);

 const onClick= useCallback (()=>{
    axios.post( "http://localhost:3001/api/basket/add")
.then((result)=>{console.log(result)})
.catch((error)=>{console.log(error)})
},[])

 


    useEffect(() => {
        console.log(value)
          axios.get(`http://localhost:3001/api/restuarants/${value}`)
            .then((result) => {
               
                    setRestaurant(result.data.result.data);
                    console.log(value)
              
             
            })
            .catch((error) => {
              console.log(error);
            });
        
      }, [value]);

    
    
    

    return (
        <main>
            <div className="flex flex-col border-b-current">
                {restaurant &&(
                    <div>

                         <img width={350} height={350} className="w-2/3 mx-auto mb-5" src={restaurant.img_url} />
                <div className="flex justify-between mx-10 sm:flex-col md:flex-row sm:gap-2">
                    <div>
                        <h2 className="text-2xl">{restaurant.name}</h2>
                        <p className="text-gray-700">{restaurant.address}</p>
                    </div>
                    <div className="flex ;gap-4 sm:justify-between ">
                        <div>
                            <h3>Cuisine</h3>
                            <p className="text-gray-700">{restaurant.cuisine}</p>
                        </div>
                        <div className="flex gap-3">
                            <div className="border-red-600 border-2 p-1 px-2">
                                {restaurant.delivery_min} <br /> Delivery
                            </div>
                            <div className="sm:hidden md:flex">
                                <Button style={{ backgroundColor: 'red', color: 'white' }}>Go Back</Button>
                            </div>
                        </div>
                    </div>
                    <div className="2xl:hidden xl:hidden lg:hidden md:hidden sm:flex sm:gap-3 ">
                        <div className="sm:text-gray-400 hover:sm:text-gray-700">Pizza</div>
                        <div className="sm:text-gray-400 hover:sm:text-gray-700">Roll</div>
                        <div className="sm:text-gray-400 hover:sm:text-gray-700">Drink</div>
                    </div>
                </div>
                    </div>
                    
                )
                    
                };
               
            </div>

            {/* Products Display - Mobile View */}
            <div className="flex mx-14  sm:hidden md:flex  ">
                <div className="flex bg-gray-100  flex-col  mt-10  px-10 mx-5 w-screen divide-y divide-solid divide-slate-400">
                    <h2 className="text-center mb-10 justify-center  mt-4 text-3xl font-bold sm:hidden md:flex">Products</h2>
                    <div className="flex justify-between  mb-5 py-5 gap-10  flex-col divide-y divide-solid divide-slate-400 ">
                        {product.map((prod,key)=>{
                            if(prod.rest_id=== value){ 
                                
                                return( <div  className="flex justify-between px-14 pt-5">
                                <div className="flex gap-5">
                                    <div>
                                        <img width={380} height={380} src={prod.img_url} className="w-24 h-24" alt="" />
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <div className="font-semibold text-xl">{prod.name}</div>
                                        <div className="text-gray-700">{prod.description}</div>
                                    </div>
                                </div>
                                <div className="flex gap-10 ">
                                    <div className="flex items-center ">
                                        From ${prod.price}
                                    </div>
                                    <div className="pt-9 hover:text-white" onClick={onClick}>
                                        <PlusCircle className="sm:hover:bg-green-600 rounded-full" />
                                    </div>
                                </div>
                            </div>)

                            }
                           
                        }) }                        
                        
                    </div>
                </div>
                <div className="w-1/3">
                    <Basket2 />
                </div>
            </div>

            {/* Products Display - Desktop View */}
          { /* <div className="flex  2xl:hidden xl:hidden lg:hidden md:hidden sm:flex sm:mx-2  sm:flex-col  ">
    {["Pizza", "Roll", "Drink"].map((category, idx) => (
        <div key={idx} className="flex bg-gray-100 flex-col mt-10 divide-y divide-solid divide-slate-400 px-8 ">
            <h2 className="text-center mb-10 mt-4 text-xl font-bold">{category}</h2>
            
            <div className="flex flex-col divide-y divide-solid divide-slate-400">
                {product.map((item, index) => {
                    if (category.toLowerCase() === item.desc) {
                        
                        return (
                            <div key={index} className="flex justify-between pt-5">
                                <div className="flex">
                                    <div>
                                        <Image width={30} height={30} src={''} alt="" />
                                    </div>
                                    <div className="flex flex-col">
                                        <div className="font-semibold text-sx">{item.title}</div>
                                        <div className="text-gray-700">{item.desc}</div>
                                    </div>
                                </div>
                                <div className="flex gap-1">
                                    <div className="flex items-center">
                                        From ${item.price}
                                    </div>
                                    <div className="pt-3 hover:text-white" onClick={() => addItem(item)}>
                                    <PlusCircle className="sm:hover:bg-green-700 hover:bg-green-700  rounded-full" />
                                    </div>
                                </div>
                            </div>
                        );
                    } else {
                        return null;
                    }
                })}
            </div>

           
        </div>
    ))}
     <div className="mx-2">
     <div className="flex pt-5 mb-5" >
  {open ? (
    <div className='w-screen 2xl:hidden xl:hidden lg:hidden md:hidden bottom-0 bg-opacity-50 fixed inset-0 bg-black opacity-1' >
     <div className="bg-white fixed w-full bottom-0 z-50 rounded-md shadow-2xl px-1 sm:border-2 sm:border-gray">

     <div  className="rounded-full border-black border-2 w-7 mx-auto flex flex-col 2xl:hidden xl:hidden lg:hidden md:hidden sm:flex sm:flex-col mt-5" onClick={() => { setOpen(false) }}>
        <X  />
      </div>
      <div className='overflow-y-auto h-80'>
      <Basket2 />
      </div>
     
     </div>

    </div>
  ): ( 
  <Button style={{ backgroundColor: 'red', color: 'white', borderRadius: 100, width: '100%' }}  >
  <div className="flex justify-between" onClick={()=>setOpen(!open)}>
    <p>Checkout </p>
    <div className="text-red-700 w-20 rounded-full bg-white">${cartTotal}</div>
  </div>
</Button>)}


 
</div>


            
                </div>

              
  </div>*/}

        </main>
    );
}

export default dynamic(() => Promise.resolve(RestaurantName), { ssr: false });
