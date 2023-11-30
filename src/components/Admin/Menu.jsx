import React from "react";
import MenuIcon from "./MenuIcon";

const Menu = ({menu, toog}) => {
  return (
    <div className="duration 200">
      {menu.title && (
        <h1
          className={`mb-2 uppercase text-sm text-gray-400 duration-200 px-[12px] py-[4px] ${
            !toog && ""
          }`}
        >
          {menu.title}
        </h1>
      )}
      <div className="flex flex-col gap-y-1">
        {menu.links.map((el, key) => (
          <div key={key}>
            <MenuIcon data={el} change={toog} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
