import React from "react";
import { Context } from "../store/appContext.js";
// import { CartItem } from "../component/cartItem";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { PaypallButton } from "../component/PaypallButton";
export class Cart extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		paypal.Button.render(
			{
				// Configure environment
				env: "sandbox",
				client: {
					sandbox: "demo_sandbox_client_id",
					production: "demo_production_client_id"
				},
				// Customize button (optional)
				locale: "en_US",
				style: {
					size: "small",
					color: "gold",
					shape: "pill"
				},

				// Enable Pay Now checkout flow (optional)
				commit: true,

				// Set up a payment
				payment: function(data, actions) {
					return actions.payment.create({
						transactions: [
							{
								amount: {
									total: "0.01",
									currency: "USD"
								}
							}
						]
					});
				},
				// Execute the payment
				onAuthorize: function(data, actions) {
					return actions.payment.execute().then(function() {
						// Show a confirmation message to the buyer
						setSuccess(true);
						window.alert("Thank you for your purchase!");
					});
				}
			},
			"#paypal-button"
		);
	}

	render() {
		return (
			<div className="container">
				<div className="card shopping-cart">
					<div className="card-header bg-dark text-light">
						<i className="fa fa-shopping-cart" aria-hidden="true" />
						<a>Shopping-cart</a>
						{/*<a href="" className="btn btn-outline-info btn-sm pull-right">
							Continue shopping
						</a>*/}
						<div className="clearfix" />
					</div>
					<div className="card-body">
						<Context.Consumer>
							{({ store, actions }) => {
								return store.cart.map((elem, index) => {
									return (
										<div className="row" key={index}>
											<div className="col-12 col-sm-12 col-md-2 text-center">
												<img
													className="img-responsive border border-primary"
													src={elem.photo[0].PictureURL}
													alt="prewiew"
													width="120"
													height="80"
												/>
											</div>
											<div className="col-12 text-sm-center col-sm-12 text-md-left col-md-6">
												<h4 className="product-name">
													<strong>{elem.ProductName}</strong>
												</h4>
												<h4>
													<small>{elem.productDescription}</small>
												</h4>
											</div>
											<div className="col-12 col-sm-12 text-sm-center col-md-4 text-md-right row">
												<div
													className="col-3 col-sm-3 col-md-6 text-md-right"
													style={{ paddingTop: 5 }}>
													<h6>
														<strong>
															${elem.productPrice} <span className="text-muted">x</span>
														</strong>
													</h6>
												</div>
												<div className="col-4 col-sm-4 col-md-4">
													<div className="quantity">
														<input
															type="button"
															value="+"
															className="plus"
															onClick={() =>
																actions.updateQuantity(elem.ProductId, "add")
															}
														/>
														<input
															readOnly
															type="number"
															step="1"
															max="99"
															min="1"
															value={elem.quantity}
															title="Qty"
															className="qty"
															size="4"
														/>
														<input
															type="button"
															value="-"
															className="minus"
															onClick={() =>
																actions.updateQuantity(elem.ProductId, "minus")
															}
														/>
													</div>
												</div>
												<div className="col-2 col-sm-2 col-md-2 text-right">
													<button
														type="button"
														className="btn btn-outline-danger btn-xs"
														onClick={() => {
															actions.deleteElement(index);
														}}>
														<i className="fa fa-trash" aria-hidden="true" />
													</button>
												</div>
											</div>
										</div>
									);
									{
										/*.find(products => {
										return products.id === elem.id;
									});
									console.log(products);*/
									}
								});
							}}
						</Context.Consumer>
						<hr />

						<hr />

						<div className="pull-right" />
					</div>
					<div className="card-footer">
						<div className="coupon col-md-5 col-sm-5 no-padding-left pull-left">
							<div className="row" />
						</div>
						<div className="pull-right" style={{ margin: 10 }}>
							{/* <Link to="checkoutform"> */}

							{/* <a href="" className="btn btn-success pull-right">
								Checkout
							</a> */}
							<PaypallButton />
							{/* </Link> */}
							<div className="pull-right" style={{ margin: 5 }}>
								<Context.Consumer>
									{({ store }) => {
										let cartTotal = 0;

										store.cart.forEach(item => {
											cartTotal += item.productPrice * item.quantity;
										});
										return (
											<div className="pull-right margin-5">
												<p>
													<u>Total price: </u>
												</p>
												<p>
													<u>
														<b>${cartTotal}</b>
													</u>
												</p>
											</div>
										);
									}}
								</Context.Consumer>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
