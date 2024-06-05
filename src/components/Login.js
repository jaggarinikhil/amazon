import { useRef, useState } from "react";
import Header from "./Header";
import { chectValidaData } from "../utilits/valididate";
import {getAuth, createUserWithEmailAndPassword } from "firebase/auth";


const Login = () => {
  const [isSignInForm, setSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    // validation of form data
    console.log(email.current.value);
    console.log(password.current.value);

    const message = chectValidaData(email.current.value, password.current.value);
    setErrorMessage(message);
    if(message)return;

    const auth = getAuth();

    // sign in and signup logic
    if(!isSignInForm){
      //sign up logic
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    console.log(user)
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode+""+errorMessage);
    // ..
  });

    }else{
      //sign in logic

    }


  };

  const toggleSignInForm = () => {
    setSignInForm(!isSignInForm);
  };

  return (
    <div className="relative min-h-screen bg-cover bg-center" style={{ backgroundImage: 'url(https://assets.nflxext.com/ffe/siteui/vlv3/dd4dfce3-1a39-4b1a-8e19-b7242da17e68/86742114-c001-4800-a127-c9c89ca7bbe4/IN-en-20240527-popsignuptwoweeks-perspective_alpha_website_medium.jpg)' }}>
      <Header />
      <form 
        onSubmit={(e) => e.preventDefault()}
        className="w-11/12 md:w-3/12 absolute p-12 mx-auto right-0 left-0 bg-opacity-80 bg-black top-1/2 transform -translate-y-1/2"
      >
        <h1 className="font-bold text-4xl p-2 m-4 text-red-600">{isSignInForm ? "Sign In" : "Sign Up"}</h1>

        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-2 m-4 w-full rounded-md bg-gray-500 text-white"
          />
        )}

        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-2 m-4 w-full rounded-md bg-gray-500 text-white"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-2 m-4 w-full rounded-md bg-gray-500 text-white"
        />

        <p className="text-red-500 text-lg font-bold p-2">{errorMessage}</p>

        <button
          className="p-2 m-4 w-full bg-red-600 text-xl rounded-md"
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p
          className="p-2 m-4 text-white cursor-pointer"
          onClick={toggleSignInForm}
        >
          {isSignInForm ? "New To Netflix? Sign Up Now" : "Already Registered?.. Sign In Now.."}
        </p>
      </form>
    </div>
  );
};

export default Login;
