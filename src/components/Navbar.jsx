export default function Navbar({ scrollTo }) {
  return (
    <nav className="bg-stone-900 text-stone-50 sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 flex items-center gap-3">
            <span className="text-2xl">⚙️</span>
            <span className="font-bold text-xl tracking-wide">KFFM 戰略執行儀表板</span>
          </div>
          <div className="hidden md:flex space-x-8">
            <button onClick={() => scrollTo('intro')} className="hover:text-accent-primary transition-colors">核心理念</button>
            <button onClick={() => scrollTo('interactive-map')} className="hover:text-accent-primary transition-colors">互動流動圖</button>
            <button onClick={() => scrollTo('analytics')} className="hover:text-accent-primary transition-colors">效能分析</button>
          </div>
        </div>
      </div>
    </nav>
  );
}
