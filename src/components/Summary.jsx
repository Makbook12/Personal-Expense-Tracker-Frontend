const Summary = ({ totalIncome, totalExpenses }) => (
  <div className="bg-white p-4 rounded shadow mb-4">
    <h2 className="font-semibold mb-2">Summary</h2>
    <div>Total Income: <span className="text-green-600 font-bold">₹{totalIncome.toFixed(2)}</span></div>
    <div>Total Expenses: <span className="text-red-600 font-bold">₹{totalExpenses.toFixed(2)}</span></div>
    <div>Balance: <span className="font-bold">₹{(totalIncome - totalExpenses).toFixed(2)}</span></div>
  </div>
);

export default Summary;