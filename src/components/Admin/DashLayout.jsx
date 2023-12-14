import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import DashHeader from "./DashHeader";
import Sidebar from "./Sidebar";
// import { useHistory } from "react-router-dom";
import { color } from '../../static/static'



import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Button } from "@mui/material";
import { FiArrowDownLeft, FiArrowLeft, FiArrowRight } from "react-icons/fi";

function Navigation() {
  const location = useLocation();
  const pathSegments = location.pathname.split('/').filter(segment => segment !== '');


  const [activeSegments, setActiveSegments] = useState([]);

  useEffect(() => {
    setActiveSegments(pathSegments);
  }, [pathSegments]);

  const handleSegmentClick = (index) => {
    setActiveSegments(pathSegments.slice(0, index + 1));
  };

  return (
    <div>
      <ul>
        {activeSegments.map((segment, index) => {
          const path = `/${activeSegments.slice(0, index + 1).join('/')}`;
          const name = segment.charAt(0).toUpperCase() + segment.slice(1);
          return (
            <li key={index}>
              <Link to={path} onClick={() => handleSegmentClick(index)}>{name}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}


const DashLayout = () => {
  const navigate = useNavigate()
  const [toogle, settoogle] = useState(false);
  return (
    <div className="flex h-screen">
      <aside
        className={`${color.navbg} hidden xl:block text-white ${toogle ? "w-16" : "w-64"
          }`}
      >
        <Sidebar tog={toogle} />
      </aside>
      <div className="flex h-screen flex-col flex-1 overflow-y-auto bg-white">
        <header className="bg-white/60 backdrop-blur-md py-4 px-6 sticky top-0 z-10 ">
          <DashHeader />
        </header>
        {/* <Navigation/> */}
        <div className="flex gap-3">
          <button
            onClick={() => navigate(-1)}
            className="bg-slate-400 hover:bg-slate-700 hover:duration-500 w-[150px] flex items-center text-white p-3 rounded-md" >
            <FiArrowLeft />  <span className="ml-4" >Retour</span>
          </button>
          <button
            onClick={() => navigate(1)}
            className="bg-slate-400 hover:bg-slate-700 hover:duration-500 w-[150px] flex items-center justify-end text-white p-3 rounded-md" >
             <span className="mr-4" >Avancer</span>  <FiArrowRight />
          </button>
        </div>
        <main className="pt-10 px-7">
          <Outlet />
        </main>
      </div>
    </div> //version ok
  );
};

export default DashLayout;
