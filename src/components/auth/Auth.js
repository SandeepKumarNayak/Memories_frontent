import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import {useDispatch} from 'react-redux';
import {signIn,signUp} from '../../actions/Auth.js';

function Auth() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isSignUp, setIsSignUp] = useState(false);
  const [formData, setFormData] = useState({
    'firstName':'',
    'lastName':'',
    'email':'',
    'password':'',
    'confirmPassword':''
  })
  const handleAuth = () => {
    setIsSignUp(!isSignUp);
  };
  const handleInput = (e)=>{
     setFormData({...formData,[e.target.name]:e.target.value})
  }
  const handleSubmit = (e)=>{
    // console.log(formData);
    e.preventDefault();
    if(isSignUp){
      dispatch(signUp(formData,navigate));
    }else{
      dispatch(signIn(formData,navigate));
    }
    navigate('/')
  }
  return (
    <div className="max-w-[420px] p-4 pl-2 shadow-[0_0_10px_rgba(0,0,0,0.5)] mx-auto mt-12">
      <div className="flex flex-col  justify-center text-center">
        <FontAwesomeIcon
          className="w-fit mx-auto p-2 text-2xl text-amber-500 border-2  rounded-full"
          icon={faLock}
        />
        <h4 className="my-1 text-xl font-mono">
          {isSignUp ? "SignUp" : "SignIn"}
        </h4>
      </div>
      <form className="text-gray-600" onSubmit={handleSubmit}>
        {isSignUp && (
          <div className="m-1 grid gap-2 grid-cols-2 w-full">
            <input
              type="text"
              name="firstName"
              onChange={handleInput}
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              placeholder="First Name"
            />
            <input
              type="text"
              name="lastName"
              onChange={handleInput}
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              placeholder="Last Name"
            />
          </div>
        )}

        <input
          type="email"
          name="email"
          onChange={handleInput}
          className="m-1 w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          placeholder="Email"
        />
        <input
          type="password"
          name="password"
          onChange={handleInput}
          className="m-1 w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          placeholder="Password"
        />
        {isSignUp && (
          <input
            type="password"
            name="confirmPassword"
            onChange={handleInput}
            className="m-1 w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            placeholder="Confirm Password"
          />
        )}
        <button className="m-1 w-full text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
          {isSignUp ? "SignUp" : "SignIn"}
        </button>
        <div className="m-1 text-center">
          <span>
            {isSignUp
              ? "Already have an account please "
              : "Do not have account "}
          </span>
          <span onClick={handleAuth} className="text-indigo-600 cursor-pointer">
            {isSignUp ? "SignIn" : "SignUp"}
          </span>
        </div>
      </form>
    </div>
  );
}

export default Auth;
