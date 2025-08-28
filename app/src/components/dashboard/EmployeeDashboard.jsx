import React from "react";
import Header from "../other/header";
import TaskListNumbers from "../other/TaskListNumber";
import TaskList from "../TaskList/TaskList";
const EmployeeDashboard = (props) => {
 
  return (
    <div className="p-4">
      <Header changeUser={props.changeUser} data={props.data}/>
      <TaskListNumbers data={props.data}/>
      <TaskList data={props.data}/>
    </div>
  );
};

export default EmployeeDashboard;
