const ExpenseList = ({ expenses }) => (
  <div className="bg-white p-4 rounded shadow mb-4">
    <h2 className="font-semibold mb-2">Expense List</h2>
    <ul>
      {expenses.length === 0 && <li className="text-gray-400">No expenses yet.</li>}
      {expenses.map((expense, idx) => (
        <li key={idx} className="flex justify-between border-b py-1">
          <span>{expense.desc}</span>
          <span className="text-red-600 font-bold">${expense.amount.toFixed(2)}</span>
        </li>
      ))}
    </ul>
  </div>
);

export default ExpenseList;