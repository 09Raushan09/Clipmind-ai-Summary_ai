import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function Dashboard() {
  const location = useLocation();
  const navigate = useNavigate();

  const transcript = location.state?.transcript;

  if (!transcript) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] space-y-4">
        <div className="text-red-400 text-lg font-medium">⚠️ Koi data nahi mila.</div>
        <p className="text-slate-400 text-sm">Kripya Home page par jakar valid YouTube URL paste karein.</p>
        <button 
          onClick={() => navigate('/')} 
          className="mt-4 px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl transition-all"
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-6 mt-10 md:mt-16 w-full max-w-6xl mx-auto px-4">
      <div className="p-6 rounded-2xl bg-[#111827] border border-slate-800 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 shadow-xl">
        <div>
          <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-red-500/10 text-red-400 border border-red-500/20 uppercase tracking-wider">YouTube Source</span>
          <h3 className="text-xl font-bold text-white mt-2">Video Data Extracted</h3>
          <p className="text-xs text-slate-400 mt-1">Ready for AI Summarization</p>
        </div>
        <button 
          onClick={() => navigate('/')}
          className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium rounded-lg border border-slate-700 transition-all flex items-center gap-2"
        >
          <span>&larr;</span> Naya Link Dalein
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 p-6 rounded-2xl bg-[#111827] border border-slate-800 space-y-4 shadow-xl">
          <h4 className="text-md font-bold text-blue-400 border-b border-slate-800 pb-2 flex justify-between items-center">
            <span>📄 Raw Transcript (Day 2 Final)</span>
          </h4>
          
          <div className="max-h-[500px] overflow-y-auto pr-2 custom-scrollbar">
            <p className="text-sm text-slate-300 leading-relaxed whitespace-pre-wrap">
              {transcript}
            </p>
          </div>
        </div>

        <div className="p-6 rounded-2xl bg-[#111827] border border-slate-800 shadow-xl h-fit">
          <h4 className="text-md font-bold text-emerald-400 border-b border-slate-800 pb-2 mb-4">⏳ Event Timeline (Dummy)</h4>
          <div className="relative border-l border-slate-800 pl-4 space-y-6 opacity-60">
            <div className="relative">
              <span className="absolute -left-[21px] top-1 bg-blue-500 h-3 w-3 rounded-full border border-slate-900" />
              <div className="text-xs font-bold text-blue-400">00:00 - 02:15</div>
              <p className="text-xs text-slate-300 font-medium">Introduction part.</p>
            </div>
            <div className="relative">
              <span className="absolute -left-[21px] top-1 bg-purple-500 h-3 w-3 rounded-full border border-slate-900" />
              <div className="text-xs font-bold text-purple-400">02:15 - 06:40</div>
              <p className="text-xs text-slate-300 font-medium">Main core concepts discussed.</p>
            </div>
            <div className="relative">
              <span className="absolute -left-[21px] top-1 bg-emerald-500 h-3 w-3 rounded-full border border-slate-900" />
              <div className="text-xs font-bold text-emerald-400">06:40 - end</div>
              <p className="text-xs text-slate-300 font-medium">Conclusion and wrap up.</p>
            </div>
          </div>
          <p className="text-[10px] text-slate-500 mt-6 text-center italic">
            *Yeh timeline Day 3 me Gemini AI ke response se dynamically fill hogi.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;




// import React from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';

// function Dashboard() {
//   const location = useLocation();
//   const navigate = useNavigate();

//   // Safely extracting the data passed from Home.jsx
//   const transcript = location.state?.transcript;

//   // Error Handling: Agar bina data ke page khul jaye
//   if (!transcript) {
//     return (
//       <div className="flex flex-col items-center justify-center min-h-[60vh] space-y-4">
//         <div className="text-red-400 text-lg font-medium">⚠️ Koi data nahi mila.</div>
//         <p className="text-slate-400 text-sm">Kripya Home page par jakar valid YouTube URL paste karein.</p>
//         <button 
//           onClick={() => navigate('/')} 
//           className="mt-4 px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl transition-all"
//         >
//           Go Back
//         </button>
//       </div>
//     );
//   }

//   return (
//     <div className="space-y-6 mt-10 md:mt-16 w-full max-w-6xl mx-auto px-4">
//       {/* Top Meta Details Card */}
//       <div className="p-6 rounded-2xl bg-[#111827] border border-slate-800 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 shadow-xl">
//         <div>
//           <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-red-500/10 text-red-400 border border-red-500/20 uppercase tracking-wider">YouTube Source</span>
//           <h3 className="text-xl font-bold text-white mt-2">Video Data Extracted</h3>
//           <p className="text-xs text-slate-400 mt-1">Ready for AI Summarization</p>
//         </div>
//         <button 
//           onClick={() => navigate('/')}
//           className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium rounded-lg border border-slate-700 transition-all flex items-center gap-2"
//         >
//           <span>&larr;</span> Naya Link Dalein
//         </button>
//       </div>

//       {/* Grid Layout for Summary & Side Elements */}
//       <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
//         {/* Core Summary Card - (Aaj yahan raw text dikhega, kal AI ka magic aayega) */}
//         <div className="lg:col-span-2 p-6 rounded-2xl bg-[#111827] border border-slate-800 space-y-4 shadow-xl">
//           <h4 className="text-md font-bold text-blue-400 border-b border-slate-800 pb-2 flex justify-between items-center">
//             <span>📄 Raw Transcript (Day 2 Test)</span>
//           </h4>
          
//           {/* Scrollable box for long text */}
//           <div className="max-h-[500px] overflow-y-auto pr-2 custom-scrollbar">
//             <p className="text-sm text-slate-300 leading-relaxed whitespace-pre-wrap">
//               {transcript}
//             </p>
//           </div>
//         </div>

//         {/* Video Timeline Flow Side Card - (Kal isko AI ke data se connect karenge) */}
//         <div className="p-6 rounded-2xl bg-[#111827] border border-slate-800 shadow-xl h-fit">
//           <h4 className="text-md font-bold text-emerald-400 border-b border-slate-800 pb-2 mb-4">⏳ Event Timeline (Dummy)</h4>
//           <div className="relative border-l border-slate-800 pl-4 space-y-6 opacity-60">
            
//             <div className="relative">
//               <span className="absolute -left-[21px] top-1 bg-blue-500 h-3 w-3 rounded-full border border-slate-900" />
//               <div className="text-xs font-bold text-blue-400">00:00 - 02:15</div>
//               <p className="text-xs text-slate-300 font-medium">Introduction part.</p>
//             </div>

//             <div className="relative">
//               <span className="absolute -left-[21px] top-1 bg-purple-500 h-3 w-3 rounded-full border border-slate-900" />
//               <div className="text-xs font-bold text-purple-400">02:15 - 06:40</div>
//               <p className="text-xs text-slate-300 font-medium">Main core concepts discussed.</p>
//             </div>

//             <div className="relative">
//               <span className="absolute -left-[21px] top-1 bg-emerald-500 h-3 w-3 rounded-full border border-slate-900" />
//               <div className="text-xs font-bold text-emerald-400">06:40 - end</div>
//               <p className="text-xs text-slate-300 font-medium">Conclusion and wrap up.</p>
//             </div>

//           </div>
//           <p className="text-[10px] text-slate-500 mt-6 text-center italic">
//             *Yeh timeline Day 3 me Gemini AI ke response se dynamically fill hogi.
//           </p>
//         </div>

//       </div>
//     </div>
//   );
// }

// export default Dashboard;