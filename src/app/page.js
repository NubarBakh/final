
import Features from "../Components/Layout/Features";
import Footer from "../Components/Layout/Footer";
import OverFooter from "../Components/Layout/OverFooter";
import PopularFood from "../Components/Layout/PopularFood";
import AboutSite from "../Components/Layout/AboutSite";
import Header from "../Components/Layout/Header";

 




export default function Home() {


  return <>
  
  <div className=" border-red-800 ">
    
    <div className="bg-gray-100 px-10  mx-5 sm:py-4  my-5">
    
    <Header/>
    
    
    <AboutSite/>
    </div>
    
    <Features/>
    <PopularFood/>
    <div className="  relative mt-80" >
    <OverFooter  />
    <Footer />
    </div>
    </div>


  

  </>
}
