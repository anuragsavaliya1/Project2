import React from "react";
import Header from "./Header";
import Home from "./Home";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import ReelsPage from "../reels/ReelsPage";
export default function HomePage() {
  const [activeTab, setActiveTab] = useState("home");
  const page = useSelector((state) => state.path.value);

  console.log("Current Page:", page); // ✅ Debugging log

  return (
    <div>
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />
      {page === "home" ? <Home /> : <ReelsPage />}
    </div>
  );
}
