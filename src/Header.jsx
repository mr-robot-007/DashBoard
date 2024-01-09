import { TfiAnnouncement } from "react-icons/tfi";
import { BiSolidDownArrow } from "react-icons/bi";
import { CiCircleQuestion } from "react-icons/ci";
import SearchBar from "./SearchBar";

function Header() {
  return (
    <div className="flex h-[4rem] w-[76rem] items-center justify-between px-[1.5rem] py-[0.75rem] xl:w-auto  ">
      <div className="flex h-[22px] w-[22.5rem] shrink items-center gap-4">
        <span className=" font-medium">Payments</span>
        <span className="flex items-center gap-1 text-sm">
          <CiCircleQuestion />
          How it works
        </span>
      </div>
      <SearchBar />
      <div className="flex w-[22.5rem] shrink">
        <div className=" ml-auto mr-0 flex items-center gap-2">
          <div className="rounded-full bg-slate-200 p-2 text-slate-600 ">
            <TfiAnnouncement />
          </div>
          <div className="rounded-full bg-slate-200 p-2 text-slate-600 ">
            <BiSolidDownArrow />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
