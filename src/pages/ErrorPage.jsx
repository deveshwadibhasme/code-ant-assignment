import React from "react";

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-9">
      <h1 className="font-bold text-red-800 text-3xl">Error Encountered</h1>
      <button
        onClick={() => window.history.back(1)}
        className="bg-blue-700 p-2 font-semibold px-3 rounded-lg text-white"
      >
        Return To Previos
      </button>
    </div>
  );
};

export default ErrorPage;
