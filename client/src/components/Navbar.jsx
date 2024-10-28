import React, { useContext } from "react";
import { BiCheckShield } from "react-icons/bi"; // Only relevant icons kept
import logo from "../../images/logo.png";
import { TransactionContext } from "../context/TransactionContext";

const Navbar = () => {
  const { currentAccount, connectWallet } = useContext(TransactionContext);

  return (
    <nav className="w-full flex items-center p-4 bg-gray-800 fixed top-0 left-0 z-50">
      <div className="flex items-center flex-shrink-0">
        <img src={logo} alt="logo" className="h-10 mr-2 cursor-pointer" /> {/* Adjusted size for mobile */}
      </div>
      <div className="flex flex-1 justify-end items-center">
        <ul className="text-white list-none flex flex-row justify-end items-center flex-initial">
          {!currentAccount ? (
            <li
              onClick={connectWallet}
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
