import Table from "./Table";
import TransactionsHeader from "./TransactionsHeader";

function Transactions() {
  return (
    <div className="flex flex-col">
      <TransactionsHeader />
      <Table />
    </div>
  );
}

export default Transactions;
