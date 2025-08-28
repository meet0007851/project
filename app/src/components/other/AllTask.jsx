import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTask = ({ data }) => {
  const authData = useContext(AuthContext);

  return (
    <div className="bg-[#1c1c1c] p-6 rounded-2xl mt-6 shadow-xl border border-gray-700">
      {/* Header Row */}
      <div className="grid grid-cols-5 bg-gradient-to-r from-red-500 to-pink-500 text-white font-semibold rounded-lg py-3 px-4 sticky top-0 shadow-md">
        <h2 className="text-center">Employee Name</h2>
        <h3 className="text-center">New Task</h3>
        <h5 className="text-center">Active Task</h5>
        <h5 className="text-center">Completed</h5>
        <h5 className="text-center">Failed</h5>
      </div>

      {/* Body Rows */}
      <div className="max-h-72 overflow-y-auto mt-2">
        {authData.employees.map((item, idx) => (
          <div
            key={idx}
            className={`grid grid-cols-5 py-3 px-4 text-center transition-all duration-300 
              ${idx % 2 === 0 ? 'bg-[#2a2a2a]' : 'bg-[#1e1e1e]'} 
              hover:scale-[1.01] hover:shadow-md hover:bg-[#333333]`}
          >
            {/* Employee Name */}
            <h2 className="text-red-400 font-medium">{item.firstName}</h2>

            {/* New Task */}
            <h3 className="text-sm">
              <span className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-xs font-semibold">
                {item.taskCounts.newTask}
              </span>
            </h3>

            {/* Active */}
            <h5 className="text-sm">
              <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-xs font-semibold">
                {item.taskCounts.active}
              </span>
            </h5>

            {/* Completed */}
            <h5 className="text-sm">
              <span className="bg-yellow-500/20 text-yellow-400 px-3 py-1 rounded-full text-xs font-semibold">
                {item.taskCounts.completed}
              </span>
            </h5>

            {/* Failed */}
            <h5 className="text-sm">
              <span className="bg-purple-500/20 text-purple-400 px-3 py-1 rounded-full text-xs font-semibold">
                {item.taskCounts.failed}
              </span>
            </h5>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AllTask
