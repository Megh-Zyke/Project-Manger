import React, { useState } from "react";
import { initialFormData } from "./formData"; // Import the initial form data
import axios from 'axios';


const NewProjectForm = (props) => {
  const [data, setData] = useState(initialFormData);

  var x;
  function handleChange(event) {
    const { name, value } = event.target;

    if (name === "tasks") {
        
        const tasksArray = value.split(",").map((task) => task.trim());
        
        
        setData((prevData) => ({
          ...prevData,
          [name]: tasksArray,
        }));
      } else {
        setData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      }
    }


    function handleSubmit(event) {
    
      console.log(data);
      axios.post('http://localhost:5000/register', data)
      .then(res => {
      console.log(res);}
      )
      .catch(err => {
      console.log(err);
      });
  
    }
  return (
    <div className="newProjectForm">
      <form onSubmit={props.handleSubmit}>
        <div>
          <label htmlFor="companyName">Company Name</label>
          <input
            type="text"
            id="companyName"
            name="companyName"
            value={data.companyName} 
            onChange={handleChange} 
          />
        </div>

        <div>
          <label htmlFor="name">Project Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={data.name} 
            onChange={handleChange} 
          />
        </div>

        <div>
          <label htmlFor="desc">Project Description</label>
          <input
            type="text"
            id="desc"
            name="desc"
            value={data.desc} 
            onChange={handleChange} 
          />
        </div>

        <div>
          <label htmlFor="date">Deadline</label>
          <input
            type="date"
            id="date"
            name="date"
            value={data.date} 
            onChange={handleChange} 
          />
        </div>

        <div>
          <label htmlFor="tasks">Tasks</label>
          <input
            type="text"
            id="tasks"
            name="tasks"
            value={data.tasks.join(", ")} 
            onChange={handleChange} 
          />
        </div>

        <div className="btn">
          <input type="submit" value="Submit" className="button" onClick={handleSubmit}/>
        </div>
      </form>

    </div>
  );
};

export default NewProjectForm;
