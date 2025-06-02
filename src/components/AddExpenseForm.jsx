import { useState } from 'react';

const AddExpenseForm = ({ onAdd }) => {
  const [desc, setDesc] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!desc || !amount) return;
    onAdd({ desc, amount: parseFloat(amount) });
    setDesc('');
    setAmount('');
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow mb-4">
      <h2 className="font-semibold mb-2">Add Expense</h2>
      <input
        type="text"
        placeholder="Description"
        value={desc}
        onChange={e => setDesc(e.target.value)}
        className="border p-2 mr-2 mb-2 w-full"
      />
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={e => setAmount(e.target.value)}
        className="border p-2 mr-2 mb-2 w-full"
      />
      <button type="submit" className="bg-red-500 text-white px-4 py-2 rounded">Add</button>
    </form>
  );
};

export default AddExpenseForm;