import React from "react";
// import CircleIcon from "../components/CircleIcon";
import { FiSearch } from "react-icons/fi";
import { IoNotificationsOutline } from "react-icons/io5";
import { LuUsers } from "react-icons/lu";
import { AiOutlineFlag } from "react-icons/ai";
import { Avatar } from "@mui/material";
import CircleIcon from "./CircleIcon";

const DashHeader = () => {
  return (
    <div className="flex w-full justify-between">
      <div>
        <CircleIcon Icon={FiSearch} subtile={"Search"} />
      </div>
      <div className="flex gap-x-4 items-center">
        <CircleIcon Icon={AiOutlineFlag} subtile={"Flag"} />
        <CircleIcon Icon={IoNotificationsOutline} subtile={"Notifications"} />
        <CircleIcon Icon={Avatar} subtile={"Contacts"} />
        {/* <CircleIcon Icon={Avatar} Element /> */}
      </div>
    </div>
  );
};

export default DashHeader;
