
function History() {
  const dummyHistory = [
    { id: 1, title: 'Tailwind CSS Best Practices for Scalable Web Layouts', type: 'Article', date: 'June 4, 2026' },
    { id: 2, title: 'Asynchronous JS: Event Loop and Microtask Queue Architecture', type: 'YouTube', date: 'May 28, 2026' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
        <div>
          <h2 className="text-2xl font-bold text-white">Search History</h2>
          <p className="text-xs text-slate-400">Aapki purani saari saved summaries yahan collect hoti hain.</p>
        </div>
        <button className="px-3 py-1.5 bg-red-600/10 hover:bg-red-600/20 text-red-400 text-xs font-medium rounded-lg border border-red-500/20 transition-all">
          Clear All History
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {dummyHistory.map((item) => (
          <div key={item.id} className="p-5 rounded-xl bg-[#111827] border border-slate-800 hover:border-slate-700 transition-all cursor-pointer group">
            <div className="flex items-center justify-between mb-3">
              <span className={`px-2 py-0.5 rounded text-[10px] font-bold border ${
                item.type === 'YouTube' 
                  ? 'bg-red-500/10 text-red-400 border-red-500/20' 
                  : 'bg-blue-500/10 text-blue-400 border-blue-500/20'}`}>
                {item.type}
              </span>
              <span className="text-[11px] text-slate-500">{item.date}</span>
            </div>
            <h4 className="text-sm font-semibold text-slate-200 group-hover:text-blue-400 transition-colors line-clamp-1">
              {item.title}
            </h4>
          </div>
        ))}
      </div>
    </div>
  );
}

export default History;