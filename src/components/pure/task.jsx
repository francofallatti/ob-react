import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Task } from "../../models/task.class";
import "../../style/task.scss";

//this component return the info of task
const TaskComponent = ({ task }) => {
  useEffect(() => {
    console.log("Created Task");

    return () => {
      console.log(`Task: ${task.name} is going to unmount`);
    };
  }, [task]);

  return (
    <div>
      <h2 className="task-name">Name: {task.name}</h2>
      <h3>Description: {task.description}</h3>
      <h4>Livel: {task.level}</h4>
      <h5>This taks is: {task.copleted ? "COMPLETED" : "PENDING"}</h5>
    </div>
  );
};

TaskComponent.propTypes = {
  task: PropTypes.instanceOf(Task),
};

export default TaskComponent;
