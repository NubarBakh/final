
'use client'
import React from 'react';
import Footer from "../../../Components/Layout/Footer";
import Header from "../../../Components/Layout/Header";
import MyBasket from "../../../Components/Layout/basket/basket";
import { CartProvider } from "react-use-cart";


export default function Basket() {
  return (
    <div>
      <Header />
      <CartProvider>
        <MyBasket />
      </CartProvider>
      <Footer />
    </div>
  );
}
