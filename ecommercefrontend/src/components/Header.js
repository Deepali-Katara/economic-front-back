import React from 'react'
import "./Header.css"
import {NavLink} from "react-router-dom"

export const Header = () => {
    return (
      <div>
 <nav className="navbar navbar-expand-lg  navbar-dark bg-dark">
        <div className="nav-container">
          <NavLink
                exact
                to="/"
              >
                Home
          </NavLink>
              <NavLink
                exact
                to="/login"
                 style={{marginLeft:"20px"}}
              >
                Login
              </NavLink>
          <NavLink
                exact
                to="/signup"
                style={{marginLeft:"20px"}}
              >
              Signup
          </NavLink>
              <NavLink
                exact
                to="/excelimport"
                 style={{marginLeft:"20px"}}
          >
              Excelimport
          </NavLink>
              <NavLink
                exact
                to="/excelexport"
                 style={{marginLeft:"20px"}}
              >
              Excelexport
          </NavLink>
              <NavLink
                exact
                to="/exportpdf"
                 style={{marginLeft:"20px"}}
              >
              Exportpdf
          </NavLink>
              <NavLink
                exact
                to="/screencapture"
                 style={{marginLeft:"20px"}}
              >
              Screencapture
          </NavLink>
           
          
        </div>
      </nav>

       </div>
    )
}
