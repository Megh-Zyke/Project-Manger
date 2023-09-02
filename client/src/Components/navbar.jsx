import React from 'react';
import ctime from './time.jsx';
import {Link} from 'react-router-dom';

const NavBar = () => {
    return (

        <div className="navBar">
            <div className="name">
            
                <ul>
                    <li><i class="fa-solid fa-clipboard-check"></i></li>
                    <li>Taskify</li>
                </ul>
            </div>


            <div className="links">
                <ul>
                    <li> <Link to ="/">Current</Link></li>
                    <li><Link to ="/completed">Completed</Link></li>
                    <li><Link to ="/allProjects">All</Link></li>
                    <li><Link to ="/addProjects">Add Projects</Link></li>
                </ul>
               
            </div>

            {ctime()}
            

        </div>
    );
}

export default NavBar;