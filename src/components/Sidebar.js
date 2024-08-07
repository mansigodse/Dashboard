import React from 'react';
import '../style/Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <nav className="nav flex-column">
        <a className="nav-link" href="/">
          <i className="fa fa-home"></i>
        </a>
        <a className="nav-link" href="/">
          <i className="fa fa-list"></i>
        </a>
        <a className="nav-link" href="/">
          <i className="fa fa-users"></i>
        </a>
        <a className="nav-link" href="/">
          <i className="fa fa-chart-bar"></i>
        </a>
      </nav>
    </div>
  );
};

export default Sidebar;
