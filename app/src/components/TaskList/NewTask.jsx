    import React from 'react'
    
    function NewTask({data}) {
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
          <div className='mt-4'>
            <button className='bg-yellow-500'>Accept task</button>
          </div>
        </div>
    )


    }
    
    export default NewTask