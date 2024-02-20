import Footer from "@/Components/Layout/Footer";
import Header from "@/Components/Layout/Header";

export default function Error (){
    return <>
    <Header/>
    <div>
        <img src={'/error.png'} alt={'error'}/>
    </div>
    <Footer/>
    </>
}