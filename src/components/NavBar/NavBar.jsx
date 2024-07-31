// import React from 'react'
import '../NavBar/NavBar.css'
import {Link, NavLink} from "react-router-dom"
export default function NavBar() {
  return (
    <>
    <nav className="navbar navbar-expand-lg h-100">
  <div className="container">
    <Link className="navbar-brand startFrameWork" to='home'>START FRAMEWORK</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0 p-4">
        <li className="nav-item pe-4">
          <NavLink to='about' className="nav-link navBar-sm"  aria-current="page" href="#">ABOUT</NavLink>
        </li>
        <li className="nav-item pe-3">
          <NavLink to='portfolio' className="nav-link navBar-sm" href="#">PORTFOLIO</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to='contact' className="nav-link navBar-sm" href="#">CONTACT</NavLink>
        </li>
      </ul>
    </div>
  </div>
    </nav>
    </>
  )
}
