import React from "react";
import { AiFillStar, AiFillLike, AiFillCompass } from "react-icons/ai";
import { TbTimeline } from "react-icons/tb";
import { BiWorld } from "react-icons/bi";
import { RiChatSmile2Fill } from "react-icons/ri";
import { BsDot } from "react-icons/bs";

const Sidebaricons = () => {
  return (
    <div className="my-8 mx-4">
      <div className="bg-white rounded-full p-2 text-slate-400 relative mb-4">
        <AiFillCompass />{" "}
      </div>
      <div className="bg-white rounded-full p-2 mb-4">
        <AiFillStar />
      </div>

      <div className="bg-white rounded-full p-2 text-slate-400 mb-4 relative MB-4">
        <RiChatSmile2Fill />{" "}
        <BsDot
          size={20}
          className="text-red-600 -top-1 -right-2 absolute p-0"
        />
      </div>

      <div className="bg-white rounded-full p-2 mb-4 text-slate-400 relative">
        <TbTimeline />{" "}
      </div>
      <div className="bg-white rounded-full p-2 mb-4 text-slate-400 relative">
        <BiWorld />{" "}
      </div>
      <div className="bg-white rounded-full p-2 mb-4 text-slate-400 relative">
        <AiFillLike />{" "}
      </div>
    </div>
  );
};

export default Sidebaricons;
