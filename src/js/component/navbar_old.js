import React from "react";
import { Link } from "react-router-dom";

export class Navbar_old extends React.Component {
	render() {
		return (
			<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
				<a className="navbar-brand" href="#">
					COOLIO-TOYS
				</a>
				<button
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation">
					<span className="navbar-toggler-icon" />
				</button>

				<div className="topnav-right">
					<a href="#search">Search</a>
					<a href="#about">About</a>
				</div>
			</nav>
		);
	}
}
