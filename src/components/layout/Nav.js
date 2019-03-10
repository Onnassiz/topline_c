import React from 'react';
import { Link } from "react-router-dom";
import profileImage from '../../img/profile.png'


const makeActive = (page) => {
  return window.location.pathname === page ? "active" : "";
};

const Nav = (props) => (
  <div>
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
      <Link className="navbar-brand" to="/">
        <span className="d-block d-lg-none">Top Line</span>
        <span className="d-none d-lg-block">
          <img className="img-fluid img-profile rounded-circle mx-auto mb-2" src={profileImage} alt="" />
        </span>
      </Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className={`${makeActive("/")} nav-link`} to="/">Tops</Link>
          </li>
          <li className="nav-item">
            <Link className={`${makeActive("/brands")} nav-link`} to="/brands">Brands</Link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
);

export default Nav;