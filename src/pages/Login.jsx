import React from 'react';
import { useNavigate } from "react-router-dom";
import { ButtonGradient } from "../components/Button";

const Login = () => {
  return (
   <>
  <div className="flex justify-center items-center gap-3 mt-10 mb-10  rounded-md bg-black-200 pt-10 pb-10">
    <form>
      <div className="flex flex-col justify-center ">
        <label htmlFor="username"></label>
        <input id="username" className="mb-5 border border-white p-2" type="text" placeholder="Enter Username" />
      </div>
      <div className="flex flex-col justify-center items-center">
        <label htmlFor="password"></label>
        <input id="password" className="mb-5 border border-white p-2" type="password" placeholder="Enter Password" />
      </div>
      <div className="flex flex-col justify-center items-center">
      <ButtonGradient objectName="Sign Up" onClick={() => navigate("/signup")} />
      </div>
      
    </form>
  </div>

  </>
  )
}

export default Login;

