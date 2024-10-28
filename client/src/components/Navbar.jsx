import React, { useContext } from "react";
import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import logo from "../../images/logo.png";
import { TransactionContext } from "../context/TransactionContext"; // Import the context
import { shortenAddress } from "../utils/shortenAddress"; // Make sure to import this utility

const NavBarItem = ({ title, classprops }) => (
  <li className={`mx-4 cursor-pointer ${classprops}`}>{title}</li>
);

const Navbar = () => {
  const { currentAccount, connectWallet } = useContext(TransactionContext); // Access the context

  const [toggleMenu, setToggleMenu] = React.useState(false);

  return (
    <nav className="w-full flex items-center p-4">
      <div className="md:flex-[0.5] flex-initial justify-center items-center ">
        <img src={logo} alt="logo" className="w-48 cursor-pointer" />
      </div>
      <div className="flex flex-1 justify-end items-center">
        <ul className="text-white md:flex hidden list-none flex-row justify-end items-center flex-initial">
          {["Tutorials", "Wallets"].map((item, index) => (
            <NavBarItem key={item + index} title={item} />
          ))}
          {!currentAccount ? (
            <li
              onClick={connectWallet}
              className="flex flex-row justify-center items-center bg-[#2952e3] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#2546bd]"
            >
              Connect Wallet
            </li>
          ) : (
            <li className="text-white mx-4">{shortenAddress(currentAccount)}</li>
          )}
          {/* Login Button */}
          <li className="flex flex-row justify-center items-center bg-[#1d1b1b] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#010000] text-white">
            Login
          </li>
        </ul>
        <div className="flex relative md:hidden">
          {!toggleMenu && (
            <HiMenuAlt4
              fontSize={28}
              className="text-white cursor-pointer"
              onClick={() => setToggleMenu(true)}
            />
          )}
          {toggleMenu && (
            <AiOutlineClose
              fontSize={28}
              className="text-white cursor-pointer"
              onClick={() => setToggleMenu(false)}
            />
          )}
          {toggleMenu && (
            <ul
              className="z-10 fixed top-0 right-0 p-3 w-[70vw] h-screen shadow-2xl list-none
              flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white animate-slide-in"
            >
              <li className="text-xl w-full my-2">
                <AiOutlineClose onClick={() => setToggleMenu(false)} />
              </li>
              {["Market", "Exchange", "Tutorials", "Wallets"].map(
                (item, index) => (
                  <NavBarItem key={item + index} title={item} classprops="my-2 text-lg" />
                )
              )}
              {!currentAccount ? (
                <li
                  onClick={connectWallet}
                  className="flex flex-row justify-center items-center bg-[#2952e3] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#2546bd]"
                >
                  Connect Wallet
                </li>
              ) : (
                <li className="text-white mx-4">{shortenAddress(currentAccount)}</li>
              )}
              {/* Login Button in mobile menu */}
              <li className="flex flex-row justify-center items-center bg-[#222021] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#000000] text-white">
                Login
              </li>
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
