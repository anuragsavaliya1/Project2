// components/TrendingItem.jsx
import React from "react";

const TrendingItem = ({ profileImage, username, viewers }) => (
  <div className="flex-shrink-0">
    <div className="flex items-center gap-2 px-2 py-1.5 bg-[#00000044] rounded-full w-fit shadow-lg ml-5 mt-5">
      {/* Profile Image */}
      <div className="relative">
        <img src={profileImage} alt={username} className="w-12 h-12 rounded-full border border-white object-cover" />
      </div>

      {/* User Info */}
      <div className="flex flex-col text-white mr-3">
        <div>
          <div className="bg-pink-500 text-[8px] text-white px-1.5 rounded-full w-fit">LIVE</div>
          <div className="text-sm font-semibold mt-1">@{username}</div>
        </div>
        <div className="flex items-center text-sm text-gray-200 mt-1">
          <span className="text-white text-[8px]">👤</span>
          <span className="ml-1 text-[8px]">{viewers} Viewers</span>
        </div>
      </div>
    </div>
  </div>
);

export default TrendingItem;
