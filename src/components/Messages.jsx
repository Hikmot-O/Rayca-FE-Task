import React from "react";
const days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun"];
const date = new Date().getDate();
const day = new Date().getDay();
const Messages = () => {
  const text = [{}, {}, {}, {}, {}];
  const members = [{}, {}, {}, {}, {}, {}];
  const meetings = [{}, {}, {}, {}, {}, {}];
  return (
    <section className="p-8 h-screen overflow-y-auto w-[30%]">
      <div className="mb-3 flex items-center justify-between">
        <h3 className=" text-2xl font-bold">Recent Messages</h3>
        <p className="text-blue-500 text-sm">See all</p>
      </div>

      {text.map(() => (
        <div className="flex items-center gap-4 mb-4">
          <div className="w-10 h-10 rounded-full bg-gray-300"></div>
          <div className="">
            <p className="font-bold">Hikmot Okunola</p>
            <p className="text-gray-400">
              Hii, I am resuming as a volunteer soon!
            </p>
          </div>
        </div>
      ))}

      <div className="mb-3 flex items-center justify-between">
        <h3 className=" text-2xl font-bold">Team Members</h3>
        <p className="text-blue-500 text-sm">See all</p>
      </div>
      <div className="grid grid-cols-6">
        {members.map(() => (
          <div className="w-10 h-10 rounded-full bg-gray-300"></div>
        ))}
      </div>

      <div className="mt-5 mb-3">
        <h3 className="font-bold">Today's Task</h3>
        <p className="text-gray-400 text-sm">
          {days[day]} {date} Dec 2023
        </p>
      </div>

      {meetings.map(() => (
        <div className="mb-3 flex items-center justify-between h-20 p-4 rounded-xl bg-opacity-[30%] bg-gray-300">
          <div className="">
            <h4 className="font-medium">Meeting with Hikmot</h4>
            <p className="text-gray-400 text-sm">
              Reading last minute together
            </p>
          </div>
          <input className="bg-transparent border rounded-md" type="checkbox" />
        </div>
      ))}
    </section>
  );
};

export default Messages;
