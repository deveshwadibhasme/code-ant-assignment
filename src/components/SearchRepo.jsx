import { useContext } from "react";
import Search from "../assets/icon-pack/search.svg";
import { SearchRepoContext } from "../contexts/searchRepo";


const SearchRepo = () => {
  const { updateSearchTerm } = useContext(SearchRepoContext);

  const searchHandler = (e) => {
    updateSearchTerm(e.target.value);
  };

  return (
    <div className="max-w-64 md:max-w-96 w-full min-h-8 border-1 border-slate-400 rounded-lg flex px-4">
      <img src={Search} alt="" />
      <input
        onInput={searchHandler}
        className="w-full h-full p-3 rounded-lg outline-none"
        type="text"
        placeholder="Search Repositories"
        title="disabled"
      />
    </div>
  );
};

export default SearchRepo;
