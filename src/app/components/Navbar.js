import React from "react";
import { AiOutlineMenu, AiOutlineSearch, AiFillBell } from "react-icons/ai";
import { BiChevronRight } from "react-icons/bi";
import { BsFillFilePersonFill, BsPersonCircle, BsDot } from "react-icons/bs";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
  return (
    <div className="border-b mx-auto flex gap-7 items-center text-gray-600">
      <div className="bg-white rounded-full p-2 m-4 sm:visible">
        <AiOutlineMenu size={16} />
      </div>
      <div className="text-gray-800 ">Constructor</div>
      <div className="space-x-4  flex sm:visible">
        <div>Dashboard</div>
        <div>About Us</div>
        <div>News</div>
        <div>User Policy</div>
        <div>Contacts</div>
        <div>...</div>
      </div>
      <div className="mx-2 bg-white items-center rounded-2xl my-4">
        <div className="flex p-2 items-center cursor-pointer">
          <AiOutlineSearch />
          <input
            className="w-full placeholder-gray-300 
            outline-none  flex rounded-2xl focus:ring 
            focus:ring-gray-50
            bg-transparent mx-1 p-1 text-sm"
            type="text"
            placeholder="Search Products, Orders and Clients"
          />
          <BiChevronRight />
        </div>
      </div>
      <div>
        <div className="">
          <BsPersonCircle />
        </div>
      </div>
      <div>Clayton Santos</div>
      <div className="flex items-center space-x-4">
        <div className="bg-white rounded-full p-2 text-slate-400 relative">
          <AiFillBell />{" "}
          <BsDot
            size={20}
            className="text-red-600 -top-1 -right-2 absolute p-0"
          />
        </div>
        <div className="bg-white rounded-full p-2">
          <div className="bg-slate-400 rounded-full">
            <RxCross2 className="text-white" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
