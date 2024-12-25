import React, { useState } from "react";

const PushRepoForm = ({ openForm, setNewRepo }) => {
  const [allInput, setAllInput] = useState({
    id: crypto.randomUUID(),
    repoName: "",
    visibility: false,
    majorCode: "",
    size: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setTimeout(openForm, 500);
    setNewRepo((preState) => [...preState, allInput]);
  };

  return (
    <div className="absolute  top-0 left-0 bg-white w-full h-full md:min-h-[550px] z-10 p-2 shadow-sm shadow-black">
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded w-full h-screen max-w-md absolute top-3 "
      >
        <marquee behavior="smoooth" direction="left">
          [DEMO FORM] This Website is not linked with any database therefore i
          accessing the some backend values manually.
        </marquee>
        <h2 className="text-2xl font-bold text-gray-700 mb-4">
          Repository Form
        </h2>

        <div className="mb-4">
          <label className="block text-gray-600 mb-2" htmlFor="repoName">
            Repository Name
          </label>
          <input
            type="text"
            id="repoName"
            name="repoName"
            // value={""}
            onChange={(e) =>
              setAllInput((preState) => ({
                ...preState,
                repoName: e.target.value,
              }))
            }
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter repository name"
            required
          />
        </div>

        <div className="mb-4 flex items-center">
          <input
            type="checkbox"
            id="visibility"
            name="visibility"
            onChange={(e) =>
              setAllInput((preState) => ({
                ...preState,
                visibility: e.target.checked,
              }))
            }
            className="mr-2"
          />
          <label htmlFor="visibility" className="text-gray-600">
            Make Repository Public
          </label>
        </div>

        <div className="mb-4">
          <label className="block text-gray-600 mb-2" htmlFor="majorCode">
            Major Code
          </label>
          <input
            type="text"
            id="majorCode"
            name="majorCode"
            // value={""}
            onChange={(e) =>
              setAllInput((preState) => ({
                ...preState,
                majorCode: e.target.value,
              }))
            }
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          ></input>
        </div>

        <div className="mb-4">
          <label className="block text-gray-600 mb-2" htmlFor="size">
            Repository Size (KB)
          </label>
          <input
            type="number"
            id="size"
            name="size"
            // value={""}
            onChange={(e) =>
              setAllInput((preState) => ({
                ...preState,
                size: e.target.value,
              }))
            }
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter repository size"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-200 mb-2"
        >
          Add Repository
        </button>
        <button
          type="reset"
          onClick={()=>setTimeout(openForm, 500)}
          className="w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition duration-200"
        >
          Cancle
        </button>
      </form>
      <div>Here You can upload Repository</div>
    </div>
  );
};

export default PushRepoForm;
