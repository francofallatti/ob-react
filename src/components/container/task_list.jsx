import React, { useState, useEffect } from "react";
import { Task } from "../../models/task.class";
import { LEVELS } from "../../models/levels.enum";
import TaskComponent from "../pure/task";

const TaskListComponent = () => {
  const defaultTask = new Task(
    "Example",
    "Default description...",
    false,
    LEVELS.NORMAL
  );

  //estado del compoente
  const [tasks, settasks] = useState(defaultTask);

  //control del ciclo de vida del compoente
  useEffect(() => {
    console.log("Task State has  been modified");

    return () => {
      console.log("Task component is going to unmount");
    };
  }, [tasks]);

  const changeCompleted = (id) => {
    console.log("cambiar estado de una tarea");
  };

  return (
    <div>
      <div>
        <h1>Your Tasks:</h1>
      </div>
      {/* TODO: map for coplete list */}
      <TaskComponent task={defaultTask}></TaskComponent>
    </div>
  );
};

export default TaskListComponent;
