import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const MenuIcon = ({ data, change }) => {
  const [active, setactive] = useState(false);
  return (
    <NavLink
      className={`flex items-center ${active && "bg-gray-700/40"
        } gap-x-3 px-[12px] py-2 duration-300 hover:bg-gray-700/40 rounded overflow-hidden`}
      to={data.url}
    // style={({ isActive }) => {
    //   setactive(isActive);
    //   return isActive
    //     ? {
    //       color: "#fff",
    //     }
    //     : { color: "#545e6f" };
    // }}
    >
      <span className={`text-gray-500 text-2xl ${active && "text-[#6366F1]"}`}>
        {<data.icon />}
      </span>
      <div
        className={`text-[14px] font-medium text-gray-400 textactive origin-left duration-200 ${active && "text-gray-200"
          }`}
      >
        {data.liens}
      </div>
      {active && (
        <div className="w-3 h-3 ml-auto animate-pulse rounded-full bg-[#6366F1]/40 flex items-center justify-center">
          <div className="w-1 h-1 animate-bounce rounded-full bg-[#6366F1]"></div>
        </div>
      )}
    </NavLink>
  );
};

export default MenuIcon;
