import { CiSearch } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";
import { HiArrowsUpDown } from "react-icons/hi2";
import { MdOutlineFileDownload } from "react-icons/md";
function Search() {
  return (
    <div className="mb-[0.75rem] flex justify-between bg-white">
      <div className="flex h-[40px] w-[15.5rem] shrink items-center gap-2  rounded-md border  px-3 text-slate-500">
        <CiSearch />
        <span>Search by order ID...</span>
      </div>
      <div className="flex gap-[0.75rem]">
        <div className="flex h-[2.25rem] items-center gap-2 rounded-md border border-solid  px-[12px] py-[6px]">
          <span className="h-[1.5rem]">Sort</span>

          <HiArrowsUpDown />
        </div>
        <div className="flex h-[2.25rem] items-center gap-2 rounded-md border border-solid  px-[10px] py-[6px] text-xl ">
          <MdOutlineFileDownload />
        </div>
      </div>
    </div>
  );
}

export default Search;
