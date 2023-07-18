import React from "react";
import { TfiMenuAlt } from "react-icons/tfi";
import { MdOutlineAttachment } from "react-icons/md";
import { FcAlarmClock } from "react-icons/fc";

const Cardcomponent = () => {
  return (
    <div>
      <div class="max-w-sm rounded overflow-hidden shadow-lg ">
        <img class="w-full" src="/man.webp" alt="Sunset in the mountains" />
        <div class="px-6 py-4">
          <div class=" text-xs mb-2"></div>
          <p class="text-gray-700 ">space task2</p>
        </div>
        <h2 className="items-center px-1">Make Money Online Through</h2>
        <div class="px-1 items-center pt-4 pb-2 flex">
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            <TfiMenuAlt />
          </span>
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            <MdOutlineAttachment />
          </span>
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            <FcAlarmClock />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Cardcomponent;
