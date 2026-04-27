import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js';
import { Chart } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Filler,
  Tooltip,
  Legend
);

const data = {
  labels: ['1月', '2月', '3月', '4月', '5月', '6月'],
  datasets: [
    {
      type: 'line',
      label: 'WIP Priority (%)',
      data: [85, 82, 70, 55, 60, 75],
      borderColor: '#0d9488',
      backgroundColor: 'rgba(13, 148, 136, 0.1)',
      borderWidth: 3,
      tension: 0.3,
      fill: true,
      yAxisID: 'y',
    },
    {
      type: 'bar',
      label: '原型開發週期 (天)',
      data: [45, 48, 65, 85, 75, 55],
      backgroundColor: 'rgba(68, 64, 60, 0.2)',
      borderRadius: 4,
      yAxisID: 'y1',
    },
  ],
};

const options = {
  responsive: true,
  maintainAspectRatio: false,
  interaction: { mode: 'index', intersect: false },
  plugins: {
    legend: { position: 'top' },
    tooltip: {
      backgroundColor: 'rgba(28, 25, 23, 0.9)',
      padding: 12,
    },
  },
  scales: {
    y: {
      type: 'linear',
      display: true,
      position: 'left',
      title: { display: true, text: 'Priority (%)' },
      grid: { color: '#e7e5e4' },
      min: 0,
      max: 100,
    },
    y1: {
      type: 'linear',
      display: true,
      position: 'right',
      title: { display: true, text: '週期 (Days)' },
      grid: { display: false },
      min: 0,
    },
    x: {
      grid: { display: false },
    },
  },
};

export default function PriorityChart() {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-stone-200">
      <h3 className="text-xl font-bold text-stone-800 mb-2">戰略引擎：優先級 vs. 研發週期</h3>
      <p className="text-sm text-stone-500 mb-6">評估 Portfolio Committee 的決策品質。當 WIP Priority (優先專案佔比) 下降時，原型開發週期通常會因資源分散而拉長。</p>
      <div className="chart-container">
        <Chart type="bar" data={data} options={options} />
      </div>
    </div>
  );
}
