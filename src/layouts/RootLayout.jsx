import React,{useState} from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

function RootLayout(){
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    return (
        <div className="flex h-screen w-screen overflow-hidden bg-[#0b0f19]">
      
      {/* Sidebar Section */}
      <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />

      {/* Main Content Area */}
      <div className="flex flex-col flex-1 min-w-0 overflow-hidden">
        
        {/* Top Navbar */}
        <Navbar setIsSidebarOpen={setIsSidebarOpen} />

        {/* Dynamic Pages Area */}
        <main className="flex-1 overflow-y-auto p-4 md:p-8 bg-[#070a12]">
          <div className="max-w-6xl mx-auto w-full">
            <Outlet />
          </div>
        </main>
      </div>
    </div>     
    );
}

export default RootLayout;
