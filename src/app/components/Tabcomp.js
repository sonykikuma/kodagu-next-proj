"use client";

import React, { useState } from "react";
import Cardcomponent from "./Cardcomponent";

import { TfiMenuAlt } from "react-icons/tfi";
import { MdOutlineAttachment } from "react-icons/md";
import { FcAlarmClock } from "react-icons/fc";
import { BsThreeDots } from "react-icons/bs";
import { AiOutlinePlus } from "react-icons/ai";
import DevApp from "./DevApp";
import Link from "next/link";

import { LiaTasksSolid } from "react-icons/lia";
import { TbLayoutBoardSplit, TbTimeline } from "react-icons/tb";
import { SlCalender } from "react-icons/sl";
import { AiOutlineSearch } from "react-icons/ai";
import { FiMenu } from "react-icons/fi";
import { HiMenuAlt2 } from "react-icons/hi";
import Contentbox from "./Contentbox";

const Tabcomp = ({ color }) => {
  const [openTab, setOpenTab] = useState(1);
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full items-center ">
          <ul
            className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row items-center "
            role="tablist"
          >
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <Link
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-5 " +
                  (openTab === 1
                    ? "text-slate-700 border-b border-blue-500 bg-" +
                      color +
                      "-600"
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
                <div className="flex font-sans items-center gap-2">
                  <LiaTasksSolid /> List Tasks
                </div>
              </Link>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <Link
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-5 " +
                  (openTab === 2
                    ? "text-slate-700 border-b border-blue-500 bg-" +
                      color +
                      "-600"
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
                <div className="flex items-center gap-2 font-sans">
                  <TbLayoutBoardSplit /> Boards
                </div>
              </Link>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <Link
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-5 " +
                  (openTab === 3
                    ? "text-slate-700 border-b border-blue-500 bg-" +
                      color +
                      "-600"
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
                <div className="flex items-center gap-2 font-sans">
                  <SlCalender /> Calender
                </div>
              </Link>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <Link
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-5 " +
                  (openTab === 4
                    ? "text-slate-700 border-b border-blue-500 bg-" +
                      color +
                      "-600"
                    : "text-" + color + "-600 bg-white")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(4);
                }}
                data-toggle="tab"
                href="#link4"
                role="tablist"
              >
                <div className="flex items-center gap-2 font-sans">
                  <HiMenuAlt2 /> Gantt
                </div>
              </Link>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <Link
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-5 " +
                  (openTab === 5
                    ? "text-slate-700 border-b border-blue-500 bg-" +
                      color +
                      "-600"
                    : "text-" + color + "-600 bg-white")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(5);
                }}
                data-toggle="tab"
                href="#link5"
                role="tablist"
              >
                <div className="flex items-center gap-2 font-sans">
                  <FiMenu />
                  Timeline
                </div>
              </Link>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <Link
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-5 " +
                  (openTab === 6
                    ? "text-slate-700 border-b border-blue-500 bg-" +
                      color +
                      "-600"
                    : "text-" + color + "-600 bg-white")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(6);
                }}
                data-toggle="tab"
                href="#link6"
                role="tablist"
              >
                <div className="flex items-center gap-2">
                  <TbTimeline /> Activity
                </div>
              </Link>
            </li>
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
          </ul>

          <hr />
          <div className="tab-content tab-space">
            <div className={openTab === 1 ? "block" : "hidden"} id="link1">
              <Contentbox />{" "}
            </div>
            <div className={openTab === 2 ? "block" : "hidden"} id="link2">
              <Contentbox />{" "}
            </div>
            <div className={openTab === 3 ? "block" : "hidden"} id="link3">
              <Contentbox />{" "}
            </div>
            <div className={openTab === 4 ? "block" : "hidden"} id="link3">
              <Contentbox />{" "}
            </div>
            <div className={openTab === 5 ? "block" : "hidden"} id="link3">
              <Contentbox />{" "}
            </div>
            <div className={openTab === 6 ? "block" : "hidden"} id="link3">
              <Contentbox />{" "}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Tabcomp;

/*
          <div className="relative flex flex-col min-w-0 break-words  w-full mb-6 shadow-lg rounded">
            <div className="px-4 py-5 flex-auto">




*/
