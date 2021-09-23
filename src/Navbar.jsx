import React, { Component } from 'react';

class Navbar extends Component {
	render(){
		return(
			<nav class="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
				<a class="mr-3 nav-item nav-link border-bottom-primary text-uppercase" href="index.html">Home</a>
				<a class="mr-3 nav-item nav-link text-uppercase" href="about-us.html">About Us</a>
				<a class="mr-3 nav-item nav-link text-uppercase" href="#">Contact</a>
				<a class="mr-3 nav-item nav-link text-uppercase" href="http://iwp.cs.messiah.edu/about/faq.php">FAQ</a>
				<a class="ml-auto mr-4" href="#"><i class="fas fa-envelope fa-2x"></i></a>
				<a class="ml-1 mr-4" href="#"><i class="fas fa-user fa-2x"></i></a>
			</nav>
			);
	}
}

export default Navbar;