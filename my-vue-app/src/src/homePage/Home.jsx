import React from "react";
import bgpink from "../../assets/bgpink.svg";
import bgstar from "../../assets/bgstar.png";
import trophy from "../../assets/trophy.png";
import star from "../../assets/star.png";
import TopBar from "./components/TopBar";
import HostList from "./components/HostList";
export default function Home() {
  return (
    <div>
      <div className="lg:mx-35 md:mx-10 sm:mx-5 mx-2">
        <div className="  flex-col md:flex-row  items-center justify-between  mt-3 md:mt-10    hidden sm:flex">
          <div
            className="flex items-center justify-between w-full  h-20   px-4 py-3 rounded-2xl shadow-lg relative  "
            style={{
              backgroundImage: `url(${bgpink})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <span className="text-white font-semibold">All Ranking</span>

            <img src={trophy} alt="Trophy" className="h-15" />
          </div>

          <div
            className="flex items-center justify-between w-full h-20 px-4 py-3 rounded-2xl shadow-lg relative  ml-0 md:ml-10 mt-3 md:mt-0"
            style={{
              backgroundImage: `url(${bgstar})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <span className="text-white font-semibold">Actvity center</span>

            <img src={star} alt="Trophy" className="h-20" />
          </div>
        </div>

        <TopBar />
        <HostList />
      </div>
    </div>
  );
}
