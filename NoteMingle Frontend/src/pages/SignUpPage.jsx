import Header from "./components/Header";
import Footer from "./components/Footer";
import SignUp from "./components/SignUp";
import axios from "axios";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../constants/config";
import { getUser } from "../Redux/users/user.actions";
export default function SignUpPage() {
  const nav = useNavigate()
  function handleSignUp(name, email, password) {
    const handleSSignUp = async () => {
      let data = await axios.post(BASE_URL+"/user/register",{
        name,email,password
    })
    let  {message,status} = data.data
    if(status==1){
        alert(message)
        nav("/login")
    }else{
        alert(message)
    }
    };
    handleSSignUp();
  }
  return (
    <div>
      <Header />
      <div className="loginBox"><div><h1 className="homeHeading">Let's get You Registered!</h1><p className="loginBoxPara">Go ahead and enter your details</p></div><SignUp handleSignUp={handleSignUp}/></div>
      <Footer />
    </div>
  );
}
