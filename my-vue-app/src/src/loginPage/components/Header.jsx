import React from "react";
import mobile from "../../../assets/mobile.svg";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <div>
        <div className="bg-[#b2b2b24a] drop-shadow-md content-center px-3 py-3   flex justify-between items-center overflow-hidden">
          <p className=" text-[#ffffff]  text-2xl font-bold ml-7">Tingle</p>

          <div className="flex justify-between items-center">
            {/* Mobile View: Only Search Bar */}
            <div className="block sm:hidden w-full">
              <div className="bg-white  flex rounded-full px-2 py-2 justify-center items-center h-8">
                <img src={mobile} alt="" className="h-5" />
                <p className="text-xs mx-1"> Get Tingle App</p>
              </div>
            </div>

            {/* Desktop View: Menu, Search Bar & Leaderboard */}
            <div className="hidden md:flex space-x-3 lg:mr-30 md:mr-8 self-center items-center ">
              <ul className="list-none text-white text-sm horizon flex space-x-8 mr-10">
                <li>
                  <Link to="/home"> Home</Link>
                </li>
                <li>Party Room</li>
                <li>Explore</li>
                <li>Chat</li>
                <li>Profile</li>
              </ul>

              <div className="bg-white  flex rounded-full px-2 py-2 justify-center items-center h-9">
                <img src={mobile} alt="" className="h-5" />
                <p className="text-xs mx-1"> Get Tingle App</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
