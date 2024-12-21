import React from "react";
import Header from "../components/Header";


const MainScreen = () => {
  return (
    <div className="w-full min-h-screen flex-center p-6">
      <div className="w-full shadow-md shadow-[rgba(10,13,18,0.05)] min-h-[550px] bg-white rounded-xl flex flex-col">
        <Header/>
        
      </div>
    </div>
  );
};

export default MainScreen;
