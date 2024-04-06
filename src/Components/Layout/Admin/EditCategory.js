import { useState, useCallback, useRef } from "react";
import Button from "../Button";
import Image from 'next/image';
import axios from "axios"; 
import { Pencil } from "lucide-react";

export default function EditCategory({ value }) {
  const [id, setId] = useState(null);
  const [show, setShow] = useState(true);
  const categoryRef = useRef(null);
  const slugRef = useRef(null);

  const onClick = useCallback(() => {
    const category = categoryRef.current?.value;
    const slug = slugRef.current?.value;
    console.log(category);
    
    axios.put(`http://localhost:3001/api/category/${id}`, {
      img_url: "https://th.bing.com/th/id/R.5da01babda8f9ca3c2c013a1bfea415c?rik=MStq8nSZ1N4nBQ&pid=ImgRaw&r=0",
      name: category,
      slug: slug
    })
    .then((result) => {
        alert("Category updated successfully!");
        console.log(result.data.result.data[0].id);
        setId(result.data.result.data[0].id);
    })
    .catch((error) => {
      console.error("Error:", error);
      alert("Category update failed");
    });
  }, [id]);

 

  return (
    <>
   
      {show && (
        <div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex justify-center items-center">
          <div className="bg-white p-8 rounded-lg max-w-md w-full">
        
           
            <div className="mb-4">
            <h2 className="text-xl font-semibold mb-4">{value}</h2>
            <h3 className="mr-2">Upload Image</h3>
             <div>
          <Image src="/pizza.png" alt="a" width={50} height={50} />
          <input type="file" />
        </div>
              <h2>Add your category information</h2>
              <form className="flex flex-col">
                <label>Name</label>
                <input type="text" ref={categoryRef} />
                <label>Slug</label>
                <input type="text" ref={slugRef} />
              </form>
            </div>
            <div className="flex justify-between">
              <div onClick={()=>{setShow(!show)}}>
                <Button>Cancel</Button>
              </div>
              <div onClick={onClick}>
                <Button>Create Product</Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}



