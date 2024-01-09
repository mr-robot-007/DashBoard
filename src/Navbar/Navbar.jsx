import Nav from "./Nav";
import Wallet from "./Wallet";

function Navbar() {
  return (
    <div className=" row-span-full flex flex-col  justify-between bg-[#13233d] text-white   overflow-y-hidden   w-[14rem] ">
      <Nav />
      <Wallet />
    </div>
  );
}

export default Navbar;
