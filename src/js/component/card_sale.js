import React from "react";
import PropTypes from "prop-types";

import { Context } from "../store/appContext.js";
import { Link } from "react-router-dom";

export const Card_sale = props => {
	return (
		<React.Fragment>
			<div className="nav justify-content-center">
				<div className="card" style={{ width: 350 }}>
					<img className="card-img-top" src={props.image} alt="Card image cap" />

					<div className="card-body">
						<Link to={"/itempage/" + props.id}>
							<button type="button" className="btn btn-link">
								<h5 className="card-title">{props.name}</h5>
							</button>
						</Link>

						<p className="card-text" />
						<span>{props.price}</span>
						<Context.Consumer>
							{({ actions }) => {
								return (
									<a
										href="#"
										className="btn btn-primary"
										onClick={() => {
											actions.addToCart(props.frog);
										}}>
										Add to cart
									</a>
								);
							}}
						</Context.Consumer>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

Card_sale.propTypes = {
	name: PropTypes.string,
	price: PropTypes.string,
	image: PropTypes.string,
	frog: PropTypes.object,
	id: PropTypes.number
};