import React from "react";
import AcceptTask from "./AcceptTask";
import NewTask from "./NewTask";
import CompleteTask from "./CompleteTask";
import FailTask from "./FailTask";

const TaskList = ( { data }) => {
 
  return (
    <div className="">
      <div className="flex items-center overflow-auto justify-start gap-6  flex-nowrap py-5 h-full w-full overflow-x-auto    mt-10 px-5">
        
    {data.tasks.map((item, index) => {
          if (item.active) {
            return <AcceptTask key={index} task={item} data={item}/>;
          }

          if (item.newTask) {
            return <NewTask key={index} task={item} data={item}/>;
          }

          if (item.completed) {
            return <CompleteTask key={index} task={item} data={item}/>;
          }

          if (item.failed) {
            return <FailTask key={index} task={item} data={item}/>;
          }

          return null; // fallback
        })}
        
       
        

      </div>
    </div>
  );
};

export default TaskList;
