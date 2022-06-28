import React from "react";
import {NavLink} from "react-router-dom"
import toggle from "./toggle.svg"

let Navbar = () =>{
    return(
        <>
            <div className="container">
                <div className="row">
                    <nav className="navbar navbar-expand-sm nav_bg navbar_bg" >
                        <div className="container-fluid">
                            <NavLink className="navbar-brand" to="/">Aliasger</NavLink>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
                                <img src={toggle} alt="toggle img"/>
                            </button>
                            <div className="collapse navbar-collapse" id="mynavbar">
                            <ul className="navbar-nav ms-auto">
                                <li className="nav-item">
                                <NavLink activeClassName="menu_active" className="nav-link active"  to="/">Home</NavLink>
                                </li>
                                <li className="nav-item">
                                <NavLink activeClassName="menu_active" className="nav-link" to="/about">About</NavLink>
                                </li>
                                <li className="nav-item">
                                <NavLink activeClassName="menu_active"  className="nav-link" to="/services">Services</NavLink>
                                </li>
                                <li className="nav-item">
                                <NavLink activeClassName="menu_active"  className="nav-link" to="contact">Contact</NavLink>
                                </li>
                            </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </>
    )
}

export default Navbar;