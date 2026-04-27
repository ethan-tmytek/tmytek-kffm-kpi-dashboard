export default function KffmNode({ node, isActive, onClick }) {
  return (
    <div
      className={`node-card bg-white border-2 border-stone-200 rounded-xl p-4 cursor-pointer flex items-center gap-4 relative z-10${isActive ? ' node-active' : ''}`}
      onClick={onClick}
    >
      <div className="text-3xl bg-stone-100 p-2 rounded-lg">{node.icon}</div>
      <div>
        <h4 className="font-bold text-stone-800 text-lg">{node.title}</h4>
        <p className="text-sm text-stone-500">{node.desc}</p>
      </div>
    </div>
  );
}
