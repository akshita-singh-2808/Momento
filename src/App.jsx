import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Feature from "./components/Feature";
import Footer from "./components/Footer";
import Testimonials from "./components/Testimonials";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import CursorEffect from "./components/CursorEffect";
import Events from "./components/Events";


function HomePage() {
  return (
    <>
      <HeroSection />
      <Feature />
      <Testimonials />
      <Footer />
    </>
  );
}

function App() {
  return ( <>
  <CursorEffect />
    <Router>
      <Navbar />
      <div className="max-w-4xl mx-auto pt-20 px-6">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/events" element={<Events/>} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router></>
  
  );
}

export default App;
