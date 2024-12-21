import { Link, NavLink, useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import logo from "../assets/logo-pack/logo-small.svg";
import svg from "../assets/logo-pack/CodeAntAI.svg";
import logIcon from "../assets/icon-pack/log-out.svg";
import callIcon from "../assets/icon-pack/call-icon.svg";
import MenuData from "../assets/menu/Menu.js";
import SVG from "./SVG.jsx";
import HamMenu from "../assets/icon-pack/bars.svg";
import Cross from "../assets/icon-pack/cross.svg";

const SideBarMenu = () => {
  const parm = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    if (window.location.reload) {
      navigate(`/${parm.signin}/${parm.id}/`, { state: `${parm.id}` });
    }
  }, [1]);
  window.history.forward();

  const [click, setClicked] = useState(false);
  const [menu, setMenu] = useState(MenuData);

  const handleClick = (id) => {
    setMenu((prevOptions) =>
      prevOptions.map((option) =>
        option.id === id
          ? { ...option, active: !option.active }
          : { ...option, active: false }
      )
    );
  };

  const handleHamMenu = () =>{
    setClicked(!click)
  }

  return (
    <div className="max-w-2xl md:max-w-60 relative md:fixed flex flex-row md:flex-col justify-between items-center py-6 px-4 pb-0 md:pb-6 bg-white z-10">
      <div className="flex-center w-[40%] md:w-full gap-2">
        <img src={logo} alt="logo" />
        <img className="h-4 md:h-6" src={svg} alt="" />
      </div>
      <div className={`max-w-xl md:max-w-60 w-full absolute ${ !click ? 'bottom-full' : 'top-16'} left-0 bg-white md:relative flex gap-2 flex-col justify-center z-0 transition-all duration-200`}>
        <select className="my-0 md:my-4 p-2 w-full border-1 border-slate-300">
          <option className="">{parm.id}</option>
        </select>
        <div className="w-full flex flex-col h-full md:h-[440px] bg-white relative ">
          {menu.map((op) => (
            <NavLink
              key={op.id}
              to={`/${parm.signin}/${parm.id}/${op.link}`}
              state={parm.id}
            >
              <div
                onClick={() => handleClick(op.id)}
                className={`h-10 w-full md:max-w-60 px-3 py-2 rounded-xl flex-center justify-start gap-3 ${
                  op.active
                    ? "bg-blue-800 text-white"
                    : "bg-transparent text-black"
                }`}
              >
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
      <div onClick={handleHamMenu} className="block md:hidden">
        <img src={click ? Cross : HamMenu} alt="logo" />
      </div>
    </div>
  );
};

export default SideBarMenu;
