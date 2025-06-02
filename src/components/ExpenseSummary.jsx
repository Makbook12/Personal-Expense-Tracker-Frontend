import React, { useState } from 'react';

const ExpenseSummary = () => {
  const [summary, setSummary] = useState('');

  return (
    <div className="mb-6 p-4 bg-blue-50 rounded shadow">
      <h2 className="text-lg font-semibold mb-2">Expense Summary</h2>
      <input
        type="text"
        placeholder="Enter summary info"
        value={summary}
        onChange={e => setSummary(e.target.value)}
        className="border p-2 rounded w-full"
      />
      <div className="mt-2 text-gray-700">Summary: {summary}</div>
    </div>
  );
};

export default ExpenseSummary;