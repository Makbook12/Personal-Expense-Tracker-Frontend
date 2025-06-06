const ExpenseList = ({ expenses, onDelete }) => (
  <div className="bg-white p-4 rounded shadow mb-4">
    <h2 className="font-semibold mb-2">Expense List</h2>
    <ul>
      {expenses.length === 0 && <li className="text-gray-400">No expenses yet.</li>}
      {expenses.map((expense, idx) => (
        <li key={idx} className="flex justify-between border-b py-1 items-center">
          <span>{expense.desc}</span>
          <span className="text-red-600 font-bold">₹{expense.amount.toFixed(2)}</span>
          <button
            className="ml-2 text-sm text-white bg-red-500 px-2 py-1 rounded hover:bg-red-600"
            onClick={() => onDelete(expense._id || idx)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  </div>
);

export default ExpenseList;