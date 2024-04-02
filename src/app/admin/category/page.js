'use client'
import Image from "next/image";
import AdminHeader from "../../../Components/Layout/Admin/AdminHeader";
import AdminSideMenu from "../../../Components/Layout/Admin/AdminSideMenu";
import Button from "../../../Components/Layout/Button";
import { Pencil, Trash2 } from "lucide-react";
import { useState ,useCallback} from "react";
import AddCategory from '../../../Components/Layout/Admin/AddCategory';

export default function Category() {
  const [open, setOpen] = useState(false);

  const toggleAddCategory = () => {
    setOpen((prevOpen) => !prevOpen);
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
              <div onClick={toggleAddCategory}>
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
                  <tr>
                    <td className="py-2 px-4">9177</td>
                    <td className="py-2 px-4">
                      <div className="w-10 h-10">
                        <Image src="/pizza.png" alt="" layout="responsive" width={50} height={50} />
                      </div>
                    </td>
                    <td className="py-2 px-4">Pizza</td>
                    <td className="py-2 px-4">yummy</td>
                    <td className="py-2 px-4">
                      <div className="flex items-center space-x-2">
                        <button className="text-blue-600 hover:text-blue-800">
                          <Pencil size={20} />
                        </button>
                        <button className="text-red-600 hover:text-red-800">
                          <Trash2 size={20} />
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4">9178</td>
                    <td className="py-2 px-4">
                      <div className="w-10 h-10">
                        <Image src="/pizza.png" alt="" layout="responsive" width={50} height={50} />
                      </div>
                    </td>
                    <td className="py-2 px-4">Pizza</td>
                    <td className="py-2 px-4">yummy</td>
                    <td className="py-2 px-4">
                      <div className="flex items-center space-x-2">
                        <button className="text-blue-600 hover:text-blue-800">
                          <Pencil size={20} />
                        </button>
                        <button className="text-red-600 hover:text-red-800">
                          <Trash2 size={20} />
                        </button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
