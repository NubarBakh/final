import AdminHeader from "../../../Components/Layout/Admin/AdminHeader";
import AdminSideMenu from "../../../Components/Layout/Admin/AdminSideMenu";
import Image from "next/image";
import { Eye, Trash2 } from "lucide-react";
import Footer from "../../../Components/Layout/Footer";

export default function Offers() {
  return (
    <>
      <main>
        <AdminHeader />
        <div className="flex">
          <AdminSideMenu />
          <div className="flex-grow">
            <p>Orders</p>

            <table className="w-full">
              <thead>
                <tr>
                  <th className="py-2 px-4 bg-gray-100">ID</th>
                  <th className="py-2 px-4 bg-gray-100">Customer ID</th>
                  <th className="py-2 px-4 bg-gray-100">Time</th>
                  <th className="py-2 px-4 bg-gray-100">Delivery Address</th>
                  <th className="py-2 px-4 bg-gray-100">Amount</th>
                  <th className="py-2 px-4 bg-gray-100">Payment Method</th>
                  <th className="py-2 px-4 bg-gray-100">Contact</th>
                  <th className="py-2 px-4 bg-gray-100">Actions</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td className="py-2 px-4">9177</td>
                  <td className="py-2 px-4">6546351 </td>
                  <td className="py-2 px-4">23.01.2023</td>
                  <td className="py-2 px-4">baku</td>
                  <td className="py-2 px-4">15$</td>
                  <td className="py-2 px-4">cash</td>
                  <td className="py-2 px-4">0517661727</td>
                  <td className="py-2 px-4">
                    <button className="text-blue-600 hover:text-blue-800">
                      <Eye size={20} />
                    </button>
                    <button className="text-red-600 hover:text-red-800">
                      <Trash2 size={20} />
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <Footer/>
      </main>
    </>
  );
}
