import React from "react";
import NavDropdown from "react-bootstrap/NavDropdown";
import "../../styles/home.scss";
import { Link } from "react-router-dom";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Fade } from "reactstrap";
import PropTypes from "prop-types";
import { Context } from "../store/appContext.js";
export class Navbar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			modal: false
		};

		this.toggle = this.toggle.bind(this);
	}

	toggle() {
		this.setState(prevState => ({
			modal: !prevState.modal
		}));
	}

	render() {
		return (
			<Context.Consumer>
				{({ store, actions }) => {
					return (
						<div>
							<nav className="navbar navbar-expand-lg pb-0 navbar-light bg-light">
								<button
									className="navbar-toggler"
									type="button"
									data-toggle="collapse"
									data-target="#navbarTogglerDemo01"
									aria-controls="navbarTogglerDemo01"
									aria-expanded="false"
									aria-label="Toggle navigation">
									<span className="navbar-toggler-icon" />
								</button>
								<div className="collapse navbar-collapse" id="navbarTogglerDemo01">
									<Link to="/">
										<a className="navbar-brand" href="#">
											COOLIO TOYS
										</a>
									</Link>

									<ul className="navbar-nav mr-auto mt-2 mt-lg-0">
										{store.token === null ? (
											<React.Fragment>
												<li className="nav-item active">
													<Link to="/login">
														<a className="nav-link" href="#">
															SIGN IN
														</a>
													</Link>
												</li>
												<li className="nav-item active">
													<Link to="/createaccount">
														<a className="nav-link" href="#">
															SIGN UP
														</a>
													</Link>
												</li>
											</React.Fragment>
										) : (
											<li className="nav-item active">
												<Link to="/login">
													<a onClick={() => actions.logout()} className="nav-link" href="#">
														{" "}
														Logout{" "}
													</a>
												</Link>
											</li>
										)}

										{/*<NavDropdown title="CATEGORIES" id="basic-nav-dropdown">
								<NavDropdown.Item href="/gallery">TO/NavDropdown.Item>
								<NavDropdown.Item href="/gallery">BOARD GAMES</NavDropdown.Item>
								<NavDropdown.Item href="/gallery">COLLECTIBLES</NavDropdown.Item>
							</NavDropdown>*/}
										{store.token !== null && (
											<li className="nav-item active">
												<Link to="/cart">
													<a className="nav-link" href="#">
														<i className="fas fa-shopping-cart" />
														<span className="badge badge-success ml-2">
															{store.cart.length}
														</span>
													</a>
												</Link>
											</li>
										)}
										<li className="nav-item active">
											<div>
												{/*}
									<Button color="success" onClick={this.toggle}>
										Leave a review
										{this.props.buttonLabel}
									</Button>
                                    */}
												<Modal
													isOpen={this.state.modal}
													toggle={this.toggle}
													className={this.props.className}>
													<ModalHeader toggle={this.toggle}>
														Rate your overall experience
													</ModalHeader>
													<ModalBody>
														<div>
															<div className="d-flex justify-content-center ">
																<span className="rate-this-stars">
																	<h5 />
																	<ol className="rate-this-stars-list">
																		<button
																			type="button"
																			className="btn btn-outline-primary">
																			<i className="fas fa-star" />
																		</button>
																		<button
																			type="button"
																			className="btn btn-outline-primary">
																			<i className="fas fa-star" />
																		</button>
																		<button
																			type="button"
																			className="btn btn-outline-primary">
																			<i className="fas fa-star" />
																		</button>
																		<button
																			type="button"
																			className="btn btn-outline-primary">
																			<i className="fas fa-star" />
																		</button>
																		<button
																			type="button"
																			className="btn btn-outline-primary">
																			<i className="fas fa-star" />
																		</button>
																	</ol>
																</span>
															</div>
															<div className="d-flex justify-content-center">
																<span className="border border-success">
																	Thanks for your feed back{" "}
																	<i className="far fa-check-square" />{" "}
																</span>
															</div>
														</div>
													</ModalBody>
													<ModalFooter>
														<Button color="primary" onClick={this.toggle}>
															Done
														</Button>{" "}
														<Button color="secondary" onClick={this.toggle}>
															Cancel
														</Button>
													</ModalFooter>
												</Modal>
											</div>
										</li>
									</ul>
									{/*<form className="form-inline my-2 my-lg-0">
							<input
								className="form-control mr-sm-2"
								type="search"
								placeholder="Search"
								aria-label="Search"
							/>
							<button className="btn btn-outline-success my-2 my-sm-0" type="submit">
								Search
							</button>
						</form>*/}
								</div>
							</nav>
						</div>
					);
				}}
			</Context.Consumer>
		);
	}
}

Navbar.propTypes = {
	// boolean to control the state of the popover
	isOpen: PropTypes.bool,
	autoFocus: PropTypes.bool,
	// if modal should be centered vertically in viewport
	centered: PropTypes.bool,
	// corresponds to bootstrap's modal sizes, ie. 'lg' or 'sm'
	size: PropTypes.string,
	// callback for toggling isOpen in the controlling component
	toggle: PropTypes.func,
	role: PropTypes.string, // defaults to "dialog"
	// used to reference the ID of the title element in the modal
	labelledBy: PropTypes.string,
	keyboard: PropTypes.bool,
	// control backdrop, see http://v4-alpha.getbootstrap.com/components/modal/#options
	backdrop: PropTypes.oneOfType([PropTypes.bool, PropTypes.oneOf(["static"])]),
	// if body of modal should be scrollable when content is long
	scrollable: PropTypes.bool,
	// allows for a node/component to exist next to the modal (outside of it). Useful for external close buttons
	// external: PropTypes.node,
	// called on componentDidMount
	onEnter: PropTypes.func,
	// called on componentWillUnmount
	onExit: PropTypes.func,
	// called when done transitioning in
	onOpened: PropTypes.func,
	// called when done transitioning out
	buttonLabel: PropTypes.string,
	onClosed: PropTypes.func,
	className: PropTypes.string,
	wrapClassName: PropTypes.string,
	modalClassName: PropTypes.string,
	backdropClassName: PropTypes.string,
	contentClassName: PropTypes.string,
	// boolean to control whether the fade transition occurs (default: true)
	fade: PropTypes.bool,
	cssModule: PropTypes.object,
	// zIndex defaults to 1000.
	zIndex: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
	// backdropTransition - controls backdrop transition
	// timeout is 150ms by default to match bootstrap
	// see Fade for more details
	backdropTransition: PropTypes.shape(Fade.propTypes),
	// modalTransition - controls modal transition
	// timeout is 300ms by default to match bootstrap
	// see Fade for more details
	modalTransition: PropTypes.shape(Fade.propTypes),
	innerRef: PropTypes.object,
	// if modal should be destructed/removed from DOM after closing
	unmountOnClose: PropTypes.bool // defaults to true
};
