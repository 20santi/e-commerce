import React from "react";
import { FaOpencart } from "react-icons/fa";
import { HiOutlineShoppingBag } from "react-icons/hi";

const Navbar = () => {
  return (
    <div className="w-full h-[80px] flex items-center bg-white">
      <div className="p-5 flex w-full justify-between items-center">
        {/* website icon */}
        <FaOpencart className="text-[#F25511] text-5xl" />

        {/* section */}
        <div className="flex gap-x-9 font-bold text-lg text-[#282c3f]">
          <p>MEN</p>
          <p>WOMEN</p>
          <p>KIDS</p>
          <p>HOME & LEAVING</p>
          <p>BEAUTY</p>
          <p>STUDIO</p>
        </div>

        {/* search bar */}
        <div className="">
          <input
            className="bg-[#ece7e7ec] w-[300px] h-[50px] rounded-lg p-3"
            placeholder="Search for products, brands and more"
          />
        </div>

        {/* login signup and bag*/}
        <div className="flex items-center gap-x-8">
          <button className="rounded-lg p-5 pt-3 pb-3 border border-[#ece7e7db] hover:border hover:border-[#FF3F6C] text-[#FF3F6C] font-bold">
            LOGIN / SIGNUP
          </button>
          <div className="flex flex-col">
            <HiOutlineShoppingBag className="text-3xl" />
            <p className="font-bold text-[14px] text-[#282c3f]">
              BAG
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
