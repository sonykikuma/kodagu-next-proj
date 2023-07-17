import Image from "next/image";
import React from "react";
import { BsPersonCircle, BsThreeDots } from "react-icons/bs";

const Leftsection = () => {
  return (
    <div className="bg-gray-50 w-[10%] ">
      <div className="flex justify-between my-2">
        <div className="bg-white rounded-full">
          <BsPersonCircle size={30} className="text-slate-400 p-2" />
        </div>
        <div className="bg-white rounded-full">
          {" "}
          <BsThreeDots size={30} className="text-slate-400 p-2" />
        </div>
      </div>
      <div className=" item-center mx-2  ">
        <div className="  ">
          <Image
            src="/man.webp"
            alt=""
            width={40}
            height={50}
            className="hover:scale-110
            transition-transform duration-200 ease-out p-1 rounded-full items-center border-red-500 cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default Leftsection;