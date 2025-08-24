import React from "react";
import AcceptTask from "./AcceptTask";
import NewTask from "./NewTask";
import CompleteTask from "./CompleteTask";
import FailTask from "./FailTask";

const TaskList = ( { data }) => {
  console.log(data)
  return (
    <div className="">
      <div className="flex items-center overflow-auto justify-start gap-6  flex-nowrap py-5 h-full w-full overflow-x-auto    mt-10 px-5">
        
      {data.tasks.map((item)=>{
        if(item.active){
          return <AcceptTask/>
        }
        if(item.NewTask){
          return <NewTask/>
        }
        if(item.complete){
          return <CompleteTask/>
        }
        if(item.Failed){
          return <FailTask/>
        }
      })}
        
       
        

      </div>
    </div>
  );
};

export default TaskList;
