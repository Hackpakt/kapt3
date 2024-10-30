import React, { useState } from 'react';
import { FaHome, FaExchangeAlt, FaShoppingCart, FaPassport } from 'react-icons/fa';

const Icon = ({ icon, title, isActive, handleClick }) => (
  <div
    // Each menu item with conditional styling based on active state
    className={`flex items-center space-x-3 p-2 rounded-[10px] w-full cursor-pointer transition-all duration-300 ease-in-out
      ${isActive ? 'bg-[#2c2f32] shadow-lg' : 'bg-[#1c1c24]'}
      hover:shadow-xl hover:bg-gray-800`}
    onClick={handleClick}
  >
    {/* Icon styling with color based on active state */}
    <span className={`text-2xl ${isActive ? 'text-white' : 'text-gray-300'}`}>
      {icon}
    </span>
    {/* Title styling with font weight change for active items */}
    <span className={`text-lg ${isActive ? 'text-white font-semibold' : 'text-gray-300'}`}>
      {title}
    </span>
  </div>
);

const Sidebar = () => {
  const [activeMenu, setActiveMenu] = useState("KAPT3");

  const menuItems = [
    { title: "KAPT3", icon: <FaHome />, href: "/" },
    { title: "Exchange", icon: <FaExchangeAlt />, href: "#" },
    { title: "Stats", icon: <FaShoppingCart />, href: "#" },
    { title: "AgitaPass", icon: <FaPassport />, href: "https://agita-pass.vercel.app" },
  ];

  const handleMenuClick = (item) => {
    setActiveMenu(item.title);
    window.location.href = item.href; // Redirect to specified URL
  };

  return (
    <div
      // Sidebar container styling with top margin set to "top-20" to avoid overlap with the navbar
      className="fixed top-20 left-4 h-[88vh] flex flex-col items-center gap-4 p-4 pb-8 bg-gradient-to-b from-gray-900 to-gray-700 rounded-[20px] shadow-2xl w-[210px] transition-all duration-500 ease-in-out"
    >
      <div className="flex flex-col items-start w-full space-y-4">
        {menuItems.map((item) => (
          <Icon
            key={item.title}
            icon={item.icon}
            title={item.title}
            isActive={activeMenu === item.title}
            handleClick={() => handleMenuClick(item)}
          />
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
