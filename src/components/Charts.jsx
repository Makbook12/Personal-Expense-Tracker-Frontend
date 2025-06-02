import { Pie, Bar } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const Charts = ({ totalIncome, totalExpenses }) => {
  const data = {
    labels: ['Income', 'Expenses'],
    datasets: [
      {
        data: [totalIncome, totalExpenses],
        backgroundColor: ['#4ade80', '#f87171'],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="font-semibold mb-2">Income vs Expenses</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
        <div>
          <h3 className="text-center font-semibold mb-2">Pie Chart</h3>
          <Pie data={data} />
        </div>
        <div>
          <h3 className="text-center font-semibold mb-2">Bar Chart</h3>
          <Bar data={data} />
        </div>
      </div>
    </div>
  );
};

export default Charts;