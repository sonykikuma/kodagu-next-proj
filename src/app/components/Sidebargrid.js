import React from "react";
import { LiaTasksSolid } from "react-icons/lia";
import { TbLayoutBoardSplit, TbTool } from "react-icons/tb";
import { SlCalender } from "react-icons/sl";
import { AiOutlineSearch, AiFillCloud } from "react-icons/ai";
import { BsFillPeopleFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

const Sidebargrid = () => {
  return (
    <div className=" mt-10 mx-auto">
      <div class=" grid grid-rows-4 gap-1 divide-x divide-y md:grid-flow-col  bg-slate-200 rounded-lg">
        <div className="p-2 items-center cursor-pointer text-gray-400 hover:scale-110 hover:bg-white">
          {" "}
          <TbLayoutBoardSplit className="text-gray-400 " />
          <span className="pt-1">Dashboard</span>
        </div>
        <div
          className="p-2 items-center hover:scale-110 hover:bg-white
             cursor-pointer text-gray-400"
        >
          <LiaTasksSolid className="text-gray-400" />
          <span>Tasks</span>
        </div>
        <div
          className="p-2 items-center hover:scale-110 hover:bg-white
             cursor-pointer text-gray-400"
        >
          <MdEmail className="text-gray-400" />
          <span>Email</span>
        </div>
        <div
          className="p-2 items-center hover:scale-110 hover:bg-white
             cursor-pointer text-gray-400"
        >
          <SlCalender className="text-gray-400" />
          <span>calender</span>
        </div>
        <div
          className="p-2 items-center hover:scale-110 hover:bg-white
             cursor-pointer text-gray-400"
        >
          <LiaTasksSolid className="text-gray-400" />
          <span>Notes</span>
        </div>
        <div
          className="p-2 items-center hover:scale-120 hover:bg-white
             cursor-pointer text-gray-400"
        >
          <AiFillCloud className="text-gray-400" />
          <span>files</span>
        </div>
        <div
          className="p-2 items-center   hover:scale-110 hover:bg-white  
                 cursor-pointer text-gray-400"
        >
          <BsFillPeopleFill className="text-gray-400" />
          <span>clients</span>
        </div>
        <div
          className="p-2 items-center hover:scale-110 hover:bg-white
             cursor-pointer  text-gray-400"
        >
          <TbTool className="text-gray-400" />
          <span>settings</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebargrid;
//transition-transform duration-200 ease-out
