import Refresh from '../assets/icon-pack/refresh.svg'
import Plus from '../assets/icon-pack/plus.svg'

const AddRepo = ({openForm}) => {
    return (
        <div className='w-full flex flex-col md:flex-row justify-between gap-y-4'>
            <h2 className="font-semibold text-2xl">
                Repository
                <span className="block text-sm font-normal text-slate-500">__ total repositories</span>
            </h2>
            <div className='flex justify-between w-full max-w-72 gap-2'>
                <button
                    className="max-w-36 px-3 w-full h-9 border-1 border-slate-400 text-black font-semibold text-sm rounded-lg hover:bg-green-300 flex-center gap-2">
                    <img className="h-5" src={Refresh} alt="refresh"/>
                    Refresh All
                </button>
                <button
                    onClick={openForm}
                    className="max-w-36 px-3 w-full h-9 bg-blue-500 text-white font-semibold text-sm rounded-lg  hover:bg-slate-400 hover:text-black border-1 border-blue-800 flex-center">
                    <img className="h-4" src={Plus} alt="&#x2B;"/>
                    Add Repository
                </button>
            </div>
        </div>
    )
}

export default AddRepo