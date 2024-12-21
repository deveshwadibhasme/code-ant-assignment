import { Link, NavLink, useParams } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/logo-pack/logo-small.svg";
import svg from "../assets/logo-pack/CodeAntAI.svg";
import logIcon from "../assets/icon-pack/log-out.svg";
import callIcon from "../assets/icon-pack/call-icon.svg";
import MenuData from "../assets/menu/Menu.js";
import SVG from "./SVG.jsx";

const SideBarMenu = () => {
  const parm = useParams();

  const [menu, setMenu] = useState(MenuData);

  const handleClick = (id) => {
    setMenu((prevOptions) =>
      prevOptions.map((option) =>
        option.id === id
          ? { ...option, active: true }
          : { ...option, active: false }
      )
    );
  };

  return (
    <div className="max-w-2xl md:max-w-60 flex flex-col justify-start md:justify-between py-6 px-4 bg-white">
      <div className="max-w-60 w-full flex gap-2 flex-col justify-center">
        <div className="flex-center w-full gap-2">
          <img src={logo} alt="logo" />
          <img className="h-4 md:h-6" src={svg} alt="" />
        </div>
        <select className="my-4 p-2 overflow-x-clip max-w-60 md:w-full" >
          <option className="">{parm.id}</option>
        </select>
        <div className="w-full min-h-56 flex flex-col h-full md:h-[440px] bg-white relative ">
          {menu.map((op) => (
            <NavLink
              key={op.id}
              to={`/${parm.signin}/${parm.id}/${op.link}`}
              state={parm.id}
            >
              <div
                onClick={() => handleClick(op.id)}
                className={`h-10 max-w-60 w-full px-3 py-2 rounded-xl flex-center justify-start gap-3 ${
                  op.active ? "bg-blue-800 text-white":"bg-transparent text-black"}`}>
                <SVG path={op.path} color={op.active ? "#fff" : "#414651"} />
                <p>{op.title}</p>
              </div>
            </NavLink>
          ))}
        <div className="static md:absolute md:bottom-2 w-full">
          <Link
            to={`/${parm.signin}/${parm.id}/support`}
            state={parm.id}
            className="h-10 max-w-52 w-full px-4 flex-center justify-start gap-3 rounded-lg hover:bg-green-400 hover:text-white"
          >
            <img src={callIcon} alt="call" />
            <p>Support</p>
          </Link>
          <Link
            to={"/"}
            className="h-10 max-w-52 w-full flex-center justify-start gap-3 px-4 hover:bg-red-400 hover:text-white rounded-lg"
          >
            <img src={logIcon} alt="" />
            <p>Log Out</p>
          </Link>
        </div>
        </div>
      </div>
    </div>
  );
};

export default SideBarMenu;
