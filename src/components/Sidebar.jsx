import React, { useState } from "react";
import tool from "../assets/tool.svg";

const Sidebar = () => {
  const [update, setUpdate] = useState(false);
  return (
    <section className="px-5 pt-10 overflow-y-auto h-screen z-[1] bg-gray-700 bg-opacity-[35%] w-[20%] text-[20px]">
      <div className="flex items-center gap-2 font-bold text-3xl pb-8">
        {/* Logo */}
        <div className="flex flex-col gap-1.5">
          <div className="flex gap-1.5">
            <div className="w-4 h-4 bg-white rounded-sm"></div>
            <div className="w-4 h-4 bg-white rounded-sm"></div>
          </div>
          <div className="flex gap-1.5">
            <div className="w-4 h-4 bg-white rounded-sm"></div>
            <div className="w-4 h-4 bg-white rounded-sm"></div>
          </div>
        </div>
        Task
      </div>
      <div className="text-[20px] text-gray-500 flex flex-col gap-5 ">
        <div className="flex items-center gap-5">
          <img src={tool} alt="tool svg" />
          <p className="text-white">Overview</p>
        </div>
        <div className="flex items-center gap-5">
          <img src={tool} alt="tool svg" />
          <p className="">Project</p>
        </div>
        <div className="flex items-center gap-5">
          <img src={tool} alt="tool svg" />
          <p className="">Activities</p>
          <div className="text-base text-white bg-red-500 w-7 h-7 rounded-[6px] flex items-center justify-center">
            16
          </div>
        </div>
        <div className="flex items-center gap-5">
          <img src={tool} alt="tool svg" />
          <p className="">Message</p>
          <div className="text-base text-white bg-red-500 w-7 h-7 rounded-[6px] flex items-center justify-center">
            3
          </div>
        </div>
        <div className="flex items-center gap-5">
          <img src={tool} alt="tool svg" />
          <p className="">Members</p>
        </div>
        <div className="flex items-center gap-5">
          <img src={tool} alt="tool svg" />
          <p className="">Settings</p>
        </div>
        <div className="flex items-center gap-5">
          <img src={tool} alt="tool svg" />
          <p className="">Calendar</p>
        </div>
        <div className="">
          <div className="relative flex items-center gap-5">
            <img src={tool} alt="tool svg" />
            <p className="">New Update</p>
            <div
              onClick={() => {
                setUpdate(!update);
              }}
              // onMouseOut={() => {
              //   setUpdate(!update);
              // }}
              className="text-white cursor-pointer text-base bg-red-500 w-7 h-7 rounded-[6px] flex items-center justify-center"
            >
              1
            </div>
          </div>
          {update && (
            <div className="text-white flex flex-col text-[15px] font-medium rounded-md z-[100000] left-[100px] p-5 absolute w-[250px] h-max bg-opacity-[30%] bg-gray-300">
              You have a new feature available today!
              <button className="mt-4 w-full rounded-md py-3 px-5 bg-blue-500 text-white">Update Now!</button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Sidebar;
