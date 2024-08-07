import React from 'react';
import '../style/Header.css';

const Header = () => {
  return (
    <nav className="navbar navbar-dark bg-dark header">
      <form className="form-inline search-form">
        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
      </form>
      <div className="ml-auto nav-icons d-flex">
        <a href="#notifications" className="nav-link">
          <i className="fa fa-bell"></i>
        </a>
        <a href="#messages" className="nav-link">
          <i className="fa fa-envelope"></i>
        </a>
        <a href="#profile" className="nav-link">
          <i className="fa fa-user"></i>
        </a>
      </div>
    </nav>
  );
};

export default Header;
