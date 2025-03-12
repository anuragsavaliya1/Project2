import React from "react";
import bgLogin from "../../assets/bgLogin.svg";
import couple1 from "../../assets/couple1.png";
import couple2 from "../../assets/couple2.png";
import couple3 from "../../assets/couple3.png";
import couple4 from "../../assets/couple4.png";
import quicklogin from "../../assets/quicklogin.png";
import googlelogin from "../../assets/googlelogin.png";

import TrendingList from "./components/TrendingList";
import { Link, useNavigate } from "react-router-dom";
import "animate.css";

import MainIcons from "../homePage/Header";
import SearchBar from "../homePage/components/SearchBar";
import Header from "./components/Header";
import { useState } from "react";
import { loginOrSignUp } from "../api/authService";
export default function Loginpage() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onClickLogin = async () => {
    setLoading(true);
    try {
      const email = "abc@gmail.com"; // Replace with dynamic input
      const fcmToken = "sample_fcm_token"; // Get from Firebase
      const identity = "PKQ1.1809094.001"; // Fetch from your auth provider

      const response = await loginOrSignUp(email, fcmToken, identity);
      console.log("Login Successful:", response.user);
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("user", JSON.stringify(response));

      alert("Login successful!");

      navigate("/home");
    } catch (error) {
      console.error("Login Error:", error); // Log the actual error
      alert("Login failed! Please try again."); // Make sure it's a string, not a function
    } finally {
      setLoading(false);
    }
  };
  return (
    <div>
      {/* <img src={bgLogin} alt="" className="fixed h-full inset-0 bg-cover bg-center bg-no-repeat" /> */}

      <div
        className="h-screen w-screen"
        style={{
          backgroundImage: `url(${bgLogin})`,
        }}
      >
        <div className="flex flex-col h-full">
          {/* TOP HEADER */}
          <Header />

          {/* MAIN PART */}
          <div className=" relative flex-1 overflow-y-auto justify-between items-center ">
            <div className=" flex flex-row items-center  px-10 w-full h-full justify-between ">
              {/* Left Side - Text Content */}
              <div className="w-3xl">
                {/* Badge */}
                <div className="inline-block px-4 py-2 mb-4 text-sm font-medium text-white bg-white/20 rounded-full">
                  Best Dating App & Web Platform
                </div>

                {/* Title */}
                <h1 className="text-6xl font-bold text-white leading-tight">
                  Join The Best Global <br /> Live-Streaming Platform
                </h1>

                {/* Description */}
                <p className="mt-4 text-white mr-10">
                  There are many variations of passages of Lorem Ipsum available, but the majority have suffered
                  alteration in some form, by injected humour, or randomised words which don't look even slightly
                  believable.
                </p>

                {/* Buttons */}
                <div className="mt-6 md:flex space-x-4 items-center ">
                  <div
                    className="flex items-center px-3 py-1.5  bg-white text-black rounded-full shadow-md w-fit justify-center"
                    onClick={onClickLogin}
                  >
                    <img src={quicklogin} className="h-10  " alt="" />
                    <p className="mx-6">Quick Login</p>
                  </div>
                  <button className="flex items-center px-3 py-1.5  bg-white text-black rounded-full shadow-md w-fit mt-3 md:mt-0 justify-center">
                    <img src={googlelogin} alt="" className="h-10" />
                    <p className="mx-5">Log In With Google</p>
                  </button>
                </div>
              </div>

              <div className=" hidden lg:flex items-center justify-center self-center">
                <div className="grid grid-cols-2 gap-6 h-[570px] w-[570px]  p-2">
                  <div className=" col-span-1 row-span-2">
                    <img src={couple1} className="rounded-4xl  object-cover  h-full w-full" alt="couple" />
                  </div>
                  <div className=" col-span-1">
                    <img src={couple2} className="rounded-4xl   object-cover  h-full w-full" alt="couple" />
                  </div>
                  <div className=" row-span-2">
                    <img src={couple4} className="rounded-4xl   object-cover  h-full w-full" alt="person" />
                  </div>
                  <div className=" col-span-1 row-span-1">
                    <img src={couple3} className="rounded-4xl  object-cover h-full w-full " alt="person" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <TrendingList />
        </div>
      </div>
    </div>
  );
}
