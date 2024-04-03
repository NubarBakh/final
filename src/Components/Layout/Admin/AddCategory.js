import { useState, useCallback, useRef } from "react";
import Button from "../Button";
import Image from 'next/image';
import axios from "axios"; 



export default function AddCategory({ value }) {
  const [show, setShow] = useState(true);
  const categoryRef = useRef(null);

  const onClick = useCallback(() => {
    const category = categoryRef.current.value;
    console.log(category);

    axios.post("http://localhost:3001/api/category", {
      name: category,
      slug: "string",
    })
    .then((result) => {
        alert("Category created successfully!");
        console.log(result)
    })
    .catch((error) => {
      console.error("Error:", error);
      alert("Category creation failed");
    });
  }, []);

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
              <h2>Add your category information</h2>
              <form className="flex flex-col">
                <label>Name</label>
                <input type="text" ref={categoryRef} />
              </form>
            </div>
            <div className="flex justify-between">
              <div onClick={() => setShow(false)}>
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
