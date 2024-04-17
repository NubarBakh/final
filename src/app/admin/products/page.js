'use client'
import { useState, useEffect } from "react";
import axios from "axios";
import { Search } from "lucide-react";
import AdminHeader from "../../../Components/Layout/Admin/AdminHeader";
import AdminSideMenu from "../../../Components/Layout/Admin/AdminSideMenu";
import AdminDelete from "../../../Components/Layout/Admin/AdminDelete";
import { Pencil, Trash2 } from "lucide-react";
import AdminEditProduct from "../../../Components/Layout/Admin/AdminEditProduct";

export default function Product() {
  const [show, setShow] = useState(false);
  const [look, setLook] = useState(false);
  const [open, setOpen] = useState(false);
  const [lists, setLists] = useState([]);
  const [products, setProducts] = useState([]);
  const[id,setId]=useState(null)

  useEffect(() => {
    axios
      .get("http://localhost:3001/api/restaurants")
      .then((result) => {
        setLists(result.data.result.data);
        console.log(result.data.result.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:3001/api/products")
      .then((result) => {
        setProducts(result.data.result.data);
        console.log(result.data.result.data);
        setId(result.data.result.data[0].id);
        console.log(result.data.result.data[0].id)
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  

  return (
    <>
      <div className="relative bg-slate-900">
        <AdminHeader />
        <div className="flex  gap-2">
          <AdminSideMenu />
          <div className="flex flex-col">
            <div className="flex  bg-slate-800 p-4 rounded justify-between">
              <p className="text-white">Products</p>
              <div className="flex justify-between gap-2">
                <select className="rounded-md">
                  <option >Restaurant type</option>
                  {lists.map((list, key) => (
                    <option value={list.name} key={key}>
                      {list.name}
                    </option>
                  ))}
                </select>
                <div className="flex text-white bg-magenta rounded-md p-1" > <Search />
                  <input placeholder="search" className="rounded-md bg-magenta" />
                </div>
              </div>
            </div>
            <div>
              <div className="mx-2 flex gap-5 m-5 flex-wrap sm:flex-wrap sm:justify-center md:justify-start ">
                {products.map((prod, key) => (
                  <div
                    className="border-solid border-gray border-2 px-5 box-border pt-5 bg-white"
                    key={key}
                  >
                    <div className="flex justify-center mb-2">
                      <img
                        src={prod.img_url}
                        width={100}
                        height={100}
                        alt={prod.name}
                      />
                    </div>
                    <div className="flex font-bold text-lg mb-2">
                      {prod.name}
                    </div>
                    <p className="mb-3">{prod.description}</p>
                    <div className="flex justify-between mb-3">
                      <div className="font-semibold mb-2">{prod.price}</div>
                      <div className="flex p-1">
                        <div
                          onClick={() => {
                            setOpen(!open);
                          }}
                          className="cursor-pointer"
                        >
                          <Pencil />
                          {open && (
                            <div>
                              <AdminEditProduct value={"Edit Product"} />
                            </div>
                          )}
                        </div>
                        <div  onClick={() => { setLook(!look) }}>   <Trash2/></div>
                       
                        {(look && id=== prod.id) && (
                          <AdminDelete
                          
                          />
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
