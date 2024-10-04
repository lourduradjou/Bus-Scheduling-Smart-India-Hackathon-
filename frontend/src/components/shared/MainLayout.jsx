import React from 'react';
import SideBar from './SideBar';
import Footer from './Footer';

const MainLayout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex flex-1">
        {/* Sidebar on the left */}
        <SideBar />
        
        {/* Main content on the right */}
        <div className="flex-1 p-4 bg-[#dee2ff7e]">
          {children}
        </div>
      </div>

      {/* Footer at the bottom */}
      <Footer />
    </div>
  );
};

export default MainLayout;
