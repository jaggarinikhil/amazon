import { useState } from "react";
import Header from "./Header";

const Login=()=>{


  const [isSignInForm, SetSignInForm]=useState(true)

  const toggleSignInForm=()=>{
    SetSignInForm(!isSignInForm)
   }

  return(
    <div>
      <Header></Header>
      <div className=" absolute">    
      <img src="https://assets.nflxext.com/ffe/siteui/vlv3/dd4dfce3-1a39-4b1a-8e19-b7242da17e68/86742114-c001-4800-a127-c9c89ca7bbe4/IN-en-20240527-popsignuptwoweeks-perspective_alpha_website_medium.jpg" alt="logo">
      </img>
      </div>
      <from className=" w-3/12  absolute p-12 -my-38 mx-auto right-0 left-0 bg-opacity-80 bg-black ">
        <h1 className=" font-bold text-3xl  text-red-600">{isSignInForm? "Sign In" : "Sign Up"}</h1>

        {!isSignInForm && <input type="text" placeholder="Full Name" className="p-2 m-2 w-full rounded-md bg-gray-500 text-white"></input>
        }

        <input type="text" placeholder="Email Adress" className="p-2 m-2 w-full rounded-md bg-gray-500 text-white"></input>
        <input type="passwors" placeholder="pasword" className="p-2 m-2 w-full rounded-md  bg-gray-500 text-white"></input>
        <button className=" p-2 m-2 w-full  bg-red-600  text-xl rounded-md">{isSignInForm? "Sign In" : "Sign Up"}</button>
        <p className="p-2 m-2  text-white cursor-pointer" onClick={toggleSignInForm}>{isSignInForm? "New To Netflix? Sing Up Now" : "Alrady Regestered? Sign In Now."}</p>
      </from>
    </div>

  )
}

export  default Login;