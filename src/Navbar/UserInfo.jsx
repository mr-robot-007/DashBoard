import { SiNamecheap } from "react-icons/si";
import { IoIosArrowDown } from "react-icons/io";

function UserInfo() {
  return (
    <div className="flex h-[4rem] items-center justify-between  px-4">
      <div className="flex items-center gap-4">
        <div className="text-[2rem] text-blue-800 bg-white rounded p-[2px]">
          <SiNamecheap
            // style={{
            //   color: "blue",
            //   backgroundColor: "white",
            //   height: "2.5rem",
            //   width: "2.5rem",
            //   borderRadius: "5px",
            // }}
          />
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
