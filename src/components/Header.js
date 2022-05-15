import React from 'react';
import { Link } from "react-router-dom";
import './Header.css'

export default function Header() {

  return (
    <>
      <div>
        <header className="bg-light d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom" >
          <Link activeStyle={{ color:'#5754a8' }} to="/" className="mx-5 d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
              <img src={require("../logo.png")} className="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap"/>
          </Link>
          <ul className="nav col-12 col-md-auto mb-2 fs-5 justify-content-center mb-md-0">
            <li><Link to="/" className="nav-link px-2 link-dark" activeStyle={{ color:'#5754a8' }} >HOME</Link></li>
            <li><Link to="/journey" className="nav-link px-2 link-dark">THE JOURNEY</Link></li>
            <li><Link to="/team" className="nav-link px-2 link-dark">TEAM</Link></li>
            <li><Link to="/store" className="nav-link px-2 link-dark">STORE</Link></li>
            <li><Link to="/contact" className="nav-link px-2 link-dark">CONTACT</Link></li>
          </ul>
          <div className="col-md-3 text-end mx-5">
            <i className="fa-solid fa-user fa-2x"></i>
          </div>
        </header>
      </div>
    </>
  );
}
