import React, { useContext } from "react";
import { SiEthereum } from "react-icons/si";
import { AiOutlineArrowRight } from "react-icons/ai";
import { MdMessage } from "react-icons/md";
import { GiMoneyStack } from "react-icons/gi";
import { MdOutlineTextSnippet } from "react-icons/md";

import { TransactionContext } from "../context/TransactionContext";
import { Loader } from ".";

const Input = ({ placeholder, name, type, value, handleChange, icon }) => (
  <div className="flex items-center bg-gray-800 bg-opacity-50 border border-gray-400 rounded-md p-2 my-2"> {/* Added border here */}
    {icon}
    <input
      placeholder={placeholder}
      type={type}
      step="0.0001"
      value={value}
      onChange={(e) => handleChange(e, name)}
      className="w-full bg-transparent outline-none text-white placeholder-gray-400 ml-2 py-2 border-none" // Keep border-none for the input
    />
  </div>
);

const Welcome = () => {
  const { currentAccount, handleChange, sendTransaction, formData, isLoading } = useContext(TransactionContext);

  const handleSubmit = (e) => {
    const { addressTo, amount, keyword, message } = formData;

    e.preventDefault();

    if (!addressTo || !amount || !keyword || !message) return;

    sendTransaction();
  };

  return (
    <div className="flex w-full justify-center items-center">
      <div className="flex flex-col items-center justify-center md:p-20 py-12 px-4 text-center">
        <h1 className="text-3xl sm:text-5xl text-white text-gradient pb-5">
          Send Crypto <br /> across the world
        </h1>

        <div className="mb-10 text-white">
          <div className="flex flex-col sm:flex-row justify-around mt-3">
            <div className="flex items-center mx-3">
              <AiOutlineArrowRight className="text-2xl mr-2" />
              <span>Connect Wallet</span>
            </div>
            <div className="flex items-center mx-4">
              <GiMoneyStack className="text-2xl mr-2" />
              <span>Enter Details</span>
            </div>
            <div className="flex items-center mx-4">
              <MdOutlineTextSnippet className="text-2xl mr-2" />
              <span>Send Now</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col flex-1 items-center justify-start w-full mf:mt-0 mt-10">
          <div className="p-5 sm:w-96 w-full flex flex-col justify-start items-center blue-glassmorphism">
            <h2 className="text-lg font-bold text-white mb-4">Send Your Cryptocurrency</h2>

            {/* Separate div for inputs */}
            <div className="flex flex-col w-full">
              <Input 
                placeholder="Address To" 
                name="addressTo" 
                type="text" 
                handleChange={handleChange} 
                icon={<SiEthereum className="text-white" />}
              />
              <Input 
                placeholder="Amount (ETH)" 
                name="amount" 
                type="number" 
                handleChange={handleChange} 
                icon={<GiMoneyStack className="text-white" />} 
              />
              <Input 
                placeholder="Keyword (Gif)" 
                name="keyword" 
                type="text" 
                handleChange={handleChange} 
                icon={<MdMessage className="text-white" />} 
              />
              <Input 
                placeholder="Enter Message" 
                name="message" 
                type="text" 
                handleChange={handleChange} 
                icon={<MdOutlineTextSnippet className="text-white" />} 
              />
            </div>

            <div className="h-[1px] w-full bg-gray-400 my-2" />

            {isLoading
              ? <Loader />
              : (
                <button
                  type="button"
                  onClick={handleSubmit}
                  className="text-white w-full mt-2 border-[1px] p-2 border-[#3d4f7c] hover:bg-[#3d4f7c] rounded-full cursor-pointer"
                >
                  Send now
                </button>
              )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
