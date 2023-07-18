import React from "react";

const Sidebargrid = () => {
  return (
    <div className="ml-2 mt-4">
      <div class=" grid grid-rows-4 divide-x divide-y grid-flow-col  bg-slate-300 rounded-lg">
        <div className="p-4 items-center">01</div>
        <div className="p-4 items-center">02</div>
        <div className="p-4 items-center">03</div>
        <div className="p-4 items-center">04</div>
        <div
          className="p-4 items-center hover:scale-120 hover:bg-white
            transition-transform duration-200 ease-out cursor-pointer"
        >
          05
        </div>
        <div className="p-4 items-center">06</div>
        <div className="p-4 items-center">07</div>
        <div className="p-4 items-center">08</div>
      </div>
    </div>
  );
};

export default Sidebargrid;
