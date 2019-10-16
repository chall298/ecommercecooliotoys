import React, { Component } from "react";
import { Link } from "react-router-dom";

export const Footer = () => (
	<div>
		<div className="card-header" />
		<div className="card-body">
			<div className="row">
				<div className="col">
					<button type="button" className="btn btn-primary">
						<i className="fab fa-facebook" />
						Facebook
					</button>
				</div>
				<div className="col">
					<button type="button" className="btn btn-danger">
						<i className="fab fa-instagram" />
						Instagram
					</button>
				</div>
				<div className="col">
					<button type="button" className="btn btn-primary">
						<i className="fab fa-twitter" />
						Twitter
					</button>
				</div>
				<div className="col">
					<Link to="/returnpolicy">
						<button type="button" className="btn btn-warning">
							Return Policy
						</button>
					</Link>
				</div>
			</div>
		</div>
	</div>
	// <footer className="footer mt-auto py-3 text-center">
	// 	<p>
	// 		Made with <i className="fa fa-heart text-danger" /> by{" "}
	// 		<a href="http://www.4geeksacademy.com">4Geeks Academy</a>
	// 	</p>
	// </footer>
);
