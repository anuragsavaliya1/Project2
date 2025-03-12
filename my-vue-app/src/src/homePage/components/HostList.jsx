import girl from "../../../assets/girl.png";
import indiaFlag from "../../../assets/india.png";

import React, { useState, useEffect } from "react";
import axios from "axios";

export default function HostList() {
  const [hosts, setHosts] = useState([]);
  const basURl = "https://shortieb.codderlab.com/";
  useEffect(() => {
    const config = {
      headers: { key: `boSNvZJdf0daHwdURFhRKNj99Xr3v7Ww` },
    };

    axios
      .get(
        "https://shortieb.codderlab.com/client/liveUser/getliveUserList?start=1&limit=20&userId=6695fcf5fed1e486b4a01d19",
        config
      )
      .then((response) => {
        console.log(response);

        setHosts(response.data.liveUserList);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  console.log(hosts);

  // console.log(`${basURl} ${hosts}`);
  return (
    <div className="mt-5 sm:mt-10">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6  gap-6">
        {hosts.map((_, index) => (
          <div key={index} className="relative aspect-[6/8] rounded-2xl overflow-hidden shadow-lg">
            {/* 1️⃣ Main Background Image */}
            <img src={`${basURl}${hosts[index].image}`} alt="Host" className="w-full h-full object-cover rounded-2xl" />

            {/* 2️⃣ Black Shadow Gradient */}
            <div className="absolute bottom-0 w-full h-24 bg-gradient-to-t from-black to-transparent"></div>

            {/* 3️⃣ Footer (Profile & Flag) */}
            <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between">
              {/* Profile Info */}
              <div className="flex items-center space-x-2">
                <img src={girl} alt="Profile" className="w-10 h-10 rounded-full border-2 border-white object-cover" />
                <div>
                  <p
                    className="text-white text-sm font-semibold"
                    style={{ textShadow: "2px 2px 3px rgba(0, 0, 0, 0.7)" }}
                  >
                    {hosts[index].name}
                  </p>
                  <p className="text-gray-300 text-xs"> {hosts[index].userName}</p>
                </div>
              </div>

              {/* Country Flag */}
              <img src={hosts[index].countryFlagImage} alt="Flag" className="w-7 h-7 rounded-full  border-white" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
