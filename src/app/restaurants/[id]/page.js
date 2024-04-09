'use client'
import Header from "../../../Components/Layout/Header";
import RestaurantName from "../../../Components/Layout/restaurant/restaurant";
import Footer from"../../../Components/Layout/Footer";
import { CartProvider } from "react-use-cart";
import { useRouter } from "next/navigation";

export default function Restaurant ({ params, searchParams }){
    const router = useRouter();
    const value= params.id
   
    return<>
    
    <Header/>
    <CartProvider>
    <RestaurantName value={value }/>
    </CartProvider>
   
    <Footer/>
    </>
}