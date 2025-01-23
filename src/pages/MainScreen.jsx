import RepositoryList from "../components/RepositoryList";
import Header from "../components/Header";
import RepoData from "../assets/menu/repository.js";
import PushRepoForm from "../components/PushRepoForm.jsx";
import { useContext, useState } from "react";
import { OpenFormContext } from "../contexts/openForm";
import { SearchRepoContext } from "../contexts/searchRepo";

const MainScreen = () => {
  const [repoData, setRepoData] = useState(RepoData);

  const [isOpen] = useContext(OpenFormContext);
  const { searchTerm } = useContext(SearchRepoContext);


  const filterRepo = repoData.filter((repo) =>
    repo.repoName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <div className="w-full ml-0 md:ml-[260px] h-full  flex-center p-0 md:p-6 ">
        <div className="w-full shadow-md shadow-[rgba(10,13,18,0.05)] h-full min-h-[550px] bg-white rounded-xl flex flex-col relative overflow-hidden">
          {isOpen ? ( 
            <PushRepoForm
              key={"1"}
              setNewRepo={setRepoData}
            />
          ) : (
            <>
              <Header />
              <div className="flex flex-col-reverse">
               {filterRepo.length === 0 ? <div>Nothing to See Here</div> : filterRepo.map((repo) => {
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
