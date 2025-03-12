import React from "react";
import homeIcon from "../../../assets/home.svg";
import partyIcon from "../../../assets/party.svg";
import exploreIcon from "../../../assets/explore.svg";
import chatIcon from "../../../assets/chat.svg";
import profileIcon from "../../../assets/profile.svg";
import { Link } from "react-router";
export default function MainIcons() {
  return (
    <div className="flex space-x-3 justify-center items-center place-items-baseline mt-1.5">
      <div className="h-10 w-10 place-items-center">
        <img src={homeIcon} className=" w-5" alt="" />
        <p className="text-xs text-[#6A3CCF] mt-0.5">Home</p>
      </div>

      <div className="h-10 w-10 place-items-center">
        <img src={partyIcon} className=" w-5" alt="" />
        <p className="text-xs mt-0.5 text-[#9D9AC4]">Party</p>
      </div>

      <div className="h-10 w-10 place-items-center">
        <img src={exploreIcon} className=" w-5" alt="" />
        <p className="text-xs mt-0.5 text-[#9D9AC4]">
          <Link to="/home/reels">Explore</Link>
        </p>
      </div>

      <div className="h-10 w-10 place-items-center">
        <img src={chatIcon} className=" w-5" alt="" />
        <p className="text-xs mt-0.5 text-[#9D9AC4]">Chat</p>
      </div>

      <div className="h-10 w-10 place-items-center">
        <img src={profileIcon} className=" w-5" alt="" />
        <p className="text-xs mt-0.5 text-[#9D9AC4]">Profile</p>
      </div>
    </div>
  );
}
