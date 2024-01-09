import { CiWallet } from "react-icons/ci";

function Wallet() {
  return (
    <div className=" bottom-0 left-0 right-auto top-auto m-4 fixed flex items-center gap-2 rounded-md bg-[#2F4353] p-3 ">
      <div className="rounded-md bg-slate-600 p-1 text-[2rem] text-white ">
        <CiWallet />
      </div>
      <div className="flex flex-col">
        <span className="text-sm text-slate-200">Available credits</span>
        <span className="font-medium">222.10</span>
      </div>
    </div>
  );
}

export default Wallet;
