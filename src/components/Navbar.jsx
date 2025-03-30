import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "../assets/logo.png";
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
            <img className="h-10 w-10 mr-2" src={logo} alt="Logo" />
            <a href=""> <span className="text-xl tracking-tight">Momento</span></a>
           
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
