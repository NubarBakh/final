import { useState, useCallback, useRef,useEffect } from "react";
import Button from "../Button";
import Image from 'next/image';
import axios from "axios"; 




export default function AddRestaurant({ value }) {
  const [show, setShow] = useState(true);

  const[list,setList]=useState([])


  useEffect(() => {
   axios.get(`http://localhost:3001/api/category`)
     .then((result) => {
       console.log(result.data.result.data)
       setList(result.data.result.data)
       console.log(result.data.result.data)
     })
     .catch((error) => {
       console.error("Error:", error);
       alert("Fetch failed");
     });
 }, []);




  const nameRef = useRef(null);
  const cuisineRef = useRef(null);
  const deliveryPriceRef = useRef(null);
  const deliveryMinRef = useRef(null);
  const addresRef = useRef(null);
 

  const onClick = useCallback(() => {
    const name= nameRef.current?.value;
    const cuisine = cuisineRef.current?.value;
    const delmin = deliveryMinRef.current?.value;
    const delprice = deliveryPriceRef.current?.value;
    const address= addresRef.current?.value;

    let a= {
        name: name,
        cuisine: cuisine,
        delmin: delmin,
        delprice: delprice,
        address: address
    }

   

    axios.post("http://localhost:3001/api/restuarants", {
    
      "name":"Kebab",
      "cuisine":"Turkish Meat ,Chicken, Drink, Ice Cream, ",
      "delivery_price":3.4,
      "delivery_min":104,
       "img_url":"https://media-cdn.tripadvisor.com/media/photo-p/16/f6/e2/8d/mixed-beef.jpg",
      "address":"Sahil street 25 Baku Azerbaijan",
      "category_id":"YiVJvca0Ir0ovyRlLsQbdcdcs"
    })
      .then((result) => {
        console.log(result)
       
          alert("successful!");

       
      })
      .catch((error) => {
        console.error("Error:", error);
        alert(" failed");
      });
  }, []);
console.log(list)
    

  return (
    <>
      {show && (
        <div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex justify-center items-center">
          <div className="bg-white p-8 rounded-lg max-w-md w-full">
            <h2 className="text-xl font-semibold mb-4">{value}</h2>
            <div className="flex items-center mb-4">
              <h3 className="mr-2">Upload Image</h3>
              <div>
                <Image src="/pizza.png" alt="a" width={50} height={50} />
                <input type="file" />
              </div>
            </div>
            <div className="mb-4">
              <h2>Add your Restaurant information</h2>
              <form className="flex flex-col">
                <label>Name</label>
                <input type="text"   ref={nameRef}/>
                <label>Cuisine</label>
                <input type="text" ref={cuisineRef}  />

                <label>Delivery price $</label>
                <input type="number"  ref={deliveryPriceRef} />
                <label>Delivery min</label>
                <input type="number" ref={deliveryMinRef}  />
                <label>Address</label>
                <input type="text"  ref={addresRef} />

                <label>Category</label>
                 
                   
                    <select>
                {list.map((cat, key) => (
                    <option value={cat.name} key={key}>
                      {cat.name}
                    </option>
                  ))}
                     </select>

                 
                 
               
              </form>
            </div>
            <div className="flex justify-between">
              <div onClick={() => setShow(false)}>
                <Button>Cancel</Button>
              </div>
              <div onClick={onClick} >
                <Button>Create Restaurant</Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
