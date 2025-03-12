import React from "react";
import searchIcon from "../../../assets/search.svg";
export default function SearchBar() {
  return (
    <div className="flex space-x-1 bg-[#f5f7fd83]  rounded-full px-2 py-2 justify-center items-center  my-2 ">
      <img src={searchIcon} alt="" className="h-7" />
      <div className="h-4 w-0.25 bg-gray-500"></div>
      <input type="text-xs" placeholder="Search" className=""></input>
    </div>
  );
}
