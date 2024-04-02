
'use client'
import Header from '../../../../Components/Layout/Header'
import Footer from '../../../../Components/Layout/Footer'
import CheckoutPage from '../../../../Components/Layout/orderpage/Checkout'
import { CartProvider } from 'react-use-cart'
export default function Chekout (){
    return <>
    <Header/>

    <CartProvider>
    <CheckoutPage/>

    </CartProvider>
   
    <Footer/>
    </>
}