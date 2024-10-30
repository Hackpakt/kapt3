import React, { useContext } from "react";
import { BiCheckShield } from "react-icons/bi"; // Only relevant icons kept
import logo from "../../images/logo.png";
import { TransactionContext } from "../context/TransactionContext";

const Navbar = () => {
  const { currentAccount, connectWallet } = useContext(TransactionContext);

  return (
    <nav
      // Floating effect with shadow, rounded corners, full-width without side margins
      className=" ml-4 mr-2 flex items-center p-3 bg-gray-800 fixed top-2 left-0 right-0 rounded-[10px] shadow-lg z-50" // Changed to w-full for full width
    >
      <div className="flex items-center flex-shrink-0">
        <img src={logo} alt="logo" className="h-10 mr-2 cursor-pointer" /> {/* Adjusted logo size */}
      </div>
      <div className="flex flex-1 justify-end items-center">
        <ul className="text-white list-none flex flex-row justify-end items-center flex-initial">
          {!currentAccount ? (
            <li
              onClick={connectWallet}
              // Button for wallet connection with hover effect and rounded corners
              className="flex flex-row justify-center items-center bg-[#2952e3] py-1 px-4 rounded-full cursor-pointer hover:bg-[#2546bd] text-sm md:py-2 md:px-7 md:text-base mx-2"
            >
              Connect Wallet
            </li>
          ) : (
            <li className="flex items-center text-green-400 mx-2 text-sm md:text-base">
              <BiCheckShield className="mr-1" /> {/* Icon before "Connected" */}
              Connected
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
