function Dashboard() {
  return (
    <div className="space-y-6">
      {/* Top Meta Details Card */}
      <div className="p-6 rounded-2xl bg-[#111827] border border-slate-800 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-red-500/10 text-red-400 border border-red-500/20 uppercase tracking-wider">YouTube Source</span>
          <h3 className="text-xl font-bold text-white mt-2">React Performance Tuning: Reflow, Repaint, and Fiber Engine</h3>
          <p className="text-xs text-slate-400 mt-1">URL: https://www.youtube.com/watch?example</p>
        </div>
        <button className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium rounded-lg border border-slate-700 transition-all">
          Clear Screen
        </button>
      </div>

      {/* Grid Layout for Summary & Side Elements */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Core Summary Card */}
        <div className="lg:col-span-2 p-6 rounded-2xl bg-[#111827] border border-slate-800 space-y-4">
          <h4 className="text-md font-bold text-blue-400 border-b border-slate-800 pb-2">📄 AI Executive Summary</h4>
          <p className="text-sm text-slate-300 leading-relaxed">
            Is video me JavaScript and React engines ke internal mechanics ko gehrai se samjhaya gaya hai. Browser engine kaise layout calculation karta hai (Reflow) aur pixels ko kaise display screen par draw karta hai (Repaint), iski details share ki gayi hain. Iske sath hi React Fiber Architecture ke prioritization algorithm ko bhi breakdown kiya gaya hai.
          </p>

          <h4 className="text-md font-bold text-purple-400 pt-2">🎯 Key Takeaways</h4>
          <ul className="list-disc pl-5 text-sm text-slate-300 space-y-2">
            <li>DOM properties code me change karne se pure render tree par direct impact padta hai jo <strong>Reflow trigger</strong> karta hai.</li>
            <li>CSS modifications jaise color or visibility changes layout ko impact nahi karte, isliye sirf <strong>Repaint process</strong> execute hota hai.</li>
            <li>React Fiber long-running operations ko discrete frames me batch karke browser ki performance crash hone se bachata hai.</li>
          </ul>
        </div>

        {/* Video Timeline Flow Side Card */}
        <div className="p-6 rounded-2xl bg-[#111827] border border-slate-800">
          <h4 className="text-md font-bold text-emerald-400 border-b border-slate-800 pb-2 mb-4">⏳ Event Timeline</h4>
          <div className="relative border-l border-slate-800 pl-4 space-y-6">
            
            <div className="relative">
              <span className="absolute -left-[21px] top-1 bg-blue-500 h-3 w-3 rounded-full border border-slate-900" />
              <div className="text-xs font-bold text-blue-400">00:00 - 02:15</div>
              <p className="text-xs text-slate-300 font-medium">Introduction to Browser Rendering Engine cycle.</p>
            </div>

            <div className="relative">
              <span className="absolute -left-[21px] top-1 bg-purple-500 h-3 w-3 rounded-full border border-slate-900" />
              <div className="text-xs font-bold text-purple-400">02:15 - 06:40</div>
              <p className="text-xs text-slate-300 font-medium">Difference between Reflow and Repaint operations with live examples.</p>
            </div>

            <div className="relative">
              <span className="absolute -left-[21px] top-1 bg-emerald-500 h-3 w-3 rounded-full border border-slate-900" />
              <div className="text-xs font-bold text-emerald-400">06:40 - end</div>
              <p className="text-xs text-slate-300 font-medium">Fiber Reconciliation updates overview.</p>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}

export default Dashboard;