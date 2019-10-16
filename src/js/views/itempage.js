import React from "react";
import { Context } from "../store/appContext.js";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export class Itempage extends React.Component {
	constructor() {
		super();
		this.state = {};
	}
	render() {
		const productid = parseInt(this.props.match.params.theid);
		return (
			<Context.Consumer>
				{({ store }) => {
					const list = store.product.filter(product => product.ProductId === productid);
					console.log("List:", list);
					if (!list) return <h2>No product with id:</h2>;
					return (
						<div>
							<div className="container">
								<h1 className="my-4">
									<small>{list[0].ProductName}</small>
								</h1>

								<div className="row">
									<div className="col-md-8">
										<img
											className="img-fluid"
											src={list[0].photo && list[0].photo[0].PictureURL}
											alt=""
										/>
									</div>

									<div className="col-md-4">
										<h3 className="my-3">Product Description</h3>
										<p>{list[0].productDescription}</p>
										<h3 className="my-3">Product Details</h3>
										<ul>
											<li>Age group: {list[0].productAgeRange}</li>
											{/*<li>Weight: {list[0].weight}</li>*/}
											<li>Price: ${list[0].productPrice}</li>
										</ul>
									</div>
								</div>

								{/*<h3 className="my-4">Related Products</h3>*/}

								<div className="row" />
							</div>
						</div>
					);
				}}
			</Context.Consumer>
		);
	}
}

Itempage.propTypes = {
	match: PropTypes.object
};
