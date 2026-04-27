import FunnelChart from './FunnelChart';
import PriorityChart from './PriorityChart';

export default function AnalyticsSection() {
  return (
    <section id="analytics" className="scroll-mt-24 bg-stone-100 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 py-16 border-t border-stone-200">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-stone-900 mb-4">戰略效能分析與資源監控</h2>
          <p className="text-stone-600 leading-relaxed">
            數據可視化是 Portfolio Committee 決策的基石。以下圖表模擬了 KFFM 運作中的兩大核心動態：「系統吞吐量 (Widget Funnel)」與「戰略對齊度 (Priority vs. Efficiency)」。這幫助管理層識別是否因為過多低價值代工訂單，而犧牲了核心自有品牌的研發週期。
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <FunnelChart />
          <PriorityChart />
        </div>
      </div>
    </section>
  );
}
