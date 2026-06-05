import { HiMenuAlt1 } from "react-icons/hi";
import { RiBrainLine } from "react-icons/ri";

function Navbar({setIsSidebarOpen}){
    return (
        <>
        <header className="h-16 bg-[#111827]/80 backdrop-blur-md border-b border-slate-800 px-4 md:px-8 flex items-center justify-between sticky top-0 z-30">
      
      {/* Left side: Hamburger for mobile, Title for Dashboard */}
      <div className="flex items-center gap-4">
        <button 
          onClick={() => setIsSidebarOpen(true)}
          className="md:hidden text-slate-400 hover:text-white focus:outline-none"
        >
          <HiMenuAlt1 size={26} />
        </button>
        
        {/* Mobile screen brand text */}
        <div className="flex items-center gap-1 md:hidden text-blue-500 font-bold text-lg">
          <RiBrainLine size={22} />
          <span>ClipMind</span>
        </div>

        <h1 className="hidden md:block font-semibold text-lg text-slate-200">
          AI Analytics Console
        </h1>
      </div>

      {/* Right side: Dummy Profile Badge */}
      <div className="flex items-center gap-3">
        <div className="hidden sm:flex flex-col text-right">
          <span className="text-xs font-medium text-slate-300">Raushan Kumar</span>
          <span className="text-[10px] text-green-400">Pro Developer</span>
        </div>
        <div className="h-9 w-9 rounded-full bg-gradient-to-tr from-blue-600 to-purple-600 flex items-center justify-between text-white font-bold text-sm shadow-inner justify-center">
          RK
        </div>
      </div>
    </header>
        </>
    )
}

export default Navbar; 
