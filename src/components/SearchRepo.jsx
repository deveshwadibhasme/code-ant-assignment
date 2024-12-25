import Search from "../assets/icon-pack/search.svg";

const SearchRepo = ({ value }) => {

  return (
    <div className="max-w-64 md:max-w-96 w-full min-h-8 border-1 border-slate-400 rounded-lg flex px-4">
      <img src={Search} alt="" />
      <input
        className="w-full h-full p-3 rounded-lg outline-none"
        type="text"
        placeholder="Search Repositories"
        title="disabled"
      />
    </div>
  );
};

export default SearchRepo;
