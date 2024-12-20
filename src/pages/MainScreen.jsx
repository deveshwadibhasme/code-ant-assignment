import RepositoryList from "../components/RepositoryList";
import Header from "../components/Header";
import RepoData from "../assets/menu/repository.js";

const MainScreen = () => {
  

  return (
    <>
      <div className="w-full ml-0 md:ml-[260px] h-full md:min-h-screen flex-center p-0 md:p-6">
        <div className="w-full shadow-md shadow-[rgba(10,13,18,0.05)] h-full md:min-h-[550px] bg-white rounded-xl flex flex-col">
          <Header />
          <div className="flex flex-col-reverse">
            {RepoData.map((repo) => {
              return <RepositoryList key={repo.id} props={repo} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default MainScreen;
