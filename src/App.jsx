import SideBarMenu from "./components/SideBarMenu.jsx";
import SignInPage from "./pages/SignInPage";
import { useLocation } from "react-router-dom";
import { Outlet } from "react-router";
import { useState } from "react";

function App() {

  const [show, setShow] = useState();

  return (
    <div className="flex flex-col md:flex-row w-screen min-h-screen mx-auto bg-slate-50">
      <SideBarMenu />
      <Outlet />
    </div>
  );
}

export default App;
