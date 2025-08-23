import React from "react";
import Header from "../other/header";
import TaskListNumbers from "../other/TaskListNumber";
import TaskList from "../TaskList/TaskList";
const EmployeeDashboard = ({data}) => {
 
  return (
    <div className="p-4">
      <Header data={data}/>
      <TaskListNumbers data={data}/>
      <TaskList data={data}/>
    </div>
  );
};

export default EmployeeDashboard;
