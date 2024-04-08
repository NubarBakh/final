'use client'
import Image from "next/image";
import AdminHeader from "../../../Components/Layout/Admin/AdminHeader";
import AdminSideMenu from "../../../Components/Layout/Admin/AdminSideMenu";
import Button from "../../../Components/Layout/Button";
import { Pencil, Trash2 } from "lucide-react";
import { useState ,useCallback,useEffect} from "react";
import AddCategory from '../../../Components/Layout/Admin/AddCategory';
import EditCategory from "../../../Components/Layout/Admin/EditCategory"
import axios from "axios";


export default function Category() {
  const [open, setOpen] = useState(false);
  const[list,setList]=useState([])
  
  const [editId, setEditId] = useState(null);


  useEffect(() => {
    axios.get(`http://localhost:3001/api/category`)
      .then((result) => {
        console.log(result.data.result.data)
        setList(result.data.result.data)
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("Fetch failed");
      });
  }, []);


  const onClick = useCallback((id) => {
    axios.delete(`http://localhost:3001/api/category${id}`)
    .then((result) => {
        alert(" delete successfully!");
        console.log( result.data.result.data[0].id)
       
        
    })
    .catch((error) => {
      console.error("Error:", error);
      alert("delete failed");
    });
  }, []);


  const handleEditClick = (id) => {
    setEditId(id === editId ? null : id);
  };
  

  return (
    <>
      <div className="relative">
        <AdminHeader />
        <div className="flex">
          <AdminSideMenu />
          <div className="ml-4">
            <div className="flex items-center justify-between mb-4">
              <h1 className="text-2xl font-bold">Categories</h1>
              <div onClick={()=>{setOpen(!open)}}>
                <Button >+ Add Category</Button>
              </div>
            </div>
            {open && <AddCategory value="Add category" />}
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr>
                    <th className="py-2 px-4 bg-gray-100">ID</th>
                    <th className="py-2 px-4 bg-gray-100">Image</th>
                    <th className="py-2 px-4 bg-gray-100">Name</th>
                    <th className="py-2 px-4 bg-gray-100">Slug</th>
                    <th className="py-2 px-4 bg-gray-100">Actions</th>
                  </tr>
                </thead>
                <tbody>
                {list.map((cat) => (
                    <tr key={cat.id}>
                      <td className="py-2 px-4">{cat.id}</td>
                      <td className="py-2 px-4">
                        <div className="w-10 h-10">
                          <Image src="/pizza.png" alt="" layout="responsive" width={50} height={50} />
                        </div>
                      </td>
                      <td className="py-2 px-4">{cat.name}</td>
                      <td className="py-2 px-4">{cat.slug}</td>
                      <button className="py-2 px-4" onClick={() => handleEditClick(cat.id)}>
                            <Pencil size={20}  />
                                        
                      </button>
                     
                      <td>
                      <button className="text-red-600 hover:text-red-800" onClick={onClick}>
                            <Trash2 size={20} />
                          </button>
                      </td>
                     {editId === cat.id && <EditCategory value={'edit category'} />}
                    </tr>
                    
                  ))}
                  
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
