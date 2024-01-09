import React from "react";
import Search from "./Search";
import { CiCircleInfo } from "react-icons/ci";
import Row from "./Row";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Footer from "./Footer";
import { BiSolidDownArrow } from "react-icons/bi";
function Table() {
  return (
    <div className="h-[70rem] bg-white p-[0.75rem]">
      <Search />
      <div>
        <div className="rounded-md bg-slate-200 px-[0.75rem] ">
          <th className=" flex gap-[40px] py-[10px] text-sm font-medium ">
            <td className="w-[15.375rem] grow text-left ">Order Id</td>
            <td className="flex w-[15.375rem] grow  items-center  text-left  ">
              Order Date{" "}
              <div className="p-1">
                <BiSolidDownArrow />
              </div>
            </td>
            <td className="relative w-[15.375rem] grow text-right ">
              Order amount
            </td>
            <td className="relative w-[15.375rem] grow text-right ">
              <div className="absolute right-0 flex items-center gap-1">
                Transaction Fees <CiCircleInfo />
              </div>
            </td>
          </th>
        </div>
        {Array.from({ length: 19 }, (_, i) => i + 1).map((num, i) => (
          <Row key={i} />
        ))}
        <Footer />
      </div>
    </div>
  );
}

export default Table;

// Array.from({length:20},(_,i)=> i+1).map((num)=>(<option value = {num}>{num}</option>))
