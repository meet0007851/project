import React from 'react'

function CompleteTask() {
  return (
    <div className="h-[250px] w-[300px] bg-green-400 rounded-2xl shadow-lg p-6 flex flex-col justify-between text-white">
          <div className="flex justify-between items-center">
            <span className="bg-red-600 text-sm px-2 py-1 rounded-md font-semibold">High</span>
            <span className="text-sm">20 Feb 2024</span>
          </div>
          <h2 className="text-xl font-bold leading-snug">Make a youtube video</h2>
          <p className="text-sm opacity-90">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, aut?
          </p>
            <div className='mt-3'>
          <button className='w-full bg-red-800'>CompleteTask</button>
        </div>
        </div>
  )
}

export default CompleteTask