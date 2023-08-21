import React from "react";
import { TASKS } from "../data";
import Task from "./Task";
function TaskList() {
  return (
    <div className="tasks">
      {/* display a list of tasks using Task component */}
      {TASKS.map(task => (
        <Task key={task.id} task={task} />
      ))}
    </div>
  );
}

export default TaskList;






