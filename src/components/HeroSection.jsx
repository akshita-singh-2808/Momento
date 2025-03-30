 import React from 'react'
 import Navbar from './Navbar'
 import video1 from "../assets/video1.mp4"
 import video2 from "../assets/video2.mp4"
 import { ButtonGradient, ButtonSimple } from "./Button";
 import { useNavigate } from "react-router-dom";

 
 const HeroSection = () => {
  const navigate = useNavigate();
   return <>
    <div className="flex flex-col items-center mt-6 lg:mt-20">
        <h1 className='text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide'>Seamless events,  <span className='bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text'>unforgettable moments!</span> </h1>
        <p className='mt-10 text-lg text-center text-neutral-500 max-w-4xl'>Effortless event planning and seamless ticketing—all in one place! Create, manage, and sell tickets with ease for any event, big or small. Let’s make every occasion unforgettable!</p>
    </div>
    <div className="flex justify-center  my-10 gap-4">
        <ButtonGradient objectName="Explore Events"  onClick={() => navigate("/events")}/>
        < ButtonSimple objectName="Documentation"  onClick={() => navigate("/")}/>
    </div>
    <div className="flex mt-10 justify-center">
    <video autoPlay loop muted src={video1} className="rounded-lg w-1/2 border border-orange-700 shadow-orange-400 mx-2 my-4"></video>

    <video autoPlay loop muted src={video2} className="rounded-lg w-1/2 border border-orange-700 shadow-orange-400 mx-2 my-4"></video>

    </div>


   
   </>}

 
 export default HeroSection
 