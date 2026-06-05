import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { HiOutlineArrowRight } from "react-icons/hi";
import { FaYoutube, FaFileAlt } from "react-icons/fa";

function Home() {
  const [url, setUrl] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!url.trim()) return;

    navigate("/dashboard");
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center pt-10 md:pt-20 text-center">
        {/* Tagline Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-medium mb-6 animate-fade-in">
          ✨ Powered by Google Gemini AI
        </div>

        {/* Hero Headline */}
        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white max-w-3xl leading-tight">
          Lambi Videos Aur Blogs Ko Padhna Chhodo. <br />
          <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent">
            AI Se 10 Seconds Me Summary Lo!
          </span>
        </h2>

        <p className="text-slate-400 mt-4 text-sm md:text-base max-w-xl">
          Kisi bhi YouTube Video ka URL ya Article ka link niche daalein, aur
          paayein Structured Summary, Timeline aur Key Insights.
        </p>

        {/* URL Input Form Container */}
        <form onSubmit={handleSubmit} className="w-full max-w-2xl mt-10 px-2">
          <div className="flex flex-col sm:flex-row items-center gap-3 p-2 rounded-2xl bg-[#111827] border border-slate-800 shadow-2xl focus-within:border-blue-500/50 transition-all duration-300">
            <div className="flex items-center gap-2 px-3 w-full">
              <FaYoutube className="text-red-500" size={24} />
              <span className="text-slate-600">|</span>
              <FaFileAlt className="text-blue-400" size={18} />
              <input
                type="url"
                required
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="Paste YouTube video or Blog URL here..."
                className="bg-transparent text-slate-100 placeholder-slate-500 text-sm focus:outline-none w-full py-2"
              />
            </div>

            <button
              type="submit"
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 active:scale-95 text-white font-medium text-sm rounded-xl transition-all shadow-lg shadow-blue-600/20 whitespace-nowrap"
            >
              <span>Summarize Now</span>
              <HiOutlineArrowRight size={16} />
            </button>
          </div>
        </form>

        {/* Features Checklist Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mt-16 text-left w-full px-4">
          <div className="p-5 rounded-2xl bg-[#111827]/40 border border-slate-800/60">
            <div className="text-blue-400 font-semibold text-sm mb-1">
              ⏱️ Structural Timeline
            </div>
            <p className="text-xs text-slate-400">
              Video kab aur kis topic par shift ho rahi hai, poori timeline list
              milegi.
            </p>
          </div>
          <div className="p-5 rounded-2xl bg-[#111827]/40 border border-slate-800/60">
            <div className="text-purple-400 font-semibold text-sm mb-1">
              💡 Key Insights
            </div>
            <p className="text-xs text-slate-400">
              Pore content ka core conclusion aur main bullet points bilkul saaf
              format me.
            </p>
          </div>
          <div className="p-5 rounded-2xl bg-[#111827]/40 border border-slate-800/60">
            <div className="text-emerald-400 font-semibold text-sm mb-1">
              📂 History Support
            </div>
            <p className="text-xs text-slate-400">
              Aapki purani saari khoji hui summaries browser cache me auto-save
              rahengi.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
