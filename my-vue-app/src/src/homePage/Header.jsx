import React from "react";
import leaderboard from "../../assets/leaderboard.svg";
import MainIcons from "./components/MainIcons";
import SearchBar from "./components/SearchBar";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <div className="bg-[#ffffff] h-15 drop-shadow-md content-center px-2 flex justify-between items-center overflow-hidden">
        <p className=" text-[#ff00d4]  text-2xl font-bold ml-8">
          <Link to="/">Tingle</Link>
        </p>

        <div className="flex justify-between items-center">
          {/* Mobile View: Only Search Bar */}
          <div className="block sm:hidden w-full">
            <SearchBar />
          </div>

          {/* Desktop View: Menu, Search Bar & Leaderboard */}
          <div className="hidden sm:flex space-x-3 lg:mr-30 md:mr-10">
            <MainIcons />
            <SearchBar />
            <img src={leaderboard} alt="" className="w-7" />
          </div>
        </div>
      </div>
    </div>
  );
}
