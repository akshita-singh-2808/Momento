import { Menu, X } from "lucide-react";
import { useState } from "react";
// import logo from "../assets/logo.png";
import logo2 from "../assets/logo.png";
import logo3  from "../assets/logo.png";
import logo4 from "../assets/logo.png";
import { navItems } from "../constants";
import { ButtonGradient, ButtonSimple } from "./Button";
import { useNavigate } from "react-router-dom";




function Navbar(){
  const navigate = useNavigate();
  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
      <div className="container px-4 mx-auto relative lg:text-sm ">
        <div className="flex justify-between items-center ">
          <div className="flex items-center  flex-shrink-0">
            <a href="/"> <img className="h-10 w-30 mr-2" src={logo2} alt="Logo" /></a>
           
            {/* <a href="/"> <span className="text-xl tracking-tight">Momento</span></a> */}
           
          </div>
          <ul className="hidden lg:flex ml-14 space-x-12">
            {navItems.map((item, index) => (
              <li key={index}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
          <div className="hidden lg:flex justify-center space-x-12 items-center">
          <ButtonSimple objectName="Sign In" onClick={() => navigate("/login")} />
          <ButtonGradient objectName="Create an Account" onClick={() => navigate("/signup")} />
           
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
