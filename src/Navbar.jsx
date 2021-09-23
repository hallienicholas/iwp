import React, { Component } from 'react';

function border(props){
	//Fill this in later. Will probably need the React Router dependency to do it.
}

class Navbar extends Component {
	render(){
		return(
			<nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
				<a className="mr-3 nav-item nav-link text-uppercase" href="/">Home</a>
				<a className="mr-3 nav-item nav-link text-uppercase" href="/">About Us</a>
				<a className="mr-3 nav-item nav-link text-uppercase" href="/">Contact</a>
				<a className="mr-3 nav-item nav-link text-uppercase" href="http://iwp.cs.messiah.edu/about/faq.php">FAQ</a>
				<a className="ml-auto mr-4" href="/"><i className="fas fa-envelope fa-2x"></i></a>
				<a className="ml-1 mr-4" href="/"><i className="fas fa-user fa-2x"></i></a>
			</nav>
		);
	}
}

export default Navbar;