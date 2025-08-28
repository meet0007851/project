import React from 'react'

function AcceptTask({data}) {
  return (
     <div className="h-[250px] w-[300px] bg-red-400 rounded-2xl shadow-lg p-6 flex flex-col justify-between text-white">
          <div className="flex justify-between items-center">
            <span className="bg-red-600 text-sm px-2 py-1 rounded-md font-semibold">{data.category}</span>
            <span className="text-sm">{data.taskDate}</span>
          </div>
          <h2 className="text-xl font-bold leading-snug">{data.taskTitle}</h2>
          <p className="text-sm opacity-90">
            {data.taskDescription}
          </p>
        <div className='flex justify-between  mt-5'>
            <button className='bg-green-400 px-1 py-2 text-sm'>mark as completed</button>
            <button className='bg-red-700 px-1 py-2 text-sm'>mark as failed</button>
        </div>
        </div>
        
  )
}

export default AcceptTask