import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import LoginPage from "./src/loginPage/loginpage";
import HomePage from "./src/homePage/HomePage";
import Header from "./src/homePage/Header";
import { Routes, Route, Router } from "react-router-dom";
import PrivateRoute from "./src/loginPage/components/PrivateRoute";
import ReelsPage from "./src/reels/ReelsPage";

function App() {
  return (
    <>
      {/* <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="*" element={<LoginPage />} />
      </Routes> */}
      {/* <ReelsPage /> */}

      <Routes>
        <Route path="/" element={<LoginPage />} />

        <Route element={<PrivateRoute />}>
          <Route path="/home" element={<HomePage />} />
        </Route>

        <Route path="*" element={<LoginPage />} />
      </Routes>

      {/* <div className="flex items-center justify-center min-h-screen bg-gray-900">
        <div className="grid grid-cols-2 gap-2 w-[400px] h-[400px] p-2 bg-white">
          <div className="bg-purple-300 col-span-1 row-span-2"></div>
          <div className="bg-pink-300 col-span-1"></div>
          <div className="bg-yellow-300 row-span-2"></div>
          <div className="bg-gray-300 col-span-1"></div>
        </div>
      </div> */}
    </>
  );
}

export default App;
