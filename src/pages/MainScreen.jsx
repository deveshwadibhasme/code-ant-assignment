import RepositoryList from "../components/RepositoryList";
import Header from "../components/Header";
import RepoData from "../assets/menu/repository.js";
import PushRepoForm from "../components/PushRepoForm.jsx";
import { useState } from "react";

const MainScreen = () => {
  const [repoForm, setRepo] = useState(false);
  const [repoData, setRepoData] = useState(RepoData);


  const openForm = () => {
    setRepo(!repoForm);
  };

  return (
    <>
      <div className="w-full ml-0 md:ml-[260px] h-full  flex-center p-0 md:p-6 ">
        <div className="w-full shadow-md shadow-[rgba(10,13,18,0.05)] h-full min-h-[550px] bg-white rounded-xl flex flex-col relative overflow-hidden">
          {repoForm ? ( 
            <PushRepoForm
              key={"1"}
              openForm={openForm}
              setNewRepo={setRepoData}
            />
          ) : (
            <>
              <Header openForm={openForm} />
              <div className="flex flex-col-reverse">
                {repoData.map((repo) => {
                  return <RepositoryList key={repo.id} props={repo} />;
                })}
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default MainScreen;
