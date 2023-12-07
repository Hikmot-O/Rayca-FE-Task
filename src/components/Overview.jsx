import React, { useState } from "react";

// const projects = [
//   { satus: "Upcoming" },
//   { satus: "In Progress" },
//   { status: "Completed" },
// ];

const data = [
  //   {
  // july: [
  "July 20",
  "Aug 4",
  "Aug 15",
  "Aug 29",
  "Sept 6",
  "Sept 13",
  "Sept 18",
  "Sept 18",
  // ],
  //   },
  //   {
  //     october: [
  //       "Oct 20",
  //       "Nov 4",
  //       "Nov 15",
  //       "Nov 29",
  //       "Dec 6",
  //       "Dec 13",
  //       "Dec 18",
  //       "Dec 18",
  //     ],
  //   },
];

const options = [
  { value: "july", label: "July - September" },
  { value: "october", label: "October - December" },
];

const Overview = () => {
  const [month, setMonth] = useState("");
  const [projects, setProjects] = useState([{ satus: "Upcoming" }, { satus: "In Progress" }, { status: "Completed" }],);

  return (
    <section className="overflow-y-auto pl-[60px] pr-10 pt-10 w-[50%] border-r">
      <div className=" flex items-center justify-between">
        <input
          className="p-4 w-[350px] h-10 rounded-md bg-transparent border-gray-600 border"
          placeholder="Search for everything"
          type="text"
        />
        <div className="w-10 h-10 rounded-md bg-opacity-[30%] bg-gray-300"></div>
      </div>

      <div className="mt-9 flex items-center justify-between ">
        <h3 className=" font-bold text-2xl">Project Summary</h3>
        <button className="w-max rounded-md py-2 px-3 bg-blue-500 text-white" onClick={()=>{setProjects(former =>[{ satus: "Upcoming" }, ...former])}}>
            
          Add Project
        </button>
      </div>
      <p className="mt-2">Add new project and manage all of project</p>

      <div className="mt-5 mb-10 grid grid-cols-3 gap-9">
        {projects.map((project) => (
          <div className="bg-orange-300 rounded-2xl h-[180px] w-auto"></div>
        ))}
      </div>

      <div className="flex items-center justify-between">
        <h4 className="font-medium">Timeline of the year</h4>
        <select
          // options={options}
          className="outline-none text-gray-400 text-sm flex items-center p-2 pr-3 rounded-xl bg-opacity-[30%] bg-gray-300"
          name=""
          id=""
          //   value=
          //   autoFocus={true}
          onChange={(e) => {
            setMonth(e.target.value);
          }}
        >
          <option value="July">July - September</option>
          <option value="October">October - December</option>
        </select>
        {/* <div className="rounded-lg h-5 p-2">July-september</div> */}
      </div>

      {/* Stats */}
      <div className="mt-4 w-full flex items-center justify-between">
        {data.map((val) => (
          <p className="text-gray-400">{val}</p>
        ))}
      </div>
    </section>
  );
};

export default Overview;
