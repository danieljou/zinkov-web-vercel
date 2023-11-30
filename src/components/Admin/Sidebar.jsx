import React from "react";
import { Link } from "react-router-dom";
import { color } from '../../static/static'

import { sideLinks, TeamNanagerLinks } from "../../static/static";
// import Menu from "../components/Menu";
import { RiFile2Line } from "react-icons/ri";
import Menu from "./Menu";
import { useSelector } from "react-redux";
// import { Menu } from "@mui/material";

const Sidebar = ({ tog }) => {
  const user = useSelector((state) => state.auth)
  return (
    <div className="p-4 h-full flex flex-col overflow-y-scroll ">
      <h1 className="text-3xl font-semibold mt-2 px-2">
        <span className={`${color.primary}`}>Dash</span>board
      </h1>
      <div className="flex flex-col gap-y-4 mt-8">

        {
          user.user_infos.is_superuser &&
          (
            <>
              {sideLinks.map((sideLink, key) => (
                <div key={key}>
                  <Menu menu={sideLink} toog={tog} />
                </div>
              ))}
            </>
          )
        }
        {
          user.user_infos.rule === 'Chef de délégation' &&
          (
            <>
              {TeamNanagerLinks.map((sideLink, key) => (
                <div key={key}>
                  <Menu menu={sideLink} toog={tog} />
                </div>
              ))}
            </>
          )
        }

      </div>
      <div className="mt-auto w-full px-1">
        <div className="flex flex-col mb-3">
          <h3 className="mb-1">Besoin d'aide ?</h3>
          <h4 className="text-xs text-gray-400">Consulter notre documentation</h4>
        </div>
        <Link className="bg-[#6366F1] items-center gap-x-2 w-full flex justify-center px-3 py-2.5 rounded-lg">
          <span className="text-lg"><RiFile2Line /></span>
          <span>Documentation</span>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
