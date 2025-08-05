import { FaPlay, FaPlus, FaThumbsUp } from "react-icons/fa";

export default function BotonCirculo() {
  return (
    <div className="flex gap-2 items-center p-1">
      <button className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white flex items-center justify-center">
        <FaPlay className="text-black text-sm sm:text-base" />
      </button>

      <button className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-white flex items-center justify-center text-white hover:bg-white/20">
        <FaPlus className="text-sm sm:text-base" />
      </button>

      <button className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-white flex items-center justify-center text-white hover:bg-white/20">
        <FaThumbsUp className="text-sm sm:text-base" />
      </button>
    </div>
  );
}
