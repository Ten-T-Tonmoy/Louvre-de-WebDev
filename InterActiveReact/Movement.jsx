import "./index.css";
export default function Movement() {
  return (
    <>
      <div className="bg-black">
        <div className="flex-wrap flex justify-center items-center p-10 gap-4">
          <button
            className="bg-yellow-500 text-white px-4 py-2 rounded
           transform scale-100 hover:scale-125
            transition duration-300 ease-in-out
             p-4  "
          >
            Hover me
          </button>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded
           transform scale-100 hover:scale-110
            transition duration-300 ease-in-out
             p-4  "
          >
            Hover me
          </button>
          <button
            className="bg-pink-500 text-white px-4 py-2 rounded
           transform scale-100  hover:scale-110
            transition duration-300 ease-in-out
             p-4  "
          >
            Hover me
          </button>
          <button
            className="bg-violet-500 text-white px-4 py-2 rounded
           transform scale-100 hover:scale-110
            transition duration-300 ease-in-out
             p-4  "
          >
            Hover me
          </button>
        </div>
        <p
          className="text-center text-[100px]
       text-green-400 font-bold "
        >
          Hi Nig!
        </p>
        <div className="flex flex-wrap justify-center items-center p-10">
          <div
            className="bg-red-600 h-60 p-10 rounded-lg m-[20px]
               font-mono border-8 border-red-400
               font-bold overflow-hidden transition-all hover:scale-105"
          >
            This is box 1
          </div>
          <div
            className="bg-cyan-600 h-60 p-10 rounded-lg m-[20px]
               font-mono border-8 border-cyan-400
               font-bold overflow-hidden transition-all hover:scale-105"
          >
            This is box 2
          </div>
          <div
            className="bg-orange-600 h-60 p-10 rounded-lg m-[20px]
               font-mono border-8 border-orange-400
               font-bold overflow-hidden transition-all hover:scale-105"
          >
            This is box 3
          </div>
          <div
            className="bg-purple-600 h-60 p-10 rounded-lg m-[20px]
               font-mono border-8 border-purple-400
               font-bold overflow-hidden transition-all hover:scale-105"
          >
            This is box 4
          </div>
        </div>
      </div>
    </>
  );
}
