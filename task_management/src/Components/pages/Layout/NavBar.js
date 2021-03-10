import React from "react";

import { Link, NavLink} from "react-router-dom";

const NavBar = () => {

    return (
         
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container">
            <div lassName="container-fluid">
                
                
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/Task">Ongoing task</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/Info">Info page</NavLink>
                        </li>
                        
                    </ul>
                </div>
            </div>
            </div>  
        </nav>
    )
}

export default NavBar;