import Image from "next/image";
import React from "react";
import { BsPersonCircle, BsThreeDots } from "react-icons/bs";
import Sidebargrid from "./Sidebargrid";
import { FaAddressCard, FaTelegramPlane } from "react-icons/fa";
import { MdEmail, MdCall } from "react-icons/md";
import { RiWhatsappFill } from "react-icons/ri";

const Leftsection = () => {
  return (
    <div className="bg-gray-50 w-[15%] mx-2">
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
        <div className="outline-[1px] outline-blue-500 rounded-full w-[130px] h-[130px] ">
          <Image
            src="/small.jpeg"
            alt=""
            width={110}
            height={110}
            className="hover:scale-110 justify-items-center
            transition-transform duration-200 ease-out p-2 rounded-full  border-red-500 cursor-pointer"
          />
        </div>
        <h3 className="items-center text-sm leading-7 text-[#6b7a99]">
          hello alfred bryan
        </h3>
        <p
          className="text-[#adb8cc]
leading-7"
        >
          xyz@yahoo.com
        </p>
      </div>
      <Sidebargrid />

      <div className="mt-20 flex outline outline-2 outline-gray-300 py-2 justify-around rounded-full">
        <div>
          <MdCall className="text-red-500" />
        </div>
        <div>
          {" "}
          <MdEmail className="text-green-500" />
        </div>
        <div>
          <FaAddressCard className="text-purple-500" />{" "}
        </div>
        <div>
          <FaTelegramPlane className="text-blue-500" />{" "}
        </div>
        <div>
          <RiWhatsappFill className="text-green-500" />{" "}
        </div>
      </div>
    </div>
  );
};

export default Leftsection;
