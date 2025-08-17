import React from "react";
import Header from "../other/header";
import TaskListNumbers from "../other/TaskListNumber";
import TaskList from "../TaskList/TaskList";
const EmployeeDashboard = () => {
  return (
    <div className="p-4">
      <Header />
      <TaskListNumbers/>
      <TaskList/>
    </div>
  );
};

export default EmployeeDashboard;
