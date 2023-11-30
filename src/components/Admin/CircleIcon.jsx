import { Tooltip } from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../slices/AuthSlice";

const CircleIcon = ({ Icon, subtile, Element }) => {
  const [isActive, setisActive] = useState(false);
  const dispatch = useDispatch()
  const handleLogout = () => {
    dispatch(logout())
    localStorage.clear()
    window.location.href = '/login'
  }
  return (
    <>
      <div className="relative flex">
        {!Element && (
          <div
            className={`peer rounded-full w-8 h-8 hover:bg-gray-50 flex items-center justify-center cursor-pointer`}
            onClick={() => setisActive(!isActive)}
          >
            {<Icon className="text-2xl text-gray-600" />}
          </div>
        )}
        {/* <Tooltip title="Add" placement="bottom" sx={{backgroundColor: "red"}}>
          hello
        </Tooltip> */}
        {Element && (
          <div
            className={`peer rounded-full ring-4 ring-gray-100 overflow-hidden w-8 h-8 hover:bg-gray-50 bg-balck flex items-center justify-center cursor-pointer`}
          >
            <Icon className="text-sm ">H</Icon>
          </div>
        )}
        {subtile && (
          <div
            className={`translate-x-[-50%] z-20 scale-90 opacity-0 center peer-hover:opacity-100 peer-hover:scale-100 peer-hover:block left-[50%] duration-200 absolute text-xs font-medium bg-slate-700 text-white px-2 py-1.5 delay-75 top-14 rounded-lg items-center`}
          >
            {subtile}
          </div>
        )}
        {isActive && (
          <div
            className={`absolute top-10 z-20 right-0 bg-white rounded-lg shadow-xl shadow-black/5`}
          >
            <ul>
              <li className="pr-20 py-2 pl-5 hover:bg-gray-100 duration-200">
                English
              </li>
              <li className="pr-20 py-2 pl-5 hover:bg-gray-100 duration-200">
                German
              </li>
              <li className="pr-20 py-2 pl-5 hover:bg-gray-100 duration-200">
                <p onClick={handleLogout} > Logout </p>
              </li>
            </ul>
          </div>
        )}
      </div>
      {isActive && (
        <div
          className="absolute z-10 top-0 bottom-0 left-0 right-0 h-screen"
          onClick={() => setisActive(false)}
        ></div>
      )}
    </>
  );
};

export default CircleIcon;
