import { Link, useLocation } from "react-router-dom";
import {
  HiOutlineHome,
  HiOutlineChartBar,
  HiOutlineClock,
  HiX,
} from "react-icons/hi";
import { RiBrainLine } from "react-icons/ri";

function Sidebar({ isOpen, setIsOpen }) {
  const location = useLocation();

  const menuItems = [
    {
      name: "Home",
      path: "/",
      icon: <HiOutlineHome size={22} />,
    },
    {
      name: "Dashboard",
      path: "/dashboard",
      icon: <HiOutlineChartBar size={22} />,
    },
    {
      name: "History",
      path: "/history",
      icon: <HiOutlineClock size={22} />,
    },
  ];

  return (
    <>
      {/* Mobile Backdrop Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/60 md:hidden backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar Container */}
      <aside
        className={`
        fixed inset-y-0 left-0 z-50 w-64 bg-[#111827] border-r border-slate-800 p-5 flex flex-col transition-transform duration-300 ease-in-out
        md:static md:translate-x-0
        ${isOpen ? "translate-x-0" : "-translate-x-full"}
      `}
      >
        {/* Header / Logo */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-2 text-blue-500 font-bold text-xl">
            <RiBrainLine className="animate-pulse" size={28} />
            <span>
              ClipMind
              <span className="text-white font-medium text-sm ml-1">.AI</span>
            </span>
          </div>
          {/* Mobile Close Button */}
          <button
            onClick={() => setIsOpen(false)}
            className="md:hidden text-slate-400 hover:text-white"
          >
            <HiX size={24} />
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="flex-1 space-y-2">
          {menuItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`flex items-center gap-4 px-4 py-3 rounded-xl font-medium transition-all duration-200
                  ${
                    isActive
                      ? "bg-blue-600 text-white shadow-lg shadow-blue-600/20"
                      : "text-slate-400 hover:bg-slate-800 hover:text-slate-200"
                  }`}
              >
                {item.icon}
                {item.name}
              </Link>
            );
          })}
        </nav>

        {/* Sidebar Footer */}
        <div className="pt-4 border-t border-slate-800 text-center text-xs text-slate-500">
          v1.0.0 • Developed by Raushan
        </div>
      </aside>
    </>
  );
}

export default Sidebar;
