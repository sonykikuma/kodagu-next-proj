"use client";

import React from "react";
import Cardcomponent from "./Cardcomponent";

import { TfiMenuAlt } from "react-icons/tfi";
import { MdOutlineAttachment } from "react-icons/md";
import { FcAlarmClock } from "react-icons/fc";
import { BsThreeDots } from "react-icons/bs";
import { AiOutlinePlus } from "react-icons/ai";
import DevApp from "./DevApp";
import Link from "next/link";

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

const Tabcomp = ({ color }) => {
  const [openTab, setOpenTab] = React.useState(1);
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full">
          <ul
            className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
            role="tablist"
          >
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <Link
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 1
                    ? "text-white bg-" + color + "-600"
                    : "text-" + color + "-600 bg-white")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(1);
                }}
                data-toggle="tab"
                href="#link1"
                role="tablist"
              >
                <div className="bg-white mt-5 w-[20%] rounded-lg border-l-2 border-purple-300 text-gray-700 text-base cursor-pointer">
                  <div className="flex gap-3 text-xs m-2 items-center font-semibold">
                    <div>TODO </div>
                    <div className="rounded-full border-[1px]  px-2 my-1">
                      {" "}
                      s
                    </div>
                    <div className="">
                      {" "}
                      <BsThreeDots size={30} className="text-slate-400 p-2" />
                    </div>
                    <div>
                      <AiOutlinePlus />
                    </div>
                  </div>
                </div>
              </Link>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <Link
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 2
                    ? "text-white bg-" + color + "-600"
                    : "text-" + color + "-600 bg-white")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(2);
                }}
                data-toggle="tab"
                href="#link2"
                role="tablist"
              >
                <div className="mt-5 bg-white w-[20%] rounded-lg border-l-2 border-blue-300 text-gray-700 text-base cursor-pointer">
                  <div className="flex gap-3 text-xs m-2 items-center font-semibold">
                    <div>IN WORK </div>
                    <div className="rounded-full border-[1px]  px-2 my-1">
                      {" "}
                      s
                    </div>
                    <div className="">
                      {" "}
                      <BsThreeDots size={30} className="text-slate-400 p-2" />
                    </div>
                    <div>
                      <AiOutlinePlus />
                    </div>
                  </div>
                </div>
              </Link>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <Link
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 3
                    ? "text-white bg-" + color + "-600"
                    : "text-" + color + "-600 bg-white")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(3);
                }}
                data-toggle="tab"
                href="#link3"
                role="tablist"
              >
                <div className="bg-white w-[20%] mt-5 rounded-lg border-l-2 border-orange-300 cursor-pointer text-gray-700 text-base ">
                  <div className="flex gap-3 text-xs m-2 items-center font-semibold">
                    <div>REVIEW</div>
                    <div className="rounded-full border-[1px]  px-2 my-1">
                      {" "}
                      s
                    </div>
                    <div className="">
                      {" "}
                      <BsThreeDots size={30} className="text-slate-400 p-2" />
                    </div>
                    <div>
                      <AiOutlinePlus />
                    </div>
                  </div>
                </div>
              </Link>
            </li>
          </ul>
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
            <div className="px-4 py-5 flex-auto">
              <div className="tab-content tab-space">
                <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                  <div className="m-4 p-4 w-[20%] sm:ml-10">
                    {data.map((cont) => (
                      <Cardcomponent {...cont} key={cont.name} />
                    ))}
                  </div>
                </div>
                <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                  <div className="m-4 p-4 w-[20%] sm:ml-10">
                    {dataCol2.map((cont) => (
                      <Cardcomponent {...cont} key={cont.name} />
                    ))}
                  </div>
                </div>
                <div className={openTab === 3 ? "block" : "hidden"} id="link3">
                  <div className="m-4 p-4 w-[20%] sm:ml-10">
                    {dataCol3.map((cont) => (
                      <Cardcomponent {...cont} key={cont.name} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Tabcomp;
