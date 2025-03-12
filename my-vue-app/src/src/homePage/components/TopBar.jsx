import React from "react";
import { useState } from "react";
import CategoryTab from "./CategoryTab";

import menu from "../../../assets/menu.svg";
import indiaFlag from "../../../assets/india.png";
import canadaFlag from "../../../assets/canada.png";
import norwayFlag from "../../../assets/norway.png";
import puertoRicoFlag from "../../../assets/puerto-rico.png";
export default function TopBar() {
  const [selectedTab, setSelectedTab] = useState("Follow");

  const tabs = ["Follow", "Explore", "New", "PK", "Nearby"];
  const flags = [indiaFlag, canadaFlag, norwayFlag, puertoRicoFlag];
  const flags2 = [indiaFlag, canadaFlag, norwayFlag];
  return (
    <div className="flex mt-0 sm:mt-10 justify-between ">
      <div className="flex space-x-5  items-center justify-start">
        {tabs.map((tab) => (
          <div key={tab} onClick={() => setSelectedTab(tab)} className="cursor-pointer">
            <CategoryTab name={tab} selected={selectedTab === tab} />
          </div>
        ))}
      </div>

      <div className="flex">
        <div className="hidden sm:flex space-x-2 items-center ">
          <p className="bg-purple-600 text-white text-xs rounded-full px-3  ml-3 h-full font-medium  place-content-center">
            Popular
          </p>
          <div>
            <div className="flex p-2 bg-gray-100 rounded-full shadow-md justify-center items-center h-8 pl-4 ">
              {flags.map((flag, index) => (
                <div key={index} className=" zIndex: index -ml-2">
                  <img src={flag} alt={`Flag ${index}`} className="object-cover  " />
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="flex px-4 bg-gray-100 rounded-full shadow-md justify-center items-center h-8 ">
              <img src={canadaFlag} alt="" />
              <p className="ml-2 text-sm">Canada</p>
            </div>
          </div>

          <div className="flex p-2 bg-gray-100 rounded-full shadow-md justify-center items-center h-8 pl-4 ">
            {flags.map((flag, index) => (
              <div key={index} className=" zIndex: index -ml-2">
                <img src={flag} alt={`Flag ${index}`} className="object-cover  " />
              </div>
            ))}
          </div>
        </div>
        <img src={menu} alt="" className="w-6 " />
      </div>
    </div>
  );
}
