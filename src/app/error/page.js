import Footer from "@/Components/Layout/Footer";
import Header from "@/Components/Layout/Header";
import Image from 'next/image';

export default function Error (){
    return <>
    <Header/>
    <div>
        <Image src={'/error.png'} alt={'error'}/>
    </div>
    <Footer/>
    </>
}