import React , { useState } from "react";
import DateConv from "./date.jsx";
import axios from 'axios'


const ProjectModule = (props) =>{


  
    const tasks = props.tasks || [];
    const date = props.date || "No date set";

    var text = DateConv(date)[0];
    const deadline = DateConv(date)[1];
    

    const [completedTasks, setCompletedTasks] = useState(0);
    
    const handleCheckboxClick = (index, isChecked , id) => {
        setCompletedTasks((prevCompletedTasks) =>
          isChecked
            ? prevCompletedTasks + 1
            : prevCompletedTasks > 0
            ? prevCompletedTasks - 1
            : 0
        );

        console.log(id , index);
        axios.post('http://localhost:5000/checked', {id , index})

        window.location.reload();
       
      };

    const completionPercentage =
      tasks.length > 0 ? (completedTasks / tasks.length) * 100 : 0;
  
    return (

        <div>
        <div className="projectModule">
            <div className="project">
                <h1>{props.companyName}</h1>
                <p>{props.desc}</p>
                <ul className="tasks">
                {tasks.map((task, index) => (
              <li key={index}>
                <input type="checkbox" name = {props.id}  onClick={ (e) => 
                   {handleCheckboxClick(index, e.target.checked , e.target.name) ; 
                    }
                  } />{task}</li>
            ))}
                </ul>
            </div>
            <div className="percentageCompleted">{props.completionPercentage}% Completed</div>
            <div className="completionBar">
                <div className="CompletedBar"  
                style={{ width: completionPercentage + "%" }} ></div>
            </div>
            <div className="timeRemaining">
                <h1 className="deadLine">Deadline</h1>
                <p className="date">{deadline.toLocaleDateString("en-GB")}</p>
                <p className="daysLeft">{props.completionPercentage >= 100 ? 'Task Completed!' : String(text)}</p>
            </div>
        </div>
        </div>
);
}

export default ProjectModule;