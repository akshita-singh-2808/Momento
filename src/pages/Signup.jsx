import React from 'react';
import { useNavigate } from "react-router-dom";
import { ButtonGradient } from "../components/Button";

const Signup = () => {
  const navigate = useNavigate();

  return (
    <div className="rounded-md flex justify-center items-center w-full lg:w-[400px]">

      <div className="flex justify-center items-center gap-3   pt-10 pb-10">
      <form>
        <div className="flex flex-col justify-center items-center">
          <label htmlFor="fullName"></label>
          <input id="fullName" className="mb-5 border border-white p-2" type="text" placeholder="Enter Full Name" />
        </div >
        <div className="flex flex-col justify-center items-center">
          <label htmlFor="email"></label>
          <input id="email" className="mb-5 border border-white p-2" type="email" placeholder="Enter Email" />
        </div>
        <div className="flex flex-col justify-center ">
          <label htmlFor="username"></label>
          <input id="username" className="mb-5 border border-white p-2" type="text" placeholder="Enter Username" />
        </div>
        <div className="flex flex-col justify-center items-center">
          <label htmlFor="password"></label>
          <input id="password" className="mb-5 border border-white p-2" type="password" placeholder="Enter Password" />
        </div>
        <div className="flex flex-col justify-center items-center">
          <label htmlFor="confirmPassword"></label>
          <input id="confirmPassword" className="mb-5 border border-white p-2" type="password" placeholder="Confirm Password" />
        </div>
        <div className="flex flex-col justify-center items-center">
        <ButtonGradient objectName="Sign Up" onClick={() => navigate("/signup")} />
        </div>
        
      </form>
    </div>
    </div>
    
  );
};

export default Signup;
