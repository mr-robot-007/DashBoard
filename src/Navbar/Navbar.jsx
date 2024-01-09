import Nav from "./Nav";
import Wallet from "./Wallet";

function Navbar() {
  return (
    <div className="sticky  row-span-full  h-full max-h-[94.2rem] flex w-[14rem] flex-col justify-between overflow-y-hidden   bg-[#13233d]   text-white ">
      <div className="  w-[14rem] sm:fixed relative h-full ">
        <Nav />
        <Wallet />
      </div>
    </div>
  );
}

export default Navbar;
