import { GoHome } from "react-icons/go";
import { PiNotepadLight } from "react-icons/pi";
import { AiOutlineAppstore } from "react-icons/ai";
import { FiTruck } from "react-icons/fi";
import { HiOutlineSpeakerWave } from "react-icons/hi2";
import { TbBrandGoogleAnalytics } from "react-icons/tb";
import { MdOutlinePayments } from "react-icons/md";
import { SlCursor } from "react-icons/sl";
import { AiOutlinePercentage } from "react-icons/ai";
import { MdOutlinePeopleOutline } from "react-icons/md";
import { PiPaintRoller } from "react-icons/pi";
import { TbBrandSupabase } from "react-icons/tb";
// const opts = [
//   {
//     icon: GoHome,
//     name: "home",
//   },
// ];

function Options() {
  return (
    <div className="mt-2 flex flex-col justify-center gap-2 px-2 py-2 text-[1.25rem] text-slate-300">
      <div className="flex items-center gap-2 rounded-md  px-3 py-1   ">
        <GoHome />
        <span className="text-[1rem]">Home</span>
      </div>
      <div className="flex items-center gap-2 rounded-md  px-3 py-1 ">
        <PiNotepadLight />
        <span className="text-[1rem]">Orders</span>
      </div>
      <div className="flex items-center gap-2   rounded-md px-3 py-1 ">
        <AiOutlineAppstore />
        <span className="text-[1rem]">Products</span>
      </div>
      <div className="flex items-center gap-2 rounded-md   px-3  py-1 ">
        <FiTruck />
        <span className="text-[1rem]">Delivery</span>
      </div>
      <div className="flex items-center gap-2   rounded-md px-3 py-1 ">
        <HiOutlineSpeakerWave />
        <span className="text-[1rem]">Marketing</span>
      </div>
      <div className="flex items-center gap-2  rounded-md px-3 py-1  ">
        <TbBrandGoogleAnalytics />
        <span className="text-[1rem]">Analytics</span>
      </div>
      <div className="flex items-center gap-2  rounded-md bg-slate-600 px-3  py-1 text-white ">
        <MdOutlinePayments />
        <spa className="text-[1rem]">Payments</spa>
      </div>
      <div className="flex items-center gap-2  rounded-md px-3 py-1  ">
        <SlCursor />
        <span className="text-[1rem]">Tools</span>
      </div>
      <div className="flex items-center gap-2  rounded-md px-3 py-1 ">
        <AiOutlinePercentage />
        <span className="text-[1rem]">Discounts</span>
      </div>
      <div className="flex items-center gap-2   rounded-md px-3 py-1 ">
        <MdOutlinePeopleOutline />
        <span className="text-[1rem]">Audience</span>
      </div>
      <div className="flex items-center gap-2   rounded-md px-3 py-1 ">
        <PiPaintRoller />
        <span className="text-[1rem]">Apperance</span>
      </div>
      <div className="flex items-center gap-2   rounded-md px-3 py-1 ">
        <TbBrandSupabase />
        <span className="text-[1rem]">Plugins</span>
      </div>
    </div>
  );
}

export default Options;
