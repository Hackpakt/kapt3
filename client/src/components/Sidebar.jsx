import React, { useState } from 'react';
import { FaHome, FaExchangeAlt, FaShoppingCart, FaPassport } from 'react-icons/fa';
import logo from '../../images/logo.png'; // Make sure the path to your logo is correct

const Sidebar = () => {
  const [activeMenu, setActiveMenu] = useState("Home");

  const menuItems = [
    { title: "Home", icon: <FaHome />, href: "/" }, // Main page redirect
    { title: "Transfer", icon: <FaExchangeAlt />, href: "#" }, // Redirects to an external URL
    { title: "Buy", icon: <FaShoppingCart />, href: "#" }, // Redirects to an external URL
    { title: "AgitaPass", icon: <FaPassport />, href: "https://agita-pass.vercel.app" }, // Redirects to an external URL
  ];

  const handleMenuClick = (href) => {
    window.location.href = href; // Redirect to the specified URL
  };

  return (
    <div className="w-60 h-full fixed top-16 left-0 p-6 bg-gradient-to-b from-gray-900 to-gray-700 shadow-lg"> {/* Adjusted top to 16 to avoid overlap with navbar */}
      
      <h2 className="text-2xl font-bold mb-6 text-white">Menu</h2>
      <ul className="space-y-4">
        {menuItems.map((item) => (
          <li
            key={item.title}
            className={`flex items-center p-3 cursor-pointer rounded-md transition-all duration-200
              ${activeMenu === item.title ? "bg-gray-800" : "hover:bg-gray-600"}
            `}
            onClick={() => {
              setActiveMenu(item.title); // Update active menu
              handleMenuClick(item.href); // Redirect to the specified URL
            }}
          >
            <span className={`mr-4 text-xl ${activeMenu === item.title ? "text-white" : "text-gray-300"}`}>
              {item.icon}
            </span>
            <span className={`text-lg ${activeMenu === item.title ? "text-white font-semibold" : "text-gray-300"}`}>
              {item.title}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
