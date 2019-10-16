import React from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

import "../../styles/demo.scss";

export class Login extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			username: "",
			email: ""
		};
	}
	render() {
		return (
			<Context.Consumer>
				{({ store, actions }) => {
					return (
						<div className="container">
							<body className="text-center">
								<div
									className="form-signin"
									style={{ width: "100%", maxWidth: "330px", padding: "15px", margin: " auto" }}>
									<h1 className="h3 mb-3 font-weight-normal">COOLIO-TOYS</h1>
									<h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
									<label htmlFor="inputEmail" className="sr-only">
										Email address
									</label>
									<input
										onChange={e => this.setState({ email: e.target.value })}
										type="email"
										id="inputEmail"
										className="form-control"
										placeholder="Email address"
										required=""
										autoFocus=""
									/>
									<label htmlFor="inputPassword" className="sr-only">
										username
									</label>
									<input
										onChange={e => this.setState({ username: e.target.value })}
										type="text"
										id="inputPassword"
										className="form-control"
										placeholder="Password"
										required=""
									/>
									<div className="checkbox mb-3">
										<label>
											<input type="checkbox" value="remember-me" /> Remember me
										</label>
									</div>
									<button
										onClick={() => actions.authenticateLogin(this.state.email, this.state.username)}
										className="btn btn-lg btn-primary btn-block"
										type="submit">
										Sign in
									</button>
									<Link to="createaccount">
										<button className="btn btn-lg btn-primary btn-block" type="button">
											Create Account
										</button>
									</Link>
									<p className="mt-5 mb-3 text-muted">© 2017-2019</p>
								</div>
							</body>
						</div>
					);
				}}
			</Context.Consumer>
		);
	}
}
