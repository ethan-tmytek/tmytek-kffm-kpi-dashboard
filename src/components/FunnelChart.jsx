import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  BarController,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, BarElement, BarController, Tooltip, Legend);

const data = {
  labels: ['提案機會', '核准專案', '研發原型', '採購訂單', '試產批次', '開立發票'],
  datasets: [
    {
      label: 'Widget 流動數量 (模擬)',
      data: [120, 45, 38, 150, 25, 20],
      backgroundColor: [
        'rgba(217, 119, 6, 0.8)',
        'rgba(217, 119, 6, 0.7)',
        'rgba(217, 119, 6, 0.6)',
        'rgba(217, 119, 6, 0.5)',
        'rgba(217, 119, 6, 0.4)',
        'rgba(217, 119, 6, 0.3)',
      ],
      borderColor: '#d97706',
      borderWidth: 1,
      borderRadius: 4,
    },
  ],
};

const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: { display: false },
    tooltip: {
      backgroundColor: 'rgba(28, 25, 23, 0.9)',
      titleFont: { size: 14 },
      bodyFont: { size: 14 },
      padding: 12,
    },
  },
  scales: {
    y: {
      beginAtZero: true,
      grid: { color: '#e7e5e4' },
    },
    x: {
      grid: { display: false },
    },
  },
};

export default function FunnelChart() {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-stone-200">
      <h3 className="text-xl font-bold text-stone-800 mb-2">Widget 漏斗：物件流動衰減分析</h3>
      <p className="text-sm text-stone-500 mb-6">展示從「潛在機會」到「開立發票」各階段 Widget 數量的轉化狀況。驟降的階梯代表潛在的流程斷層。</p>
      <div className="chart-container">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
}
