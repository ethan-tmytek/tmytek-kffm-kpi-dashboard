import { useState } from 'react';
import kffmData from '../data/kffmData';
import KffmNode from './KffmNode';
import DetailPanel from './DetailPanel';

export default function InteractiveMap() {
  const [selectedNodeId, setSelectedNodeId] = useState(null);

  const selectedNode = kffmData.find((n) => n.id === selectedNodeId) || null;

  return (
    <section id="interactive-map" className="scroll-mt-24">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-stone-900 mb-4">OBM/ODM 雙軌制：核心職能流動圖</h2>
        <p className="text-stone-600 max-w-4xl leading-relaxed">
          此區塊將靜態的 KFFM 轉化為可互動的探索架構。點擊下方六大核心階段（從提案到財務），即可在右側/下方檢視該階段的「子職能、負責人、Widget 與 KPI」。此設計協助 Portfolio Committee (投資組合委員會) 快速診斷「資源錯配」與「流程斷層」。
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        <div className="w-full lg:w-1/3 flex flex-col space-y-3 relative">
          {kffmData.map((node, index) => (
            <div key={node.id} className="contents">
              <KffmNode
                node={node}
                isActive={selectedNodeId === node.id}
                onClick={() => setSelectedNodeId(node.id)}
              />
              {index < kffmData.length - 1 && (
                <div className="text-center text-stone-300 -my-2 relative z-0">↓</div>
              )}
            </div>
          ))}
        </div>

        <div className="w-full lg:w-2/3">
          <DetailPanel node={selectedNode} />
        </div>
      </div>
    </section>
  );
}
