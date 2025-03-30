import React from 'react';
import { useNavigate } from "react-router-dom";
import { ButtonGradient } from "../components/Button";
import "/public/style.css";


const Login = () => {
  return (
   <>
    <h5 className=' text-4xl text-center tracking-wide'>Login to <span className='bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text'> Momento </span></h5>
 <div className='p-login rounded-md'>

  <div className=" login-div flex justify-center items-center gap-3 mt-10 mb-10  rounded-md  pt-10 pb-10">
    <form>
      <div className="flex flex-col justify-center ">
        <label htmlFor="username"></label>
        <input id="username" className="mb-5 border border-white p-2 rounded-md" type="text" placeholder="Enter Username" />
      </div>
      <div className="flex flex-col justify-center items-center">
        <label htmlFor="password"></label>
        <input id="password" className="mb-5 border border-white p-2 rounded-md" type="password" placeholder="Enter Password" />
      </div>
      <div className="flex flex-col justify-center items-center">
      <ButtonGradient objectName="Sign Up" onClick={() => navigate("/signup")} />
      </div>
      
    </form>
  </div>


 </div>
 </>
  )
}

export default Login;

