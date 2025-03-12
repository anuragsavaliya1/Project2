import React from "react";
import TrendingItem from "../components/TrandingItem";
import girl from "../../../assets/girl.png";
import tranding from "../../../assets/tranding.svg";

const trendingUsers = Array(12).fill({ username: "_Priya 👸💕", viewers: 1320, profileImage: girl });

const TrendingList = () => (
  <div className="z-2 relative mb-5 max-w-screen">
    <div className="flex items-center px-10">
      <img src={tranding} className="h-7" alt="Trending" />
      <p className="text-white mx-2 font-bold">Trending now</p>
    </div>
    <div className="overflow-x-scroll px-4 scrollbar-hide">
      <div className="flex animate-scroll whitespace-nowrap">
        {trendingUsers.map((user, index) => (
          <TrendingItem key={`dup-${index}`} {...user} />
        ))}
        {trendingUsers.map((user, index) => (
          <TrendingItem key={index} {...user} />
        ))}
      </div>
    </div>
  </div>
);

export default TrendingList;
