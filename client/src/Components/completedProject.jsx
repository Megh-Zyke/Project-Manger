import React from "react";

const CompletedProject = (props) => {
const tasks = props.Tasks || [];

return (
<div className="box"> 
    <h1 className="CompanyName">{props.companyName}</h1>
    <h2 className="projectName">{props.name}</h2>
    <p className="projectDesc">{props.desc}</p>
    <h3 className="status">{props.status}</h3>
    <h3 className="Tasks">Tasksto be Completed</h3>
    <ul className="tasks" style={{textAlign:'center'}}>
                {tasks.map((task, index) => (
              <li key={index} >{task}</li>
            ))}
                </ul>
    <div className="Date">
    <h3 className="projectDeadLine">Deadline: <br />{props.date}</h3>
    <h3 classNam="completioDate">Completed: <br />{props.completionDate}</h3>
    </div>    
</div>)

};

export default CompletedProject;