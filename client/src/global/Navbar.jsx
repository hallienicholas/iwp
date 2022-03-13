import React, { Component } from 'react';
import ProfileButton from "./ProfileButton";
import MessagesDropDown from './MessagesDropDown';

class Navbar extends Component {

	constructor(props){
		super(props);
		this.state = {}
	}

	render(){
		return(
			<nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
				<a className="mr-3 nav-item nav-link text-uppercase" href="/">Home</a>
				<a className="mr-3 nav-item nav-link text-uppercase" href="/about">About Us</a>
				<a className="mr-3 nav-item nav-link text-uppercase" href="/contact">Contact</a>
				<a className="mr-3 nav-item nav-link text-uppercase" href="http://iwp.cs.messiah.edu/about/faq.php">FAQ</a>
				<MessagesDropDown data={this.props.dangerData}/>
				<ProfileButton />
			</nav>
		);
	}
}

export default Navbar;