import Overview from "./Overview";
import Transactions from "../Transactions/Transactions";

function MainContainer() {
  return (
    <div className="flex flex-col gap-8 bg-slate-100 p-[2rem] ">
      <Overview />
      <Transactions />
    </div>
  );
}

export default MainContainer;
