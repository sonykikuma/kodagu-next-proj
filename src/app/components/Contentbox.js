import React from "react";
import { BsThreeDots } from "react-icons/bs";
import { AiOutlinePlus } from "react-icons/ai";
import Cardcomponent from "./Cardcomponent";
import { TfiMenuAlt } from "react-icons/tfi";
import { MdOutlineAttachment } from "react-icons/md";
import { FcAlarmClock } from "react-icons/fc";
import DevApp from "./DevApp";

const data = [
  {
    name: "",
    content: "Make Money Online Through",
    img1: "/man.webp",
    icon1: <TfiMenuAlt />,
    icon2: <MdOutlineAttachment />,
    icon3: <FcAlarmClock />,
  },
  {
    name: "",
    content: "Make Money Online Through",
    img1: "",
  },
  {
    name: "",
    content: "Search Engine Optimization..",
    img1: "",
  },
  {
    name: "",
    content: "Characteristics of a successful",
    img1: "",
  },
  {
    name: "",
    content: "getting free publicity",
    img1: "",
  },
  {
    name: "",
    content: "Importance of the custom..",
    img1: "",
  },
];

const dataCol2 = [
  {
    name: "",
    content: "Types of paper in catalog",
    img1: "",
  },
  {
    name: "",
    content: "Global Resorts Network",
    img1: "/man.webp",
    icon1: <TfiMenuAlt />,
    icon2: <MdOutlineAttachment />,
    icon3: <FcAlarmClock />,
  },
  {
    name: "",
    content: "Development Apps",
    img1: "",
  },
  {
    name: "",
    content: "copper canyon",
    img1: "",
    icon1: <TfiMenuAlt />,
    icon2: <MdOutlineAttachment />,
    icon3: <FcAlarmClock />,
  },
];

const dataCol3 = [
  {
    name: "",
    content: "Astronomy or astrology",
    img1: "",
  },
  {
    name: "",
    content: "Astronomy binoculars are great",
    img1: "",
  },
];
const dataCol4 = [
  {
    name: "",
    content: "copper canyon",
    img1: "",
  },
];

const Contentbox = () => {
  return (
    <>
      <div className="box-border border-2  m-4 ">
        <div className="w-[90%] flex  h-[80%]  rounded-md mx-auto justify-center  ">
          <div className="mt-5 w-[20%] sm:ml-10">
            <div className="bg-white mb-10 p-1 rounded-lg border-l-2 border-purple-300 text-gray-700 text-base cursor-pointer">
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

            {data.map((cont) => (
              <Cardcomponent {...cont} key={cont.name} />
            ))}
          </div>
          <div className="mt-5 w-[20%] sm:ml-10">
            <div className="mb-10 bg-white p-1 rounded-lg border-l-2 border-blue-300 text-gray-700 text-base cursor-pointer">
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

            {dataCol2.map((cont) => (
              <Cardcomponent {...cont} key={cont.name} />
            ))}
          </div>
          <div className="mt-5 w-[20%] sm:ml-10">
            <div className="bg-white p-1 mb-10 rounded-lg border-l-2 border-orange-300 cursor-pointer text-gray-700 text-base ">
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

            {dataCol3.map((cont) => (
              <Cardcomponent {...cont} key={cont.name} />
            ))}
          </div>
          <div className="mt-5 w-[20%] sm:ml-10">
            <div className="bg-white p-1 mb-10 rounded-lg border-l-2 border-green-400 cursor-pointer text-gray-700 text-base ">
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
            {dataCol4.map((cont) => (
              <Cardcomponent {...cont} key={cont.name} />
            ))}
          </div>
        </div>
      </div>
      <div className="relative mr-2 m-4">
        <DevApp />
      </div>
    </>
  );
};

export default Contentbox;
//3.           <div className="flex">
