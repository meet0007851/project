import React from 'react';

const TaskListNumbers = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-10">
      
      {/* New Task */}
      <div className="rounded-xl py-6 px-9 shadow-lg bg-gradient-to-br from-emerald-400 to-emerald-500 hover:scale-105 transition-transform duration-300">
        <h2 className="text-3xl font-bold text-white">0</h2>
        <h3 className="text-xl mt-0.5 font-medium text-white">New Task</h3>
      </div>

      {/* Completed Task */}
      <div className="rounded-xl py-6 px-9 shadow-lg bg-gradient-to-br from-green-400 to-green-600 hover:scale-105 transition-transform duration-300">
        <h2 className="text-3xl font-bold text-white">0</h2>
        <h3 className="text-xl mt-0.5 font-medium text-white">Completed Task</h3>
      </div>

      {/* Accepted Task */}
      <div className="rounded-xl py-6 px-9 shadow-lg bg-gradient-to-br from-amber-300 to-yellow-400 hover:scale-105 transition-transform duration-300">
        <h2 className="text-3xl font-bold text-black">0</h2>
        <h3 className="text-xl mt-0.5 font-medium text-black">Accepted Task</h3>
      </div>

      {/* Failed Task */}
      <div className="rounded-xl py-6 px-9 shadow-lg bg-gradient-to-br from-red-400 to-red-600 hover:scale-105 transition-transform duration-300">
        <h2 className="text-3xl font-bold text-white">0</h2>
        <h3 className="text-xl mt-0.5 font-medium text-white">Failed Task</h3>
      </div>
    </div>
  );
};

export default TaskListNumbers;
