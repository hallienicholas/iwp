import React, { Component } from 'react';

class LoginRibbon extends Component {
	render(){
		return(
			<ul id="accordionSidebar" className="bg-gradient-primary accordion navbar-nav sidebar col-4 sidebar-dark">
		      <div className="sidebar-brand d-flex align-items-center justify-content-center mt-auto mb-auto" href="/">
		        <div className="font-weight-bold h3 sidebar-brand-text mx-3">
		          Intelligent<br />
				  Water <br />
				  Project<br />
		        </div>
		        <div className="sidebar-brand-icon">
		          <img className="mt-3 mr-auto ml-auto mb-3" alt="The logo of IWP, a water droplet" display="inline" width="40px" height="55px" src="../img/minimallogo.png"></img>
		        </div>
		      </div>
		    </ul>
		);
	}
}

export default LoginRibbon;