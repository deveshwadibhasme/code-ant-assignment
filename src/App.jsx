import SideBarMenu from "./components/SideBarMenu.jsx";
import { Outlet } from "react-router";
import OpenFormProvider from "./contexts/openForm.jsx";
import { SearchRepoProvider } from "./contexts/searchRepo.jsx";

function App() {
  return (
    <div className="flex flex-col md:flex-row w-screen min-h-screen mx-auto bg-slate-50">
      <OpenFormProvider>
        <SearchRepoProvider>
          <SideBarMenu />
          <Outlet />
        </SearchRepoProvider>
      </OpenFormProvider>
    </div>
  );
}

export default App;
