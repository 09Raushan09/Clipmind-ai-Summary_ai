import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { extractYouTubeId } from '../utils/youtubeParser';
import { useFetchSummary } from '../hooks/useFetchSummary.js';

function Home() {
  const [url, setUrl] = useState('');
  const { getTranscript, loading, error } = useFetchSummary();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const videoId = extractYouTubeId(url);
    
    if (!videoId) {
      alert("Kripya ek valid YouTube URL dalein!");
      return;
    }

    console.log("✅ Video ID extracted:", videoId);
    const transcript = await getTranscript(videoId);

    if (transcript) {
      navigate('/dashboard', { state: { transcript } });
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] px-4 text-center">
      <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight">
        YouTube Video <span className="text-blue-500">Summarizer</span>
      </h1>
      <p className="text-slate-400 max-w-xl mb-8 text-sm md:text-base">
        Kisi bhi YouTube video ka link dalein aur seconds me poora raw text haasil karein.
      </p>

      <form onSubmit={handleSubmit} className="w-full max-w-2xl bg-[#111827] p-2 rounded-2xl border border-slate-800 flex flex-col sm:flex-row gap-2 shadow-2xl">
        <input 
          type="text" 
          placeholder="Paste YouTube Video URL here..." 
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          className="flex-1 bg-transparent px-4 py-3 text-white placeholder-slate-500 focus:outline-none text-sm"
          disabled={loading}
        />
        <button 
          type="submit" 
          disabled={loading}
          className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-xl transition-all text-sm disabled:opacity-50 min-w-[140px]"
        >
          {loading ? 'Processing...' : 'Summarize Now'}
        </button>
      </form>

      {error && (
        <div className="mt-4 text-red-400 text-sm bg-red-500/10 border border-red-500/20 px-4 py-2 rounded-xl max-w-xl">
          ⚠️ {error}
        </div>
      )}
    </div>
  );
}

export default Home;



// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { HiOutlineArrowRight } from "react-icons/hi";
// import { FaYoutube, FaFileAlt } from "react-icons/fa";
// import { useFetchSummary } from "../hooks/useFetchSummary.js"; 

// function Home() {
//   const [url, setUrl] = useState("");
//   const navigate = useNavigate();
//   const { processVideo, isLoading, error } = useFetchSummary(); 

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!url.trim()) return;

//     // Direct navigate karne ke bajay pehle video process karenge
//     const result = await processVideo(url);
    
//     // Agar success hua, tabhi transcript data ke sath Dashboard bhejo
//     if (result.success) {
//       navigate("/dashboard", { state: { transcript: result.data } });
//     }
//   };

//   return (
//     <>
//       <div className="flex flex-col items-center justify-center pt-10 md:pt-20 text-center">
//         {/* Tagline Badge */}
//         <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-medium mb-6 animate-fade-in">
//           ✨ Powered by Google Gemini AI
//         </div>

//         {/* Hero Headline */}
//         <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white max-w-3xl leading-tight">
//           Lambi Videos Aur Blogs Ko Padhna Chhodo. <br />
//           <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent">
//             AI Se 10 Seconds Me Summary Lo!
//           </span>
//         </h2>

//         <p className="text-slate-400 mt-4 text-sm md:text-base max-w-xl">
//           Kisi bhi YouTube Video ka URL ya Article ka link niche daalein, aur
//           paayein Structured Summary, Timeline aur Key Insights.
//         </p>

//         {/* URL Input Form Container */}
//         <form onSubmit={handleSubmit} className="w-full max-w-2xl mt-10 px-2">
//           <div className={`flex flex-col sm:flex-row items-center gap-3 p-2 rounded-2xl bg-[#111827] border shadow-2xl transition-all duration-300 ${error ? 'border-red-500/50' : 'border-slate-800 focus-within:border-blue-500/50'}`}>
//             <div className="flex items-center gap-2 px-3 w-full">
//               <FaYoutube className="text-red-500" size={24} />
//               <span className="text-slate-600">|</span>
//               <FaFileAlt className="text-blue-400" size={18} />
//               <input
//                 type="url"
//                 required
//                 value={url}
//                 onChange={(e) => setUrl(e.target.value)}
//                 placeholder="Paste YouTube video or Blog URL here..."
//                 disabled={isLoading} 
//                 className="bg-transparent text-slate-100 placeholder-slate-500 text-sm focus:outline-none w-full py-2 disabled:opacity-50"
//               />
//             </div>

//             <button
//               type="submit"
//               disabled={!url.trim() || isLoading} // 👈 Loading ke time button disable
//               className={`w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 font-medium text-sm rounded-xl transition-all shadow-lg whitespace-nowrap ${
//                 isLoading 
//                   ? 'bg-blue-800 text-slate-300 cursor-not-allowed' 
//                   : 'bg-blue-600 hover:bg-blue-700 active:scale-95 text-white shadow-blue-600/20'
//               }`}
//             >
//               {isLoading ? (
//                 <>
//                   <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
//                     <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//                     <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
//                   </svg>
//                   <span>Processing...</span>
//                 </>
//               ) : (
//                 <>
//                   <span>Summarize Now</span>
//                   <HiOutlineArrowRight size={16} />
//                 </>
//               )}
//             </button>
//           </div>
          
//           {/* 👈 Error Message Display */}
//           {error && (
//             <div className="mt-3 text-red-400 text-sm text-left px-4 animate-fade-in">
//               ⚠️ {error}
//             </div>
//           )}
//         </form>

//         {/* Features Checklist Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mt-16 text-left w-full px-4">
//           <div className="p-5 rounded-2xl bg-[#111827]/40 border border-slate-800/60 hover:bg-[#111827]/60 transition-colors cursor-default">
//             <div className="text-blue-400 font-semibold text-sm mb-1">
//               ⏱️ Structural Timeline
//             </div>
//             <p className="text-xs text-slate-400">
//               Video kab aur kis topic par shift ho rahi hai, poori timeline list
//               milegi.
//             </p>
//           </div>
//           <div className="p-5 rounded-2xl bg-[#111827]/40 border border-slate-800/60 hover:bg-[#111827]/60 transition-colors cursor-default">
//             <div className="text-purple-400 font-semibold text-sm mb-1">
//               💡 Key Insights
//             </div>
//             <p className="text-xs text-slate-400">
//               Pore content ka core conclusion aur main bullet points bilkul saaf
//               format me.
//             </p>
//           </div>
//           <div className="p-5 rounded-2xl bg-[#111827]/40 border border-slate-800/60 hover:bg-[#111827]/60 transition-colors cursor-default">
//             <div className="text-emerald-400 font-semibold text-sm mb-1">
//               📂 History Support
//             </div>
//             <p className="text-xs text-slate-400">
//               Aapki purani saari khoji hui summaries browser cache me auto-save
//               rahengi.
//             </p>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Home;