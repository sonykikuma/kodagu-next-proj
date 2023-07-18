import React from "react";
import { TfiMenuAlt } from "react-icons/tfi";
import { MdOutlineAttachment } from "react-icons/md";
import { FcAlarmClock } from "react-icons/fc";

const Cardcomponent = (props) => {
  return (
    <div className="pb-2">
      <div class="max-w-sm rounded overflow-hidden shadow-lg ">
        <img class="w-full" src={props.img1} alt="" />
        <div class="p-4 justify-between flex">
          <div class=" text-xs mb-2 text-gray-700">space task2</div>
          <div>
            <img
              className="h-5 rounded-full p-[1.5px] border-red-500 cursor-pointer hover:scale-110
        transition-transform duration-200 ease-out"
              src="/man.webp"
              alt=""
            />
          </div>
        </div>
        <h2 className="items-center px-1">{props.content}</h2>
        <div class="px-1 items-center pt-4 pb-2 flex">
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            {props.icon1}
          </span>
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            {props.icon2}
          </span>
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            {props.icon3}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Cardcomponent;
