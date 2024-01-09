import Nav from "./Nav";
import Wallet from "./Wallet";

function Navbar() {
  return (
    <div className="  row-span-full  flex w-[14rem] flex-col justify-between overflow-y-hidden   bg-[#13233d]   text-white ">
      <div className="fixed h-full  w-[14rem] ">
          <Nav />
          <Wallet />
      </div>
    </div>
  );
}

export default Navbar;
