import { IoIosArrowDown } from "react-icons/io";

function Overview() {
  return (
    <div className="flex h-[11.125rem] flex-col justify-between ">
      <div className="flex h-[2.25rem] items-center justify-between">
        <span className="text-[1.5rem] text-lg">Overview</span>
        <div className="flex h-[2.25rem] items-center gap-2 rounded-md border-2 border-solid bg-white px-[12px] py-[6px]">
          <span className="h-[1.5rem]">Last Month</span>
          <div>
            <IoIosArrowDown />
          </div>
        </div>
      </div>
      <div className="flex h-[7.375rem] justify-between gap-[1.25rem] ">
        <div className="flex w-[34.75rem] grow flex-col justify-between rounded-md bg-white p-[1.25rem]">
          <span className="h-[1.5rem] ">Online Orders</span>
          <span className="h-[2.375rem] text-3xl font-semibold">231</span>
        </div>
        <div className="flex w-[34.75rem] grow flex-col justify-between rounded-md bg-white p-[1.25rem]">
          <span className="h-[1.5rem] ">Amount Recieved</span>
          <span className="h-[2.375rem] text-3xl font-semibold">
            ₹23,92,312.19
          </span>
        </div>
      </div>
    </div>
  );
}

export default Overview;
