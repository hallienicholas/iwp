import React, { Component } from 'react';
import {
	Link,
	//Redirect
  } from "react-router-dom";
  import ProfileButton from "./pages/ProfileButton";

class Navbar extends Component {
	render(){
		return(
			<nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
				<a className="mr-3 nav-item nav-link text-uppercase" href="/">Home</a>
				<Link className="mr-3 nav-item nav-link text-uppercase" to="/about">About Us</Link>
				<a className="mr-3 nav-item nav-link text-uppercase" href="/contact">Contact</a>
				<a className="mr-3 nav-item nav-link text-uppercase" href="http://iwp.cs.messiah.edu/about/faq.php">FAQ</a>
				<a className="ml-auto mr-4" href="/"><i className="fas fa-envelope fa-2x"></i></a>
				<ProfileButton />
			</nav>
		);
	}
}

export default Navbar;