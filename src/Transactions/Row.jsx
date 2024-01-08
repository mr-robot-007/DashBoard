function Row() {
  return (
    <div className="flex flex-col  ">
      <div className="flex  h-[3rem] items-center   px-[0.75rem] ">
        <tr className=" flex grow gap-[40px] py-[10px] text-sm font-regular">
          <td className="flex h-[20px] w-[15.375rem] grow items-center text-left text-blue-400">
            #281209
          </td>
          <td className=" w-[15.375rem] grow items-center text-left">
            7 July,2023
          </td>
          <td className=" w-[15.375rem] grow items-center text-right ">
            ₹1728.23
          </td>
          <td className="relative flex w-[15.375rem] grow items-center text-right ">
            <div className="absolute right-0 flex items-center gap-1">₹22</div>
          </td>
        </tr>
      </div>
      <div className="mx-[0.75rem] flex h-[1px] w-[68.75rem] 2xl:w-[98.5%] items-center bg-slate-300"></div>
    </div>
  );
}

export default Row;
