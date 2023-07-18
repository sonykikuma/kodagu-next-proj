import React from "react";
import { GoDotFill } from "react-icons/go";
import { BsLink, BsArrowReturnRight, BsFlag } from "react-icons/bs";
import { RxCross1 } from "react-icons/rx";
import { LiaCommentSolid } from "react-icons/lia";
import { AiFillCloud } from "react-icons/ai";
import { BiChevronRight } from "react-icons/bi";
import { TbPlayerPlayFilled } from "react-icons/tb";

const DevApp = () => {
  return (
    <>
      <div className="rounded-md text-gray-600 text-sm p-8 absolute bottom-0 max-w-[1600px] right-0 m-6 bg-white">
        <div className="  p-2 flex items-center justify-between">
          <div className="flex space-x-2 items-center">
            <div>
              <GoDotFill className="text-blue-300" />
            </div>
            <div>development app</div>
            <div>
              <BsLink />
            </div>{" "}
          </div>

          <div>
            <RxCross1 />
          </div>
        </div>
        <div className="mt-2 flex gap-6 px-2">
          <div className="inline-flex gap-2">
            <BsArrowReturnRight className="text-gray-300" />
            <span> 4 subtask</span>{" "}
          </div>

          <div className="inline-flex gap-2 items-center">
            <BsFlag className="text-gray-300" />
            <span> priority enabled</span>
          </div>
        </div>
        <div className="mt-2 flex gap-6 px-2 ">
          <div className="inline-flex gap-2 items-center">
            <AiFillCloud className="text-gray-300" />
            <span> Files</span>{" "}
          </div>
          <div className="inline-flex gap-2 items-center">
            <LiaCommentSolid className="text-gray-300" />
            <span> 7 comments</span>{" "}
          </div>
        </div>
        <div className="flex justify-around items-center mt-2 mb-2">
          <div>
            <img
              className="h-5 rounded-full p-[1.5px] border-red-500 cursor-pointer hover:scale-110
        transition-transform duration-200 ease-out"
              src="/man.webp"
              alt=""
            />
          </div>
          <div>Tyler Norman</div>
        </div>

        <hr />
        {/*bottom part*/}
        <div className="flex justify-items-center items-center">
          {" "}
          <div className="">
            <div className="flex space-x-5 text-gray-400">
              <div>start date</div>
              <div>due date</div>
            </div>
            <div className="">
              {" "}
              <BiChevronRight className="justify-items-center" />
            </div>
            <div className="flex space-x-5">
              <div>sept 3, 9:00 pm</div>
              <div>sept 4, 9:00 pm</div>
            </div>
          </div>
          <div className="ml-2">
            <div className="bg-green-500 rounded-full cursor-pointer items-center p-1 ">
              <TbPlayerPlayFilled />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DevApp;
