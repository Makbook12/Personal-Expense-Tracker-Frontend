import { useState } from 'react';
import AddIncomeForm from './AddIncomeForm';
import AddExpenseForm from './AddExpenseForm';
import IncomeList from './IncomeList';
import ExpenseList from './ExpenseList';
import Summary from './Summary';
import Charts from './Charts';

const Dashboard = () => {
  const [incomes, setIncomes] = useState([]);
  const [expenses, setExpenses] = useState([]);

  const addIncome = (income) => setIncomes([...incomes, income]);
  const addExpense = (expense) => setExpenses([...expenses, expense]);

  const totalIncome = incomes.reduce((sum, i) => sum + Number(i.amount), 0);
  const totalExpenses = expenses.reduce((sum, e) => sum + Number(e.amount), 0);

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <Summary totalIncome={totalIncome} totalExpenses={totalExpenses} />
          <AddIncomeForm onAdd={addIncome} />
          <IncomeList incomes={incomes} />
        </div>
        <div>
          <AddExpenseForm onAdd={addExpense} />
          <ExpenseList expenses={expenses} />
        </div>
      </div>
      <div className="max-w-4xl mx-auto mt-8">
        <Charts totalIncome={totalIncome} totalExpenses={totalExpenses} />
      </div>
    </div>
  );
};

export default Dashboard;