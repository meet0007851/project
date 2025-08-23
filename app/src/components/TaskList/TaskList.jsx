import React from "react";
import AcceptTask from "./AcceptTask";

const TaskList = ( { data }) => {
  return (
    <div className="">
      <div className="flex items-center overflow-auto justify-start gap-6  flex-nowrap py-5 h-full w-full overflow-x-auto    mt-10 px-5">
        
        {/* Card 1 */}
       <AcceptTask/>

        {/* Card 2 */}
        <div className="h-[250px] w-[300px] bg-green-400 rounded-2xl shadow-lg p-6 flex flex-col justify-between text-white">
          <div className="flex justify-between items-center">
            <span className="bg-red-600 text-sm px-2 py-1 rounded-md font-semibold">High</span>
            <span className="text-sm">20 Feb 2024</span>
          </div>
          <h2 className="text-xl font-bold leading-snug">Make a youtube video</h2>
          <p className="text-sm opacity-90">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, aut?
          </p>
        </div>

        {/* Card 3 */}
        <div className="h-[250px] w-[300px] bg-blue-400 rounded-2xl shadow-lg p-6 flex flex-col justify-between text-white">
          <div className="flex justify-between items-center">
            <span className="bg-red-600 text-sm px-2 py-1 rounded-md font-semibold">High</span>
            <span className="text-sm">20 Feb 2024</span>
          </div>
          <h2 className="text-xl font-bold leading-snug">Make a youtube video</h2>
          <p className="text-sm opacity-90">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, aut?
          </p>
        </div>

        {/* Card 4 */}
        <div className="h-[250px] w-[300px] bg-amber-500 rounded-2xl shadow-lg p-6 flex flex-col justify-between text-white">
          <div className="flex justify-between items-center">
            <span className="bg-red-600 text-sm px-2 py-1 rounded-md font-semibold">High</span>
            <span className="text-sm">20 Feb 2024</span>
          </div>
          <h2 className="text-xl font-bold leading-snug">Make a youtube video</h2>
          <p className="text-sm opacity-90">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, aut?
          </p>
        </div>

      </div>
    </div>
  );
};

export default TaskList;
