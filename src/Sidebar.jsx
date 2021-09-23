import React, { Component } from 'react';

class Sidebar extends Component {
  render(){
    return(
      <ul id="accordionSidebar" className="bg-gradient-primary accordion navbar-nav sidebar sidebar-dark">
      <a className="sidebar-brand d-flex align-items-center justify-content-center mt-2 mb-2" href="index.html">
        <div className="sidebar-brand-text mx-3">
          Intelligent Water Project
        </div>
        <div className="sidebar-brand-icon">
          <img className="mt-3 mr-auto ml-auto mb-3" display="inline" width="40px" height="55px" src="../img/minimallogo.png"></img>
        </div>
      </a>
      <hr className="sidebar-divider"></hr>
      <div className="sidebar-heading">Dashboard</div>
      <li className="nav-item">
        <a className="nav-link" href="index.html">
          <i className="fas fa-fw fa-home">
          </i>
          <span>Dashboard</span>
        </a>
      </li>
      <hr className="sidebar-divider"></hr>
      <div className="sidebar-heading">Pumps</div>
      <li className="nav-item">
        <a className="nav-link" href="http://iwp.cs.messiah.edu/about/">
          <i className="fas fa-fw fa-faucet">
          </i>
          <span>Pump #1</span>
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="http://iwp.cs.messiah.edu/about/contact.php">
          <i className="fas fa-fw fa-faucet">
          </i>
          <span>Pump #2</span>
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="http://iwp.cs.messiah.edu/about/faq.php">
          <i className="fas fa-fw fa-faucet">
          </i>
          <span>Pump #3</span>
        </a>
        </li>
      </ul>
    );
  }
}

export default Sidebar;