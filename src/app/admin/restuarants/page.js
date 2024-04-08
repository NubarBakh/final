"use client"
import { useState ,useEffect} from 'react';
import Image from 'next/image';
import AdminHeader from '../../../Components/Layout/Admin/AdminHeader';
import AddRestaurant from '../../../Components/Layout/Admin/AddRestaurant';
import AdminSideMenu from '../../../Components/Layout/Admin/AdminSideMenu';
import { Trash2, Pencil } from 'lucide-react';
import axios from "axios";


export default function AdminRestaurants() {
  const [open, setOpen] = useState(false);
  const[lists,setLists]=useState([])

  useEffect(()=>{axios.get('http://localhost:3001/api/restuarants')
  .then((result)=>{
    console.log(result.data.result.data)
    setLists(result.data.result.data)
  })
  .catch((error)=>{
    console.error("Error:", error);
    alert("Fetch failed");
  })
},[])



  return (
    <>
      <div className='relative'>
        {open && <AddRestaurant value='Add restaurant' />}
        <AdminHeader />
        <div className='flex'>
          <AdminSideMenu />
          <div>
            <div className='flex justify-between items-center'>
              <p>Restaurants</p>
              <div>
                <select>
                  <option value=''>Category type</option>
                  <option value='option1'>Option 1</option>
                  <option value='option2'>Option 2</option>
                  <option value='option3'>Option 3</option>
                </select>
              </div>
              <div onClick={()=> setOpen(!open)}>
                + Add Restaurant
              </div>
            </div>
            <div className='flex  items-center flex-wrap '>
  {lists.map((list, key) => (
    <div key={key} className='flex items-center border-2 py-2 '>
      <img src={list.img_url} width={50} height={50} alt='pizza' />
      <div className='ml-4 flex flex-col'>
        <h2 className='text-2xl'>{list.name}</h2>
        <p>{list.cuisine}</p>
      </div>
      <div className='ml-auto flex items-center space-x-4 flex-col'>
      <Pencil className='cursor-pointer' onClick={() => handleEdit(list.id)} />
        <Trash2 className='cursor-pointer' onClick={() => handleDelete(list.id)} />
       
      </div>
    </div>
  ))}
</div>
           
          </div>
        </div>
      </div>
    </>
  );
}
