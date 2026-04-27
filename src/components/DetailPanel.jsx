export default function DetailPanel({ node }) {
  if (!node) {
    return (
      <div className="bg-white rounded-2xl shadow-lg border border-stone-200 p-6 md:p-8 h-full min-h-[400px] flex flex-col">
        <div className="flex items-center justify-center h-full text-stone-400 flex-col gap-4">
          <span className="text-5xl">👈</span>
          <p className="text-lg">請選擇左側流程節點以檢視深度審計指標</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-stone-200 p-6 md:p-8 h-full min-h-[400px] flex flex-col">
      <div className="border-b border-stone-200 pb-4 mb-6">
        <div className="flex items-center gap-3 mb-2">
          <span className="text-4xl">{node.icon}</span>
          <h3 className="text-2xl font-bold text-stone-900">{node.title}</h3>
        </div>
        <p className="text-stone-600 font-medium">{node.desc}</p>
      </div>
      <div className="space-y-6 overflow-y-auto custom-scrollbar pr-2 flex-grow">
        {node.subfunctions.map((sub) => (
          <div key={sub.name} className="bg-stone-50 rounded-xl p-5 border border-stone-100">
            <div className="flex justify-between items-start mb-4">
              <h4 className="text-lg font-bold text-stone-800">{sub.name}</h4>
              <span className="bg-stone-200 text-stone-700 text-xs px-2 py-1 rounded font-medium">負責人: {sub.owner}</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg border border-stone-200 shadow-sm border-l-4 border-l-accent-primary">
                <div className="text-xs text-stone-500 uppercase tracking-wider mb-1 font-bold">Widget (數量 #)</div>
                <div className="text-lg font-bold text-stone-800">{sub.widget}</div>
              </div>
              <div className="bg-white p-4 rounded-lg border border-stone-200 shadow-sm border-l-4 border-l-accent-secondary">
                <div className="text-xs text-stone-500 uppercase tracking-wider mb-1 font-bold">KPI (品質/效率 %)</div>
                <div className="text-lg font-bold text-stone-800 mb-2">{sub.kpi}</div>
                <p className="text-xs text-stone-500 leading-tight">{sub.kpiDesc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
