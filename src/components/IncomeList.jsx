const IncomeList = ({ incomes }) => (
  <div className="bg-white p-4 rounded shadow mb-4">
    <h2 className="font-semibold mb-2">Income List</h2>
    <ul>
      {incomes.length === 0 && <li className="text-gray-400">No incomes yet.</li>}
      {incomes.map((income, idx) => (
        <li key={idx} className="flex justify-between border-b py-1">
          <span>{income.desc}</span>
          <span className="text-green-600 font-bold">₹{income.amount.toFixed(2)}</span>
        </li>
      ))}
    </ul>
  </div>
);

export default IncomeList;