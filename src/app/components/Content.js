import React from "react";
import { LiaTasksSolid } from "react-icons/lia";
import { TbLayoutBoardSplit, TbTimeline } from "react-icons/tb";
import { SlCalender } from "react-icons/sl";
import { AiOutlineSearch } from "react-icons/ai";
import { FiMenu } from "react-icons/fi";
import { HiMenuAlt2 } from "react-icons/hi";

const Content = () => {
  return (
    <div className="w-[80%] h-full border-l-2 border-b-2 flex gap-8 mx-4 items-center justify-center">
      <div className="flex items-center gap-2">
        <LiaTasksSolid /> List Tasks
      </div>
      <div className="flex items-center gap-2">
        <TbLayoutBoardSplit /> Boards
      </div>
      <div className="flex items-center gap-2">
        <SlCalender /> Calender
      </div>
      <div className="flex items-center gap-2">
        <HiMenuAlt2 /> Gantt
      </div>
      <div className="flex items-center gap-2">
        <FiMenu />
        Timeline
      </div>
      <div className="flex items-center gap-2">
        <TbTimeline /> Activity
      </div>
      <div className="mx-2 bg-white items-center rounded-2xl my-4">
        <div className="flex p-2 items-center cursor-pointer">
          <AiOutlineSearch size={18} />
          <input
            className="w-full placeholder-gray-300 
            outline-none  flex rounded-2xl focus:ring 
            focus:ring-gray-50
            bg-transparent mx-2 p-2 text-sm"
            type="text"
            placeholder="Search Tasks"
          />
        </div>
      </div>
    </div>
  );
};

export default Content;
