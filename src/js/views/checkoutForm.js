import React from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

import "../../styles/demo.scss";

export class CheckoutForm extends React.Component {
	render() {
		return (
			<div className="container">
				<div className="py-5 text-center">
					<img
						className="d-block mx-auto mb-4"
						src="/docs/4.3/assets/brand/bootstrap-solid.svg"
						alt=""
						width="72"
						height="72"
					/>
					<h2>Almost Done</h2>
					<p className="lead">
						Thanks for buying the most espectacular toys from COOLIO-TOYS, satisfaction guaranteed!!!
					</p>
				</div>
				<div className="row">
					{/*<Context.Consumer>
						{({ store, actions }) => {
							return store.cartItem.map((elem, index) => {
								return (
									<div className="col-md-4 order-md-2 mb-4" key={index}>
										<h4 className="d-flex justify-content-between align-items-center mb-3">
											<span className="text-muted">Your cart</span>
											<span className="badge badge-secondary badge-pill">3</span>
										</h4>
										<ul className="list-group mb-3">
											<li className="list-group-item d-flex justify-content-between lh-condensed">
												<div>
													<h6 className="my-0">{elem.name}</h6>
													<small className="text-muted">{elem.description}</small>
												</div>
												<span className="text-muted">{elem.price}</span>
											</li>

											<li className="list-group-item d-flex justify-content-between">
												<span>Total (USD)</span>
												<strong>price</strong>
											</li>
										</ul>

										<form className="card p-2">
											<div className="input-group">
												<input type="text" className="form-control" placeholder="Promo code" />
												<div className="input-group-append">
													<button type="submit" className="btn btn-secondary">
														Redeem
													</button>
												</div>
											</div>
										</form>
									</div>
								);
							});
						}}
					</Context.Consumer>*/}

					<div className="col">
						<h4 className="mb-3">Billing address</h4>
						<form className="needs-validation" noValidate="">
							<hr className="mb-4" />

							<div className="row">
								<div className="col-md-6 mb-3">
									<label htmlFor="firstName">First name</label>
									<input
										type="text"
										className="form-control"
										id="firstName"
										placeholder=""
										value=""
										required=""
									/>
									<div className="invalid-feedback">Valid first name is required.</div>
								</div>
								<div className="col-md-6 mb-3">
									<label htmlFor="lastName">Last name</label>
									<input
										type="text"
										className="form-control"
										id="lastName"
										placeholder=""
										value=""
										required=""
									/>
									<div className="invalid-feedback">Valid last name is required.</div>
								</div>
							</div>
							<div className="mb-3">
								<label htmlFor="username">Username</label>
								<div className="input-group">
									<div className="input-group-prepend">
										<span className="input-group-text">@</span>
									</div>
									<input
										type="text"
										className="form-control"
										id="username"
										placeholder="Username"
										required=""
									/>
									<div className="invalid-feedback" style={{ width: "100%;" }}>
										Your username is required.
									</div>
								</div>
							</div>
							<div className="mb-3">
								<label htmlFor="email">
									Email <span className="text-muted">(Optional)</span>
								</label>
								<input type="email" className="form-control" id="email" placeholder="you@example.com" />
								<div className="invalid-feedback">
									Please enter a valid email address for shipping updates.
								</div>
							</div>

							<div className="mb-3">
								<label className="address">Address</label>
								<input
									type="text"
									className="form-control"
									id="address"
									placeholder="1234 Main St"
									required=""
								/>
								<div className="invalid-feedback">Please enter your shipping address.</div>
							</div>

							<div className="mb-3">
								<label className="address2">
									Address 2 <span className="text-muted">(Optional)</span>
								</label>
								<input
									type="text"
									className="form-control"
									id="address2"
									placeholder="Apartment or suite"
								/>
							</div>
							<div className="row">
								<div className="col-md-5 mb-3">
									<label htmlFor="country">Country</label>
									<select className="custom-select d-block w-100" id="country" required="">
										<option value="">Choose...</option>
										<option>United States</option>
									</select>
									<div className="invalid-feedback">Please select a valid country.</div>
								</div>
								<div className="col-md-4 mb-3">
									<label htmlFor="state">State</label>
									<select className="custom-select d-block w-100" id="state" required="">
										<option value="">Choose...</option>
										<option>California</option>
									</select>
									<div className="invalid-feedback">Please provide a valid state.</div>
								</div>
								<div className="col-md-3 mb-3">
									<label htmlFor="zip">Zip</label>
									<input type="text" className="form-control" id="zip" placeholder="" required="" />
									<div className="invalid-feedback">Zip code required.</div>
								</div>
							</div>
							<hr className="mb-4" />
							<div className="custom-control custom-checkbox">
								<input type="checkbox" className="custom-control-input" id="same-address" />
								<label className="custom-control-label" htmlFor="same-address">
									Shipping address is the same as my billing address
								</label>
							</div>
							<div className="custom-control custom-checkbox">
								<input type="checkbox" className="custom-control-input" id="save-info" />
								<label className="custom-control-label" htmlFor="save-info">
									Save this information for next time
								</label>
							</div>
							<hr className="mb-4" />

							<h4 className="mb-3">Payment</h4>

							<div className="d-block my-3">
								<div className="custom-control custom-radio">
									<input
										id="credit"
										name="paymentMethod"
										type="radio"
										className="custom-control-input"
										checked=""
										required=""
									/>
									<label className="custom-control-label" htmlFor="credit">
										Credit card
									</label>
								</div>
								<div className="custom-control custom-radio">
									<input
										id="debit"
										name="paymentMethod"
										type="radio"
										className="custom-control-input"
										required=""
									/>
									<label className="custom-control-label" htmlFor="debit">
										Debit card
									</label>
								</div>
								<div className="custom-control custom-radio">
									<input
										id="paypal"
										name="paymentMethod"
										type="radio"
										className="custom-control-input"
										required=""
									/>
									<label className="custom-control-label" htmlFor="paypal">
										PayPal
									</label>
								</div>
							</div>
							<div className="row">
								<div className="col-md-6 mb-3">
									<label htmlFor="cc-name">Name on card</label>
									<input
										type="text"
										className="form-control"
										id="cc-name"
										placeholder=""
										required=""
									/>
									<small className="text-muted">Full name as displayed on card</small>
									<div className="invalid-feedback">Name on card is required</div>
								</div>
								<div className="col-md-6 mb-3">
									<label htmlFor="cc-number">Credit card number</label>
									<input
										type="text"
										className="form-control"
										id="cc-number"
										placeholder=""
										required=""
									/>
									<div className="invalid-feedback">Credit card number is required</div>
								</div>
							</div>
							<div className="row">
								<div className="col-md-3 mb-3">
									<label htmlFor="cc-expiration">Expiration</label>
									<input
										type="text"
										className="form-control"
										id="cc-expiration"
										placeholder=""
										required=""
									/>
									<div className="invalid-feedback">Expiration date required</div>
								</div>
								<div className="col-md-3 mb-3">
									<label htmlFor="cc-cvv">CVV</label>
									<input
										type="text"
										className="form-control"
										id="cc-cvv"
										placeholder=""
										required=""
									/>
									<div className="invalid-feedback">Security code required</div>
								</div>
							</div>

							<hr className="mb-4" />
							<button className="border border-dark btn btn-primary btn-lg btn-block" type="submit">
								Finalize Purchase
							</button>
						</form>
					</div>
				</div>
			</div>
		);
	}
}
