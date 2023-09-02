import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import CompletedProject from './Components/completedProject';
import Nav from './Components/Nav';
import ProjectModule from './Components/project';
import ProjectsDetails from './project';
import { Route, Routes } from 'react-router-dom';
import NewProjectForm from './Components/newProjectForm';
import axios from 'axios';

function createCard(user) {
  return (
    <ProjectModule
      key={user._id}
      id={user._id}
      companyName={user.companyName}
      desc={user.desc}
      tasks={user.tasks}
      date={user.date}
      completionPercentage={user.completionPercentage}
      completedTasks={user.completedTasks} // Pass completedTasks as a prop
    />
  );
}

function allProjects(user) {
  return (
    <CompletedProject
      key={user._id}
      id={user._id}
      companyName={user.companyName}
      name={user.name}
      desc={user.desc}
      status={user.status}
      date={user.date}
      completionDate={user.completionDate}
      Tasks = {user.Tasks}
    />
  );
}

function App() {
  const [users, setUsers] = useState([]);
  const [completed , setCompleted] = useState([]);
  const [ongoing , setOngoing] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/getUsers')
      .then((response) => setUsers(response.data))
      .catch((err) => console.log(err));
  }, []);


  useEffect(() => {
    axios.get('http://localhost:5000/getUsersCompleted')
      .then((response) => setCompleted(response.data))
      .catch((err) => console.log(err));
  }, []);


  useEffect(() => {
    axios.get('http://localhost:5000/getUsersOngoing')
      .then((response) => setOngoing(response.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <Nav />
      <div className="Projects">
        <Routes>
          <Route path="/" element={ongoing.map(createCard)} />
          <Route path="/completed" element={completed.map(allProjects)} />
          <Route path="/allProjects" element={users.map(allProjects)} />
          <Route path="/addProjects" element={<NewProjectForm />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
