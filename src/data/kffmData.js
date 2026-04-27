const kffmData = [
  {
    id: 'proposal',
    icon: '💡',
    title: '1. Proposal (提案階段)',
    desc: '策略過濾層',
    subfunctions: [
      { name: 'BD (業務開發)', owner: 'Michael L', widget: '潛在機會數', kpi: '優先領域機會佔比', kpiDesc: '確保開發案源符合公司戰略白區。' },
      { name: 'EPM (專案管理)', owner: 'EPM', widget: '完成提案數', kpi: '範疇明確度', kpiDesc: '減少後續研發因為需求模糊而產生的重工。' },
      { name: 'ARCH (架構開發)', owner: 'Sam W', widget: '標準化模組數', kpi: '功能複用率', kpiDesc: '衡量平台化能力，減少專案「重複造輪子」的浪費。' }
    ]
  },
  {
    id: 'resource',
    icon: '⚖️',
    title: '2. Resource Control (資源控制)',
    desc: '決策中樞',
    subfunctions: [
      { name: 'Portfolio Committee', owner: 'Ethan', widget: '核准專案數', kpi: '優先專案佔比 (WIP)', kpiDesc: '確保研發資源分配給高價值 OBM/ODM 專案。' }
    ]
  },
  {
    id: 'engineering',
    icon: '🛠️',
    title: '3. NPI Engineering (研發導入)',
    desc: '價值創造層 (POC, EVT, DVT)',
    subfunctions: [
      { name: 'R&D (研發工程)', owner: 'Sam W', widget: '原型產出數', kpi: '產品研發工時佔比', kpiDesc: '監控工程資源是否被雜事分散，確保專注於核心 Roadmap。' },
      { name: 'PJM (專案執行)', owner: 'Kevin W', widget: '里程碑達成數', kpi: '路徑圖交付率', kpiDesc: '衡量專案執行力與進度控制。' }
    ]
  },
  {
    id: 'scm',
    icon: '📦',
    title: '4. SCM (供應鏈管理)',
    desc: '資源保障層',
    subfunctions: [
      { name: 'Sourcing & Purchase', owner: 'Team', widget: '已下發採購單數', kpi: '交期達成率 (OTD)', kpiDesc: '確保 NPI 階段料件不成為研發瓶頸。' },
      { name: 'SQE (供應商質量)', owner: 'Team', widget: '供應商稽核數', kpi: '進料合格率 (IQC)', kpiDesc: '在原料端控制委外代工的品質風險。' },
      { name: 'Inventory Control', owner: 'Team', widget: '庫存物料項數', kpi: '庫存準確率', kpiDesc: '防止帳務誤差導致 NPI 試產停工。' }
    ]
  },
  {
    id: 'production',
    icon: '🏭',
    title: '5. NPI Production (生產管理)',
    desc: '成果轉化層與 CM 對接 (PVT, MP)',
    subfunctions: [
      { name: 'MPM (生產管理)', owner: 'MPM', widget: '試產批次數', kpi: '首發良率 (Yield)', kpiDesc: '衡量技術移交文件 (TDP) 的完整度與可製造性。' },
      { name: 'Quality (品質控制)', owner: 'Peter C', widget: '缺陷報告數', kpi: '產品質量一致性', kpiDesc: '監控 CM (委外廠) 是否持續符合品質標準。' }
    ]
  },
  {
    id: 'finance',
    icon: '💵',
    title: '6. Finance (財務)',
    desc: '價值回收層',
    subfunctions: [
      { name: 'Finance', owner: 'Ingrid W', widget: '已開立發票數', kpi: '現金回收達成率', kpiDesc: '監控 OBM/ODM 專案獲利後的資金回籠健康度。' }
    ]
  }
];

export default kffmData;
