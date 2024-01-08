import { SiNamecheap } from "react-icons/si";
import { IoIosArrowDown } from "react-icons/io";

function UserInfo() {
  return (
    <div className="mt-1 flex h-[4rem] items-center  justify-between px-4">
      <div className="flex items-center gap-4">
        <div className="rounded bg-white p-[2px] text-[2rem] text-blue-800">
          <SiNamecheap />
        </div>
        <div className="flex flex-col justify-center text-[1]">
          Nishyan
          <span className="text-[0.8rem] text-slate-400 underline">
            Visit Store
          </span>
        </div>
      </div>
      <IoIosArrowDown />
    </div>
  );
}

export default UserInfo;
