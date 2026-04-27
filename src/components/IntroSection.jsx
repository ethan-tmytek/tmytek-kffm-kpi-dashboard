export default function IntroSection() {
  return (
    <section id="intro" className="bg-white rounded-2xl shadow-sm border border-stone-200 p-8 md:p-12">
      <div className="max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-bold text-stone-900 mb-6">從職能圖到獲利引擎</h1>
        <p className="text-lg text-stone-600 mb-6 leading-relaxed">
          本儀表板基於 Metronomics 系統與 KFFM (Key Function Flow Map) 深度審計報告構建。傳統的組織圖只說明了「誰向誰報告」，而 KFFM 則具象化了
          <strong className="text-accent-primary">「企業如何賺錢」</strong>。
        </p>
        <div className="grid md:grid-cols-2 gap-6 mt-8">
          <div className="bg-stone-50 p-6 rounded-xl border border-stone-200 border-l-4 border-l-accent-primary">
            <div className="text-2xl mb-3">📦</div>
            <h3 className="text-xl font-bold mb-2">Widget (物件流動數) = 水位</h3>
            <p className="text-stone-600 text-sm">以「數量 (#)」為單位。代表流程中人員可控制的具體產出物件（如：提案數、原型數）。用於預測產能負載與瓶頸。</p>
          </div>
          <div className="bg-stone-50 p-6 rounded-xl border border-stone-200 border-l-4 border-l-accent-secondary">
            <div className="text-2xl mb-3">⏱️</div>
            <h3 className="text-xl font-bold mb-2">KPI (品質與效率) = 水質</h3>
            <p className="text-stone-600 text-sm">以「百分比 (%)」或「時間」為單位。衡量物件通過方框的速度或品質（如：良率、達成率）。用於驅動紅黃綠 (RYG) 燈號管理。</p>
          </div>
        </div>
      </div>
    </section>
  );
}
