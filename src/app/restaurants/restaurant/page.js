'use client'
import Header from "../../../Components/Layout/Header";
import RestaurantName from "../../../Components/Layout/restaurant/restaurant";
import Footer from"../../../Components/Layout/Footer";
import { CartProvider } from "react-use-cart";

export default function Restaurant (){
    return<>
    
    <Header/>
    <CartProvider>
    <RestaurantName/>
    </CartProvider>
   
    <Footer/>
    </>
}