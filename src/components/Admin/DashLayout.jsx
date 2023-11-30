import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import DashHeader from "./DashHeader";
import Sidebar from "./Sidebar";
import { color } from '../../static/static'

const DashLayout = () => {
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
        <main className="pt-10 px-7">
          <Outlet />
        </main>
      </div>
    </div> //version ok
  );
};

export default DashLayout;
