import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Project from './Components/project';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
  <App />
  </Router>
);


