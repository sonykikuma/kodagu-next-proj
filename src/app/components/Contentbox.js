import React from "react";
import { BsThreeDots } from "react-icons/bs";
import { AiOutlinePlus } from "react-icons/ai";
import Cardcomponent from "./Cardcomponent";

const Contentbox = () => {
  return (
    <>
      <div className="box-border border-2  m-4 ">
        <div className="w-[90%] flex gap-5 h-[80%] mt-10 rounded-md mx-auto justify-center  items-start  ">
          <div className="bg-white mt-5 w-[20%] rounded-lg border-l-2 border-purple-300 text-gray-700 text-base cursor-pointer">
            <div className="flex gap-3 text-xs m-2 items-center font-semibold">
              <div>TODO </div>
              <div className="rounded-full border-[1px]  px-2 my-1"> s</div>
              <div className="">
                {" "}
                <BsThreeDots size={30} className="text-slate-400 p-2" />
              </div>
              <div>
                <AiOutlinePlus />
              </div>
            </div>
          </div>

          <div className="mt-5 bg-white w-[20%] rounded-lg border-l-2 border-blue-300 text-gray-700 text-base cursor-pointer">
            <div className="flex gap-3 text-xs m-2 items-center font-semibold">
              <div>IN WORK </div>
              <div className="rounded-full border-[1px]  px-2 my-1"> s</div>
              <div className="">
                {" "}
                <BsThreeDots size={30} className="text-slate-400 p-2" />
              </div>
              <div>
                <AiOutlinePlus />
              </div>
            </div>
          </div>

          <div className="bg-white w-[20%] mt-5 rounded-lg border-l-2 border-orange-300 cursor-pointer text-gray-700 text-base ">
            <div className="flex gap-3 text-xs m-2 items-center font-semibold">
              <div>REVIEW</div>
              <div className="rounded-full border-[1px]  px-2 my-1"> s</div>
              <div className="">
                {" "}
                <BsThreeDots size={30} className="text-slate-400 p-2" />
              </div>
              <div>
                <AiOutlinePlus />
              </div>
            </div>
          </div>

          <div className="bg-white w-[20%] mt-5 rounded-lg border-l-2 border-green-400 cursor-pointer text-gray-700 text-base ">
            <div className="flex gap-3 text-xs m-2 items-center font-semibold">
              <div>DONE </div>
              <div className="rounded-full border-[1px]  px-2 my-1"> s</div>
              <div className="">
                {" "}
                <BsThreeDots size={30} className="text-slate-400 p-2" />
              </div>
              <div>
                <AiOutlinePlus />
              </div>
            </div>
          </div>
        </div>{" "}
        <div className="m-4 p-4 w-[20%] sm:ml-10">
          <Cardcomponent />
        </div>
      </div>
    </>
  );
};

export default Contentbox;
