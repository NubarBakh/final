import Button from "../Button";
import { useState } from "react";
import axios from "axios";
export default function AdminDelete (){
    const [show, setShow] = useState(true);

    const handleDelete = (productId) => {
        axios
          .delete(`http://localhost:3001/api/products/${productId}`)
          .then((response) => {
            console.log("Product deleted successfully");
           
          })
          .catch((error) => {
            console.error("Error deleting product: ", error);
          });
      };

    return<>
    {show&&(
        <div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex justify-center items-center">
        <div  className="bg-white p-8 rounded-lg">
        <h2>Are you sureit`s deleted?</h2>
        <p>Attention!If you delete this product, it will not come back...</p>
        <div>
           <div onClick={()=>{setShow(!show)}}>
           <Button >Cancel</Button>
           </div>
           <div onClick={()=>{handleDelete}}>
           <Button>Delete</Button>
           </div>
        </div>
        </div>
     </div>

    )}
    
    
    </>
}