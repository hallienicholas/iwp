import React, {Component} from 'react';
import {
  Link,
  //Redirect
} from "react-router-dom";
import PumpList from './PumpList';

class Sidebar extends Component {
  render(){    

    return(
      <ul id="accordionSidebar" className="bg-gradient-primary accordion navbar-nav sidebar sidebar-dark">
      <a className="sidebar-brand d-flex align-items-center justify-content-center mt-2 mb-2" href="/">
        <div className="sidebar-brand-text mx-3">
          Intelligent Water Project
        </div>
        <div className="sidebar-brand-icon">
          <img className="mt-3 mr-auto ml-auto mb-3" alt="The logo of IWP, a water droplet." display="inline" width="40px" height="55px" src="../img/minimallogo.png"></img>
        </div>
      </a>
      <hr className="sidebar-divider"></hr>
      <div className="sidebar-heading">Dashboard</div>
      <li className="nav-item">
        <a className="nav-link" href="/">
          <i className="fas fa-fw fa-home">
          </i>
          <span>Dashboard</span>
        </a>
      </li>
      <hr className="sidebar-divider"></hr>
      <div className="sidebar-heading">Map</div>
      <li className="nav-item">
        <a className="nav-link" href="./Map">
          <i className="fas fa-fw fa-map">
          </i>
          <span>Map</span>
        </a>
      </li>
      <hr className="sidebar-divider"></hr>
      <div className="sidebar-heading">Pumps</div>
      <li className="nav-item">
        <a className="nav-link" href="./pump">
          <i className="fas fa-fw fa-faucet"></i>
          <span className>Pumps</span>
        </a>
      </li>
      <hr className="sidebar-divider"></hr>
      <div className='sidebar-heading'>Settings</div>
      <li className='nav-item'>
        <a className='nav-link' href='./user'>
          <i className='fas fa-user'></i>
          <span>User Settings</span>
        </a>
      </li>
      <li className='nav-item'>
        <a className='nav-link' href="./messages">
          <i className='fas fa-envelope'></i>
          <span>Messages</span>
        </a>
      </li>
      </ul>
    );
  }
}

export default Sidebar;