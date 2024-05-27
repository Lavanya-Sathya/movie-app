import React from "react";
import { FaStar } from "react-icons/fa";

const ShimmerCard = () => {
  let card = [];
  for (let i = 0; i < 10; i++) {
    card.push(
      <div
        key={i}
        className="w-[210px] h-[180px] hover:scale-95 my-2 rounded-lg  ring-1 ring-slate-900/5 shadow-md bg-white"
      >
        <div className=" border-b-[1px]">
          <p className="p-7  "></p>
        </div>
        <div className="p-2">
          <h1 className=" bg-gray-200 h-[20px] mb-3"></h1>
          <div className="flex justify-between items-center">
            <p className="flex items-center justify-center gap-1">
              <FaStar size={15} className="text-green-600" />
            </p>
            <button className="px-4 py-1 rounded-lg bg-gray-200 h-[30px] w-[30px] "></button>
          </div>
        </div>
      </div>
    );
  }
  return card;
};

export default ShimmerCard;
