import HeroSection from "./components/HeroSection";
import Navbar from "./components/navbar";
import Feature from "./components/Feature";
import Footer from "./components/Footer";
import Testimonials from "./components/Testimonials";

function App() {
  return <> <Navbar/>
      <div className="max-w-4xl mx-auto pt-20 px-6">
           <HeroSection/>
           <Feature/>
           <Testimonials/>
           <Footer/>
           
      </div>
     


     </>
   
  
}
export default App;


