import circle from '../assets/icon-pack/circle.png'
import stack from '../assets/icon-pack/stack.svg'
const RepositoryList = ({ props }) => {
  const { repoName, visibility, majorCode, size , htmlUrl } = props;

  return (
    <div className="w-full min-h-10 p-4 border-t-1 border-b-1 border-slate-400">
      <div className="w-full flex gap-3 mb-2">
        <a href={htmlUrl} className="text-xl font-semibold">{repoName}</a>
        <span className="w-16 h-7 text-sm text-blue-600 flex-center rounded-full border-1 border-blue-400 bg-blue-200">
          {visibility ? "Public" : "Private"}
        </span>
      </div>
      <div className="flex w-full gap-4 items-center h-full">
        <span className="flex-center gap-2">{majorCode}<img className="align-middle" src={circle} alt="circle"/> </span>
        <span className="flex-center gap-2"><img className="align-middle" src={stack} alt="stack"/>{size} </span>
      </div>
    </div>
  );
};

export default RepositoryList;
